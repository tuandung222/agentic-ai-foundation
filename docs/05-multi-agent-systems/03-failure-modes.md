---
title: Failure Modes của Multi-agent
---

# Failure Modes của Multi-agent

Multi-agent systems có failure modes riêng. Một single agent có thể sai vì thiếu context hoặc gọi tool sai. Nhiều agent còn có thể sai vì phối hợp kém: hiểu khác mục tiêu, ghi đè artifact của nhau, vòng lặp tranh luận, hoặc không ai chịu trách nhiệm cuối cùng.

## Coordination overhead

Mỗi agent thêm vào hệ thống đều tạo chi phí: context transfer, state sync, latency và debug. Nếu chi phí phối hợp lớn hơn lợi ích chuyên môn hóa, multi-agent làm hệ thống tệ hơn. Đây là lý do production workflow thường dùng workflow graph rõ thay vì swarm tự do.

## Responsibility gap

Responsibility gap xảy ra khi mỗi agent nghĩ agent khác chịu trách nhiệm. Planner giao task mơ hồ, executor làm theo cách riêng, reviewer chỉ kiểm bề mặt, integrator không có quyền quyết định. Kết quả là artifact cuối không ai thật sự sở hữu.

Cách giảm responsibility gap là có owner cuối cùng và artifact contract. Mỗi role phải biết output của mình được dùng ở đâu và ai chấp nhận nó.

## Context drift

Các agent có thể nhìn context khác nhau. Planner dùng version cũ của requirement, coder đọc file mới, reviewer xem diff chưa cập nhật. Khi context drift, trao đổi giữa agent trở nên mâu thuẫn. Shared state hoặc blackboard giúp giảm vấn đề này.

## Consensus illusion

Nhiều agent đồng ý không có nghĩa là đúng. Nếu các agent dùng cùng model, cùng context thiếu và cùng bias, chúng có thể đồng ý sai. Review độc lập chỉ có giá trị khi reviewer có rubric, context hoặc perspective khác.

## Loop và escalation failure

Multi-agent có thể mắc kẹt trong loop: reviewer yêu cầu sửa, coder sửa, reviewer đổi tiêu chí, planner tái phân công. Cần stopping condition, timeout và escalation rule. Khi không đủ thông tin, hệ thống nên hỏi người dùng hoặc dừng blocked-correctly.

## Kết luận

Multi-agent system cần được thiết kế như hệ thống phối hợp, không phải cuộc trò chuyện nhóm. Role, state, artifact, owner và stopping condition là các control chính để tránh failure modes.
