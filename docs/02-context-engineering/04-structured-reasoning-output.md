---
title: Structured Reasoning Output
---

# Structured Reasoning Output

Một trong những cải thiện kỹ thuật ít tốn kém nhất nhưng cho hiệu quả ổn định là yêu cầu agent xuất reasoning có cấu trúc thay vì văn bản tự do. Khi reasoning được cấu trúc, ta có thể parse, log, đánh giá, kiểm soát và replay dễ dàng hơn. Khi reasoning là văn bản tự do, mọi đánh giá đều phải đọc lại bằng mắt.

## Vì sao văn bản tự do không đủ

Văn bản tự do dễ trôi. Cùng một câu hỏi, model có thể giải thích dài hoặc ngắn, có thể bỏ qua bước quan trọng, có thể trộn quan sát và quyết định. Khi điều này lặp lại qua hàng nghìn run, eval và debugging trở nên khó.

Văn bản tự do cũng dễ tạo ảo giác đồng nhất. Một câu trả lời nghe rất hợp lý có thể không có bước kiểm chứng. Reviewer khó nhận ra giả định ngầm.

## Một schema reasoning đề xuất

Một schema gọn nhưng mạnh có các trường sau:

- `understanding`: agent hiểu yêu cầu là gì, ràng buộc nào áp dụng.
- `assumptions`: giả định agent đang dùng, gắn mức tin cậy nếu có.
- `analysis`: phân tích các option và rủi ro.
- `logical_path`: chuỗi bước dẫn tới kết luận.
- `evidence`: nguồn dữ liệu được dùng (file, tool output, observation).
- `risks`: rủi ro và side effect dự kiến.
- `final_answer`: kết luận hoặc hành động đề xuất.

Schema này có thể đặt trong YAML hoặc JSON tùy môi trường. Quan trọng là model luôn xuất các trường này khi reasoning trước khi hành động.

## Pydantic skeleton

```python
from pydantic import BaseModel, Field

class AgentReasoningTrace(BaseModel):
    understanding: str = Field(description="Agent tóm tắt yêu cầu và ràng buộc")
    assumptions: list[str] = Field(default_factory=list)
    analysis: str = Field(description="So sánh các option và rủi ro chính")
    logical_path: list[str] = Field(description="Các bước dẫn tới kết luận")
    evidence: list[str] = Field(default_factory=list)
    risks: list[str] = Field(default_factory=list)
    final_answer: str
```

Khi runtime nhận output, nó validate qua schema. Nếu thiếu trường hoặc sai định dạng, runtime có thể yêu cầu sửa hoặc từ chối hành động. Đây là một kiểu type system mềm cho reasoning.

## Mẫu prompt yêu cầu structured reasoning

```text
Bạn là agent có quyền hành động. Trước khi thực hiện hành động, hãy xuất một
ReasoningTrace theo schema sau, dạng JSON hợp lệ và đầy đủ:

{
  "understanding": "...",
  "assumptions": ["..."],
  "analysis": "...",
  "logical_path": ["bước 1", "bước 2", "..."],
  "evidence": ["nguồn 1", "nguồn 2"],
  "risks": ["..."],
  "final_answer": "..."
}

Không thêm bình luận ngoài JSON. Mỗi giả định phải tách thành phần tử riêng.
Mỗi bước trong logical_path phải có thể kiểm chứng từ evidence.
```

## Anti-pattern

- Trường `logical_path` chứa diễn giải dài mà không có bước có thể kiểm chứng.
- `evidence` chỉ ghi “theo phân tích của agent” thay vì nguồn thực.
- `risks` luôn rỗng, dấu hiệu agent không suy nghĩ rủi ro.
- Schema quá nhiều trường mà không bắt buộc, dẫn tới output bỏ trống ngẫu nhiên.
- Schema bị thay đổi liên tục giữa các phiên bản, làm trace lịch sử khó parse lại.

## Eval và observability tận dụng schema

Với reasoning có cấu trúc, ta có thể tự động kiểm tra ba điều quan trọng. Một là agent có nêu đầy đủ ràng buộc người dùng yêu cầu không. Hai là các bước trong `logical_path` có bám vào `evidence` không. Ba là `risks` có xuất hiện và có được xử lý trong hành động cuối không. Ba kiểm tra này, kể cả khi đơn giản, đã loại nhiều failure mode cổ điển.

## Kết luận

Structured reasoning không làm agent thông minh hơn theo nghĩa model. Nó làm hệ thống quanh agent đáng tin hơn. Khi reasoning là dữ liệu có cấu trúc, eval, logging, debugging, policy enforcement và replay đều khả thi. Đây là một trong những đầu tư ROI cao nhất khi nâng cấp một prototype thành hệ thống vận hành được.
