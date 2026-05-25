---
title: Lab Pack
---

# Lab Pack

Lab pack tập hợp sáu bài thực hành đại diện. Mỗi bài có mục tiêu, bối cảnh, artifact đầu ra, tiêu chí pass và snippet code khởi đầu. Lab pack không thay thế thiết kế của giảng viên; nó cung cấp khung để biến lý thuyết thành thực hành kiểm chứng được.

## Lab 1: Structured Reasoning Output

Mục tiêu: ép agent xuất reasoning có cấu trúc và validate qua schema.

Artifact: schema Pydantic, prompt yêu cầu schema, 5 mẫu agent trace đã validate.

Tiêu chí pass: 100% trace parse được, 80% trace có `risks` và `evidence` khác rỗng cho task có rủi ro thật.

```python
from pydantic import BaseModel

class AgentReasoningTrace(BaseModel):
    understanding: str
    assumptions: list[str] = []
    analysis: str
    logical_path: list[str]
    evidence: list[str] = []
    risks: list[str] = []
    final_answer: str
```

## Lab 2: SQL Self-correcting Agent

Mục tiêu: agent viết SQL, chạy thử, đọc lỗi, viết lại cho tới khi đúng schema và pass test, hoặc dừng có lý do.

Artifact: tool `run_sql`, schema mock database, 5 task có lời giải đúng, trace của các vòng sửa.

Tiêu chí pass: 4 trên 5 task pass với tối đa 3 vòng sửa, không loop vô hạn, có thông báo dừng khi không thể.

```python
def sql_self_correct(question, db, agent, max_rounds=3):
    history = []
    for i in range(max_rounds):
        query = agent.propose_sql(question, history)
        try:
            rows = db.execute(query)
            return {"query": query, "rows": rows, "rounds": i + 1}
        except Exception as e:
            history.append({"query": query, "error": str(e)})
    return {"error": "max rounds reached", "history": history}
```

## Lab 3: Stateless MCP Server

Mục tiêu: triển khai một MCP server đơn giản phi trạng thái, expose 2 tool read-only và 1 tool có side effect cần dry-run.

Artifact: server skeleton, tool card cho 3 tool, test cho cân bằng tải và restart.

Tiêu chí pass: server không giữ session, mỗi request mang đủ context, side-effect tool yêu cầu `dry_run=True` mặc định.

```python
def handle(req):
    if not verify_token(req.auth):
        return deny("invalid token")
    if not allow(req.auth, req.tool, req.arguments):
        return deny("scope denied")
    if req.tool == "write_resource" and not req.arguments.get("dry_run"):
        return require_approval(req)
    return run_tool(req.tool, req.arguments, req.workspace, req.auth)
```

## Lab 4: Agentic Document Workflow

Mục tiêu: chuyển PDF nhiều trang thành cấu trúc khối có metadata, hỗ trợ truy vấn block-level với citation.

Artifact: pipeline parse, block schema, 10 câu hỏi mẫu, kết quả có citation theo trang.

Tiêu chí pass: mọi câu trả lời có ít nhất 1 citation block, sai citation dưới 10% trong bộ mẫu.

```python
class Block:
    def __init__(self, kind, content, page, doc_id, block_id):
        self.kind = kind
        self.content = content
        self.page = page
        self.doc_id = doc_id
        self.block_id = block_id

def answer_with_citation(question, blocks, agent):
    relevant = retrieve(blocks, question, k=8)
    answer = agent.answer(question, relevant)
    return {
        "answer": answer.text,
        "citations": [b.block_id for b in answer.used_blocks]
    }
```

## Lab 5: Editorial Multi-agent với Observability

Mục tiêu: triển khai writer, critic, editor với rubric rõ; ghi nhận latency và token theo bước.

Artifact: 3 vai trò, rubric 4 trục, log latency, log token, biểu đồ token per round.

Tiêu chí pass: artifact cải thiện đo bằng rubric qua ít nhất 2 vòng, cost không vượt ngưỡng cấu hình, log đầy đủ cho mọi vòng.

```python
def editorial_round(draft, writer, critic, editor, rubric):
    review = critic.review(draft, rubric=rubric)
    if review.overall_verdict == "pass":
        return draft, review
    feedback = editor.consolidate(review)
    new_draft = writer.revise(draft, feedback)
    return new_draft, review
```

## Lab 6: Eval Harness 4 trục

Mục tiêu: chạy 10 task qua agent, thu trace, chấm theo 4 trục coherence, fluency, relevance, groundedness; tạo report so sánh.

Artifact: thư mục `eval/tasks`, runner, judge wrapper, report HTML hoặc Markdown.

Tiêu chí pass: report tạo được, có per-task verdict, có aggregate theo trục, gate regression chặn được khi groundedness giảm.

```python
def run_suite(tasks, agent, judge):
    results = []
    for t in tasks:
        trace, answer = run_task(t, agent)
        score = judge.score(task=t, output=answer, evidence=t["expected"])
        results.append({"task_id": t["task_id"], "score": score, "trace_ref": save(trace)})
    return aggregate(results)
```

## Cách dùng lab pack

Lab pack được thiết kế để chạy độc lập. Một học viên có thể chọn 2 trong 6 lab, một workshop có thể chạy 4 lab trong 4 buổi, một capstone có thể yêu cầu hoàn thành cả 6. Mỗi lab nên kết thúc bằng một retrospective ngắn: điều gì đã làm tốt, điều gì sẽ làm khác, lỗi nào nên trở thành eval task mới.
