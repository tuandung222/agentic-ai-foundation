---
title: Planner, Executor và Memory
---

# Planner, Executor và Memory

Ba thành phần planner, executor và memory quyết định phần lớn hành vi của agent. Planner trả lời “nên làm gì”. Executor trả lời “làm bước đó như thế nào”. Memory trả lời “thông tin nào từ quá khứ còn đáng dùng”.

## Planner

Planner tạo cấu trúc cho task. Với một yêu cầu như “thêm OAuth vào ứng dụng”, planner phải tách thành đọc kiến trúc hiện tại, xác định luồng auth, sửa backend, sửa frontend, thêm tests, cập nhật docs và chạy verification. Planner tốt không chỉ liệt kê bước, mà còn biết dependency và điểm cần hỏi lại.

Planner kém thường có ba lỗi: chia bước quá nhỏ, chia bước quá mơ hồ, hoặc bỏ qua bước verify. Trong coding agent, lỗi planner dễ dẫn tới sửa nhiều file nhưng không có kiểm chứng cuối cùng.

## Executor

Executor biến kế hoạch thành hành động cụ thể. Nó gọi tool, đọc output, sửa file và xử lý lỗi. Executor tốt cần biết side effect. Đọc file là hành động an toàn hơn xóa file. Chạy test an toàn hơn deploy. Ghi secrets vào log là không được phép.

## Memory

Memory không chỉ là “nhớ càng nhiều càng tốt”. Memory cần policy: thông tin nào ổn định, thông tin nào tạm thời, thông tin nào hết hạn, thông tin nào do người dùng xác nhận. Một memory sai có thể nguy hiểm hơn không có memory, vì agent dùng nó như sự thật.

## Nguyên tắc thiết kế

- **Planner phải nhìn toàn cục, executor phải nhìn chi tiết.**
- **Memory phải có nguồn gốc và phạm vi.**
- **Mọi hành động có side effect cần trace.**
- **Kế hoạch phải bao gồm bước kiểm chứng.**
