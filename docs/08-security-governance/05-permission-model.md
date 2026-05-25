---
title: Permission Model cho Agent
---

# Permission Model cho Agent

Permission model trả lời câu hỏi agent được phép làm gì, trong hoàn cảnh nào và dưới danh tính nào. Nếu không có permission model, autonomy chỉ là một từ đẹp để chỉ việc trao quyền quá rộng cho một hệ thống xác suất.

Một permission model tốt không bắt đầu từ “agent có thể làm gì”. Nó bắt đầu từ tài sản cần bảo vệ: source code, secrets, customer data, production environment, financial action, external communication và reputation của tổ chức. Sau đó ta mới quyết định agent được chạm vào phần nào.

## Capability theo cấp độ

Có thể chia quyền agent thành năm cấp:

| Cấp | Mô tả | Ví dụ |
|---|---|---|
| Observe | Chỉ đọc dữ liệu đã cho phép | Đọc docs, đọc issue public |
| Analyze | Tạo phân tích không side effect | Tóm tắt log, tìm root cause |
| Draft | Tạo đề xuất chưa áp dụng | Draft PR, draft email |
| Act with approval | Hành động sau khi được duyệt | Merge PR, gửi email, deploy staging |
| Act autonomously | Hành động tự động trong boundary hẹp | Tạo ticket nội bộ low-risk |

Không nên nhảy thẳng từ Observe sang Act autonomously. Quyền nên mở dần theo maturity của eval, audit và rollback.

## Policy theo context

Một tool có thể an toàn trong context này nhưng nguy hiểm trong context khác. `create_ticket` có thể an toàn nếu tạo ticket nội bộ, nhưng nguy hiểm nếu gửi thông báo tới khách hàng. `run_command` có thể an toàn với `npm run build`, nhưng nguy hiểm với lệnh xóa dữ liệu.

Vì vậy permission không chỉ gắn với tool name. Nó còn cần input, environment, user role và task phase.

## Approval UX

Approval tốt phải giúp người duyệt hiểu rủi ro. Một approval request nên có:

- Agent muốn làm gì.
- Tool nào sẽ được gọi.
- Input quan trọng là gì.
- Side effect là gì.
- Có rollback không.
- Vì sao agent cho rằng hành động này cần thiết.

Nếu approval quá mơ hồ, người dùng sẽ bấm theo thói quen. Khi đó approval chỉ là nghi thức, không phải control.

## Revocation và emergency stop

Permission model cần cách thu hồi quyền. Nếu phát hiện MCP server có vấn đề, có thể disable server không? Nếu agent loop bất thường, có thể cancel session không? Nếu token bị lộ, có thể rotate nhanh không? Những câu hỏi này phải được trả lời trước production.

## Kết luận

Agent permission model là hệ thống phanh. Một chiếc xe mạnh không an toàn hơn nếu không có phanh tốt. Agent mạnh cũng vậy: càng nhiều tool, càng cần permission model rõ, audit được và thu hồi được.
