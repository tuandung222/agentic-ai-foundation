---
title: Trace-based Evals
---

# Trace-based Evals

Trace-based evals dùng lịch sử agent runs để tạo bộ kiểm thử. Thay vì viết benchmark trừu tượng, ta lấy các task thật, trace thật và failure thật để kiểm tra phiên bản agent mới.

## Quy trình

1. Thu thập trace từ task thật.
2. Gắn nhãn outcome: success, partial, fail, unsafe.
3. Phân loại failure: context, planner, tool, permission, evaluator.
4. Chọn golden tasks đại diện.
5. Chạy lại khi thay model, prompt, tool hoặc workflow.

## Vì sao hiệu quả

Agentic systems phụ thuộc mạnh vào môi trường. Benchmark chung khó phản ánh repo, tool và policy riêng. Trace-based evals đưa evaluation về gần production hơn.

## Cẩn trọng

Trace có thể chứa secret hoặc dữ liệu nhạy cảm. Trước khi lưu hoặc chia sẻ, cần redaction. Cũng cần tránh overfit vào vài task cũ. Golden set nên có cả task dễ, khó, edge case và task security-sensitive.
