---
title: Glossary
---

# Glossary

Glossary này không nhằm thay thế các chương chính. Nó là nơi tra nhanh những thuật ngữ thường gặp trong Agentic Engineering. Khi một thuật ngữ có nhiều nghĩa trong các hệ sinh thái khác nhau, phần giải thích ở đây ưu tiên nghĩa thực dụng để thiết kế hệ thống.

| Thuật ngữ | Giải thích ngắn |
|---|---|
| Agent | Hệ thống dùng model để chọn và thực hiện hành động qua nhiều bước trong một môi trường có state và tool. |
| Agentic Engineering | Kỷ luật thiết kế, đánh giá và kiểm soát agentic systems. |
| Agent runtime | Phần điều phối vòng lặp goal, context, action, observation, verification. |
| Assistant | Giao diện tương tác có thể dùng model và một số tool, nhưng chưa chắc có loop tự chủ rõ. |
| Context Engineering | Kỹ thuật chọn, tổ chức, nén và gắn nhãn thông tin cho model ở đúng thời điểm. |
| Tool | Capability có schema để agent gọi, ví dụ search, read file, create ticket, run test. |
| MCP | Model Context Protocol, protocol giúp AI client kết nối với tool, resource và prompt server. |
| A2A | Agent-to-Agent communication, nhóm ý tưởng/protocol để agent độc lập giao tiếp và phối hợp. |
| ACP | Agent Contract Protocol hoặc cách tiếp cận contract hóa quan hệ client, agent và runtime tùy ecosystem. |
| Skill | Module năng lực tái sử dụng, thường chứa quy trình, tiêu chí và ví dụ. |
| Workflow | Chuỗi bước có thứ tự, checkpoint và điều kiện hoàn thành. |
| Memory | Thông tin được lưu qua phiên làm việc, cần provenance, scope và expiry. |
| Trace | Bản ghi có cấu trúc của agent run: goal, context, tool calls, observations, outcome. |
| Evaluation harness | Bộ khung chạy task chuẩn, thu trace, chấm điểm và so sánh phiên bản agent. |
| Prompt injection | Tình huống dữ liệu không tin cậy cố gắng trở thành instruction cho model. |
| Permission model | Quy tắc agent được làm gì, với tool nào, input nào và cần approval khi nào. |
| Human approval | Control yêu cầu người duyệt trước hành động có side effect hoặc rủi ro. |
| Blackboard | Shared state có cấu trúc để nhiều agent cùng đọc, ghi và đồng bộ. |
| Golden task | Task chuẩn dùng để regression eval agent qua nhiều phiên bản. |
| Blocked-correctly | Outcome khi agent không hoàn thành nhưng dừng đúng vì thiếu quyền, thiếu dữ liệu hoặc rủi ro. |

## Cách dùng glossary

Khi đọc một bài mới, nếu gặp thuật ngữ lạ, hãy quay lại glossary để hiểu nghĩa vận hành trước. Sau đó đọc chương chính để thấy ví dụ, trade-off và failure mode. Trong Agentic Engineering, hiểu thuật ngữ không đủ. Điều quan trọng là biết thuật ngữ đó tạo boundary nào trong thiết kế.
