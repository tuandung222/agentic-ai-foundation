---
title: Case Study Coding Agent
---

# Case Study Coding Agent

Coding agent là ví dụ gần gũi nhất của Agentic Engineering. Nó đọc repo, hiểu yêu cầu, sửa file, chạy test, phân tích lỗi và tạo summary. Nhìn bề ngoài, đây có vẻ chỉ là “LLM biết code”. Nhưng nếu phân tích kỹ, coding agent là một hệ thống agentic đầy đủ: có context engineering, tool use, state, eval, permission và human review.

## Mục tiêu

Một coding agent tốt không chỉ tạo code chạy được. Nó phải sửa đúng root cause, giữ scope nhỏ, tuân thủ convention, không làm hỏng API, chạy verification phù hợp và báo cáo rủi ro còn lại. Nếu agent tạo diff lớn nhưng không giải thích được vì sao, reviewer vẫn phải làm lại phần lớn công việc.

## Context cần thiết

Coding agent cần nhiều lớp context:

| Context | Ví dụ |
|---|---|
| Task | issue, bug report, acceptance criteria |
| Repo map | thư mục chính, entry points, architecture notes |
| Commands | build, test, typecheck, lint |
| Conventions | style, naming, error handling, API patterns |
| Current state | git diff, failing test, stack trace |
| Constraints | file không sửa, public API không đổi, cần approval |

Thiếu command test là một lỗi rất thực tế. Agent có thể sửa code nhưng không biết verify. Thiếu architecture notes cũng làm agent sửa ở lớp sai, ví dụ vá UI thay vì sửa domain logic.

## Tool boundary

Coding agent thường cần đọc file, search code, edit file và chạy command. Không phải command nào cũng an toàn. `npm run build` thường an toàn. Xóa database local, deploy production hoặc rewrite git history thì cần approval. Tool boundary phải được mô tả rõ trong instruction file và enforce bởi runtime khi có thể.

## Workflow đề xuất

Một coding workflow tối thiểu:

1. Hiểu task và constraint.
2. Tìm entry point và test liên quan.
3. Xác định root cause.
4. Sửa diff nhỏ.
5. Chạy test hoặc build phù hợp.
6. Review diff.
7. Báo cáo thay đổi, verification và rủi ro.

Workflow này nghe đơn giản, nhưng nhiều agent fail vì bỏ qua bước 2 hoặc 5. Agent giỏi không phải agent sửa ngay, mà là agent biết quan sát trước khi hành động.

## Failure modes

- Sửa symptom thay vì root cause.
- Đổi quá nhiều file ngoài scope.
- Không chạy test dù có command rõ.
- Bỏ qua failing test output.
- Tạo code không theo convention.
- Lộ dữ liệu nhạy cảm trong log hoặc commit.
- Báo cáo “đã xong” nhưng không có evidence.

## Evaluation

Coding agent nên được eval bằng task suite có repo fixture. Mỗi task có bug, expected behavior và test. Chấm không chỉ test pass, mà còn diff size, scope discipline, code quality và final report. Một agent pass khi sửa đúng, verify đúng và giao tiếp rõ.

## Kết luận

Coding agent là bài học lớn cho mọi agentic system: môi trường càng rõ, agent càng mạnh. Repo có instruction, command, test và boundary tốt sẽ giúp cùng một model tạo kết quả đáng tin hơn nhiều.
