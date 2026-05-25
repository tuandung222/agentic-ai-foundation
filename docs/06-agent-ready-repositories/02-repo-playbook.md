---
title: Repo Playbook
---

# Repo Playbook

Repo playbook là quy trình biến một repository bình thường thành môi trường dễ hiểu hơn cho agent. Mục tiêu không phải viết thật nhiều tài liệu. Mục tiêu là giảm số quyết định agent phải đoán. Mỗi phần trong playbook nên trả lời một câu hỏi cụ thể: repo này làm gì, chạy thế nào, sửa ở đâu, kiểm tra bằng gì và vùng nào cần tránh.

## Bước 1: Viết project map

Project map là bản đồ ngắn của repo. Nó nên mô tả domain, framework, thư mục chính, entry points và luồng build/test. Với repo lớn, project map không cần liệt kê mọi file. Nó cần chỉ ra nơi agent nên bắt đầu.

Một project map tốt có thể gồm:

- Repo phục vụ mục tiêu gì.
- `src/`, `docs/`, `tests/`, `scripts/` chứa gì.
- Entry point quan trọng nằm ở đâu.
- Cấu hình runtime và deployment nằm ở đâu.
- Những module nào có rủi ro cao khi sửa.

## Bước 2: Liệt kê commands

Agent cần biết command nào an toàn và command nào cần approval. Nếu không ghi rõ, agent có thể bỏ qua verification hoặc chạy command sai.

```bash
npm install
npm run typecheck
npm test
npm run build
```

Nếu command nào chậm, cần credential, chạm dữ liệu thật hoặc có side effect, hãy ghi rõ. Đừng đặt deploy production vào nhóm safe command. Đừng để agent tự suy đoán từ tên script.

## Bước 3: Tạo completion checklist

Completion checklist giúp agent biết khi nào được báo xong. Checklist nên cụ thể theo loại task.

- Scope thay đổi đã được giới hạn.
- Diff đã được review lại.
- Build hoặc test phù hợp đã chạy.
- Không có dữ liệu nhạy cảm trong diff hoặc log.
- File thay đổi được nêu rõ.
- Rủi ro còn lại được báo cáo.

## Bước 4: Ghi boundaries

Boundary là phần quan trọng nhất nhưng thường bị quên. Hãy ghi file không được sửa, command cần approval, API không được đổi, migration cần review, dữ liệu không được log. Boundary tốt giúp agent dừng đúng thay vì tự tin sai.

## Bước 5: Cập nhật theo incident

Mỗi lần agent fail, hãy hỏi repo thiếu thông tin gì. Nếu agent không chạy test, có thể checklist chưa rõ. Nếu agent sửa sai layer, architecture notes thiếu. Nếu agent gọi command nguy hiểm, safe commands chưa phân loại. Repo playbook nên tiến hóa từ failure thật.

## Kết luận

Agent-ready repo không được tạo trong một lần. Nó là kết quả của nhiều vòng quan sát, sửa instruction, thêm boundary và cải thiện verification. Mỗi cải tiến nhỏ làm agent ít đoán hơn và reviewer ít phải sửa hơn.
