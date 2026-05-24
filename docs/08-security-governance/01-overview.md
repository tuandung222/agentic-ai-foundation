---
title: Tổng quan Security và Governance
---

# Tổng quan Security và Governance

Agent càng có nhiều tool thì càng có nhiều attack surface. Một chatbot trả lời sai có thể gây hiểu lầm. Một agent có quyền ghi file, gửi email hoặc gọi production API có thể gây thiệt hại thật. Vì vậy security và governance phải là phần lõi của Agentic Engineering.

## Rủi ro chính

- **Prompt injection:** dữ liệu không tin cậy cố gắng điều khiển agent.
- **Tool injection:** output từ tool gợi ý agent gọi tool khác nguy hiểm.
- **Data exfiltration:** agent vô tình đưa dữ liệu nhạy cảm ra ngoài.
- **Confused deputy:** agent dùng quyền của mình để làm việc mà nguồn không đáng tin yêu cầu.
- **Over-permission:** tool hoặc MCP server có quyền rộng hơn cần thiết.

## Governance

Governance không chỉ là policy giấy. Nó cần được encode vào runtime: permission, approval flow, audit log, ownership, rollback và incident response.

## Nguyên tắc tối thiểu

- Least privilege cho tool và server.
- Human approval cho side effect lớn.
- Audit log cho mọi hành động quan trọng.
- Redaction cho secrets và dữ liệu nhạy cảm.
- Eval riêng cho security-sensitive tasks.
