---
title: Course Syllabus
---

# Course Syllabus

Syllabus này biến cuốn sách thành một lộ trình học có thể dùng cho workshop, self-study hoặc chương trình đào tạo nội bộ. Mục tiêu không phải học thuộc tên framework, mà là hình thành năng lực thiết kế agentic systems có boundary, evaluation và governance.

## Learning outcomes

Sau khóa học, người học nên có khả năng:

- Phân biệt LLM, assistant, agent và agentic system.
- Thiết kế context strategy cho repo hoặc workflow thật.
- Mô tả anatomy của agent gồm planner, executor, memory, tools và evaluator.
- Thiết kế tool schema và MCP server ở mức an toàn cơ bản.
- Phân tích trade-off giữa workflow nội bộ, A2A và ACP.
- Xây trace-based evals và failure taxonomy.
- Threat model agentic system có tool và dữ liệu không tin cậy.
- Lập adoption roadmap và production readiness checklist.

## Lộ trình 8 tuần

| Tuần | Chủ đề | Bài đọc | Bài tập |
|---|---|---|---|
| 1 | Mental model | Phần 0 | Viết bản đồ khái niệm agentic system |
| 2 | Anatomy và context | Phần 1, Phần 2 | Viết `AGENT.md` cho một repo |
| 3 | MCP và tool design | Phần 3 | Thiết kế tool card cho một capability |
| 4 | A2A và multi-agent | Phần 4, Phần 5 | Thiết kế handoff packet |
| 5 | Agent-ready repository | Phần 6 | Audit repo bằng checklist |
| 6 | Evaluation | Phần 7 | Tạo 5 eval task cards |
| 7 | Security và governance | Phần 8 | Threat model một workflow agent |
| 8 | Production operations | Phần 11 | Viết rollout và incident runbook |

## Đánh giá đề xuất

Người học nên được đánh giá bằng artifact, không chỉ bằng câu trả lời lý thuyết. Artifact có thể gồm agent design brief, tool card, eval task bank, governance policy và capstone report. Mỗi artifact cần có evidence, trade-off và failure analysis.

## Tiêu chí hoàn thành

Một người hoàn thành khóa học không cần biết mọi framework mới nhất. Họ cần biết cách đặt câu hỏi đúng: agent thấy dữ liệu nào, được phép gọi tool nào, state nằm ở đâu, eval đo gì, prompt injection được chặn thế nào, và rollback diễn ra ra sao.

## Phiên bản 12 tuần

Khi nhóm học có thời lượng dài hơn hoặc cần đào tạo chuyên sâu cho team triển khai, hãy chọn `resources/course-syllabus-12-weeks`. Phiên bản này tổ chức theo 6 module và bổ sung memory architectures, ADW, cost model, HITL và time-travel.
