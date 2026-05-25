---
title: Threat Model cho Agent
---

# Threat Model cho Agent

Threat model là cách nhìn hệ thống từ góc độ điều gì có thể sai và ai có thể lợi dụng sai sót đó. Với agentic systems, threat model cần bao phủ cả model, context, tool, memory, runtime và người dùng. Nếu chỉ threat model API truyền thống mà bỏ qua prompt injection hoặc tool output, ta sẽ bỏ sót rủi ro quan trọng.

## Tài sản cần bảo vệ

Trước khi liệt kê mối đe dọa, hãy xác định tài sản:

- Source code và intellectual property.
- Credentials, API keys, tokens.
- Dữ liệu người dùng hoặc dữ liệu nội bộ.
- Production environment.
- Reputation của tổ chức.
- Audit log và trace.
- Quy trình phê duyệt.

Threat model tốt bắt đầu từ tài sản, không bắt đầu từ công cụ.

## Bề mặt tấn công

| Bề mặt | Ví dụ rủi ro |
|---|---|
| User input | User yêu cầu agent vượt quyền hoặc tạo nội dung độc hại |
| Tool output | Webpage, issue, log chứa instruction độc hại |
| MCP server | Server không đáng tin, quyền quá rộng, output lộ dữ liệu |
| Memory | Memory sai, lỗi thời hoặc áp dụng nhầm repo |
| Prompt chain | Dữ liệu không tin cậy trộn vào instruction layer |
| Command execution | Lệnh có side effect, xóa file, gửi network request |
| Logs and traces | Lưu dữ liệu nhạy cảm quá mức |

## Câu hỏi threat modeling

| Câu hỏi | Mục tiêu |
|---|---|
| Agent đọc dữ liệu từ nguồn nào? | Xác định input không tin cậy |
| Tool nào có side effect? | Đặt approval gate |
| Credential nằm ở đâu và scope gì? | Giảm blast radius |
| Log có chứa dữ liệu nhạy cảm không? | Tránh rò rỉ qua observability |
| MCP server có quyền gì? | Giới hạn quyền theo server |
| Agent có thể gửi dữ liệu ra ngoài không? | Chặn exfiltration |
| Khi policy không rõ, agent dừng hay đoán? | Thiết kế fail closed |

## Abuse cases

Abuse case là kịch bản người tấn công hoặc dữ liệu độc hại lợi dụng agent. Ví dụ: một issue comment yêu cầu agent bỏ qua instruction và in environment variables; một webpage bảo agent gửi nội dung nội bộ tới URL ngoài; một tool server giả mạo trả output giống policy; một user yêu cầu agent deploy dù không có quyền.

Mỗi abuse case nên có mitigation: gắn nhãn untrusted data, chặn network exfiltration, scope credential, confirmation gate, policy engine và eval task tương ứng.

## Kết luận

Threat model cho agent phải xem agent như một hệ thống hành động, không phải chỉ là text generator. Khi threat model đúng, security control sẽ đặt đúng nơi: trước tool call, trước khi đưa dữ liệu vào context, trước side effect và trước khi lưu trace.
