---
title: Adoption Roadmap
---

# Adoption Roadmap

Đưa agent vào tổ chức không nên bắt đầu bằng quyền tự động cao. Một roadmap an toàn đi từ quan sát, phân tích, tạo draft, hành động có approval, rồi mới tới tự động trong boundary hẹp. Mục tiêu là tăng năng lực theo bằng chứng, không tăng quyền theo cảm hứng.

## Giai đoạn 1: Observe và Analyze

Ở giai đoạn đầu, agent chỉ đọc dữ liệu đã cho phép và tạo phân tích. Ví dụ: tóm tắt issue, phân tích log, giải thích test failure, đề xuất hướng sửa. Giai đoạn này giúp team học cách viết instruction, thu trace và phân loại failure mà không tạo side effect lớn.

Điều kiện chuyển giai đoạn:

- Có instruction file rõ.
- Có trace cho agent runs.
- Có rubric đánh giá.
- Có danh sách dữ liệu không được đưa vào context.

## Giai đoạn 2: Draft

Agent được tạo artifact nháp: draft PR, draft runbook, draft email, draft ticket. Con người vẫn review trước khi áp dụng. Đây là giai đoạn có giá trị cao vì agent tiết kiệm công soạn thảo nhưng risk vẫn được kiểm soát.

Điều kiện chuyển giai đoạn:

- Draft có format ổn định.
- Human correction rate giảm theo thời gian.
- Agent biết nêu uncertainty.
- Không có vi phạm data boundary trong eval.

## Giai đoạn 3: Act with approval

Agent được phép gọi tool có side effect sau khi có approval. Approval request phải cụ thể: hành động gì, input nào, side effect gì, rollback ra sao. Nếu approval chỉ là một nút “OK” mơ hồ, control này không đủ mạnh.

Điều kiện chuyển giai đoạn:

- Permission model theo tool và input.
- Audit log đầy đủ.
- Dry-run cho hành động quan trọng.
- Có emergency stop.

## Giai đoạn 4: Bounded autonomy

Agent được tự động hành động trong boundary rất hẹp, ví dụ tạo ticket low-risk, cập nhật documentation generated, hoặc chạy remediation trong môi trường staging. Mọi quyền tự động phải có scope, metric và rollback.

Không nên tự động hóa nếu chưa có:

- Regression eval ổn định.
- Security-sensitive evals.
- Monitoring và alert.
- Ownership rõ khi agent sai.
- Quy trình thu hồi quyền.

## Kết luận

Adoption tốt không hỏi “agent có thể làm được gì tối đa”. Nó hỏi “với bằng chứng hiện tại, ta nên cho agent làm gì một cách có trách nhiệm”. Roadmap đúng là roadmap tăng quyền chậm hơn tăng khả năng quan sát và kiểm soát.
