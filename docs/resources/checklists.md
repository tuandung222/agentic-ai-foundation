---
title: Checklists
---

# Checklists

## Agent-ready repo

- Có instruction file rõ.
- Có command build, test, lint.
- Có architecture map ngắn.
- Có danh sách vùng không được sửa.
- Có completion checklist.

## MCP server security

- Quyền tối thiểu.
- Tool schema rõ.
- Side effect được đánh dấu.
- Có audit log.
- Có version pinning.
- Không expose secret trong output.

## Agent evaluation

- Có golden tasks.
- Có trace lưu lại.
- Có phân loại failure.
- Có metric cost và latency.
- Có human review cho task rủi ro cao.

## Multi-agent design

- Mỗi agent có role rõ.
- Mỗi role có artifact rõ.
- Có owner cuối cùng.
- Có shared state hoặc handoff packet.
- Có giới hạn vòng lặp.


## Prompt injection defense

- Phân biệt instruction đáng tin và dữ liệu không tin cậy.
- Gắn nhãn nguồn cho tool output.
- Không đưa secret vào model context.
- Scope tool theo task phase.
- Có confirmation gate cho side effect.
- Có eval chứa dữ liệu độc hại mô phỏng.

## Permission review

- Tool được phân loại read-only, draft, side-effect hoặc production-impacting.
- Input nguy hiểm được kiểm tra bằng policy, không chỉ bằng prompt.
- Approval request nêu rõ side effect và rollback.
- Token và credential có scope tối thiểu.
- Có cách revoke quyền nhanh.
- Audit log có redaction.

## Release gate cho agent workflow

- Golden tasks không regression.
- Security-sensitive tasks không fail.
- Cost và latency trong ngưỡng chấp nhận.
- Human correction rate không tăng bất thường.
- Trace sampling được review.
- Có owner chịu trách nhiệm vận hành.

## Production readiness

- Runtime ghi version của model, prompt, tool schema và policy.
- Tool calls đi qua broker hoặc lớp enforce permission.
- Có token budget, tool-call budget, timeout và max retries.
- Có trace redaction và retention policy.
- Release gate chạy golden tasks và security-sensitive tasks.
- Canary rollout có monitoring và rollback.
- Incident runbook có containment steps.
- Owner vận hành được ghi rõ.
