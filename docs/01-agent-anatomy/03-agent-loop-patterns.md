---
title: Các pattern vòng lặp Agent
---

# Các pattern vòng lặp Agent

Agent loop là trái tim của agentic system. Nó quyết định agent suy nghĩ một lần rồi làm, hay liên tục quan sát và điều chỉnh. Không có loop đúng cho mọi bài toán. Mỗi pattern có ưu điểm, chi phí và failure mode riêng.

## ReAct

ReAct kết hợp reasoning và acting. Agent suy nghĩ, chọn tool, quan sát kết quả, rồi suy nghĩ tiếp. Pattern này phù hợp với task cần khám phá từng bước như debug, tra cứu repo hoặc phân tích dữ liệu. Rủi ro là loop có thể dài, tốn cost và lặp lại nếu không có tiêu chí dừng rõ.

## Plan and execute

Agent lập kế hoạch trước, sau đó thực thi từng bước. Pattern này phù hợp với task có cấu trúc rõ như migration, refactor hoặc viết tài liệu theo outline. Rủi ro là kế hoạch ban đầu có thể sai khi observation mới xuất hiện. Vì vậy cần checkpoint để replan.

## Evaluator optimizer

Một agent tạo output, agent hoặc module khác đánh giá, rồi output được cải thiện. Pattern này phù hợp với viết nội dung, sinh code, review PR và prompt optimization. Rủi ro là evaluator cũng có thể sai hoặc chỉ thích output trông hợp lý.

## Workflow graph

Thay vì loop tự do, workflow graph giới hạn agent trong các node và transition rõ ràng. Pattern này phù hợp production vì dễ audit và test hơn. Đổi lại, nó kém linh hoạt hơn agent tự do.

## Chọn pattern

| Task | Pattern nên dùng | Lý do |
|---|---|---|
| Debug lỗi chưa rõ nguyên nhân | ReAct | Cần quan sát dần |
| Viết tài liệu theo outline | Plan and execute | Có cấu trúc rõ |
| Review code | Evaluator optimizer | Cần phản biện |
| Quy trình enterprise | Workflow graph | Cần audit và policy |

## So sánh sâu các pattern

Bốn pattern trên không loại trừ nhau. Hệ thống thực tế thường kết hợp: workflow graph làm khung, ReAct chạy trong từng node, evaluator optimizer chạy trên artifact cuối. Bảng dưới đây phân tích trade-off ở mức quyết định kiến trúc.

| Trục so sánh | ReAct | Plan and execute | Evaluator optimizer | Workflow graph |
|---|---|---|---|---|
| Độ linh hoạt | Cao | Trung bình | Trung bình | Thấp |
| Khả năng audit | Trung bình | Cao | Trung bình | Cao |
| Latency điển hình | Trung bình tới cao | Trung bình | Cao | Thấp tới trung bình |
| Cost token | Trung bình tới cao | Trung bình | Cao | Thấp tới trung bình |
| Phù hợp production | Cần kiểm soát | Cần checkpoint | Cần budget rõ | Phù hợp cao |
| Failure mode đặc trưng | Loop không hội tụ | Plan lệch observation | Critic đồng ý sai | Cứng nhắc khi yêu cầu mới |

## Khi nào kết hợp

Một kết hợp thực dụng cho coding agent là workflow graph làm khung, ReAct trong node debugging, plan-and-execute cho refactor, evaluator-optimizer cho draft document hoặc PR description. Mỗi node có trace riêng và policy riêng. Sự kết hợp này giữ được khả năng audit của workflow graph mà vẫn cho phép linh hoạt khi task cần.

## Anti-patterns

- Dùng ReAct cho task có outline rõ, dẫn tới loop dài không cần thiết.
- Dùng plan-and-execute cho task khám phá, dẫn tới plan ban đầu sai mà không replan.
- Đặt critic dùng cùng model và cùng prompt như writer trong evaluator-optimizer.
- Workflow graph với node quá nhỏ, biến mọi quyết định thành transition, tăng overhead mà không tăng kiểm soát.
