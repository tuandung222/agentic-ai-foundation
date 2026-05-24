---
title: Tổng quan Multi-agent Systems
---

# Tổng quan Multi-agent Systems

Multi-agent system dùng nhiều agent để giải quyết một task hoặc một tập task liên quan. Ý tưởng hấp dẫn là chia vai: planner lập kế hoạch, coder viết code, reviewer tìm lỗi, tester chạy kiểm chứng. Nhưng nhiều agent không tự động tốt hơn một agent.

Lợi ích của multi-agent đến từ chuyên môn hóa, phản biện và song song hóa. Chi phí đến từ coordination overhead, context duplication, conflict resolution và khó audit.

## Ba mô hình phổ biến

- **Hierarchical team:** một manager agent chia việc cho sub-agent.
- **Peer collaboration:** nhiều agent ngang hàng thảo luận và thống nhất.
- **Blackboard architecture:** các agent đọc ghi vào một không gian trạng thái chung.

## Khi nào nên dùng

Multi-agent phù hợp khi task có vai trò khác nhau thật sự, cần kiểm tra chéo, hoặc có thể song song hóa. Ví dụ review security độc lập với implementation là hợp lý. Ngược lại, dùng năm agent để cùng viết một function nhỏ thường chỉ tăng nhiễu.

## Tiêu chí thành công

Một multi-agent system tốt cần ownership rõ, protocol giao việc rõ, artifact rõ, và evaluator độc lập. Nếu các agent chỉ chat với nhau mà không tạo artifact kiểm chứng được, hệ thống có thể tạo cảm giác chuyên nghiệp nhưng không tăng chất lượng thật.
