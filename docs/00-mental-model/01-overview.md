---
title: Tổng quan Mental Model
---

# Tổng quan Mental Model

Một sai lầm phổ biến khi học về agent là bắt đầu bằng tên sản phẩm hoặc tên protocol. Ta nghe về MCP, A2A, ACP, coding agents, browser agents, swarm, workflow graph, memory, skill, rồi có cảm giác đây là một tập hợp thuật ngữ rời rạc. Cách học đó khiến người đọc nhớ nhiều nhãn nhưng không thấy được cấu trúc bên dưới. Mental model đúng nên bắt đầu từ một câu hỏi đơn giản hơn: hệ thống này chỉ sinh văn bản, hay nó có thể quan sát trạng thái, chọn hành động, dùng công cụ, kiểm tra kết quả và tiếp tục vòng lặp?

Hãy hình dung một người trợ lý trong văn phòng. Nếu người đó chỉ trả lời câu hỏi, ta đánh giá họ bằng chất lượng câu trả lời. Nhưng nếu người đó có thể mở hệ thống ticket, đọc tài liệu nội bộ, gửi email, sửa file, chạy test và báo cáo tiến độ, ta cần cách đánh giá khác. Lúc này, năng lực ngôn ngữ chỉ là một phần. Phần còn lại là hiểu quyền hạn, quy trình, nguồn dữ liệu, trạng thái công việc, tiêu chí hoàn thành và cơ chế kiểm soát sai sót.

Agentic systems cũng vậy. LLM là một thành phần suy luận xác suất trên chuỗi token. Assistant là một giao diện tương tác với người dùng, thường có system prompt, lịch sử hội thoại và một số công cụ. Agentic system là một hệ thống có vòng lặp hành động: nó nhận mục tiêu, tạo kế hoạch, gọi tool, đọc kết quả, cập nhật state, sửa kế hoạch và dừng khi đạt điều kiện kết thúc.

## Ba tầng cần phân biệt

| Tầng | Câu hỏi chính | Ví dụ |
|---|---|---|
| Model | Model hiểu và sinh gì? | GPT, Claude, Gemini, Qwen |
| Agent runtime | Model hành động theo vòng lặp nào? | plan-act-observe, ReAct, workflow graph |
| Operating environment | Agent được phép tác động vào đâu? | repo, shell, database, MCP server, ticket system |

Ba tầng này thường bị trộn lẫn trong thảo luận. Khi một agent thất bại, người ta dễ kết luận “model chưa đủ tốt”. Nhưng thất bại có thể nằm ở runtime hoặc môi trường. Model có thể đủ khả năng suy luận, nhưng context bị thiếu file quan trọng. Runtime có thể cho phép tool call quá rộng. Tool output có thể mơ hồ. Permission có thể cấp quá nhiều quyền. Không tách tầng, ta sẽ sửa sai chỗ.

## Agent như một control system

Một mental model hữu ích là xem agent như một control system. Nó có mục tiêu, quan sát môi trường, chọn hành động, nhận phản hồi và điều chỉnh. Trong control system cổ điển, nếu sensor sai, controller sẽ quyết định sai. Nếu actuator quá mạnh hoặc không có giới hạn, hệ thống có thể gây hỏng. Nếu feedback chậm, vòng điều khiển dao động. Với agent, sensor là context và observation, actuator là tool, controller là model kết hợp runtime, feedback là test, log, evaluator hoặc phản hồi người dùng.

Cách nhìn này giúp ta hiểu vì sao agentic engineering không thể chỉ là prompt engineering. Prompt tốt giống như hướng dẫn tốt cho controller, nhưng nếu sensor nhiễu, actuator nguy hiểm và feedback không đáng tin, hướng dẫn tốt vẫn không đủ.

## Từ câu trả lời tới hành động

Sự khác biệt quan trọng nhất giữa assistant và agent là side effect. Một câu trả lời sai có thể gây hiểu nhầm. Một hành động sai có thể sửa nhầm file, gửi nhầm email, tạo ticket sai, tiêu tốn chi phí, rò rỉ dữ liệu hoặc làm hỏng môi trường production. Vì vậy, khi agent có tool, ta phải hỏi thêm:

- Tool nào là read-only, tool nào có side effect.
- Hành động nào cần approval.
- Output của tool có đáng tin không.
- Agent có biết khi nào phải dừng không.
- Có trace để audit sau này không.
- Có test hoặc evaluator để xác nhận kết quả không.

## Những hiểu nhầm thường gặp

Hiểu nhầm thứ nhất là “agent chỉ là LLM cộng tools”. Công thức này đúng ở mức bề mặt nhưng thiếu runtime, state, eval và governance. Một agent production không chỉ cần gọi tool. Nó cần gọi đúng tool, với input đúng, trong quyền hạn đúng, và biết xử lý khi tool trả lỗi.

Hiểu nhầm thứ hai là “memory càng nhiều càng tốt”. Memory hữu ích khi có nguồn gốc, độ mới và phạm vi áp dụng. Memory cũ hoặc sai có thể làm agent tự tin theo hướng sai. Vì vậy, memory phải được xem như dữ liệu có lifecycle, không phải kho sự thật vĩnh viễn.

Hiểu nhầm thứ ba là “multi-agent luôn tốt hơn single-agent”. Nhiều agent có thể tăng chuyên môn hóa, nhưng cũng tăng coordination cost. Nếu task không có artifact boundary rõ, thêm agent chỉ làm hệ thống khó debug hơn.

## Kết luận

Mental model cốt lõi là: agent không phải một “model thông minh hơn”, mà là một hệ thống điều khiển có model ở trung tâm. Vì thế, Agentic Engineering phải kết hợp AI, software architecture, security, evaluation và developer experience. Khi hiểu agent theo cách này, ta có thể đánh giá công cụ mới mà không bị cuốn theo hype: công cụ đó cải thiện tầng nào, tạo boundary nào, và rủi ro mới nằm ở đâu.
