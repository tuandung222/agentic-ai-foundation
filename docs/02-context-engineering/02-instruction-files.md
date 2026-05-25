---
title: CLAUDE.md, AGENT.md và instruction files
---

# CLAUDE.md, AGENT.md và instruction files

Instruction files là cách repo nói chuyện với agent. Chúng mô tả convention, command, constraint và kỳ vọng của dự án. `CLAUDE.md`, `AGENT.md` hoặc các file tương tự không nên được xem như prompt trang trí. Chúng là một phần của developer experience cho agent.

Một repo không có instruction file giống như một công ty không có onboarding notes. Người mới vẫn có thể làm việc, nhưng sẽ hỏi nhiều, đoán nhiều và mắc lỗi với convention ngầm. Agent cũng vậy. Nếu repo không nói command test nằm ở đâu, file nào không được sửa, hoặc completion criteria là gì, agent sẽ suy luận từ pattern và có thể sai.

## Nên chứa gì

Một instruction file tốt thường có các phần sau:

- **Project overview:** repo làm gì, kiến trúc chính ra sao.
- **Commands:** install, test, lint, build, deploy.
- **Code style:** naming, folder convention, component pattern.
- **Safety constraints:** file không được sửa, command cần hỏi trước.
- **Testing expectations:** thay đổi nào cần test nào.
- **Review checklist:** agent phải tự kiểm gì trước khi báo xong.

Điểm quan trọng là viết thông tin có thể hành động. “Hãy code sạch” không hữu ích bằng “mọi thay đổi trong `src/api` cần chạy `npm run typecheck` và test liên quan”. “Cẩn thận khi sửa auth” không hữu ích bằng “không đổi public permission semantics nếu chưa có yêu cầu rõ”.

## Không nên chứa gì

Instruction file không nên chứa credentials, token, mật khẩu, dữ liệu nhạy cảm, nội dung quá dài hoặc rule mâu thuẫn. Nếu file quá dài, agent có thể bỏ qua phần quan trọng hoặc hiểu sai ưu tiên. Nếu rule mâu thuẫn, agent sẽ chọn ngẫu nhiên hoặc theo bias của model.

Instruction file cũng không nên biến thành nơi lưu mọi quyết định nhỏ. Những thông tin task-specific nên nằm trong issue hoặc prompt hiện tại. Những quyết định dài hạn nên nằm trong architecture notes. Memory cá nhân không nên trộn với convention chung của repo.

## AGENT.md hay CLAUDE.md

`CLAUDE.md` thường gắn với Claude Code và hệ sinh thái Claude. `AGENT.md` là một convention rộng hơn để mô tả repo cho nhiều agent. Một repo có thể dùng cả hai, nhưng nên tránh duplicate mâu thuẫn. Cách tốt là đặt rule chung trong `AGENT.md`, còn file riêng cho từng tool chỉ chứa khác biệt cần thiết.

Nếu dùng nhiều agent platform, hãy giữ một nguồn sự thật chính. Các file riêng nên tham chiếu hoặc bổ sung, không copy rồi lệch dần.

## Template ngắn

```markdown
# Agent Instructions

## Project overview

## Main directories

## Safe commands

## Commands requiring approval

## Test and build

## Code conventions

## Do not modify

## Completion checklist
```

## Maintenance

Instruction file cần được bảo trì như code. Mỗi khi agent fail vì thiếu context, hãy xem có nên cập nhật instruction không. Mỗi khi command đổi, cập nhật ngay. Một instruction file lỗi thời nguy hiểm hơn không có instruction vì nó tạo niềm tin sai.

## Kết luận

Instruction files là lớp context ổn định của repo. Chúng không làm agent thông minh hơn theo nghĩa model, nhưng làm môi trường rõ hơn. Môi trường rõ là điều kiện để agent hành động đúng và reviewer kiểm soát được.
