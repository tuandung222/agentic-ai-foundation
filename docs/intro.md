---
id: intro
title: Lời mở đầu
sidebar_position: 1
---

# Lời mở đầu

Khi một mô hình ngôn ngữ lớn trả lời câu hỏi, ta thường đánh giá nó qua câu chữ: đúng hay sai, rõ hay mơ hồ, hữu ích hay không. Nhưng khi mô hình đó được đặt vào một hệ thống có công cụ, bộ nhớ, quyền truy cập, workflow và khả năng thực hiện hành động, câu hỏi đánh giá thay đổi hoàn toàn. Ta không còn chỉ hỏi “mô hình nói gì”, mà phải hỏi “hệ thống đã quan sát gì, quyết định gì, hành động ở đâu, kiểm tra kết quả thế nào và ai chịu trách nhiệm nếu có lỗi”.

Agentic AI Foundation được viết để trả lời chính câu hỏi đó. Đây là một tài liệu nền tảng về cách thiết kế, vận hành và kiểm soát các hệ thống AI có khả năng dùng công cụ, giữ ngữ cảnh, phối hợp nhiều bước và làm việc trong môi trường phần mềm thật. Trọng tâm của sách không phải là chạy theo tên sản phẩm. Trọng tâm là xây dựng một mental model đủ bền để người học hiểu vì sao agentic systems khác chatbot, vì sao context engineering quan trọng, vì sao protocol như MCP, A2A, ACP xuất hiện, và vì sao security, evaluation, governance phải được xem là thành phần thiết kế ngay từ đầu.

Điểm xuất phát của tài liệu này rất đơn giản: một mô hình ngôn ngữ lớn có thể sinh câu trả lời, nhưng một agent phải hành động trong một hệ thống có trạng thái, quyền hạn, dữ liệu, công cụ, log, lỗi và trách nhiệm. Khi chuyển từ chatbot sang agent, ta không chỉ viết prompt tốt hơn. Ta đang xây dựng một runtime phần mềm mới, nơi reasoning của model gặp các ràng buộc cổ điển của software engineering.

## Tài liệu này dành cho ai

Tài liệu này hữu ích cho bốn nhóm người đọc. Nhóm thứ nhất là kỹ sư phần mềm muốn hiểu cách coding agent, tool protocol và agent-ready repository thay đổi cách phát triển phần mềm. Nhóm thứ hai là architect hoặc tech lead cần đánh giá nên đưa agent vào workflow nào, ở mức quyền hạn nào, và với cơ chế kiểm soát nào. Nhóm thứ ba là người làm AI engineering muốn đi xa hơn prompt engineering để thiết kế runtime, eval và observability. Nhóm thứ tư là người quan tâm tới security và governance, nơi câu hỏi không phải là agent có thông minh không, mà là agent có an toàn, audit được và rollback được không.

## Bốn vai trò của cuốn sách

Tài liệu này theo bốn vai trò cùng lúc.

- **Foundation course:** giúp xây trực giác từ khái niệm cơ bản tới hệ thống nhiều agent.
- **Practitioner playbook:** cung cấp checklist, template và quy trình có thể áp dụng trong repo thật.
- **Research map:** phân loại protocol, convention, framework, product feature và mức trưởng thành của ecosystem.
- **Security and governance guide:** đặt boundary, permission, audit và evaluation vào trung tâm của thiết kế agent.

Bốn vai trò này bổ sung cho nhau. Nếu chỉ học foundation, ta hiểu khái niệm nhưng có thể thiếu cách triển khai. Nếu chỉ dùng playbook, ta làm được một số việc nhưng dễ thiếu nguyên lý. Nếu chỉ xem ecosystem map, ta dễ bị cuốn vào tên công cụ. Nếu chỉ nói security mà không hiểu runtime, ta khó đặt control đúng chỗ.

## Cách đọc

Bạn có thể đọc tuần tự từ Phần 0 tới Phần 10 nếu muốn xây dựng nền tảng. Nếu đang làm coding agent hoặc muốn làm repo agent-friendly, hãy đọc nhanh Phần 2 và Phần 6. Nếu đang quan tâm tới MCP, A2A, ACP, hãy đọc Phần 3 và Phần 4 trước. Nếu đang triển khai trong môi trường doanh nghiệp, đừng bỏ qua Phần 7 và Phần 8.

Một cách đọc khác là đi theo câu hỏi thực tế. Nếu bạn hỏi “agent khác assistant ở đâu”, hãy bắt đầu từ Phần 0. Nếu bạn hỏi “làm sao repo của tôi dễ cho agent hiểu hơn”, hãy đọc Phần 2 và Phần 6. Nếu bạn hỏi “tool nên expose thế nào”, hãy đọc Phần 3. Nếu bạn hỏi “nhiều agent phối hợp có đáng không”, hãy đọc Phần 5. Nếu bạn hỏi “làm sao biết agent tốt hơn sau mỗi lần sửa”, hãy đọc Phần 7.

## Nguyên tắc của sách

- **Tách thuật ngữ khỏi hype:** mỗi khái niệm cần biết nó là protocol, convention, framework, product feature hay marketing label.
- **Ưu tiên boundary:** agent chỉ an toàn khi boundary của tool, context, permission và data được mô tả rõ.
- **Đo được mới tin được:** agent không nên được đánh giá bằng cảm giác thông minh, mà bằng trace, task suite và failure analysis.
- **Repo là môi trường sống:** với coding agent, chất lượng repo quyết định phần lớn chất lượng agent run.
- **Autonomy phải đi cùng trách nhiệm:** càng trao nhiều quyền cho agent, càng cần identity, audit, approval và rollback.

## Kết quả học tập mong đợi

Sau khi đọc và thực hành theo tài liệu này, người học nên có khả năng giải thích kiến trúc cơ bản của một agentic system, thiết kế instruction files cho repo, đánh giá khi nào cần MCP, khi nào cần workflow graph, khi nào cần A2A hoặc ACP, xây checklist security cho tool, thiết kế trace-based evals và phân tích failure mode của một agent run.

Đích đến không phải là thuộc tên mọi framework. Đích đến là có khả năng đặt câu hỏi đúng khi gặp một agentic system mới: nó thấy gì, biết gì, được phép làm gì, làm trong vòng lặp nào, ai kiểm tra nó, và dữ liệu nào chứng minh rằng nó đang tốt lên.
