---
title: Team Patterns
---

# Team Patterns

Trong agentic software development, các pattern team thường bắt chước team con người: product planner, architect, coder, reviewer, tester và release manager. Nhưng agent không phải con người. Chúng cần contract ngắn, artifact rõ và tiêu chí dừng cụ thể.

## Planner, Coder, Reviewer, Tester

Pattern cơ bản nhất là planner-coder-reviewer-tester. Planner chia task và xác định scope. Coder sửa code. Reviewer kiểm tra correctness, security và maintainability. Tester chạy lệnh verify và phân tích failure.

Điểm mạnh của pattern này là tách người tạo và người đánh giá. Điểm yếu là tốn context và dễ có disagreement nếu không có tiêu chí ưu tiên.

## Architect, Implementer, Integrator

Với task lớn, architect xác định boundary, implementer sửa từng phần, integrator đảm bảo toàn hệ thống vẫn nhất quán. Pattern này phù hợp refactor, migration, thiết kế module hoặc thay đổi API.

## Researcher, Synthesizer, Critic

Với task nghiên cứu, researcher thu thập nguồn, synthesizer tạo cấu trúc, critic tìm lỗ hổng và điểm chưa chắc. Pattern này giúp tránh việc một agent vừa tìm vừa kết luận quá sớm.

## Rule of thumb

Mỗi agent trong team phải có output artifact riêng. Nếu không thể nói artifact của agent đó là gì, vai trò đó có thể chưa cần tồn tại.
