---
title: Tổng quan Context Engineering
---

# Tổng quan Context Engineering

Context Engineering là nghệ thuật và kỹ thuật đưa đúng thông tin vào đúng thời điểm với đúng độ tin cậy. Với agent, context không chỉ là vài đoạn chat. Nó gồm system instruction, developer instruction, repo docs, file đang mở, tool output, memory, workflow, skill, issue description, logs và kết quả test.

Một agent thất bại thường không phải vì model không có khả năng, mà vì nó nhìn sai ngữ cảnh. Nó đọc nhầm file, bỏ qua convention, dùng memory cũ, không biết command test, hoặc hiểu sai quyền được phép.

## Các lớp context

| Lớp | Ví dụ | Tính chất |
|---|---|---|
| Instruction ổn định | `AGENT.md`, `CLAUDE.md` | Ít đổi, định hướng hành vi |
| Task context | yêu cầu người dùng, issue, PR | Đổi theo nhiệm vụ |
| Environment context | file tree, package scripts, CI | Cần đọc từ repo |
| Tool context | output lệnh, API response | Có thể nhiễu hoặc lỗi thời |
| Memory | sở thích, quyết định cũ | Cần nguồn gốc và expiry |

## Vấn đề cốt lõi

Context window hữu hạn, nhưng repo và lịch sử làm việc thì rất lớn. Vì vậy, context engineering không phải nhồi càng nhiều càng tốt. Nó là quá trình chọn lọc, nén, ưu tiên và kiểm chứng.

Một context tốt cần trả lời: agent đang làm task gì, trong repo nào, với constraint nào, phải dùng command nào để verify, không được đụng vào vùng nào, và khi nào phải hỏi lại.
