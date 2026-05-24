---
title: Skills, Workflows và Memory
---

# Skills, Workflows và Memory

Skill, workflow và memory đều mở rộng năng lực agent, nhưng chúng phục vụ ba mục đích khác nhau. Nhầm lẫn ba khái niệm này làm repo khó bảo trì và làm agent dễ hành động sai.

## Skill

Skill là năng lực có thể tái sử dụng. Ví dụ: “review React code”, “triage failing CI”, “generate lecture PDF”, “deploy Docusaurus”. Skill thường chứa kiến thức thủ tục, tiêu chí kiểm tra và ví dụ. Skill nên được viết như một module chuyên môn.

## Workflow

Workflow là chuỗi bước có thứ tự. Ví dụ: tạo feature mới, chạy migration, release package. Workflow phù hợp với quy trình có trạng thái rõ và checkpoint rõ. Nếu một bước có side effect lớn, workflow phải yêu cầu confirmation hoặc policy gate.

## Memory

Memory là thông tin được lưu qua phiên làm việc. Nó có thể là preference của người dùng, quyết định kiến trúc, tên repo, constraint riêng. Memory phải có phạm vi. Một memory của repo này không nên tự động áp vào repo khác nếu không liên quan.

## Quy tắc phân loại

| Nếu nội dung là | Nên đặt ở |
|---|---|
| Convention ổn định của repo | `AGENT.md` |
| Quy trình nhiều bước | workflow |
| Năng lực chuyên môn tái dùng | skill |
| Sở thích hoặc quyết định dài hạn | memory |
| Yêu cầu riêng của task hiện tại | task prompt |

Thiết kế tốt là khi agent biết nhìn vào đúng nguồn thay vì kéo mọi thứ vào một prompt khổng lồ.
