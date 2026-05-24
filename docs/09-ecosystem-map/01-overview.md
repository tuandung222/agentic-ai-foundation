---
title: Tổng quan Ecosystem Map
---

# Tổng quan Ecosystem Map

Ecosystem agent thay đổi nhanh, nên cần bản đồ khái niệm thay vì chỉ danh sách công cụ. Câu hỏi quan trọng là một thứ thuộc loại gì: protocol, convention, framework, runtime, product feature hay marketing label.

## Phân loại

| Loại | Ví dụ | Mục đích |
|---|---|---|
| Protocol | MCP, A2A, ACP | Chuẩn giao tiếp |
| Convention | `AGENT.md`, `CLAUDE.md` | Hướng dẫn repo hoặc agent |
| Framework | LangGraph, AutoGen, CrewAI | Xây workflow hoặc multi-agent |
| Product feature | IDE agent mode, team mode | Trải nghiệm người dùng |
| Evaluation platform | trace eval, observability tools | Đo và debug |

## Cách đọc ecosystem

Đừng hỏi “tool nào thắng”. Hãy hỏi “boundary nào đang được chuẩn hóa”. MCP chuẩn hóa tool context. A2A và ACP thử chuẩn hóa giao tiếp agent. Frameworks chuẩn hóa cách viết workflow. IDE agents chuẩn hóa developer experience.

## Nguyên tắc

Thứ càng gần protocol càng cần ổn định. Thứ càng gần product feature càng có thể đổi nhanh. Khi xây hệ thống dài hạn, nên phụ thuộc vào abstraction bền hơn và cô lập phần vendor-specific.
