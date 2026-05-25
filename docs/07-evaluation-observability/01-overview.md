---
title: Tổng quan Evaluation và Observability
---

# Tổng quan Evaluation và Observability

Agent không thể được đánh giá chỉ bằng cảm giác “trả lời có vẻ đúng”. Cảm giác có thể đủ khi ta đọc một câu trả lời ngắn. Nhưng với agentic systems, điều quan trọng không chỉ là kết quả cuối. Ta cần biết agent đã dùng context nào, gọi tool nào, hiểu output ra sao, có bỏ qua lỗi không, có vi phạm quyền không và có thể lặp lại kết quả không.

Evaluation trả lời câu hỏi agent có làm đúng task không. Observability trả lời câu hỏi vì sao agent làm như vậy và lỗi nằm ở đâu. Một hệ thống thiếu evaluation sẽ khó cải thiện vì không biết thay đổi nào tốt hơn. Một hệ thống thiếu observability sẽ khó debug vì chỉ thấy final answer mà không thấy quá trình.

## Vì sao eval agent khó hơn eval chatbot

Với chatbot, ta thường chấm câu trả lời: đúng, đầy đủ, hữu ích, không độc hại. Với agent, ta phải chấm cả quá trình. Một agent có thể đưa ra final answer đúng nhưng gọi tool không cần thiết, tốn chi phí quá cao hoặc đọc dữ liệu không được phép. Ngược lại, một agent có thể không hoàn thành task nhưng dừng đúng vì thiếu quyền hoặc thiếu thông tin. Hành vi thứ hai đôi khi đáng tin hơn việc đoán mò.

Agent eval vì thế phải nhìn vào trace. Trace cho ta biết goal, context, plan, tool calls, observations, errors, retries, approvals và final output. Không có trace, ta chỉ đang chấm phần nổi của tảng băng.

## Metrics cần quan tâm

| Metric | Câu hỏi |
|---|---|
| Task success rate | Agent hoàn thành đúng bao nhiêu task? |
| Tool-call accuracy | Agent gọi đúng tool với input đúng không? |
| Cost | Token, thời gian và số tool calls là bao nhiêu? |
| Reliability | Kết quả có ổn định qua nhiều lần chạy không? |
| Safety | Agent có vi phạm permission hoặc data boundary không? |
| Human correction rate | Người dùng phải sửa bao nhiêu phần? |
| Recovery quality | Khi tool lỗi, agent có phục hồi đúng không? |

Không có metric nào đủ một mình. Tăng success rate nhưng tăng unsafe action là cải thiện giả. Giảm cost nhưng giảm reliability cũng có thể không đáng. Eval tốt phải nhìn trade-off.

## Trace là tài sản

Trace ghi lại goal, context, plan, tool calls, observations, errors và final output. Trace tốt giúp tạo regression suite, debug failure và huấn luyện quy trình tốt hơn. Nhưng trace cũng là dữ liệu nhạy cảm. Nó có thể chứa prompt, file path, output nội bộ hoặc thông tin người dùng. Vì vậy, trace collection phải đi kèm redaction và retention policy.

## Failure taxonomy

Khi agent sai, chỉ ghi “failed” là chưa đủ. Cần phân loại lỗi:

- **Context failure:** thiếu hoặc sai context.
- **Planning failure:** chia bước sai hoặc chọn chiến lược sai.
- **Tool failure:** gọi sai tool, input sai, hoặc tool lỗi.
- **Observation failure:** đọc output sai hoặc bỏ qua warning.
- **Verification failure:** không chạy test hoặc hiểu sai kết quả test.
- **Policy failure:** vi phạm quyền, data boundary hoặc approval rule.
- **Communication failure:** báo cáo kết quả mơ hồ, thiếu rủi ro còn lại.

Phân loại lỗi giúp sửa đúng chỗ. Nếu phần lớn lỗi là context failure, đổi model chưa chắc hiệu quả. Nếu phần lớn lỗi là tool failure, cần sửa schema hoặc tool description.

## Kết luận

Đừng chỉ log final answer. Hãy log quá trình ra quyết định ở mức đủ để audit nhưng không lộ dữ liệu nhạy cảm. Evaluation và observability không phải phần phụ sau khi agent đã chạy. Chúng là điều kiện để agentic system trưởng thành từ demo thành hệ thống có thể vận hành.
