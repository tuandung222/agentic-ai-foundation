---
title: Maturity Matrix
---

# Maturity Matrix

Maturity matrix giúp đánh giá một agentic system đang ở mức nào. Mục tiêu không phải để gắn nhãn cho đẹp, mà để biết bước cải thiện tiếp theo là gì. Một hệ thống demo có thể gây ấn tượng, nhưng production cần nhiều năng lực hơn: trace, eval, permission, audit và rollback.

## Các mức trưởng thành

| Mức | Đặc trưng | Rủi ro chính |
|---|---|---|
| 0: Prompt-only | Dùng prompt thủ công, không tool hoặc tool rất ít | Không lặp lại được, khó debug |
| 1: Assisted workflow | Agent hỗ trợ đọc, phân tích, tạo draft | Phụ thuộc human review |
| 2: Tool-using agent | Agent gọi tool có schema và boundary cơ bản | Tool misuse, output injection |
| 3: Evaluated agent | Có task suite, trace và regression eval | Eval coverage chưa đủ |
| 4: Governed agent | Có identity, permission, approval, audit | Chi phí vận hành cao |
| 5: Bounded autonomy | Agent tự hành động trong boundary hẹp, có monitoring và rollback | Over-automation nếu boundary sai |

Không phải mọi use case đều cần mức 5. Một coding assistant cá nhân có thể dừng ở mức 2 hoặc 3. Một enterprise agent có side effect nên hướng tới mức 4 trước khi cân nhắc autonomy hẹp.

## Đánh giá theo trục

Ngoài mức tổng thể, nên đánh giá theo từng trục:

| Trục | Câu hỏi |
|---|---|
| Context | Agent có biết đúng repo, policy, task và constraint không? |
| Tools | Tool schema, error, permission có rõ không? |
| State | Agent có state machine hoặc trace không? |
| Eval | Có golden tasks và failure taxonomy không? |
| Security | Có prompt injection defense và data boundary không? |
| Governance | Có owner, approval, audit, rollback không? |

Một hệ thống có thể mạnh ở tools nhưng yếu ở eval. Khi đó, thêm tool mới có thể làm rủi ro tăng nhanh. Matrix giúp tránh cải thiện lệch.

## Cách dùng matrix

Hãy chọn một workflow cụ thể, không đánh giá cả tổ chức chung chung. Ví dụ “agent hỗ trợ triage incident staging” hoặc “coding agent tạo PR cho bug nhỏ”. Với workflow đó, chấm từng trục, ghi evidence và chọn một cải tiến nhỏ nhất có tác động lớn.

## Kết luận

Maturity không phải số lượng agent hay số framework đang dùng. Maturity là mức độ hệ thống có thể quan sát, đánh giá, kiểm soát và phục hồi khi agent sai. Matrix này giúp đưa cuộc thảo luận từ hype về capability sang engineering về reliability.
