---
title: Thiết kế Tool cho Agent
---

# Thiết kế Tool cho Agent

Tool design quyết định agent có hành động chính xác hay không. Một tool schema mơ hồ giống như API endpoint không có contract. Agent có thể gọi sai, hiểu sai output hoặc lặp lại hành động gây side effect.

## Tool tốt cần gì

- **Tên rõ:** tên tool nên nói hành động cụ thể, không quá chung chung.
- **Input schema chặt:** field bắt buộc, enum, format và mô tả rõ.
- **Output có cấu trúc:** trả JSON hoặc format ổn định khi có thể.
- **Side effect rõ:** tool có ghi dữ liệu, gửi message, xóa file hay deploy không.
- **Idempotency:** gọi lại có gây hại không.
- **Error semantics:** lỗi do input, permission, network hay state conflict.

## Anti-pattern

Tool tên `run` hoặc `execute` với input tự do là anti-pattern nếu không có sandbox. Nó cho agent quá nhiều quyền và làm audit khó. Tool trả output dài không cấu trúc cũng là anti-pattern vì agent dễ bỏ sót thông tin quan trọng.

## Checklist trước khi expose tool

| Câu hỏi | Lý do |
|---|---|
| Tool có quyền tối thiểu chưa? | Giảm blast radius |
| Tool có dry-run không? | Kiểm tra trước side effect |
| Tool có confirmation gate không? | Chặn hành động nguy hiểm |
| Output có đủ ngắn và đủ cấu trúc không? | Giảm nhiễu context |
| Có log request và response không? | Hỗ trợ audit |
