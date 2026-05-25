---
title: LLM-as-Judge
---

# LLM-as-Judge

Đánh giá output agent bằng một mô hình ngôn ngữ khác là kỹ thuật phổ biến để mở rộng eval khi không đủ ngân sách review thủ công. Kỹ thuật này có giá trị thực nếu được thiết kế cẩn thận và có giới hạn rõ. Nếu dùng cẩu thả, nó có thể tạo cảm giác an toàn sai lầm vì mô hình judge xác nhận output kém như thể chúng tốt.

## Bốn trục đánh giá thường dùng

Một bộ rubric gọn và đủ rộng cho nhiều task gồm bốn trục:

| Trục | Ý nghĩa | Câu hỏi kiểm tra |
|---|---|---|
| Coherence | Output có mạch lạc nội tại không? | Các phần có nối với nhau và không mâu thuẫn? |
| Fluency | Ngôn ngữ có tự nhiên và rõ không? | Có lặp, có thừa, có sai ngữ pháp gây hiểu lầm? |
| Relevance | Output có bám sát yêu cầu không? | Có trả lời đúng câu hỏi, đúng phạm vi? |
| Groundedness | Output có dẫn nguồn và bám vào evidence không? | Mỗi claim chính có truy được nguồn? |

Bốn trục này không đủ cho mọi domain. Với coding agent, ta thêm trục “correctness” đo bằng test. Với research agent, ta thêm “citation accuracy”. Với policy agent, ta thêm “compliance”. Quan trọng là rubric được mô tả trước, không suy ra sau khi nhìn output.

## Prompt judge mẫu

```text
Bạn là evaluator độc lập. Hãy chấm điểm output sau theo 4 trục, mỗi trục từ 1 tới 5.
Không suy đoán nội dung không có trong evidence. Không thưởng điểm vì output dài.

User request:
<<<REQUEST>>>

Evidence cho phép tham chiếu:
<<<EVIDENCE>>>

Output cần chấm:
<<<OUTPUT>>>

Trả về JSON đúng schema:
{
  "coherence": {"score": <1-5>, "reason": "..."},
  "fluency":   {"score": <1-5>, "reason": "..."},
  "relevance": {"score": <1-5>, "reason": "..."},
  "groundedness": {"score": <1-5>, "reason": "..."},
  "blocking_issues": ["..."],
  "overall_verdict": "pass | partial | fail"
}
```

Một số nguyên tắc quan trọng: judge có evidence rõ, không có quyền gọi tool, được nhắc không thưởng output dài, và xuất JSON để aggregate được.

## Anti-patterns nguy hiểm

Tự đánh giá cùng model với cùng prompt thường hợp thức hóa output kém. Khi writer và judge cùng prompt và cùng dữ liệu, judge có xu hướng đồng ý.

Judge có quyền sửa câu trả lời sẽ tự bao biện. Hãy giữ judge ở chế độ read-only.

Judge được nhồi dữ liệu rò rỉ đáp án sẽ chấm dễ. Hãy đảm bảo evidence cho judge là cùng phạm vi với evidence cho agent, không hơn không kém.

Trộn người và LLM judge mà không calibrate dễ dẫn tới chuẩn lệch. Người chặt với coherence, judge dễ dãi với groundedness, kết quả tổng hợp khó so sánh.

## Hiệu chuẩn judge

Trước khi tin LLM-as-judge, hãy hiệu chuẩn. Cách đơn giản là tạo một bộ mẫu nhỏ đã được người chấm. So sánh điểm của judge với người trên cùng mẫu. Tính tỷ lệ trùng khớp, tỷ lệ false-pass và false-fail. Nếu sai lệch lớn, sửa rubric, thay model judge hoặc thay prompt judge.

Hiệu chuẩn nên lặp lại định kỳ. Thay đổi prompt, thay đổi model writer hoặc thay đổi rubric đều có thể làm calibration cũ hết hiệu lực.

## Khi nào không nên dùng LLM-as-judge

Khi yêu cầu là correctness có ground truth, ưu tiên kiểm thử trực tiếp. Khi yêu cầu là compliance pháp lý, ưu tiên rule engine và người. Khi yêu cầu liên quan dữ liệu nhạy cảm mà evidence không được gửi vào model, judge LLM không phù hợp.

## Kết luận

LLM-as-judge là công cụ mở rộng đánh giá, không phải nguồn sự thật. Khi rubric rõ, evidence kiểm soát, judge tách biệt khỏi writer và có hiệu chuẩn định kỳ, nó là cánh tay nối dài đáng tin cho team eval. Khi thiếu các điều kiện đó, nó là tiếng vọng đẹp đẽ của output kém.
