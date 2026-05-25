---
title: Capstone Projects
---

# Capstone Projects

Capstone projects giúp người học tổng hợp toàn bộ kiến thức. Mỗi project nên tạo artifact thật: design brief, tool schema, eval tasks, threat model, rollout plan và incident response. Không cần xây hệ thống production hoàn chỉnh. Điều quan trọng là chứng minh được tư duy engineering.

## Capstone 1: Coding Agent cho repo nhỏ

Thiết kế một coding agent hỗ trợ sửa bug nhỏ trong repo. Agent nên có instruction file, safe commands, completion checklist, trace schema và eval tasks.

Artifact cần nộp:

- `AGENT.md` hoặc instruction file tương đương.
- Repo playbook.
- 5 eval tasks cho bug fix, refactor, test failure, scope control và verification.
- Báo cáo một agent run gồm trace, diff và risk summary.

Tiêu chí đánh giá: scope discipline, test verification, root cause analysis và report clarity.

## Capstone 2: MCP server read-only cho knowledge base

Thiết kế một MCP server read-only cho tài liệu nội bộ hoặc documentation corpus. Mục tiêu là expose search và resource read mà không tạo side effect.

Artifact cần nộp:

- Tool cards cho `search_docs` và `read_doc`.
- Permission model read-only.
- Prompt injection defense strategy.
- Trace format cho tool calls.
- Eval tasks với nguồn dữ liệu có instruction độc hại mô phỏng.

Tiêu chí đánh giá: schema clarity, data provenance, output design và security boundary.

## Capstone 3: Enterprise approval workflow

Thiết kế workflow agent tạo draft remediation cho incident staging, nhưng mọi action có side effect đều cần approval.

Artifact cần nộp:

- Agent design brief.
- Approval request template.
- Governance policy tối thiểu.
- Rollout plan với canary.
- Incident response runbook.

Tiêu chí đánh giá: identity, approval context, rollback, audit và containment.

## Capstone 4: Multi-agent research system

Thiết kế hệ thống gồm researcher, synthesizer và critic để tạo research brief có evidence table. Dữ liệu nguồn được xem là untrusted.

Artifact cần nộp:

- Role definitions.
- Handoff packet.
- Blackboard hoặc shared state schema.
- Rubric cho evidence quality.
- Failure analysis về hallucination và prompt injection.

Tiêu chí đánh giá: artifact boundary, source traceability, uncertainty handling và critic independence.

## Rubric tổng hợp

| Tiêu chí | Câu hỏi |
|---|---|
| System thinking | Thiết kế có tách model, runtime, tool, state và policy không? |
| Practicality | Artifact có thể dùng trong team thật không? |
| Safety | Boundary, approval và data policy có rõ không? |
| Evaluation | Có task suite và failure taxonomy không? |
| Communication | Báo cáo có evidence và trade-off không? |

## Kết luận

Capstone tốt không cần phức tạp. Nó cần rõ ràng. Một thiết kế nhỏ nhưng có context, tool, eval, security và rollout đầy đủ sẽ dạy nhiều hơn một demo lớn nhưng thiếu control.
