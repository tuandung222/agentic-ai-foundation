---
title: Practitioner Templates
---

# Practitioner Templates

Trang này gom các template có thể dùng trực tiếp khi xây agentic systems. Template không thay thế tư duy thiết kế. Nó giúp team bắt đầu bằng một cấu trúc tốt, sau đó điền thông tin thật của workflow, tool, policy và evaluation.

## Agent design brief

```markdown
# Agent Design Brief

## Problem
Agent giải quyết vấn đề gì, cho nhóm người dùng nào?

## Scope
Agent được phép làm gì?
Agent không được phép làm gì?

## Operating mode
- Observe only
- Draft only
- Act with approval
- Bounded autonomy

## Context sources
- Repo files
- Documentation
- Issue tracker
- Monitoring logs
- User-provided input

## Tools
| Tool | Quyền | Side effect | Approval |
|---|---|---|---|
| docs_search | read-only | no | no |
| ticket_draft | draft | creates draft | no |
| deploy_staging | side-effect | staging deploy | yes |

## Evaluation
Golden tasks, safety tasks, cost budget và acceptance criteria.

## Governance
Owner, audit log, redaction policy, rollback plan.
```

## Tool card

```markdown
# Tool Card: tool_name

## Purpose
Tool này dùng để làm gì?

## When to use
Khi nào agent nên gọi tool này?

## When not to use
Khi nào agent không được gọi tool này?

## Input schema
Mô tả field, type, constraint và ví dụ.

## Output schema
Mô tả status, data, warning, error và operation id.

## Permissions
Credential nào được dùng, scope gì, environment nào.

## Side effects
Tool có thay đổi state không? Có dry-run không?

## Failure modes
Lỗi thường gặp và cách agent nên phản ứng.

## Audit
Log field nào được lưu và field nào phải redacted.
```

## Eval task card

```markdown
# Eval Task

## Task id
stable-task-id

## Category
context, planning, tool-use, verification, security, governance

## User request
Yêu cầu đầu vào cho agent.

## Setup
Repo, files, mock tool outputs hoặc dữ liệu cần chuẩn bị.

## Expected behavior
Agent nên làm gì, nên tránh gì, cần verify thế nào.

## Scoring rubric
- Success
- Partial
- Blocked correctly
- Failed
- Unsafe

## Regression notes
Điều gì từng fail trong quá khứ?
```

## Approval request

```markdown
# Approval Request

## Proposed action
Agent muốn làm gì?

## Reason
Vì sao hành động này cần thiết?

## Target
Tool, environment, resource hoặc system bị tác động.

## Expected side effect
Điều gì sẽ thay đổi sau khi approve?

## Evidence
Trace, test, dry-run output hoặc artifact liên quan.

## Rollback
Có thể hoàn tác thế nào?

## Risk
Rủi ro còn lại là gì?
```

## Incident report

```markdown
# Agent Incident Report

## Summary
Điều gì đã xảy ra?

## Impact
User, dữ liệu, tool, environment nào bị ảnh hưởng?

## Timeline
Các mốc chính từ trace và audit log.

## Detection
Incident được phát hiện bằng cách nào?

## Root cause
Context, tool, policy, model, workflow hay human approval?

## Containment
Đã tắt tool, revoke credential, rollback hay pause workflow chưa?

## Corrective actions
Eval mới, policy mới, tool fix, instruction update hoặc monitoring mới.
```
