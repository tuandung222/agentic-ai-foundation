---
title: Xây Evaluation Harness cho Agent
---

# Xây Evaluation Harness cho Agent

Evaluation harness là bộ khung chạy, đo và so sánh agent một cách lặp lại. Nếu không có harness, mỗi lần đổi model, prompt, tool hoặc workflow, ta chỉ có thể đánh giá bằng cảm giác. Với agentic systems, cảm giác rất dễ đánh lừa vì output có thể trông hợp lý dù quá trình sai.

Hãy nghĩ evaluation harness như test suite cho agent. Unit test kiểm tra function có trả đúng output không. Agent eval kiểm tra agent có đạt mục tiêu trong môi trường có tool, context và ràng buộc không. Khác biệt là agent eval phải quan sát cả quá trình, không chỉ final answer.

## Thành phần của harness

Một harness tối thiểu cần có:

| Thành phần | Vai trò |
|---|---|
| Task set | Danh sách nhiệm vụ chuẩn |
| Environment fixture | Repo, dữ liệu, tool mock hoặc sandbox |
| Runner | Cách chạy agent nhất quán |
| Trace collector | Lưu plan, tool calls, observation, result |
| Scorer | Chấm pass, fail, partial, unsafe |
| Reporter | So sánh phiên bản và phân tích failure |

Với coding agent, task set có thể là các bug nhỏ trong repo mẫu. Với research agent, task set có thể là câu hỏi cần trích nguồn. Với enterprise agent, task set nên có incident simulation và security-sensitive cases.

## Task design

Task tốt phải có acceptance criteria rõ. “Cải thiện code” là task mơ hồ. “Sửa lỗi validation email sao cho test X pass và không thay đổi public API” là task tốt hơn. Agent càng tự do, task càng cần tiêu chí dừng rõ.

Nên có nhiều loại task:

- **Happy path:** task đơn giản để bắt regression rõ ràng.
- **Ambiguous task:** task cần hỏi lại thay vì đoán.
- **Tool failure task:** tool trả lỗi hoặc timeout.
- **Security task:** dữ liệu chứa prompt injection hoặc yêu cầu vượt quyền.
- **Long task:** cần nhiều bước và checkpoint.

## Scoring

Scoring không nên chỉ là pass/fail. Một agent có thể hoàn thành task nhưng dùng tool không an toàn. Một agent có thể không hoàn thành nhưng dừng đúng và hỏi người dùng, đó là hành vi tốt hơn việc đoán mò.

Một rubric thực dụng:

| Score | Ý nghĩa |
|---|---|
| success | Đạt mục tiêu, đúng constraint, verify được |
| partial | Đạt một phần, còn thiếu rõ ràng |
| blocked-correctly | Không làm tiếp vì thiếu quyền hoặc thiếu thông tin |
| failed | Làm sai hoặc không đạt mục tiêu |
| unsafe | Vi phạm boundary, lộ dữ liệu hoặc side effect sai |

## Regression và release gate

Mỗi thay đổi lớn của agent nên chạy harness. Nếu task success tăng nhưng unsafe cũng tăng, không thể coi là cải thiện. Nếu cost giảm nhưng reliability giảm mạnh, cần quyết định trade-off. Harness giúp biến tranh luận cảm tính thành dữ liệu.

## Kết luận

Evaluation harness là cầu nối giữa demo và production. Nó không loại bỏ hoàn toàn human judgment, nhưng giúp judgment dựa trên trace, task và metric thay vì ấn tượng nhất thời.
