---
id: intro
title: Lời mở đầu
sidebar_position: 1
---

# Lời mở đầu

Agentic AI Foundation là một cuốn sách nền tảng về cách thiết kế, vận hành và kiểm soát các hệ thống AI có khả năng dùng công cụ, giữ ngữ cảnh, phối hợp nhiều bước và làm việc trong môi trường phần mềm thật.

Điểm xuất phát của tài liệu này rất đơn giản: một mô hình ngôn ngữ lớn có thể sinh câu trả lời, nhưng một agent phải hành động trong một hệ thống có trạng thái, quyền hạn, dữ liệu, công cụ, log, lỗi và trách nhiệm. Khi chuyển từ chatbot sang agent, ta không chỉ viết prompt tốt hơn. Ta đang xây dựng một runtime phần mềm mới, nơi reasoning của model gặp các ràng buộc cổ điển của software engineering.

Tài liệu này theo bốn vai trò cùng lúc. Thứ nhất, nó là một foundation course để xây dựng trực giác. Thứ hai, nó là một practitioner playbook với checklist và template dùng được trong repo thật. Thứ ba, nó là một research map để phân loại protocol, convention, framework và product feature. Thứ tư, nó là một security and governance guide vì agent càng mạnh thì biên rủi ro càng rộng.

## Cách đọc

Bạn có thể đọc tuần tự từ Phần 0 tới Phần 10 nếu muốn xây dựng nền tảng. Nếu đang làm coding agent hoặc muốn làm repo agent-friendly, hãy đọc nhanh Phần 2 và Phần 6. Nếu đang quan tâm tới MCP, A2A, ACP, hãy đọc Phần 3 và Phần 4 trước. Nếu đang triển khai trong môi trường doanh nghiệp, đừng bỏ qua Phần 7 và Phần 8.

## Nguyên tắc của sách

- **Tách thuật ngữ khỏi hype:** mỗi khái niệm cần biết nó là protocol, convention, framework, product feature hay marketing label.
- **Ưu tiên boundary:** agent chỉ an toàn khi boundary của tool, context, permission và data được mô tả rõ.
- **Đo được mới tin được:** agent không nên được đánh giá bằng cảm giác thông minh, mà bằng trace, task suite và failure analysis.
- **Repo là môi trường sống:** với coding agent, chất lượng repo quyết định phần lớn chất lượng agent run.
