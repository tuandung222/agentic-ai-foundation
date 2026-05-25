---
title: Thiết kế Tool cho Agent
---

# Thiết kế Tool cho Agent

Tool cho agent không nên được thiết kế giống một API dành cho lập trình viên con người. Con người có thể đọc documentation dài, suy luận từ lỗi mơ hồ và hỏi đồng nghiệp. Agent phụ thuộc mạnh vào tên tool, description, schema, error và output. Một tool được thiết kế kém có thể làm agent sai dù model rất mạnh.

## Tên và mô tả tool

Tên tool nên thể hiện capability cụ thể. `search_docs` rõ hơn `query`. `create_draft_ticket` an toàn hơn `create_ticket` nếu tool chỉ tạo draft. Description nên nói tool làm gì, không làm gì, khi nào dùng và rủi ro gì. Nếu tool có side effect, phải nêu rõ.

## Input schema

Input schema là contract. Mỗi field cần type, mô tả, constraint và ví dụ nếu cần. Nếu chỉ cho một field `query: string`, agent có thể nhét quá nhiều ý định vào query. Nếu tool cần enum, hãy dùng enum. Nếu tool nhận path, hãy nói path tương đối hay tuyệt đối. Nếu tool nhận environment, hãy giới hạn staging, production hoặc sandbox.

## Output design

Output nên giúp agent quyết định bước tiếp theo. Một output tốt thường có:

- `status`: success, partial, error.
- `summary`: tóm tắt ngắn.
- `data`: dữ liệu có cấu trúc.
- `warnings`: cảnh báo hoặc limitation.
- `next_actions`: gợi ý bước tiếp theo nếu phù hợp.
- `operation_id`: id để audit với side effect.

Output quá dài làm nhiễu context. Output quá ngắn làm agent đoán. Hãy tối ưu output cho decision, không chỉ cho display.

## Side effect và dry-run

Tool có side effect cần dry-run nếu có thể. Dry-run giúp agent và người duyệt thấy điều gì sẽ xảy ra trước khi thực hiện. Ví dụ, trước khi deploy, dry-run có thể trả version, environment, diff, migration và rollback plan. Trước khi gửi email, dry-run có thể trả recipient, subject và body.

## Checklist trước khi expose tool

| Câu hỏi | Lý do |
|---|---|
| Tool có quyền tối thiểu chưa? | Giảm blast radius |
| Tool có dry-run không? | Kiểm tra trước side effect |
| Tool có confirmation gate không? | Chặn hành động nguy hiểm |
| Output có gắn nguồn không? | Giảm prompt injection và confusion |
| Error có phân loại không? | Giúp agent phục hồi đúng |
| Tool call có audit log không? | Debug và governance |

## Anti-patterns

- Tool quá rộng như `execute_anything`.
- Tool description hứa nhiều hơn khả năng thật.
- Output là text tự do quá dài.
- Error chỉ là “failed”.
- Tool vừa đọc vừa ghi nhưng không nói rõ side effect.
- Tool dùng credential production cho task read-only.

## Kết luận

Tool design là nơi prompt engineering gặp API design và security engineering. Tool tốt làm agent hành động chính xác hơn vì capability, input, output và rủi ro đều rõ. Tool kém làm agent phải đoán, mà agent đoán trong môi trường có side effect là rủi ro lớn.
