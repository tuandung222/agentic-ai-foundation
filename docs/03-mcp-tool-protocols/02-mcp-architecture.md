---
title: Kiến trúc MCP
---

# Kiến trúc MCP

MCP có thể được hiểu qua ba vai trò chính: host, client và server. Host là ứng dụng người dùng tương tác, ví dụ IDE hoặc desktop assistant. Client là thành phần trong host quản lý kết nối MCP. Server cung cấp capability cụ thể.

## Tools, resources, prompts

- **Tools:** hành động có input và output, có thể có side effect. Ví dụ tạo ticket, chạy search, gọi API.
- **Resources:** dữ liệu có thể đọc. Ví dụ file, document, database record, log stream.
- **Prompts:** template hoặc hướng dẫn có cấu trúc mà server cung cấp cho client.

Phân biệt này rất quan trọng. Đọc resource thường ít nguy hiểm hơn gọi tool có side effect. Một server thiết kế tốt phải làm rõ hành động nào chỉ đọc, hành động nào ghi, hành động nào cần approval.

## Transport và trust boundary

MCP server có thể chạy local hoặc remote. Local server tiện cho developer workflow nhưng có rủi ro supply-chain nếu cài server không rõ nguồn. Remote server thuận tiện cho enterprise control nhưng cần auth, network policy và audit mạnh hơn.

Trust boundary nằm ở chỗ server có quyền gì với môi trường. Một MCP server đọc filesystem có rủi ro khác server chỉ search public docs. Một server có quyền gọi production API cần kiểm soát nghiêm ngặt hơn server chỉ trả về glossary.

## Design principle

MCP server nên nhỏ, chuyên biệt và có quyền tối thiểu. Đừng tạo một server “làm tất cả” nếu có thể tách thành nhiều capability server với permission khác nhau.
