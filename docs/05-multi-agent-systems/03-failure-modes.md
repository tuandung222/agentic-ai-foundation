---
title: Failure Modes của Multi-agent
---

# Failure Modes của Multi-agent

Multi-agent systems có failure modes riêng. Chúng không chỉ cộng lỗi của từng agent, mà còn tạo lỗi do phối hợp.

## Coordination overhead

Nhiều agent cần trao đổi context. Nếu task nhỏ, chi phí phối hợp vượt lợi ích. Đây là lý do nhiều swarm demo trông ấn tượng nhưng không hiệu quả trong production.

## Responsibility gap

Planner nghĩ coder đã verify. Coder nghĩ tester sẽ verify. Tester nghĩ reviewer đã xem security. Kết quả là không ai chịu trách nhiệm cuối cùng. Cách xử lý là có owner rõ cho mỗi artifact và một final integrator.

## Consensus illusion

Nhiều agent cùng đồng ý không có nghĩa là đúng. Nếu các agent dùng cùng model, cùng context thiếu, chúng có thể cùng sai theo cùng một hướng. Cần evaluator độc lập hoặc test khách quan.

## Context divergence

Mỗi agent có một phần context khác nhau. Nếu không đồng bộ artifact, agent A có thể dựa trên file cũ trong khi agent B đã sửa. Blackboard hoặc shared state giúp giảm lỗi này, nhưng lại cần concurrency control.

## Checklist giảm rủi ro

- Mỗi agent có role và artifact rõ.
- Có owner cuối cùng cho task.
- Có shared state hoặc handoff packet.
- Có test hoặc evaluator khách quan.
- Có giới hạn vòng lặp và chi phí.
