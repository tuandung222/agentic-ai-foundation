---
title: Case Study Enterprise Agent
---

# Case Study Enterprise Agent

Enterprise agent khác personal agent ở governance. Nó không chỉ cần trả lời đúng, mà còn phải hành động theo policy, lưu audit, tôn trọng quyền truy cập và hỗ trợ incident response.

## Ví dụ

Một agent hỗ trợ vận hành nội bộ có thể đọc runbook, query logs, tạo ticket, đề xuất rollback và thông báo team. Đây là hệ thống có giá trị cao nhưng cũng có rủi ro cao.

## Control cần có

- SSO và identity rõ.
- Authorization theo role.
- Tool permission theo environment.
- Approval cho production action.
- Audit log không chứa secret.
- Rollback plan.
- Eval định kỳ bằng incident simulation.

## Thiết kế an toàn

Agent nên bắt đầu ở chế độ read-only, sau đó mở dần quyền theo maturity. Mỗi quyền mới cần threat model và eval mới. Đừng bắt đầu bằng agent có quyền admin chỉ vì demo nhanh hơn.
