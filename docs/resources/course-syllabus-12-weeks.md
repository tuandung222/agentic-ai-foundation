---
title: Course Syllabus 12 weeks
---

# Course Syllabus 12 weeks

Phiên bản 12 tuần này phù hợp cho workshop dài, học phần chính khóa hoặc chương trình đào tạo nội bộ chuyên sâu. So với syllabus 8 tuần, phiên bản này dành nhiều thời gian hơn cho protocol, memory, evaluation và safety. Mục tiêu là người học có thể thiết kế và bảo trì một hệ thống agentic ở mức vận hành được.

## Cấu trúc 6 module

| Module | Tuần | Trọng tâm |
|---|---|---|
| 1. Foundation và Lý thuyết Hệ thống | 1, 2 | Mental model, 5 phân hệ chức năng, anatomy của agent |
| 2. Cognitive Patterns | 3, 4 | ReAct, Plan-execute, Reflection, Evaluator-Optimizer |
| 3. Protocols và Tool Ecosystem | 5, 6 | MCP, AGENTS.md, A2A, ACP, stateless protocol |
| 4. Memory và Document Workflows | 7, 8 | Memory architectures, semantic offload, ADW |
| 5. Multi-agent và Production Ops | 9, 10 | Supervisor, editorial, runtime architecture, cost model, MLOps |
| 6. Safety, Evaluation và Governance | 11, 12 | Eval harness, LLM-as-judge, HITL, time-travel, rollout |

## Chi tiết theo tuần

| Tuần | Chủ đề | Bài đọc cốt lõi | Bài tập |
|---|---|---|---|
| 1 | Mental model và Agentic Engineering | Phần 0 | Vẽ bản đồ khái niệm cho một use case thực |
| 2 | Năm phân hệ chức năng và Anatomy | Phần 0, Phần 1 | Phân hệ hóa một agent đang có |
| 3 | Context engineering và Structured Reasoning | Phần 2 | Thiết kế schema reasoning Pydantic |
| 4 | Agent loop patterns | Phần 1 | So sánh ReAct, Reflection cho một task |
| 5 | MCP và Tool Design | Phần 3 (1-3) | Viết Tool Card cho 2 capability |
| 6 | Stateless MCP và AGENTS.md | Phần 3 (4-7) | Phác thảo server MCP stateless và `AGENTS.md` cho repo |
| 7 | Memory architectures và ADW | Phần 1 (4), Phần 6 (4) | Thiết kế memory policy cho một workflow |
| 8 | A2A, ACP và Multi-agent foundations | Phần 4, Phần 5 (1-2) | Thiết kế handoff packet |
| 9 | Supervisor và Editorial patterns | Phần 5 (3-5) | Mô phỏng editorial loop cho một artifact |
| 10 | Runtime architecture, MLOps và Cost model | Phần 11 (1-3, 6) | Ước lượng cost theo 2 chiến lược |
| 11 | Eval harness và LLM-as-judge | Phần 7 | Viết 5 eval task card + rubric |
| 12 | Security, Governance, HITL, Time-travel | Phần 8, Phần 11 (4-5) | Viết policy file mẫu và rollout plan |

## Capstone

Người học chọn một trong các capstone ở `resources/capstone-projects` hoặc đề xuất capstone riêng. Yêu cầu artifact gồm agent design brief, tool card, eval task bank, governance policy, rollout plan và incident runbook.

## Đánh giá

| Trục | Tỷ trọng đề xuất |
|---|---|
| Artifact thiết kế (brief, tool card, schema) | 30% |
| Eval suite và rubric | 25% |
| Threat model và governance policy | 20% |
| Cost analysis và rollout plan | 15% |
| Trình bày và phản biện | 10% |

## Khác biệt so với syllabus 8 tuần

| Chủ đề | 8 tuần | 12 tuần |
|---|---|---|
| Cognitive patterns | 1 tuần | 2 tuần với so sánh sâu |
| Protocols | 1 tuần | 2 tuần kèm stateless và `AGENTS.md` |
| Memory và ADW | gộp ngắn | 1 tuần riêng |
| Production ops | 1 tuần | 1 tuần kèm cost model |
| Safety và eval | 2 tuần | 2 tuần với HITL và time-travel |

## Khi nào chọn 12 tuần

Chọn 12 tuần khi nhóm học có nền lập trình ổn, có mục tiêu triển khai thật vào team, hoặc khi có cộng tác viên thực hành cùng. Chọn 8 tuần khi muốn quick overview cho team mới hoặc khi thời lượng workshop hạn chế.
