---
title: Mô hình toán học Token Cost
---

# Mô hình toán học Token Cost

Khi agent chạy nhiều bước và phối hợp nhiều vai trò, chi phí token có thể tăng nhanh hơn trực giác. Để thiết kế hệ thống vận hành được, ta cần một mô hình toán học, dù đơn giản, để ước lượng tổng cost và để so sánh các chiến lược tối ưu. Mô hình dưới đây không phải để đo chính xác đến từng token, mà để hướng dẫn quyết định kiến trúc.

## Định nghĩa biến

Xét một hệ thống có $M$ agent tương tác qua $K$ bước suy luận. Ta đặt:

- $P_\text{system}$: lượng token cố định của system instruction và tool definition gửi kèm mỗi lần gọi.
- $L_{ij}$: độ dài ngữ cảnh hội thoại tích lũy của agent $j$ tại bước $i$.
- $\theta_{ij}$: hệ số kích hoạt của agent $j$ tại bước $i$, bằng $1$ nếu agent được gọi, bằng $0$ nếu không.
- $E_i$: token phát sinh từ phản hồi môi trường hoặc kết quả thực thi tool tại bước $i$.
- $C_i$: token phát sinh từ trao đổi xã giao phi cấu trúc tại bước $i$, đặc biệt trong các hệ thống hội thoại tự do.

Tổng token tiêu thụ được biểu diễn:

$$
T_\text{total} = \sum_{i=1}^{K} \left( P_\text{system} + \sum_{j=1}^{M} L_{ij} \cdot \theta_{ij} + E_i + C_i \right)
$$

Trong các kiến trúc hội thoại tự do, $L_{ij}$ thường tăng tuyến tính theo số bước:

$$
L_{ij} \approx L_0 + \sum_{n=1}^{i-1} R_n
$$

với $R_n$ là độ dài câu trả lời ở bước trước. Đây là gốc rễ của hiện tượng token bùng nổ.

## Ba chiến lược tối ưu chính

Mô hình trên gợi ý ba hướng giảm cost rõ ràng.

Thứ nhất, giữ $L_{ij}$ ở mức hằng số bằng state reducer. Thay vì truyền toàn bộ lịch sử, hệ thống truyền một state object có cấu trúc đã rút gọn.

Thứ hai, giảm $L_{ij}$ và $C_i$ bằng message trimming và filtering. Loại bỏ message cũ, message xã giao, hoặc nén thành tóm tắt khi ngữ cảnh đạt ngưỡng.

Thứ ba, giảm $L_{ij}$ bằng semantic memory offload. Đưa kiến thức dài hạn ra ngoài context window, chỉ kéo vào những phần liên quan tới task hiện tại.

## State reducer

```python
def reduce_state(prev_state: dict, last_step: dict) -> dict:
    return {
        "task": prev_state["task"],
        "open_subtasks": last_step.get("open_subtasks", prev_state["open_subtasks"]),
        "decisions": prev_state["decisions"] + last_step.get("decisions", []),
        "last_observation": last_step.get("observation"),
        "constraints": prev_state["constraints"],
    }
```

State reducer cố định cấu trúc state. Mỗi bước cập nhật, không nối thêm vô hạn. Cost ngữ cảnh giữ mức gần hằng số theo $K$.

## Message trimming

```python
def trim_messages(messages: list[dict], max_tokens: int, summarize) -> list[dict]:
    if total_tokens(messages) <= max_tokens:
        return messages
    head = messages[:2]
    tail = messages[-4:]
    middle = messages[2:-4]
    summary = summarize(middle)
    return head + [{"role": "system", "content": f"Tóm tắt phần đã ẩn: {summary}"}] + tail
```

Trimming chủ động khi ngữ cảnh vượt ngưỡng. Tóm tắt được lưu thay vì cắt cứng để giữ thông tin then chốt.

## Semantic memory offload

```python
def retrieve_relevant(memory_index, query, top_k=5):
    return memory_index.search(query=query, top_k=top_k)

def build_context(task, query, memory_index):
    relevant = retrieve_relevant(memory_index, query)
    return {
        "task": task,
        "relevant_memory": relevant,
    }
```

Thay vì nhồi mọi tri thức vào prompt, chỉ kéo phần liên quan tới truy vấn hiện tại. Phương pháp này phối hợp tốt với memory architectures.

## Ước lượng theo công thức

Một implementation đơn giản để ước lượng $T_\text{total}$ phục vụ design review:

```python
def estimate_total_tokens(K, M, P_system, base_L, R_per_step, env_tokens, chit_chat_tokens, active_agents_per_step):
    total = 0
    R_accum = 0
    for i in range(1, K + 1):
        L_i = base_L + R_accum
        agents_active = active_agents_per_step(i)
        total += P_system + L_i * agents_active + env_tokens(i) + chit_chat_tokens(i)
        R_accum += R_per_step(i)
    return total
```

Ta có thể chạy hàm này với nhiều giả định để so sánh chi phí giữa kiến trúc nhiều agent hội thoại tự do và kiến trúc state-reducer với workflow graph.

## Bảng quyết định chọn chiến lược

| Đặc điểm hệ thống | Chiến lược nên dùng |
|---|---|
| Workflow graph có state rõ | State reducer |
| Hội thoại tự do nhưng cần giữ ngữ cảnh dài | Message trimming với tóm tắt |
| Tri thức nền lớn nhưng truy vấn hẹp | Semantic memory offload |
| Nhiều agent trao đổi xã giao | Trimming + lọc role |
| Tài liệu lớn cần dẫn nguồn chính xác | Offload kết hợp ADW |

## Trade-off thường gặp

Cắt giảm quá tay có thể làm agent mất thông tin then chốt. Tóm tắt sai có thể tạo ảo giác. Semantic retrieval kém có thể bỏ qua nguồn quan trọng. Vì vậy, mỗi chiến lược cần đo bằng eval: regression suite phải bắt được mất chất lượng khi giảm cost.

Cost giảm nhưng pass rate cũng giảm thì không phải là cải thiện. Ngược lại, cost cao nhưng eval ổn định ở mức cao có thể là quyết định đúng tại giai đoạn này.

## Kết luận

Mô hình token cost không phải lý thuyết suông. Nó giúp team có ngôn ngữ chung khi tranh luận giữa kiến trúc nhiều agent hội thoại tự do và kiến trúc workflow graph có state-reducer. Khi cost được mô hình hóa, các quyết định tối ưu trở nên có dữ liệu, không phải cảm tính.
