---
title: Learning Paths
---

# Learning Paths

Không phải người đọc nào cũng cần đi qua cuốn sách theo cùng một đường. Một kỹ sư đang làm coding agent cần lộ trình khác một architect đang đánh giá enterprise rollout. Trang này đề xuất các learning paths để người đọc chọn thứ tự phù hợp với mục tiêu hiện tại.

## Lộ trình 1: Nền tảng Agentic Engineering

Lộ trình này dành cho người mới bắt đầu hoặc người muốn xây một mental model bền. Hãy đọc theo thứ tự:

1. Phần 0: Mental Model.
2. Phần 1: Anatomy của Agent.
3. Phần 2: Context Engineering.
4. Phần 3: MCP và Tool Protocols.
5. Phần 7: Evaluation và Observability.
6. Phần 8: Security và Governance.

Sau lộ trình này, người đọc nên trả lời được: agent khác assistant ở đâu, vì sao context là một phần của thiết kế hệ thống, tool protocol giải quyết vấn đề gì, và vì sao eval phải quan sát cả trace.

## Lộ trình 2: Coding Agent và Agent-ready Repository

Lộ trình này dành cho người muốn dùng agent trong repo phần mềm thật.

1. Phần 2: Context Engineering.
2. Phần 6: Agent-ready Repository.
3. Phần 1: Anatomy của Agent.
4. Phần 7: Debugging Agent Runs.
5. Case Study: Coding Agent.

Bài tập khuyến nghị là chọn một repo thật, viết instruction file, liệt kê safe commands, xác định vùng không được sửa, rồi chạy một task nhỏ có test rõ ràng.

## Lộ trình 3: MCP và Tool Ecosystem

Lộ trình này dành cho người muốn expose tool hoặc tích hợp agent với hệ thống hiện có.

1. Tổng quan MCP.
2. Kiến trúc MCP.
3. Thiết kế Tool cho Agent.
4. Security Model của MCP.
5. Thiết kế một MCP Server tốt.
6. Permission Model cho Agent.

Sau lộ trình này, người đọc nên biết cách phân biệt tool read-only và tool có side effect, viết schema rõ, thiết kế dry-run, và đặt approval gate cho hành động rủi ro.

## Lộ trình 4: Multi-agent và Interoperability

Lộ trình này dành cho người quan tâm tới A2A, ACP, swarm và team modes.

1. Phần 4: A2A và ACP.
2. Handoff và Delegation.
3. Identity, State và Contract trong A2A.
4. Phần 5: Multi-agent và Swarm.
5. Blackboard và Shared State.
6. Failure Modes của Multi-agent.

Nguyên tắc quan trọng là không bắt đầu bằng “thêm nhiều agent”. Hãy bắt đầu bằng artifact boundary: mỗi agent tạo ra artifact gì, ai review, state nằm ở đâu và khi nào dừng.

## Lộ trình 5: Enterprise Security và Governance

Lộ trình này dành cho tech lead, security engineer hoặc platform owner.

1. Security và Governance overview.
2. Threat Model.
3. Governance Controls.
4. Prompt Injection Defense.
5. Permission Model.
6. Evaluation Harness.
7. Enterprise Agent case study.

Sau lộ trình này, người đọc nên có checklist để đánh giá agent rollout: identity, least privilege, audit, approval, redaction, trace retention, rollback và release gate.

## Lộ trình 6: Production Operations

Lộ trình này dành cho người chuẩn bị đưa agent vào môi trường vận hành thật.

1. Evaluation Harness.
2. Governance Controls.
3. Tổng quan Production Operations.
4. Runtime Architecture cho Production Agent.
5. Cost, Latency và Reliability.
6. Release và Rollout cho Agent.
7. Incident Response cho Agentic Systems.

Sau lộ trình này, người đọc nên có khả năng thiết kế release gate, canary rollout, trace strategy, incident runbook và ownership model cho agent production.
