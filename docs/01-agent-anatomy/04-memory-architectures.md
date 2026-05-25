---
title: Kiến trúc bộ nhớ cho Agent
---

# Kiến trúc bộ nhớ cho Agent

Khi nói “agent có memory”, ta đang nói nhiều thứ khác nhau. Có memory chỉ tồn tại trong một step, có memory đi qua nhiều turn, có memory tồn tại giữa các phiên, có memory được chia sẻ giữa nhiều agent. Mỗi loại có mục tiêu, cost và rủi ro khác nhau. Thiết kế bộ nhớ tốt là thiết kế đúng loại, không phải có “bộ nhớ vô hạn”.

## Phân loại theo vai trò

| Loại | Phạm vi | Ví dụ nội dung | Câu hỏi thiết kế chính |
|---|---|---|---|
| Working memory | Trong một step | Plan hiện tại, observation gần nhất | Đủ rõ để quyết định bước tiếp không? |
| Episodic memory | Trong một phiên hoặc task | Lịch sử tool call, decision, intermediate artifact | Cắt gọn khi nào, summarize ra sao? |
| Semantic memory | Dài hạn, xuyên phiên | Convention, ràng buộc, kiến thức ổn định | Provenance, scope và expiry là gì? |
| Procedural memory | Dài hạn về cách làm | Skill, workflow, playbook | Khi nào kích hoạt, khi nào không? |
| Shared memory | Giữa nhiều agent | Task board, blackboard, artifact chung | Ai được ghi, ai được đọc, conflict xử lý ra sao? |

Sự phân biệt này quan trọng vì cùng một thông tin có thể vào loại nào tùy mục đích. Một quyết định kiến trúc có thể là semantic memory cho team, episodic memory cho một incident, hoặc procedural memory nếu trở thành workflow chuẩn.

## Vì sao đưa hết vào context window là sai

Cách đơn giản nhất là nhét toàn bộ lịch sử vào prompt. Cách này có ba vấn đề.

Thứ nhất, cost. Mỗi step lặp lại tăng cost gần như tuyến tính với độ dài lịch sử.

Thứ hai, signal-to-noise. Lịch sử dài làm loãng tín hiệu quan trọng. Model có thể bỏ qua chi tiết then chốt hoặc bị ảnh hưởng bởi nội dung không liên quan.

Thứ ba, an toàn. Lịch sử có thể chứa dữ liệu nhạy cảm, tool output không tin cậy hoặc instruction còn sót từ phiên trước. Mỗi lần resend là một lần tăng rủi ro prompt injection.

## Activation-propagation retrieval

Một hướng thiết kế memory dài hạn thay thế cách retrieval vector phẳng là dùng một đồ thị tri thức bên ngoài model, kèm cơ chế lan truyền kích hoạt. Ý tưởng là biểu diễn các thực thể, sự kiện và quyết định thành các nút, các liên hệ thành các cạnh, rồi từ một câu hỏi của task hiện tại, ta kích hoạt một số nút khởi đầu và lan truyền theo các cạnh có trọng số.

Kết quả là một tập nhỏ các nút liên quan nhất được kéo vào context, thay vì danh sách top-k chunk độc lập. Cách này phù hợp khi câu trả lời cần ghép thông tin từ nhiều thực thể có quan hệ, ví dụ tra cứu nguyên nhân lỗi đi qua module, service và sự cố trong quá khứ.

Activation-propagation retrieval không thay thế hoàn toàn vector search. Nó bổ sung cho các truy vấn cần đi qua nhiều bước liên kết.

## Cập nhật và làm sạch memory

Memory cần policy ghi và xóa. Không phải mọi observation nên trở thành memory. Một heuristic an toàn:

- Ghi khi thông tin có giá trị tái dùng và có nguồn rõ.
- Ghi với scope: repo nào, người dùng nào, task class nào.
- Ghi với confidence và provenance.
- Đặt expiry hoặc trigger xác minh lại.
- Xóa khi mâu thuẫn với observation gần nhất và không kiểm chứng được.

Khi không có policy, memory dài hạn dần trở thành nguồn lỗi tích lũy.

## Memory và security

Memory là bề mặt tấn công. Một input độc hại được lưu vào memory có thể quay lại làm instruction trong phiên sau. Vì vậy, tất cả memory đến từ tool output hoặc nội dung không tin cậy nên gắn nhãn nguồn, không được nâng quyền lên thành system instruction. Memory chứa secret phải redaction trước khi lưu. Memory dùng cho nhiều user phải có isolation rõ.

## Bản đồ quyết định nhanh

| Nhu cầu | Loại memory |
|---|---|
| Giữ kế hoạch và observation trong vài bước | Working |
| Hoàn thành task nhiều bước trong một phiên | Episodic |
| Convention ổn định của repo và team | Semantic |
| Năng lực có thể tái dùng | Procedural |
| Phối hợp giữa nhiều agent | Shared |

## Kết luận

Kiến trúc memory tốt là kiến trúc rõ loại, có policy ghi và xóa, có provenance và scope, và không xem context window là kho lưu trữ. Khi memory được thiết kế đúng, agent vừa nhẹ hơn, vừa an toàn hơn, vừa nhất quán hơn qua thời gian.
