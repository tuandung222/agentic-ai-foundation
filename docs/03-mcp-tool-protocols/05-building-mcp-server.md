---
title: Thiết kế một MCP Server tốt
---

# Thiết kế một MCP Server tốt

Một MCP server tốt không phải server có nhiều tool nhất. Một MCP server tốt là server cung cấp capability rõ ràng, quyền hạn nhỏ, output dễ hiểu và failure mode có thể kiểm soát. Nếu thiết kế server như một “remote shell cho model”, ta đã bỏ lỡ tinh thần quan trọng nhất của tool protocol: biến hành động thành contract có cấu trúc.

Trước khi viết server, hãy hỏi: agent cần capability gì mà client hiện không có? Nếu câu trả lời là “cho agent làm mọi thứ trong hệ thống”, thiết kế đang quá rộng. Nếu câu trả lời là “cho agent đọc danh sách issue đã lọc”, “tạo draft ticket”, “query runbook theo service name”, hoặc “lấy status deployment staging”, capability đã có boundary tốt hơn.

## Chọn phạm vi server

Có hai cách chia MCP server. Cách thứ nhất là chia theo domain: GitHub server, database server, docs server, monitoring server. Cách thứ hai là chia theo quyền: read-only server, write server, production server. Trong môi trường an toàn, ta thường kết hợp cả hai.

Ví dụ, thay vì một server “internal-platform” có toàn quyền, ta có thể có:

| Server | Quyền |
|---|---|
| `docs-search` | Chỉ đọc tài liệu đã index |
| `ticket-draft` | Tạo draft ticket, chưa gửi chính thức |
| `staging-deploy-status` | Đọc trạng thái staging |
| `prod-incident-actions` | Hành động production, luôn cần approval |

Cách chia này giúp blast radius nhỏ hơn. Nếu một server bị cấu hình sai, nó không kéo theo toàn bộ hệ thống.

## Tool schema

Tool schema nên giống một API contract nghiêm túc. Mỗi input cần type, mô tả, giới hạn và ví dụ. Nếu field nhận enum, hãy dùng enum. Nếu field là path, hãy mô tả path tương đối hay tuyệt đối. Nếu field là query, hãy nói rõ query chạy trên index nào.

Output cũng cần ổn định. Agent không thích output quá dài, nhưng cũng không thể làm việc với output quá nghèo. Một output tốt thường có `status`, `summary`, `data`, `warnings` và `next_suggested_actions`. Với tool có side effect, output nên có `operation_id` để trace.

## Error design

Nhiều tool thất bại nhưng trả lỗi mơ hồ như “failed”. Với agent, lỗi mơ hồ làm planner đoán mò. Error nên phân loại rõ:

- `INVALID_INPUT`: agent gọi sai schema hoặc thiếu field.
- `PERMISSION_DENIED`: agent không có quyền.
- `NOT_FOUND`: tài nguyên không tồn tại.
- `CONFLICT`: trạng thái đã thay đổi.
- `RATE_LIMITED`: cần chờ hoặc giảm tần suất.
- `UNSAFE_ACTION`: runtime chặn vì policy.

Khi lỗi rõ, agent có thể sửa input, hỏi người dùng hoặc dừng đúng cách.

## Dry-run và confirmation

Với tool có side effect, dry-run rất giá trị. Dry-run cho agent biết chuyện gì sẽ xảy ra mà chưa thực hiện. Ví dụ, trước khi tạo PR hoặc deploy, tool có thể trả về danh sách file sẽ thay đổi, môi trường đích và rủi ro.

Confirmation không nên nằm trong model alone. Nếu hành động nguy hiểm, runtime hoặc tool server phải enforce approval. Model có thể đề xuất, nhưng control thật phải nằm ngoài model.

## Observability

MCP server production cần metrics: số tool call, latency, error rate, permission denial, approval rate và output size. Những metric này giúp phát hiện tool bị lạm dụng, schema khó dùng hoặc agent rơi vào loop.

## Kết luận

Thiết kế MCP server là thiết kế capability boundary. Khi boundary tốt, agent mạnh hơn mà hệ thống vẫn kiểm soát được. Khi boundary kém, MCP chỉ biến model thành một người dùng có quá nhiều quyền và quá ít trách nhiệm.
