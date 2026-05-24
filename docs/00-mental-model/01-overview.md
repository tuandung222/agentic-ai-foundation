---
title: Tổng quan Mental Model
---

# Tổng quan Mental Model

Một sai lầm phổ biến khi học về agent là bắt đầu bằng tên sản phẩm hoặc tên protocol. Cách học đó dễ làm ta nhớ nhiều nhãn nhưng không thấy được cấu trúc bên dưới. Mental model đúng nên bắt đầu từ câu hỏi: hệ thống này chỉ sinh văn bản, hay nó có thể quan sát trạng thái, chọn hành động, dùng công cụ, kiểm tra kết quả và tiếp tục vòng lặp?

LLM là một thành phần suy luận xác suất trên chuỗi token. Assistant là một giao diện tương tác với người dùng, thường có system prompt, lịch sử hội thoại và một số công cụ. Agentic system là một hệ thống có vòng lặp hành động: nó nhận mục tiêu, tạo kế hoạch, gọi tool, đọc kết quả, cập nhật state, sửa kế hoạch và dừng khi đạt điều kiện kết thúc.

Agentic Engineering xuất hiện khi ta phải thiết kế toàn bộ vòng lặp đó như một hệ thống phần mềm. Các câu hỏi lúc này không còn là “prompt nào hay hơn” mà là: tool nào được phép chạy, log nào cần lưu, task nào cần approval, context nào đáng tin, memory nào có thể dùng lại, và làm sao biết agent đã làm đúng.

## Ba tầng cần phân biệt

| Tầng | Câu hỏi chính | Ví dụ |
|---|---|---|
| Model | Model hiểu và sinh gì? | GPT, Claude, Gemini, Qwen |
| Agent runtime | Model hành động theo vòng lặp nào? | plan-act-observe, ReAct, workflow graph |
| Operating environment | Agent được phép tác động vào đâu? | repo, shell, database, MCP server, ticket system |

Nếu chỉ tối ưu model mà bỏ qua runtime, agent có thể trả lời hay nhưng hành động sai. Nếu chỉ thêm tool mà không thiết kế permission, agent mạnh lên nhưng nguy hiểm hơn. Nếu chỉ thêm memory mà không có freshness policy, agent có thể dùng thông tin cũ như sự thật mới.

## Kết luận

Mental model cốt lõi là: agent không phải một “model thông minh hơn”, mà là một hệ thống điều khiển có model ở trung tâm. Vì thế, Agentic Engineering phải kết hợp AI, software architecture, security, evaluation và developer experience.
