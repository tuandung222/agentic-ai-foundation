---
title: Handoff và Delegation
---

# Handoff và Delegation

Handoff và delegation là hai khái niệm trung tâm khi agent phối hợp. Handoff là chuyển quyền xử lý hoặc context từ agent này sang agent khác. Delegation là giao một phần nhiệm vụ cho agent khác nhưng vẫn giữ trách nhiệm tổng thể. Nhầm hai khái niệm này có thể làm hệ thống mất owner.

## Handoff

Handoff phù hợp khi agent hiện tại không còn là nơi xử lý tốt nhất. Ví dụ, một triage agent nhận ra task cần security review và chuyển sang security agent. Khi handoff, agent nhận cần đủ context để tiếp tục mà không phải hỏi lại từ đầu.

Một handoff tốt nên có:

- Goal hiện tại.
- Lý do handoff.
- Context refs.
- Trạng thái đã làm.
- Artifact đã tạo.
- Constraint và quyền hạn.
- Điều kiện hoàn thành.

## Delegation

Delegation phù hợp khi planner vẫn giữ trách nhiệm nhưng cần specialist xử lý một phần. Ví dụ, planner giao researcher tìm nguồn, coder sửa bug, reviewer kiểm diff. Planner nhận artifact và quyết định bước tiếp theo.

Delegation cần expected artifact rõ. Nếu chỉ giao “xem giúp phần này”, agent nhận có thể trả lời quá chung. Nếu giao “trả về structured review gồm severity, evidence, recommendation”, kết quả dễ dùng hơn.

## Handoff packet

```yaml
task_id: task-123
from: planner-agent
to: security-reviewer
goal: review auth diff for permission bypass
reason: changes touch access control logic
context_refs:
  - pull_request: 456
  - files:
      - src/auth/policy.ts
constraints:
  - do not edit code
  - report only evidence-backed findings
expected_artifact: structured_security_review
status: ready
```

## Failure modes

- Handoff thiếu context khiến agent nhận hỏi lại.
- Delegation không có expected artifact.
- Không rõ ai là owner cuối cùng.
- Agent nhận vượt quyền hoặc sửa ngoài scope.
- Kết quả không có evidence nên không audit được.

## Kết luận

Handoff và delegation tốt là contract, không phải lời nhắn tự do. Càng rõ goal, context, constraint và expected artifact, hệ thống nhiều agent càng dễ debug và kiểm soát.
