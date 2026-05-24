---
title: Platforms và Frameworks
---

# Platforms và Frameworks

Các platform như Claude, Cursor, Windsurf, Copilot hoặc Kimi tập trung vào trải nghiệm dùng agent. Các framework như LangGraph, AutoGen, CrewAI hoặc OpenAI Agents SDK tập trung vào xây agentic workflow. Hai nhóm này có giao nhau nhưng không thay thế hoàn toàn cho nhau.

## Platform

Platform thường cung cấp UI, model access, tool integration, memory, workspace awareness và agent mode. Lợi thế là dùng nhanh. Bất lợi là hành vi có thể phụ thuộc sản phẩm và thay đổi theo release.

## Framework

Framework cho phép developer kiểm soát graph, state, node, tool, retry và eval tốt hơn. Lợi thế là production hóa dễ hơn nếu team có kỹ năng engineering. Bất lợi là phải tự thiết kế nhiều thứ mà platform đã làm sẵn.

## Chọn gì

- Dùng platform khi cần tăng năng suất cá nhân hoặc team nhỏ.
- Dùng framework khi cần workflow có audit, custom state và production integration.
- Kết hợp cả hai khi platform hỗ trợ coding còn framework chạy backend agent.
