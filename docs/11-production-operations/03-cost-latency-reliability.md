---
title: Cost, Latency và Reliability
---

# Cost, Latency và Reliability

Agentic systems thường đắt hơn chatbot đơn giản vì chúng dùng nhiều lượt model, nhiều tool call và nhiều context. Nếu không kiểm soát, một task nhỏ có thể biến thành loop dài, tốn token, chậm và vẫn không xong. Production cần xem cost, latency và reliability là một tam giác trade-off.

## Cost drivers

Chi phí agent đến từ nhiều nguồn:

| Nguồn chi phí | Ví dụ |
|---|---|
| Model tokens | Prompt dài, context lớn, nhiều lượt reasoning |
| Tool calls | Search nhiều lần, query API, chạy test |
| Retrieval | Index query, reranking, embedding |
| Human review | Approval và correction |
| Infrastructure | Runtime, trace store, queues, monitoring |

Tối ưu cost không chỉ là dùng model rẻ hơn. Đôi khi model mạnh hơn giảm số vòng lặp và rẻ hơn tổng thể. Đôi khi context tốt giúp giảm retry. Đôi khi tool output rõ giúp giảm token giải thích.

## Latency

Latency đến từ model response time, tool latency, queue, approval và retry. Với agent nhiều bước, latency tích lũy. Một workflow có 8 tool calls, mỗi call 3 giây, đã có 24 giây trước khi tính model.

Cần đặt latency budget theo task. Task interactive cần phản hồi nhanh hoặc progress update. Task background có thể lâu hơn nhưng cần checkpoint. Không nên dùng cùng timeout cho mọi task.

## Reliability

Reliability của agent không chỉ là uptime. Nó là xác suất agent hoàn thành đúng trong boundary. Các kỹ thuật quan trọng gồm:

- Timeout cho model và tool.
- Retry có giới hạn và backoff.
- Idempotency cho tool có side effect.
- Circuit breaker khi tool lỗi hàng loạt.
- Fallback sang human review.
- Stopping condition để tránh loop.
- Partial result khi task dài.

## Guardrails vận hành

Production nên có guardrails về token budget, tool-call budget, wall-clock time, max retries và max side-effect actions. Khi vượt guardrail, agent nên dừng có cấu trúc: báo blocked, nêu lý do và đề xuất bước tiếp theo.

## Kết luận

Cost, latency và reliability không thể tối ưu sau cùng. Chúng phải được đo từ đầu qua trace và metrics. Một agent “thông minh” nhưng quá chậm, quá đắt hoặc hay loop thì chưa production-ready.
