---
title: CLAUDE.md, AGENT.md và instruction files
---

# CLAUDE.md, AGENT.md và instruction files

Instruction files là cách repo nói chuyện với agent. Chúng mô tả convention, command, constraint và kỳ vọng của dự án. `CLAUDE.md`, `AGENT.md` hoặc các file tương tự không nên được xem như prompt trang trí. Chúng là một phần của developer experience cho agent.

## Nên chứa gì

Một instruction file tốt thường có các phần sau:

- **Project overview:** repo làm gì, kiến trúc chính ra sao.
- **Commands:** install, test, lint, build, deploy.
- **Code style:** naming, folder convention, component pattern.
- **Safety constraints:** file không được sửa, command cần hỏi trước.
- **Testing expectations:** thay đổi nào cần test nào.
- **Review checklist:** agent phải tự kiểm gì trước khi báo xong.

## Không nên chứa gì

Instruction file không nên chứa secrets, token, mật khẩu, nội dung quá dài hoặc rule mâu thuẫn. Nếu file quá dài, agent có thể bỏ qua phần quan trọng hoặc hiểu sai ưu tiên. Nếu rule mâu thuẫn, agent sẽ chọn ngẫu nhiên hoặc theo bias của model.

## AGENT.md hay CLAUDE.md

`CLAUDE.md` thường gắn với Claude Code và hệ sinh thái Claude. `AGENT.md` là một convention rộng hơn để mô tả repo cho nhiều agent. Một repo có thể dùng cả hai, nhưng nên tránh duplicate mâu thuẫn. Cách tốt là đặt rule chung trong `AGENT.md`, còn file riêng cho từng tool chỉ chứa khác biệt cần thiết.

## Template ngắn

```markdown
# Agent Instructions

## Project overview

## Safe commands

## Test and build

## Code conventions

## Do not modify

## Completion checklist
```
