---
title: Release và Rollout cho Agent
---

# Release và Rollout cho Agent

Release agent khác release phần mềm truyền thống ở chỗ behavior có thể đổi khi model, prompt, tool schema, retrieval index hoặc policy thay đổi. Một thay đổi nhỏ trong instruction có thể làm agent gọi tool khác. Một thay đổi model có thể làm output tốt hơn ở task này nhưng tệ hơn ở task khác. Vì vậy, agent release cần discipline riêng.

## Version những gì

Nên version ít nhất các thành phần sau:

- System prompt và developer instruction.
- Workflow graph hoặc planner policy.
- Tool schema và tool description.
- MCP server version.
- Model name và model parameters.
- Retrieval corpus hoặc index version.
- Evaluation dataset version.
- Permission policy version.

Khi trace ghi đủ version, rollback và phân tích regression dễ hơn nhiều.

## Release gate

Trước khi rollout, chạy evaluation harness với golden tasks. Gate nên kiểm:

| Gate | Câu hỏi |
|---|---|
| Task success | Có regression trên task chuẩn không? |
| Safety | Có unsafe action hoặc policy bypass không? |
| Cost | Token và tool calls có tăng bất thường không? |
| Latency | P95 latency có vượt budget không? |
| Human correction | Người review phải sửa nhiều hơn không? |
| Trace quality | Trace có đủ để audit không? |

Nếu một thay đổi tăng success nhưng tăng unsafe rate, không nên rollout rộng.

## Canary rollout

Thay vì bật agent mới cho toàn bộ user, hãy canary theo nhóm nhỏ, use case ít rủi ro hoặc môi trường staging. Canary cần dashboard riêng và rollback nhanh. Với agent có side effect, canary nên bắt đầu ở draft mode hoặc act with approval.

## Rollback

Rollback agent không chỉ rollback code. Có thể cần rollback prompt, model, tool schema, retrieval index hoặc permission policy. Vì vậy, release metadata phải đủ chi tiết. Nếu không biết phiên bản nào đang chạy, rollback chỉ là đoán.

## Kết luận

Release agent là release hành vi, không chỉ release binary. Muốn rollout an toàn, cần versioning, eval gate, canary, monitoring và rollback plan cho từng lớp ảnh hưởng tới hành vi agent.
