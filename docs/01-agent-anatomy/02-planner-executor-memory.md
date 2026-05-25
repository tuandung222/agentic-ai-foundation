---
title: Planner, Executor và Memory
---

# Planner, Executor và Memory

Planner, executor và memory là ba thành phần thường bị trộn lẫn trong cách nói về agent. Nhưng tách chúng ra giúp ta hiểu agent thất bại ở đâu. Planner quyết định làm gì và theo thứ tự nào. Executor thực hiện hành động cụ thể. Memory cung cấp thông tin được giữ lại qua thời gian. Ba phần này có trách nhiệm khác nhau và cần control khác nhau.

## Planner

Planner biến mục tiêu thành chiến lược. Với task đơn giản, plan có thể chỉ là một vài bước. Với task phức tạp, planner phải chia nhỏ, chọn tool, xác định dependency, dự đoán rủi ro và biết khi nào cần hỏi lại. Planner tốt không phải planner tạo kế hoạch dài nhất. Planner tốt là planner tạo kế hoạch đủ rõ để hành động và đủ linh hoạt để sửa khi observation thay đổi.

Planner thường fail theo ba cách. Một là hiểu sai goal. Hai là chia bước sai thứ tự. Ba là quá tự tin khi task mơ hồ. Cách giảm lỗi là yêu cầu planner nêu assumptions, constraints và điều kiện dừng.

## Executor

Executor biến kế hoạch thành hành động cụ thể. Nó gọi tool, đọc output, sửa file và xử lý lỗi. Executor tốt cần biết side effect. Đọc file là hành động an toàn hơn xóa file. Chạy test an toàn hơn deploy. Ghi dữ liệu nhạy cảm vào log là không được phép.

Executor cần tool schema rõ và error rõ. Nếu tool output mơ hồ, executor sẽ đoán. Nếu tool có side effect nhưng không có dry-run, executor khó kiểm soát rủi ro. Vì vậy, executor quality phụ thuộc rất nhiều vào tool design.

## Memory

Memory là thông tin được giữ qua phiên làm việc. Nó có thể giúp agent nhớ preference, quyết định kiến trúc hoặc thông tin repo. Nhưng memory cũng có thể gây lỗi nếu sai, cũ hoặc áp dụng nhầm phạm vi. Memory không nên được xem như sự thật tuyệt đối. Nó là dữ liệu cần provenance.

Memory tốt nên có:

- Nguồn gốc.
- Thời điểm tạo.
- Phạm vi áp dụng.
- Mức tin cậy.
- Điều kiện hết hạn hoặc cần xác minh lại.

## Vòng phối hợp

Planner dùng context và memory để lập kế hoạch. Executor hành động và tạo observation. Observation cập nhật state. Planner sửa kế hoạch. Memory chỉ nên được cập nhật khi có thông tin có giá trị lâu dài, không phải mọi chi tiết tạm thời.

## Kết luận

Planner, executor và memory là ba trách nhiệm khác nhau. Khi agent sai, hãy hỏi: plan sai, action sai hay memory sai? Câu hỏi này giúp sửa đúng chỗ thay vì chỉ thêm prompt chung chung.
