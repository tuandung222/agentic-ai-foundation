---
title: Governance Controls
---

# Governance Controls

Governance controls biến nguyên tắc an toàn thành cơ chế vận hành. Nếu chỉ ghi “agent không được làm X” trong prompt nhưng runtime vẫn cho phép X, control đó yếu.

## Các lớp control

- **Identity:** agent đang hành động dưới danh tính nào.
- **Authorization:** agent được phép gọi tool nào.
- **Approval:** hành động nào cần người duyệt.
- **Audit:** hành động nào được log.
- **Rollback:** có thể khôi phục sau lỗi không.
- **Policy:** rule nào được enforce tự động.

## Approval design

Không phải mọi việc đều cần hỏi. Nếu hỏi quá nhiều, người dùng mệt và bấm đồng ý máy móc. Hãy hỏi khi hành động irreversible, tốn tiền, đụng dữ liệu nhạy cảm, thay đổi production hoặc ảnh hưởng người ngoài.

## Ownership

Agent không nên là chủ sở hữu cuối cùng. Mỗi workflow cần owner con người hoặc team. Owner quyết định policy, review exception và chịu trách nhiệm khi có incident.
