---
title: Debugging Agent Runs
---

# Debugging Agent Runs

Debug một agent run giống debug một hệ thống phân tán nhỏ. Lỗi có thể nằm ở input, context, planner, tool, permission, network, memory, evaluator hoặc chính cách agent báo cáo. Nếu chỉ đọc final response, ta thường sửa nhầm chỗ. Debug tốt bắt đầu bằng việc tái dựng đường đi của agent.

## Quy trình debug

Bước đầu tiên là xác định outcome thật. Agent đã fail hoàn toàn, đạt một phần, dừng đúng vì thiếu quyền, hay tạo side effect sai? Cùng một final response “không hoàn thành” có thể là thất bại hoặc hành vi an toàn. Vì vậy, cần phân loại trước khi sửa.

Bước thứ hai là đọc trace theo thứ tự thời gian. Hãy xem agent nhận goal gì, context ban đầu gồm gì, plan đầu tiên ra sao, tool nào được gọi, output nào làm agent đổi hướng và bước verification nào được thực hiện. Đừng vội kết luận model kém trước khi kiểm tra context và tool boundary.

Bước thứ ba là tìm điểm lệch đầu tiên. Trong nhiều run, lỗi cuối cùng chỉ là hậu quả. Điểm lệch đầu tiên có thể là agent hiểu sai yêu cầu, bỏ qua file quan trọng, gọi tool sai input, hoặc tin vào output không đáng tin. Sửa điểm lệch đầu tiên thường hiệu quả hơn sửa biểu hiện cuối.

## Failure taxonomy

| Loại lỗi | Dấu hiệu | Cách xử lý |
|---|---|---|
| Context failure | Agent không biết file, command, constraint | Cải thiện instruction, retrieval, repo map |
| Planning failure | Chia bước sai, scope quá rộng | Thêm planning rubric hoặc workflow |
| Tool failure | Tool input sai, output mơ hồ | Sửa schema, description, error code |
| Observation failure | Agent đọc sai output | Chuẩn hóa output, thêm warning rõ |
| Verification failure | Không chạy test hoặc hiểu sai test | Ghi rõ completion checklist |
| Policy failure | Gọi hành động vượt quyền | Thêm permission gate và eval security |
| Communication failure | Báo cáo thiếu evidence | Chuẩn hóa final report format |

## Debug bằng minimal reproduction

Nếu một run fail phức tạp, hãy rút gọn thành minimal reproduction. Giữ lại goal, context tối thiểu và tool output cần thiết. Sau đó chạy lại với cùng setup. Nếu lỗi biến mất khi thêm context, có thể vấn đề là retrieval. Nếu lỗi vẫn còn, có thể nằm ở reasoning pattern, instruction hoặc tool schema.

Minimal reproduction đặc biệt hữu ích khi so sánh hai phiên bản prompt hoặc model. Không có reproduction, team dễ tranh luận bằng cảm giác.

## Quan sát cost và loop

Một agent có thể không sai rõ ràng nhưng vẫn không tốt vì loop quá lâu. Dấu hiệu gồm gọi cùng tool nhiều lần, đọc lại cùng file, đổi plan liên tục hoặc hỏi lại những điều đã có trong context. Đây thường là lỗi state management hoặc stopping condition.

Debug loop cần kiểm tra: agent có biết trạng thái hiện tại không, evaluator có tiêu chí dừng không, tool output có đủ rõ không, và memory có làm agent quay lại giả thuyết cũ không.

## Kết luận

Debug agent run là tìm nguyên nhân trong chuỗi goal, context, plan, action, observation và verification. Khi trace tốt và failure taxonomy rõ, mỗi lỗi trở thành dữ liệu cải tiến. Khi trace nghèo, team chỉ còn đoán.
