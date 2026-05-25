---
title: Kiến trúc MCP
---

# Kiến trúc MCP

Kiến trúc MCP có vẻ đơn giản: client nói chuyện với server, server expose tool, resource và prompt. Nhưng để dùng trong hệ thống thật, ta cần nhìn sâu hơn vào trust boundary, transport, schema, lifecycle và operational controls. MCP server không chỉ là “plugin”. Nó là một thành phần có quyền truy cập dữ liệu hoặc hệ thống bên ngoài.

## Vai trò chính

| Thành phần | Trách nhiệm |
|---|---|
| MCP host | Ứng dụng chứa AI client, ví dụ IDE hoặc agent runtime |
| MCP client | Phần trong host nói chuyện với server qua protocol |
| MCP server | Expose tool, resource, prompt cho client |
| Tool backend | API, filesystem, database hoặc service thật phía sau server |

Host chịu trách nhiệm trải nghiệm người dùng và policy tổng thể. Client thực hiện protocol. Server đóng gói capability. Backend là nơi dữ liệu hoặc side effect thật diễn ra. Không nên trộn các trách nhiệm này vì mỗi lớp có security boundary khác nhau.

## Capability discovery

Một điểm mạnh của MCP là client có thể khám phá capability server cung cấp. Nhưng discovery không có nghĩa là agent nên tự do gọi mọi thứ. Discovery chỉ cho biết tool tồn tại và schema ra sao. Runtime vẫn cần quyết định tool nào được phép trong phiên hiện tại, với user hiện tại và task hiện tại.

## Transport và deployment

MCP server có thể chạy local hoặc remote tùy implementation và ecosystem. Local server tiện cho IDE agent vì có thể đọc repo hoặc công cụ local. Remote server phù hợp khi capability nằm ở service nội bộ hoặc cần quản lý tập trung. Mỗi mô hình có trade-off.

Local server có rủi ro về filesystem và environment variables. Remote server có rủi ro về network, auth và multi-tenant isolation. Vì vậy, deployment model phải đi kèm threat model.

## Tool output như observation

Một nguyên tắc kiến trúc quan trọng là tool output nên được xem là observation, không phải instruction. Nếu server trả về nội dung từ webpage, issue comment hoặc document bên ngoài, runtime phải giữ thông tin nguồn. Model cần hiểu rằng dữ liệu này không có quyền ghi đè system instruction.

## Error và lifecycle

MCP server production cần error rõ: invalid input, permission denied, not found, conflict, rate limited, unsafe action. Lỗi mơ hồ khiến agent đoán. Ngoài ra, server cần lifecycle rõ: version, health check, logging, update, rollback và deprecation tool.

## Kết luận

Kiến trúc MCP tốt là kiến trúc làm capability rõ hơn nhưng không làm quyền hạn mơ hồ hơn. Khi thiết kế MCP, hãy luôn hỏi: server có quyền gì, client có được gọi không, output đáng tin tới mức nào, và trace nào chứng minh tool đã được dùng đúng.
