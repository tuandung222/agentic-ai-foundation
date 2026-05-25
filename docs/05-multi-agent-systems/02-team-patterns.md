---
title: Team Patterns
---

# Team Patterns

Team pattern trong multi-agent system lấy cảm hứng từ cách nhóm con người làm việc. Nhưng ta không nên mô phỏng tổ chức con người một cách máy móc. Mỗi role agent chỉ đáng tồn tại nếu nó có input, output và tiêu chí đánh giá riêng. Nếu role chỉ “nói thêm ý kiến” mà không tạo artifact, nó có thể làm hệ thống dài hơn nhưng không tốt hơn.

## Planner, executor, reviewer

Đây là pattern phổ biến nhất. Planner chia task và giữ mục tiêu. Executor tạo artifact. Reviewer kiểm tra artifact theo rubric. Pattern này phù hợp với coding, writing, research và operations.

Điểm quan trọng là reviewer phải có quyền độc lập. Nếu reviewer chỉ lặp lại kết luận của executor, pattern không tạo giá trị. Reviewer nên có checklist riêng, ví dụ security, correctness, completeness hoặc style.

## Researcher và synthesizer

Researcher thu thập evidence, synthesizer tạo kết luận. Pattern này hữu ích khi task cần nhiều nguồn. Researcher không nên viết kết luận quá sớm. Synthesizer không nên tạo claim không có evidence. Evidence table là artifact chung giúp hai role phối hợp.

## Tester và fixer

Tester tạo hoặc chạy kiểm thử, fixer sửa lỗi. Pattern này phù hợp với code. Tester nên báo lỗi có reproduction rõ. Fixer nên sửa nhỏ và chạy lại test. Nếu tester chỉ nói “fail” mà không có evidence, fixer phải đoán.

## Coordinator và specialists

Coordinator phân công cho các specialist, ví dụ security specialist, performance specialist, docs specialist. Pattern này chỉ phù hợp khi task đủ lớn. Nếu task nhỏ, coordinator trở thành overhead.

## Anti-patterns

- Quá nhiều role nhưng không có artifact rõ.
- Mọi agent đều có quyền sửa cùng một file.
- Không có owner cuối cùng.
- Reviewer xuất hiện sau khi side effect đã xảy ra.
- Agent trao đổi dài nhưng không cập nhật shared state.

## Kết luận

Team pattern tốt không phải pattern có nhiều agent. Nó là pattern có trách nhiệm tách rõ và artifact kiểm chứng được. Nếu không mô tả được output của từng role, chưa nên tách role đó thành agent.
