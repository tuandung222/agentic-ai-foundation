---
title: AGENT.md và AGENTS.md convention
---

# AGENT.md và AGENTS.md convention

Khi nhiều agent tool cùng làm việc trên một repo, câu hỏi đầu tiên là agent đọc convention từ đâu. Một số tool dùng tên `AGENT.md`. Một số tool và đề xuất chuẩn dùng tên `AGENTS.md` ở thư mục gốc của dự án để giữ một nguồn ngữ cảnh trung lập, không gắn với tool nào. Hiểu sự khác nhau và cùng tồn tại của hai convention giúp team không bị khóa vào một sản phẩm cụ thể.

## Cùng tồn tại, không loại trừ

Một repo có thể có cả `AGENT.md` (đặc thù theo một tool) và `AGENTS.md` (convention chung). Khi cả hai cùng tồn tại, hãy giữ một nguồn sự thật chính và để file kia tham chiếu hoặc bổ sung. Tránh copy nguyên văn vào hai nơi vì chúng sẽ lệch theo thời gian.

| File | Mục đích chính |
|---|---|
| `AGENTS.md` | Convention chung mọi agent công cụ nên đọc trước khi hành động |
| `AGENT.md` | Convention bổ sung dành cho một tool cụ thể trong team |
| `.windsurfrules`, `.cursor/rules`, `CLAUDE.md` | Cấu hình tool-specific, nên ngắn và tham chiếu về `AGENTS.md` |

## Nội dung tối thiểu của AGENTS.md

```markdown
# Agents in this repository

## Scope
Repo làm gì. Module chính nào ảnh hưởng tới agent.

## Allowed actions
- Đọc file trong repo.
- Chạy `npm run test`, `npm run typecheck`, `npm run build`.

## Restricted actions
- Không thay đổi `infra/` mà không có approval.
- Không commit secret hoặc credential.
- Không xóa dữ liệu production.

## Conventions
- Code style, naming, structure tối thiểu.
- Cách viết commit message và PR description.

## Testing expectations
- Thay đổi nào cần test nào.
- Test phải pass trước khi báo hoàn thành.

## Completion checklist
- Đã chạy lint và typecheck.
- Đã chạy test liên quan.
- Đã chuẩn bị PR description.

## Where to ask for help
File hoặc kênh nội bộ để agent biết khi nào nên dừng và xin instruction.
```

Đây là khung. Mỗi team thêm hoặc bớt theo nhu cầu.

## Không nên có gì trong AGENTS.md

- Credential, token, mật khẩu, URL nội bộ chứa secret.
- Rule quá dài, rule mâu thuẫn hoặc rule không actionable.
- Thông tin task-specific. Những thứ này nên nằm trong issue hoặc prompt hiện tại.
- Tên người, mô tả vai trò cá nhân nhạy cảm.
- Lịch sử thay đổi dài; hãy dùng git để giữ history.

## Phân biệt AGENTS.md, skill, workflow, memory

`AGENTS.md` mô tả ngữ cảnh repo ổn định cho mọi agent. Skill mô tả năng lực tái dùng cho một loại việc. Workflow mô tả quy trình nhiều bước có thứ tự. Memory mô tả thông tin được giữ qua phiên. Bốn cơ chế này không thay thế nhau. Trộn lẫn chúng vào một file dài dẫn tới rule mâu thuẫn và hiệu lực mờ.

## Maintenance

`AGENTS.md` nên được review định kỳ. Một quy tắc đơn giản: mỗi khi agent fail vì thiếu context, hãy hỏi “có nên cập nhật `AGENTS.md` không”. Mỗi khi command đổi, cập nhật ngay. Một `AGENTS.md` lỗi thời nguy hiểm hơn không có file vì nó tạo niềm tin sai.

## Validation tự động

Một số repo có script kiểm `AGENTS.md` tồn tại, có tối thiểu các section bắt buộc và không chứa pattern bị cấm (như secret hoặc lệnh nguy hiểm). Script này có thể chạy trong CI như một bước hygiene. Cách này biến convention thành rule có thể enforce thay vì chỉ là gợi ý đạo đức.

## Kết luận

`AGENTS.md` là một convention nhỏ nhưng có ảnh hưởng lớn tới chất lượng agent run trên một repo. Khi tài liệu này rõ, ngắn và cập nhật, agent hành động đúng hơn, reviewer dễ kiểm soát hơn, và team không bị khóa vào một tool. Khi tài liệu này thiếu hoặc lệch, mọi tinh chỉnh model phía dưới đều phải gánh hệ quả.
