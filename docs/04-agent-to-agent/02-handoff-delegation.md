---
title: Handoff và Delegation
---

# Handoff và Delegation

Handoff là chuyển quyền xử lý từ agent này sang agent khác. Delegation là giao một phần công việc cho agent khác nhưng agent gốc vẫn giữ trách nhiệm tổng thể. Hai khái niệm này khác nhau và cần được thiết kế rõ.

## Handoff

Handoff phù hợp khi task chuyển sang domain khác. Ví dụ support agent nhận thấy lỗi là bug backend, nó handoff sang engineering agent. Handoff tốt cần mục tiêu, context tối thiểu, trace liên quan, trạng thái hiện tại và điều kiện hoàn thành.

## Delegation

Delegation phù hợp khi planner chia task cho sub-agent. Ví dụ planner giao coder sửa module A, tester chạy regression, reviewer kiểm tra security. Planner vẫn chịu trách nhiệm tổng hợp. Delegation cần interface trả kết quả rõ: done, blocked, failed, needs-human.

## Handoff packet

Một handoff packet nên có:

```yaml
goal: mục tiêu cần đạt
context: thông tin tối thiểu cần biết
constraints: giới hạn quyền và phạm vi
artifacts: file, trace, log hoặc link liên quan
status: current | blocked | needs_review
completion_criteria: điều kiện dừng
```

## Failure mode

Failure mode phổ biến là mất context khi handoff. Agent nhận chỉ thấy yêu cầu cuối cùng mà không thấy quyết định trước đó. Một lỗi khác là responsibility gap: agent gửi nghĩ agent nhận xử lý tiếp, agent nhận lại nghĩ chỉ cần tư vấn.
