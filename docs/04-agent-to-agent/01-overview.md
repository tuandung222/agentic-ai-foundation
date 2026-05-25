---
title: Tổng quan A2A và ACP
---

# Tổng quan A2A và ACP

Khi một agent có thể dùng tool, bước tiếp theo tự nhiên là hỏi: nhiều agent có thể phối hợp với nhau không? Một agent chuyên research, một agent chuyên code, một agent chuyên review security, một agent chuyên operations. Ý tưởng này hấp dẫn, nhưng để phối hợp được, agent cần nhiều hơn là chat tự do. Chúng cần contract.

A2A, hay agent-to-agent communication, là nhóm ý tưởng và protocol giúp agent giao tiếp, handoff task, chia sẻ state hoặc gọi capability của nhau. ACP, tùy ecosystem, thường nhấn mạnh contract giữa client, agent và runtime. Dù tên gọi khác nhau, câu hỏi kỹ thuật cốt lõi giống nhau: agent này là ai, có capability gì, nhận task theo schema nào, trả artifact gì, và ai chịu trách nhiệm cuối cùng.

## Vì sao cần agent-to-agent

Agent-to-agent hữu ích khi task cần chuyên môn hóa hoặc interoperability. Ví dụ, một planning agent có thể giao security review cho agent khác. Một enterprise platform có thể gọi agent từ nhiều vendor. Một workflow lớn có thể tách researcher, synthesizer và critic.

Tuy nhiên, nếu các role cùng nằm trong một runtime và workflow graph đã đủ rõ, không nhất thiết cần protocol A2A riêng. Protocol thêm flexibility nhưng cũng thêm auth, state, error handling và governance.

## Các khái niệm cần có

| Khái niệm | Câu hỏi |
|---|---|
| Identity | Agent nào đang nói và đại diện cho ai? |
| Capability | Agent này làm được gì và không làm gì? |
| Task contract | Input, constraint và expected artifact là gì? |
| State | Task đang ở trạng thái nào? |
| Handoff | Khi chuyển task, context nào đi kèm? |
| Accountability | Ai chịu trách nhiệm cuối cùng? |

Nếu thiếu các yếu tố này, nhiều agent có thể tạo ra ảo giác phối hợp: chúng trao đổi nhiều nhưng artifact cuối khó kiểm chứng.

## A2A không thay thế workflow design

A2A là cơ chế giao tiếp. Nó không tự quyết định role decomposition, artifact boundary, permission model hay eval rubric. Trước khi chọn A2A, hãy thiết kế workflow: role nào cần có, mỗi role tạo artifact gì, state nằm ở đâu, failure được xử lý thế nào. Sau đó mới hỏi protocol nào phù hợp.

## Kết luận

A2A và ACP là mảnh ghép quan trọng trong tương lai interoperability của agent. Nhưng bản chất engineering vẫn là contract: identity rõ, capability rõ, state rõ, artifact rõ và trách nhiệm rõ. Nếu không có những thứ đó, nhiều agent chỉ là nhiều nguồn mơ hồ hơn.
