---
title: Trace-based Evals
---

# Trace-based Evals

Nếu chỉ nhìn final answer, ta đang đánh giá agent giống như chấm một bài toán chỉ xem đáp số cuối. Nhưng trong agentic systems, quá trình giải quan trọng không kém đáp số. Một agent có thể trả lời đúng nhờ may mắn, gọi thừa tool, bỏ qua warning, hoặc chạm vào dữ liệu không được phép. Ngược lại, một agent có thể không hoàn thành nhưng dừng đúng vì phát hiện thiếu quyền. Trace-based evals giúp ta nhìn thấy những điều đó.

Trace là bản ghi có cấu trúc của một agent run: mục tiêu ban đầu, context đã dùng, plan, tool calls, observations, lỗi, retry, approval, artifact tạo ra và final response. Trace không phải transcript thô. Transcript cho biết mọi câu chữ. Trace tốt cho biết những sự kiện có ý nghĩa để debug và chấm điểm.

## Trace nên chứa gì

Một trace tối thiểu nên có các trường sau:

| Thành phần | Ý nghĩa |
|---|---|
| Goal | Agent được yêu cầu làm gì |
| Context refs | Agent đã dùng file, doc, issue, memory nào |
| Plan steps | Các bước dự kiến hoặc cập nhật kế hoạch |
| Tool calls | Tool name, input đã redacted, thời điểm gọi |
| Observations | Output quan trọng, warning, error |
| Decisions | Vì sao agent đổi hướng hoặc dừng |
| Verification | Test, build, check hoặc human review |
| Outcome | success, partial, blocked, failed, unsafe |

Điểm quan trọng là trace phải đủ để người review tái hiện lý do agent hành động, nhưng không nên lưu dữ liệu không cần thiết. Trace quá nghèo không debug được. Trace quá đầy có thể rò rỉ thông tin và khó phân tích.

## Từ trace tới eval

Trace-based evals thường đi qua bốn bước. Bước một là chọn task chuẩn. Bước hai là chạy agent trong môi trường có kiểm soát. Bước ba là thu trace và artifact. Bước bốn là chấm bằng rubric. Với coding agent, artifact có thể là diff và test result. Với research agent, artifact là evidence table và synthesis. Với enterprise agent, artifact còn gồm approval record và audit log.

Một task eval tốt nên có expected behavior rõ. Không nhất thiết phải có một output duy nhất, nhưng phải có tiêu chí chấm. Ví dụ, task “sửa bug validation email” có thể chấm bằng test pass, diff đúng scope và không đổi public API. Task “nghiên cứu protocol MCP” có thể chấm bằng nguồn trích dẫn, phân biệt fact và inference, và không làm theo instruction nằm trong nguồn không tin cậy.

## Chấm quá trình

Trace cho phép chấm các điểm mà final answer che khuất:

- Agent có đọc đúng file không.
- Agent có gọi tool đúng thứ tự không.
- Agent có hiểu lỗi tool không.
- Agent có retry vô hạn không.
- Agent có chạy verification phù hợp không.
- Agent có xin approval khi cần không.
- Agent có đưa dữ liệu không tin cậy vào instruction layer không.

Những tiêu chí này rất quan trọng trong production. Một agent trả lời đúng nhưng bypass approval là không đạt. Một agent không sửa được lỗi nhưng báo rõ blocker và không đoán mò có thể được chấm blocked-correctly.

## Tạo golden set từ trace

Sau một thời gian vận hành, các trace thật có thể trở thành nguồn tạo golden tasks. Ta chọn những task đại diện, loại bỏ dữ liệu nhạy cảm, giữ lại setup và expected behavior. Golden set nên có task dễ, task khó, task mơ hồ, task tool failure và task security-sensitive.

Không nên chỉ chọn task agent đã từng làm tốt. Nếu golden set quá dễ, mỗi thay đổi đều có vẻ tốt. Nếu golden set chỉ chứa task cũ, agent có thể overfit vào quy trình hẹp. Golden set cần được cập nhật có kiểm soát.

## Cẩn trọng

Trace có thể chứa dữ liệu nhạy cảm. Trước khi lưu hoặc chia sẻ, cần redaction. Cũng cần retention policy: trace giữ bao lâu, ai được xem, có chứa prompt đầy đủ không, tool input nào bị mask. Observability không được trở thành nguồn rò rỉ mới.

## Kết luận

Trace-based evals biến agent evaluation từ cảm giác thành phân tích có evidence. Nó giúp team thấy agent thất bại ở context, planning, tool use, verification hay policy. Khi có trace tốt, mỗi lần cải tiến agent không chỉ là “có vẻ tốt hơn”, mà là tốt hơn theo task, metric và failure taxonomy cụ thể.
