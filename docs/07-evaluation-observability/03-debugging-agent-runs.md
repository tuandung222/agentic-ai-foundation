---
title: Debugging Agent Runs
---

# Debugging Agent Runs

Debug agent run khác debug function thông thường vì lỗi có thể nằm ở reasoning, context, tool, permission hoặc evaluator. Nếu chỉ nhìn final answer, ta thường sửa sai chỗ.

## Quy trình debug

- **Xác định expected outcome:** task đúng ra cần gì.
- **Đọc trace theo timeline:** goal, context, plan, tool call, observation.
- **Tìm divergence point:** bước đầu tiên agent đi lệch.
- **Phân loại lỗi:** thiếu context, tool mơ hồ, plan sai, observation bị hiểu sai, evaluator yếu.
- **Sửa smallest boundary:** sửa instruction, tool schema, workflow gate hoặc eval.

## Ví dụ

Nếu agent sửa sai file, đừng vội đổi model. Hãy hỏi: context retrieval có đưa file đúng không? Sidebar hoặc architecture map có chỉ rõ entry point không? Tool search có bị giới hạn sai không?

Nếu agent gọi command nguy hiểm, đừng chỉ thêm một câu “hãy cẩn thận”. Hãy đưa command đó vào danh sách requiring approval và enforce ở runtime.

## Kết luận

Debug tốt là debug hệ thống, không chỉ debug prompt.
