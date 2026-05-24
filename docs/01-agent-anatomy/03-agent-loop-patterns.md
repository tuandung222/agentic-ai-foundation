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
