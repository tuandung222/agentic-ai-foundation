---
title: Incident Response cho Agentic Systems
---

# Incident Response cho Agentic Systems

Ngay cả hệ thống tốt cũng có incident. Với agentic systems, incident có thể là agent gọi tool sai, lộ dữ liệu qua log, bị prompt injection, loop tốn chi phí, tạo artifact sai hoặc thực hiện side effect không mong muốn. Incident response giúp team phản ứng có cấu trúc thay vì hoảng loạn.

## Phát hiện incident

Nguồn phát hiện có thể là alert metrics, user report, audit review, eval regression hoặc anomaly trong trace. Các chỉ báo đáng chú ý gồm unsafe action tăng, permission denial tăng, token cost tăng đột biến, tool error rate cao, loop dài bất thường hoặc final report thiếu verification.

## Triage

Triage cần trả lời nhanh:

- Agent nào, version nào, user nào, task nào.
- Tool nào đã được gọi.
- Có side effect chưa.
- Dữ liệu nhạy cảm có bị lộ không.
- Incident còn đang tiếp diễn không.
- Có cần tắt tool, revoke token hoặc pause workflow không.

Trace và audit log quyết định tốc độ triage. Nếu không có trace, team phải suy đoán từ log rời rạc.

## Containment

Containment là chặn lan rộng. Có thể disable MCP server, hạ quyền tool, pause agent workflow, revoke credential, chuyển agent về draft-only mode hoặc yêu cầu approval cho mọi side effect. Containment nên có runbook trước, không chờ incident mới nghĩ.

## Postmortem

Postmortem không nhằm đổ lỗi cho model. Nó cần tìm root cause trong hệ thống: context thiếu, tool schema mơ hồ, policy không enforce, eval thiếu case, approval quá mơ hồ, hoặc monitoring không bắt được. Kết quả postmortem nên tạo action item: thêm eval, sửa tool, cập nhật instruction, đổi permission, thêm alert.

## Kết luận

Incident response là một phần của governance. Agent càng tự chủ, incident response càng quan trọng. Một hệ thống production-ready không phải hệ thống không bao giờ sai, mà là hệ thống phát hiện nhanh, giới hạn thiệt hại, học từ lỗi và cải thiện control.
