---
title: Tổng quan Agent-ready Repository
---

# Tổng quan Agent-ready Repository

Một repo agent-ready là repo mà agent có thể hiểu nhanh, sửa đúng chỗ, chạy kiểm chứng và báo cáo rõ ràng. Đây không phải là repo viết riêng cho AI. Đây là repo có developer experience tốt đến mức cả con người và agent đều ít đoán mò hơn.

Coding agent thường thất bại vì repo không nói rõ cách làm việc. Không có test command, không có architecture map, không có convention, docs cũ, script build mơ hồ, hoặc hidden dependency. Khi đó agent phải suy luận từ file tree và dễ sai.

## Thành phần tối thiểu

- **README rỗng nếu cần privacy, nhưng docs nội bộ phải rõ:** trong dự án này README được giữ rỗng theo constraint riêng.
- **AGENT.md:** hướng dẫn chung cho agent.
- **CLAUDE.md hoặc tool-specific instruction:** khác biệt dành cho từng agent platform.
- **Workflows:** quy trình lặp lại như release, generate docs, deploy.
- **Test map:** thay đổi loại nào chạy test nào.
- **Architecture notes:** module chính và boundary.

## Agent-ready không có nghĩa là agent-autonomous tuyệt đối

Repo tốt vẫn phải chỉ rõ hành động nào cần hỏi người dùng. Ví dụ xóa dữ liệu, force push, deploy production, gửi email khách hàng hoặc thay đổi billing. Autonomy cần boundary, không phải quyền vô hạn.
