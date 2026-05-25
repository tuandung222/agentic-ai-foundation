---
title: Blackboard và Shared State
---

# Blackboard và Shared State

Khi nhiều agent cùng làm một task, câu hỏi khó nhất không phải là “agent nào thông minh hơn”. Câu hỏi khó hơn là: chúng nhìn cùng một sự thật hay mỗi agent đang sống trong một phiên bản thế giới khác nhau? Shared state là câu trả lời cho vấn đề đó.

Blackboard architecture là một pattern lâu đời trong AI và distributed problem solving. Các thành phần chuyên môn không nói chuyện trực tiếp quá nhiều với nhau. Thay vào đó, chúng đọc và ghi vào một bảng trạng thái chung. Bảng này chứa goal, hypotheses, artifact, decision, blocker và evidence. Với multi-agent systems hiện đại, blackboard giúp giảm mất context và giảm coordination bằng hội thoại tự do.

## Vì sao cần shared state

Nếu planner gửi task cho coder, coder sửa file, reviewer lại đọc context cũ, reviewer có thể đánh giá sai. Nếu tester chạy test fail nhưng không ghi rõ failure artifact, coder phải đoán. Nếu researcher tìm được nguồn đáng tin nhưng synthesizer không thấy, kết luận cuối cùng yếu đi.

Shared state tạo một nơi để các agent đồng bộ:

| Loại state | Ví dụ |
|---|---|
| Goal state | Mục tiêu, acceptance criteria, non-goals |
| Work state | Task đang chạy, owner, status |
| Artifact state | File, diff, report, trace, test result |
| Decision state | Quyết định đã chốt và lý do |
| Risk state | Blocker, uncertainty, security concern |

## Blackboard không phải log thô

Một lỗi thường gặp là xem blackboard như transcript chat. Transcript quá dài và nhiều nhiễu. Blackboard nên là state đã được cấu trúc hóa. Agent có thể ghi summary, evidence và link tới artifact, nhưng không nên đổ toàn bộ reasoning dài vào đó.

Một entry tốt có dạng:

```yaml
id: finding-017
type: security-risk
owner: reviewer-agent
status: open
summary: Tool output from untrusted issue comment is being treated as instruction.
evidence:
  - docs/agent-runtime.md:42
recommendation: Label issue comments as untrusted observations before passing to planner.
created_at: 2026-05-25T10:00:00Z
```

## Concurrency và conflict

Shared state cũng tạo vấn đề mới: conflict. Hai agent có thể cùng sửa một artifact hoặc ghi quyết định trái ngược. Vì vậy, blackboard cần rule: ai được ghi gì, artifact nào immutable, decision nào cần approval, và conflict được resolve ra sao.

Một rule đơn giản là: artifact raw không sửa, chỉ append. Decision cần owner. Task status chỉ owner được update. Final integrator chịu trách nhiệm hợp nhất.

## Khi nào không cần blackboard

Nếu task nhỏ và chỉ có một agent, blackboard là overhead. Nếu workflow tuyến tính rõ ràng, state trong workflow engine có thể đủ. Blackboard hữu ích nhất khi nhiều role chạy song song, task kéo dài hoặc cần audit sau này.

## Kết luận

Multi-agent systems không thất bại vì thiếu agent. Chúng thường thất bại vì thiếu shared reality. Blackboard là cách biến phối hợp từ hội thoại tự do thành quản lý trạng thái có cấu trúc.
