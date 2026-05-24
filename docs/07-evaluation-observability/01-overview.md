---
title: Tổng quan Evaluation và Observability
---

# Tổng quan Evaluation và Observability

Agent không thể được đánh giá chỉ bằng cảm giác “trả lời có vẻ đúng”. Vì agent có thể hành động, ta cần evaluation và observability như một phần của hệ thống.

Evaluation trả lời câu hỏi agent có làm đúng task không. Observability trả lời câu hỏi vì sao agent làm như vậy và lỗi nằm ở đâu. Một hệ thống thiếu evaluation sẽ khó cải thiện. Một hệ thống thiếu observability sẽ khó debug khi agent gây lỗi.

## Metrics cần quan tâm

- **Task success rate:** tỷ lệ hoàn thành đúng.
- **Tool-call accuracy:** gọi đúng tool với input đúng.
- **Cost:** token, thời gian, số tool calls.
- **Reliability:** kết quả ổn định qua nhiều lần chạy.
- **Safety:** không vi phạm permission hoặc data boundary.
- **Human correction rate:** cần người sửa bao nhiêu.

## Trace là tài sản

Trace ghi lại goal, context, plan, tool calls, observations, errors và final output. Trace tốt giúp tạo regression suite, debug failure và huấn luyện quy trình tốt hơn.

## Nguyên tắc

Đừng chỉ log final answer. Hãy log quá trình ra quyết định ở mức đủ để audit nhưng không lộ secret. Đây là một trade-off quan trọng trong production.
