---
title: Threat Model cho Agent
---

# Threat Model cho Agent

Threat model của agent phải xét cả model, context, tool và environment. Kẻ tấn công có thể không cần hack model. Họ chỉ cần đưa instruction độc hại vào dữ liệu mà agent đọc.

## Nguồn dữ liệu không tin cậy

Issue, pull request, webpage, email, document, log và tool output đều có thể chứa prompt injection. Agent phải xem chúng là dữ liệu, không phải instruction.

## Tool boundary

Tool có side effect cần policy riêng. Ví dụ tool gửi email, tạo payment, xóa file hoặc deploy phải có confirmation gate. Tool chỉ đọc cũng cần kiểm soát nếu nó truy cập dữ liệu nhạy cảm.

## MCP supply-chain risk

MCP server là code chạy với quyền cụ thể. Cài MCP server từ nguồn không rõ giống như cài dependency có quyền đọc dữ liệu. Cần review source, pin version, giới hạn quyền và log hoạt động.

## Threat checklist

| Câu hỏi | Mục tiêu |
|---|---|
| Agent đọc dữ liệu từ nguồn nào? | Xác định input không tin cậy |
| Tool nào có side effect? | Đặt approval gate |
| Secret nằm ở đâu? | Tránh exfiltration |
| Log có chứa dữ liệu nhạy cảm không? | Tránh rò rỉ qua observability |
| MCP server có quyền gì? | Giới hạn blast radius |
