---
title: Thiết kế Evaluation Harness
---

# Thiết kế Evaluation Harness

Eval harness là bộ máy chạy task suite trên agent, thu trace, chấm điểm và đưa ra verdict. Một harness tốt biến đánh giá từ “xem thử vài trường hợp” thành quy trình đáng tin có thể chạy lại sau mỗi thay đổi. Eval harness là một thành phần engineering, không phải script ad hoc.

## Mục tiêu thiết kế

Harness cần đáp ứng năm mục tiêu cốt lõi.

Thứ nhất, reproducibility: cùng task, cùng cấu hình, cùng kết quả về hành vi quan trọng. Khi không reproducible, kết luận eval mất giá trị.

Thứ hai, isolation: agent không truy cập tài nguyên ngoài giới hạn đã định. Một run rò rỉ side effect ra hệ thống thật là sự cố, không phải đặc điểm.

Thứ ba, observability: mỗi run sinh trace đủ để debug và re-judge. Trace ít làm eval thành câu hỏi tin cậy.

Thứ tư, aggregation: điểm số có thể tổng hợp theo task class, theo phiên bản, theo thời gian. Một con số tổng không nói nhiều, nhưng phân rã theo trục thì có.

Thứ năm, regression gating: harness có thể chặn release khi metric quan trọng tụt. Gate phải minh bạch về điều kiện chặn.

## Cấu trúc đề xuất

```
eval/
  tasks/
    task_id.yaml         # mô tả task, expected behavior, scoring hints
  fixtures/
    repo_snapshots/      # bản chụp repo cho task có repo context
    mock_tools/          # mock cho tool không an toàn để gọi thật
  runners/
    agent_runner.py      # chạy agent với task và thu trace
  judges/
    rubric_v1.py         # judge rules hoặc LLM-as-judge wrapper
  reports/
    YYYYMMDD-HHMM/       # output mỗi lần chạy: trace, score, summary
```

Cách tổ chức này tách rõ dữ liệu task, cách chạy và cách chấm. Nhờ vậy, ta có thể đổi runner, đổi judge hoặc thêm task mà không phá phần khác.

## Cấu trúc task YAML

```yaml
task_id: triage-failing-ci-001
category: debugging
description: |
  Agent nhận output CI fail. Cần xác định module gây lỗi và đề xuất fix.
inputs:
  user_request: "CI fail trên branch main, hãy điều tra."
  attachments:
    - fixtures/ci_logs/run_42.txt
constraints:
  allowed_tools: ["read_file", "search_code"]
  forbidden_tools: ["deploy", "delete_branch"]
expected:
  must_identify:
    - "Module X gây ra lỗi build."
  must_not:
    - "Đề xuất deploy mà chưa fix."
scoring:
  rubric_axes: ["coherence", "relevance", "groundedness", "correctness"]
  pass_if:
    must_identify_covered: true
    must_not_violated: false
```

Task có rule rõ ràng giúp chấm dễ hơn và giúp giữ tính khách quan khi judge đổi model.

## Runner skeleton

```python
def run_task(task, agent, tools, store):
    isolate(agent, tools, allowed=task["constraints"]["allowed_tools"])
    trace = []
    state = init_state(task)
    while not terminal(state):
        step = agent.step(state)
        trace.append(step)
        if step.action == "tool_call":
            obs = call_tool(step.tool, step.args, store=store)
            state = update(state, obs)
        elif step.action == "answer":
            state = finalize(state, step.answer)
            break
    return trace, state.final_answer
```

Runner không tự chấm. Nó tạo trace, để judge và rule chấm sau. Tách này quan trọng để judge có thể được nâng cấp độc lập.

## Judge và rule

Judge có thể là rule engine, LLM-as-judge hoặc kết hợp. Rule engine bắt các vi phạm cứng như “gọi tool bị cấm” hoặc “không cite nguồn được yêu cầu”. LLM-as-judge bắt các trục mềm như coherence và relevance. Khi cả hai không đồng ý, ưu tiên rule engine.

Mỗi run cần tạo bản report có:

- Verdict per task: pass, partial, fail, unsafe.
- Điểm theo trục rubric.
- Trace tham chiếu.
- So sánh với phiên bản trước.
- Danh sách regression mới xuất hiện.

## Regression gate

Một số gate thực dụng:

- Không cho phép regression ở trục safety.
- Không cho phép tăng tỷ lệ unsafe ở task class quan trọng.
- Không cho phép giảm pass rate quá ngưỡng đã định.
- Tăng cost trung bình quá ngưỡng phải có giải trình.

Gate không phải để chặn mọi thay đổi. Nó là cách bắt buộc team có dữ liệu trước khi merge.

## Vận hành harness

Harness nên chạy ở ba thời điểm. Trước khi merge thay đổi prompt hoặc model, chạy subset nhanh. Trước khi release, chạy full suite. Định kỳ chạy lại để bắt drift do tool, dữ liệu hoặc model nâng cấp âm thầm.

Trace nên lưu có version. Khi xảy ra regression, ta có thể replay đúng trace cũ với cấu hình mới để so sánh.

## Kết luận

Eval harness biến đánh giá từ ý kiến thành tài sản kỹ thuật. Đầu tư ban đầu cho harness lớn hơn viết vài test ad hoc, nhưng lợi ích tích lũy theo từng vòng phát triển. Một team không có harness thường tranh luận về cảm giác agent tốt hay xấu. Một team có harness tranh luận về dữ liệu.
