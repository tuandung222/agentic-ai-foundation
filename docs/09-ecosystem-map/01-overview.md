---
title: Tổng quan Ecosystem Map
---

# Tổng quan Ecosystem Map

Ecosystem agentic AI rất rộng: model providers, IDE agents, MCP servers, workflow frameworks, A2A protocols, eval platforms, observability tools, governance products. Nếu nhìn theo danh sách tên, người học rất dễ rối. Ecosystem map giúp ta phân loại theo vai trò thay vì theo độ nổi tiếng.

Một công cụ trong ecosystem thường thuộc một hoặc nhiều nhóm: model layer, runtime layer, context layer, tool protocol layer, orchestration layer, evaluation layer, governance layer. Khi biết công cụ nằm ở layer nào, ta sẽ biết nên đánh giá nó bằng câu hỏi nào.

## Phân loại cốt lõi

| Loại | Vai trò |
|---|---|
| Protocol | Chuẩn giao tiếp hoặc contract giữa thành phần, ví dụ MCP |
| Convention | Quy ước dùng chung, ví dụ instruction files |
| Framework | Thư viện hoặc runtime để xây agent workflow |
| Product feature | Tính năng cụ thể trong IDE, platform hoặc model provider |
| Evaluation platform | Công cụ chạy, chấm và so sánh agent runs |
| Governance layer | Control về identity, permission, audit, approval |

## Vì sao phân loại quan trọng

Nếu nhầm protocol với product, ta có thể phụ thuộc quá nhiều vào một vendor. Nếu nhầm framework với architecture, ta có thể để framework quyết định boundary nghiệp vụ. Nếu nhầm convention với standard ổn định, ta có thể over-engineer quá sớm. Phân loại giúp ta hỏi đúng: cái này có portable không, ai kiểm soát, maturity ra sao, rủi ro lock-in là gì?

## Trục đánh giá ecosystem

- **Maturity:** đã ổn định hay đang thay đổi nhanh.
- **Interoperability:** có implementation độc lập không.
- **Security model:** quyền, data boundary và audit rõ không.
- **Operational fit:** có monitoring, retry, rollback, eval không.
- **Developer experience:** có dễ debug, dễ test, dễ mở rộng không.
- **Exit strategy:** nếu bỏ công cụ này, chi phí chuyển đổi thế nào.

## Kết luận

Ecosystem map không nhằm chọn một công cụ thắng cuộc. Nó giúp ta hiểu công cụ nào giải quyết lớp vấn đề nào, cần boundary nào và nên dùng với mức cam kết ra sao. Trong một ecosystem thay đổi nhanh, khả năng phân loại quan trọng hơn việc nhớ danh sách tên.
