---
title: Platforms và Frameworks
---

# Platforms và Frameworks

Khi nhìn vào ecosystem agent, ta dễ bị ngợp bởi tên nền tảng, framework, IDE agent, orchestration library, MCP server và evaluation tool. Cách tiếp cận tốt hơn là phân loại theo trách nhiệm. Một công cụ đáng giá không phải vì nó có nhiều tính năng, mà vì nó giải quyết rõ một lớp vấn đề trong agentic system.

## Các nhóm công cụ

| Nhóm | Vai trò | Câu hỏi đánh giá |
|---|---|---|
| IDE agents | Hỗ trợ coding trong repo | Repo awareness, diff quality, test integration |
| Agent frameworks | Xây runtime, planner, tool loop | State, retry, tool abstraction, extensibility |
| Workflow engines | Điều phối node nhiều bước | Determinism, observability, recovery |
| Tool protocols | Kết nối tool và data | Schema, permission, interoperability |
| Evaluation platforms | Chạy và chấm agent runs | Trace, rubric, regression, reporting |
| Governance platforms | Quản lý quyền và audit | Identity, approval, redaction, policy enforcement |

Một dự án có thể dùng nhiều nhóm. Ví dụ, coding workflow có IDE agent, MCP server cho issue tracker, và eval harness nội bộ. Enterprise workflow có thể cần workflow engine, policy layer và audit platform.

## Framework không thay thế thiết kế

Một framework có thể giúp tạo agent loop, nhưng không tự biết boundary nghiệp vụ của bạn. Nó không biết dữ liệu nào nhạy cảm, tool nào nguy hiểm, approval nào cần người thật, hay test nào chứng minh task hoàn thành. Những điều đó thuộc về system design.

Vì vậy, khi chọn framework, hãy hỏi: nó làm rõ state hơn không, tool schema có dễ kiểm soát không, trace có đủ không, permission có thể enforce không, và có thể rời bỏ nếu cần không.

## Tiêu chí chọn công cụ

- **Fit với use case:** exploration, coding, enterprise workflow hay research.
- **Observability:** có trace và debug tooling không.
- **Control:** có timeout, retry, approval, permission hook không.
- **Portability:** artifact và trace có phụ thuộc vendor quá nhiều không.
- **Security:** tool output, secret, audit và data boundary xử lý ra sao.
- **Ecosystem:** có cộng đồng, documentation, versioning ổn định không.

## Kết luận

Đừng chọn platform vì danh sách tính năng dài. Hãy chọn vì nó làm boundary của hệ thống rõ hơn. Agentic Engineering trưởng thành là khi framework phục vụ thiết kế, không thay thế thiết kế.
