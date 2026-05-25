---
title: Tổng quan Multi-agent Systems
---

# Tổng quan Multi-agent Systems

Multi-agent system là hệ thống trong đó nhiều agent hoặc nhiều role phối hợp để giải quyết một mục tiêu. Ý tưởng này hấp dẫn vì nó giống tổ chức con người: planner lập kế hoạch, researcher tìm dữ liệu, coder sửa code, reviewer kiểm tra, tester chạy test. Nhưng nhiều agent không tự động tạo hệ thống tốt hơn. Nếu không có contract và shared state, nhiều agent chỉ tạo thêm nhiễu.

## Khi nào cần nhiều agent

Nhiều agent hữu ích khi task có các phần chuyên môn khác nhau, có artifact rõ, hoặc cần review độc lập. Ví dụ, một agent viết code và một agent review security có thể tạo giá trị nếu reviewer có rubric riêng và không sửa code trực tiếp. Một research agent và synthesis agent có thể hữu ích nếu evidence table được chia sẻ rõ.

Nếu task nhỏ, tuyến tính và không có artifact boundary, single-agent workflow thường tốt hơn. Multi-agent làm tăng coordination cost, latency và debug complexity.

## Các mô hình phối hợp

| Mô hình | Đặc điểm | Khi dùng |
|---|---|---|
| Manager-worker | Một agent phân công, agent khác thực hiện | Task có decomposition rõ |
| Peer review | Agent độc lập kiểm tra artifact | Cần chất lượng và safety |
| Blackboard | Nhiều agent đọc ghi shared state | Task song song hoặc dài |
| Debate | Nhiều agent đưa lập luận đối lập | Cần phân tích trade-off |
| Workflow graph | Node có role cố định | Production workflow cần control |

## Điều kiện thành công

Multi-agent cần role rõ, artifact rõ, state rõ và owner cuối cùng. Nếu không có owner cuối cùng, hệ thống dễ rơi vào trách nhiệm mờ. Nếu artifact không rõ, agent trao đổi quá nhiều nhưng không tạo output kiểm chứng được. Nếu state không rõ, mỗi agent có phiên bản sự thật riêng.

## Kết luận

Multi-agent không phải mục tiêu tự thân. Nó là công cụ để chia trách nhiệm. Hãy thêm agent khi trách nhiệm mới có artifact, contract và evaluation riêng. Nếu không, hãy giữ hệ thống đơn giản.
