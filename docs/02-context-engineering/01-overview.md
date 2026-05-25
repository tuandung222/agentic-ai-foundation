---
title: Tổng quan Context Engineering
---

# Tổng quan Context Engineering

Nếu model là bộ não suy luận, context là những gì bộ não đó đang nhìn thấy tại thời điểm ra quyết định. Một người rất giỏi vẫn có thể quyết định sai nếu đọc nhầm tài liệu, thiếu thông tin quan trọng hoặc bị đưa cho dữ liệu lỗi thời. Agent cũng vậy. Một agent thất bại thường không phải vì model không có khả năng, mà vì nó nhìn sai ngữ cảnh: đọc nhầm file, bỏ qua convention, dùng memory cũ, không biết command test hoặc hiểu sai quyền được phép.

Context Engineering là nghệ thuật và kỹ thuật đưa đúng thông tin vào đúng thời điểm với đúng độ tin cậy. Với agent, context không chỉ là vài đoạn chat. Nó gồm system instruction, developer instruction, repo docs, file đang mở, tool output, memory, workflow, skill, issue description, logs, kết quả test và lịch sử quyết định.

## Vì sao context khó hơn prompt

Prompt thường được hiểu là câu ta viết cho model. Context rộng hơn nhiều. Nó bao gồm mọi thứ model có thể dùng để suy luận trong một lượt hoặc một chuỗi lượt. Với chatbot đơn giản, context chủ yếu là lịch sử hội thoại. Với coding agent, context có thể là file tree, diff, package scripts, test output, architecture notes và coding conventions. Với enterprise agent, context có thể gồm policy, user role, data classification và audit requirement.

Khó khăn nằm ở chỗ context window hữu hạn, trong khi repo, tài liệu và lịch sử làm việc thì rất lớn. Nếu đưa quá ít, agent thiếu dữ kiện. Nếu đưa quá nhiều, agent bị nhiễu hoặc bỏ qua phần quan trọng. Nếu đưa dữ liệu không gắn nguồn, agent không biết tin vào đâu. Nếu đưa memory không có expiry, agent có thể dùng thông tin cũ như sự thật mới.

## Các lớp context

| Lớp | Ví dụ | Tính chất |
|---|---|---|
| Instruction ổn định | `AGENT.md`, `CLAUDE.md` | Ít đổi, định hướng hành vi |
| Task context | yêu cầu người dùng, issue, PR | Đổi theo nhiệm vụ |
| Environment context | file tree, package scripts, CI | Cần đọc từ repo |
| Tool context | output lệnh, API response | Có thể nhiễu hoặc lỗi thời |
| Memory | sở thích, quyết định cũ | Cần nguồn gốc và expiry |
| Governance context | quyền, policy, approval state | Phải enforce được |

Các lớp này có độ tin cậy khác nhau. System instruction đáng tin hơn nội dung webpage. Policy runtime đáng tin hơn comment trong issue. Test output đáng tin cho trạng thái hiện tại, nhưng chỉ trong môi trường test đó. Memory hữu ích, nhưng phải biết nó được tạo khi nào và áp dụng cho phạm vi nào.

## Context selection

Context engineering không phải nhồi càng nhiều càng tốt. Nó là quá trình chọn lọc, nén, ưu tiên và kiểm chứng. Với một task sửa bug, context tốt có thể gồm issue description, stack trace, file liên quan, command test, convention về error handling và kết quả test gần nhất. Nó không cần toàn bộ repository. Với một task thiết kế architecture, context lại cần high-level docs, dependency map và constraints dài hạn.

Một quy tắc thực dụng là hỏi: thông tin này giúp agent quyết định bước tiếp theo không? Nếu không, có thể để ngoài context và chỉ truy xuất khi cần. Context nên được tổ chức theo mức ưu tiên: instruction bất biến, task goal, current state, evidence, rồi mới tới dữ liệu tham khảo.

## Context compression

Nhiều khi thông tin cần quá dài. Khi đó cần compression. Nhưng compression không chỉ là tóm tắt ngắn lại. Tóm tắt tốt phải giữ decision, constraint, unresolved question và evidence. Tóm tắt kém có thể xóa mất chi tiết quan trọng khiến agent tự tin sai.

Ví dụ, thay vì tóm tắt “test đang fail”, nên ghi “`npm test` fail ở `auth.validateEmail`, expected invalid domain rejected nhưng actual accepted, nghi liên quan regex trong `src/auth/validation.ts`”. Tóm tắt thứ hai giúp agent hành động.

## Context hygiene

Context hygiene là vệ sinh ngữ cảnh. Nó gồm loại bỏ secret, gắn nhãn nguồn không tin cậy, tránh duplicate mâu thuẫn, cập nhật memory lỗi thời và phân biệt dữ liệu với instruction. Đây là nền tảng security quan trọng. Nhiều prompt injection thành công vì runtime đưa dữ liệu không tin cậy vào cùng không gian với instruction đáng tin mà không phân tầng.

## Kết luận

Một context tốt cần trả lời: agent đang làm task gì, trong repo nào, với constraint nào, phải dùng command nào để verify, không được đụng vào vùng nào, thông tin nào đáng tin, thông tin nào chỉ là observation, và khi nào phải hỏi lại. Khi context được thiết kế tốt, model không chỉ thông minh hơn trên bề mặt. Nó ra quyết định trong một môi trường rõ ràng hơn.
