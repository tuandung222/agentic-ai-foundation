---
title: Tổng quan A2A và ACP
---

# Tổng quan A2A và ACP

A2A và ACP đại diện cho nhu cầu chuẩn hóa giao tiếp giữa các agent hoặc giữa agent và runtime khác. Vấn đề không chỉ là gửi message. Vấn đề là handoff, identity, capability, state, quyền hạn và trách nhiệm.

Trong nhiều hệ thống, một agent đơn là đủ. Nhưng khi task phức tạp, ta có thể muốn một agent lập kế hoạch, một agent coding, một agent review, một agent test và một agent quản lý triage. Khi đó, giao tiếp giữa agent cần contract rõ hơn một đoạn chat tự do.

## Khi nào cần agent-to-agent protocol

Bạn nên nghĩ tới A2A hoặc ACP khi có nhiều agent độc lập, chạy ở runtime khác nhau, có capability khác nhau và cần trao đổi task có trạng thái. Nếu tất cả agent chỉ là function trong cùng một workflow graph, một protocol phức tạp có thể chưa cần thiết.

## Các câu hỏi chính

- Agent gửi task hay gửi message tự do?
- Agent nhận có quyền từ chối task không?
- Ai sở hữu state của task?
- Handoff có kèm context và trace không?
- Agent nhận có biết capability và limit của agent gửi không?
- Khi lỗi xảy ra, ai chịu trách nhiệm retry hoặc escalate?

## Nguyên tắc

Agent-to-agent communication phải được thiết kế như một contract phân tán. Nếu chỉ nối nhiều model bằng conversation tự do, hệ thống dễ sinh phối hợp giả: nhìn có vẻ nhiều agent đang làm việc, nhưng không có ownership, không có tiêu chí dừng và không có audit.
