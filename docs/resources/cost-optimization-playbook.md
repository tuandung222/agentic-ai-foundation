---
title: Cost Optimization Playbook
---

# Cost Optimization Playbook

Playbook này cung cấp các bước thực dụng để giảm cost token và latency của agentic system mà không hy sinh chất lượng quá mức. Mỗi mục đi kèm khi nào nên áp dụng, khi nào không nên, và rủi ro thường gặp.

## Bước 1: Đo trước khi tối ưu

Trước khi đụng vào prompt hoặc kiến trúc, hãy đo. Một bảng đo tối thiểu cho mỗi run:

| Trục | Đơn vị |
|---|---|
| Tổng token đầu vào | token |
| Tổng token đầu ra | token |
| Số tool call | lần |
| Latency end-to-end | giây |
| Số bước reasoning | bước |
| Pass theo rubric | tỷ lệ |

Không đo trước khi tối ưu là cách nhanh nhất để làm hệ thống tệ hơn.

## Bước 2: State Reducer cho workflow có state rõ

Áp dụng khi: hệ thống có thể mô hình hóa thành workflow graph có state object.

Không áp dụng khi: task hoàn toàn mở, không có state có cấu trúc.

Rủi ro: reducer cắt mất thông tin then chốt. Cần eval để bắt regression.

## Bước 3: Message Trimming với tóm tắt

Áp dụng khi: hội thoại dài, ngữ cảnh sắp chạm trần.

Không áp dụng khi: phần lịch sử có evidence pháp lý cần giữ nguyên văn.

Rủi ro: tóm tắt sai tạo ảo giác. Hãy lưu tóm tắt cùng pointer tới message gốc.

## Bước 4: Semantic Memory Offload

Áp dụng khi: tri thức nền lớn, truy vấn hẹp theo task hiện tại.

Không áp dụng khi: agent cần đọc toàn bộ tri thức để ra quyết định, ví dụ compliance review yêu cầu.

Rủi ro: retrieval kém bỏ qua nguồn quan trọng. Hãy kết hợp full-text và vector.

## Bước 5: Tool output filtering

Giới hạn độ dài tool output, loại bỏ HTML thừa, redaction secret. Output ngắn và rõ giúp model quyết định tốt hơn và rẻ hơn.

Rủi ro: cắt quá tay làm mất thông tin debug. Hãy giữ trace đầy đủ ngoài context.

## Bước 6: Tránh agent xã giao

Trong multi-agent, các thông điệp “cảm ơn”, “tôi đồng ý”, “tốt rồi” không cần thiết. Lọc chúng ở runtime hoặc bằng instruction cho agent. Tiết kiệm nhỏ mỗi bước, lớn theo $K$.

## Bước 7: Caching

Tool output ổn định nên được cache theo tham số. Reasoning lặp cho cùng task nên có warm cache. Lưu ý invalidation khi dữ liệu nguồn đổi.

Rủi ro: cache cũ trả lời câu hỏi mới. Hãy đặt key bao gồm version dữ liệu.

## Bước 8: Model routing

Không phải bước nào cũng cần model lớn nhất. Cải thiện cost lớn nhất thường đến từ định tuyến: task đơn giản dùng model nhỏ, task khó dùng model lớn.

Rủi ro: routing sai làm chất lượng tụt. Hãy bắt đầu với một quy tắc rõ, không tự động hóa router phức tạp ngay.

## Bước 9: Giảm vòng lặp không cần thiết

Một số agent loop tới vài chục bước vì tool design kém. Cải thiện tool schema và output thường giảm số bước, không phải prompt.

Rủi ro: cắt vòng quá sớm bỏ qua kiểm chứng. Hãy giữ vòng cuối là verification.

## Bước 10: Đặt budget cho mỗi run

Mỗi task class có ngưỡng cost và latency. Khi vượt, runtime cảnh báo hoặc dừng. Budget không phải để chặn sáng tạo, mà để bắt regression sớm.

## Checklist trước khi release thay đổi cost

| Kiểm | Đạt |
|---|---|
| Có bảng đo before/after | Có/Chưa |
| Eval suite chạy lại không regression | Có/Chưa |
| Trace mẫu cho 5 task quan trọng | Có/Chưa |
| Cost giảm có đi kèm chất lượng giữ nguyên hoặc cải thiện | Có/Chưa |
| Có rollback plan nếu chất lượng tụt sau release | Có/Chưa |

## Kết luận

Tối ưu cost của agent là kỹ luật engineering, không phải lựa chọn tinh chỉnh prompt. Khi đo trước, đặt budget, áp dụng đúng chiến lược cho đúng loại workload và verify bằng eval, ta có thể giảm cost đáng kể mà vẫn duy trì chất lượng vận hành.
