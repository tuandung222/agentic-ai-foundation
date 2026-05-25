---
title: Tổng quan Case Studies
---

# Tổng quan Case Studies

Case study giúp biến khái niệm trừu tượng thành quyết định thiết kế cụ thể. Khi nói “agent cần context tốt”, ta có thể đồng ý nhanh nhưng chưa biết context nào cần đưa vào. Khi nói “tool cần least privilege”, ta hiểu nguyên tắc nhưng chưa biết chia server ra sao. Case study buộc ta trả lời bằng architecture, workflow, boundary và eval.

Trong phần này, mỗi case study được đọc theo cùng một khung:

1. Mục tiêu agent cần đạt.
2. Môi trường agent hoạt động.
3. Context agent cần.
4. Tool và permission boundary.
5. Workflow hoặc agent loop.
6. Failure modes.
7. Evaluation và governance.

## Ba kiểu case study

Coding agent đại diện cho môi trường repo phần mềm, nơi context là file, test, architecture và convention. Enterprise agent đại diện cho môi trường có quyền hạn, dữ liệu nhạy cảm và audit. Research agent với MCP đại diện cho bài toán tổng hợp nguồn, nơi dữ liệu không tin cậy và evidence management rất quan trọng.

Ba case study này không bao phủ mọi tình huống, nhưng chúng tạo mẫu tư duy. Khi gặp agent mới, hãy hỏi: nó giống coding agent ở chỗ phải sửa artifact? Giống enterprise agent ở chỗ có policy và approval? Hay giống research agent ở chỗ phải xử lý nguồn không tin cậy?

## Cách đọc case study

Đừng đọc case study như công thức cứng. Hãy đọc như checklist câu hỏi. Nếu bạn đang xây agent khác, hãy thay domain nhưng giữ cấu trúc phân tích: goal, context, tools, state, eval, security. Cấu trúc này giúp tránh lỗi phổ biến là bắt đầu bằng framework trước khi biết boundary.

## Kết luận

Case study tốt không chỉ cho thấy agent làm được gì. Nó cho thấy agent được phép làm gì, không được làm gì, làm sao biết đã làm đúng, và ai chịu trách nhiệm khi sai. Đó là khác biệt giữa demo và engineering.
