---
title: Tổng quan Security và Governance
---

# Tổng quan Security và Governance

Security và governance trong agentic systems không phải phần thêm sau khi demo đã chạy. Chúng là điều kiện thiết kế từ đầu. Khi agent chỉ trả lời câu hỏi, rủi ro chủ yếu nằm ở nội dung câu trả lời. Khi agent có tool, memory và quyền truy cập, rủi ro chuyển sang hành động: đọc dữ liệu sai, gọi API sai, gửi thông tin sai chỗ, hoặc thực hiện side effect ngoài ý muốn.

Một agentic system an toàn cần trả lời bốn câu hỏi: dữ liệu nào agent được thấy, tool nào agent được gọi, hành động nào cần approval, và trace nào được lưu để audit. Nếu bốn câu hỏi này mơ hồ, hệ thống có thể demo tốt nhưng khó vận hành.

## Các rủi ro chính

- Prompt injection từ dữ liệu không tin cậy.
- Tool injection hoặc tool output độc hại.
- Credential quá rộng quyền.
- Dữ liệu nhạy cảm đi vào prompt hoặc log.
- Side effect không có approval.
- Memory lỗi thời hoặc sai phạm vi.
- Audit log thiếu hoặc chứa dữ liệu không nên lưu.
- Agent tự tin hành động khi task mơ hồ.

## Nguyên tắc phòng thủ

| Nguyên tắc | Ý nghĩa |
|---|---|
| Least privilege | Agent và tool chỉ có quyền tối thiểu cần thiết |
| Defense in depth | Kết hợp prompt, runtime, permission, audit và eval |
| Data provenance | Mọi dữ liệu quan trọng cần biết nguồn và độ tin cậy |
| Explicit approval | Side effect lớn cần người duyệt với ngữ cảnh đầy đủ |
| Observability with redaction | Có trace để debug nhưng không lưu quá mức |
| Fail closed | Khi thiếu quyền hoặc mơ hồ, agent nên dừng hoặc hỏi lại |

## Governance khác security ở đâu

Security hỏi làm sao ngăn tấn công, lạm dụng và rò rỉ. Governance hỏi làm sao tổ chức cấp quyền, kiểm tra, truy trách nhiệm và thu hồi quyền. Hai phần này gắn chặt với nhau. Một permission model tốt vừa là security control vừa là governance control.

## Kết luận

Agent càng hữu ích thì càng có khả năng gây tác động. Vì vậy, security và governance không làm agent yếu đi. Chúng làm agent đủ an toàn để được dùng trong công việc thật.
