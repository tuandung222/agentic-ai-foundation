---
title: Skills, Workflows và Memory
---

# Skills, Workflows và Memory

Skill, workflow và memory đều mở rộng năng lực agent, nhưng chúng phục vụ ba mục đích khác nhau. Nhầm lẫn ba khái niệm này làm repo khó bảo trì và làm agent dễ hành động sai. Cách phân biệt đơn giản là: skill trả lời “làm loại việc này như thế nào”, workflow trả lời “quy trình nhiều bước diễn ra theo thứ tự nào”, còn memory trả lời “thông tin nào nên được nhớ qua phiên làm việc”.

## Skill

Skill là năng lực có thể tái sử dụng. Ví dụ: review React code, triage failing CI, generate lecture PDF, deploy Docusaurus. Skill thường chứa kiến thức thủ tục, tiêu chí kiểm tra và ví dụ. Skill nên được viết như một module chuyên môn: dùng khi nào, input là gì, các bước thực hiện, output mong đợi và lỗi thường gặp.

Skill tốt không nên quá rộng. “Làm frontend” quá mơ hồ. “Review React component for accessibility and state bugs” rõ hơn. Skill càng rõ, agent càng biết khi nào gọi và reviewer càng dễ đánh giá output.

## Workflow

Workflow là chuỗi bước có thứ tự. Ví dụ: tạo feature mới, chạy migration, release package, deploy site. Workflow phù hợp với quy trình có trạng thái rõ và checkpoint rõ. Nếu một bước có side effect lớn, workflow phải yêu cầu confirmation hoặc policy gate.

Workflow khác skill ở chỗ nó nhấn mạnh thứ tự và trạng thái. Một workflow tốt nên nói bước nào có thể tự chạy, bước nào cần approval, artifact nào được tạo và điều kiện dừng là gì.

## Memory

Memory là thông tin được lưu qua phiên làm việc. Nó có thể là preference của người dùng, quyết định kiến trúc, tên repo hoặc quyết định kỹ thuật dài hạn. Memory phải có phạm vi. Một memory của repo này không nên tự động áp vào repo khác nếu không liên quan.

Memory cần provenance và expiry. Nếu agent nhớ một quyết định cũ nhưng repo đã đổi, memory trở thành nguồn lỗi. Vì vậy, memory nên ghi rõ nó đến từ đâu, khi nào và áp dụng cho phạm vi nào.

## Quy tắc phân loại

| Nếu nội dung là | Nên đặt ở |
|---|---|
| Convention ổn định của repo | `AGENT.md` |
| Quy trình nhiều bước | workflow |
| Năng lực chuyên môn tái dùng | skill |
| Sở thích hoặc quyết định dài hạn | memory |
| Yêu cầu riêng của task hiện tại | task prompt |

## Anti-patterns

- Nhét toàn bộ workflow vào memory cá nhân.
- Dùng skill để lưu policy bảo mật bắt buộc.
- Copy cùng một rule vào nhiều file rồi để lệch nhau.
- Để memory không có scope nhưng áp dụng trên mọi repo.
- Workflow có side effect nhưng không có approval gate.

## Kết luận

Thiết kế tốt là khi agent biết nhìn vào đúng nguồn thay vì kéo mọi thứ vào một prompt khổng lồ. Skill, workflow và memory là ba cơ chế khác nhau để quản lý context dài hạn. Phân loại đúng giúp agent nhất quán hơn và team dễ bảo trì hơn.
