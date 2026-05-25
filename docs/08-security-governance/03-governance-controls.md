---
title: Governance Controls
---

# Governance Controls

Governance controls là các cơ chế giúp agent hành động trong giới hạn có trách nhiệm. Nếu security tập trung vào bảo vệ khỏi tấn công và lạm dụng, governance tập trung vào câu hỏi ai được phép làm gì, ai phê duyệt, ai chịu trách nhiệm, log nào được giữ và khi có lỗi thì rollback ra sao.

Với agentic systems, governance không thể chỉ là một tài liệu policy nằm ngoài runtime. Policy phải được chuyển thành control có thể enforce: permission, approval, audit, redaction, retention, release gate và ownership. Nếu agent chỉ được nhắc bằng prompt “hãy cẩn thận”, đó chưa phải governance đủ mạnh.

## Các lớp control

| Lớp | Control |
|---|---|
| Identity | User, agent role, service account, credential scope |
| Authorization | Tool nào được gọi, input nào bị chặn, environment nào được truy cập |
| Approval | Human gate cho side effect hoặc dữ liệu nhạy cảm |
| Audit | Log hành động quan trọng với redaction |
| Evaluation | Golden tasks, security-sensitive tasks, regression tracking |
| Operations | Monitoring, alert, rollback, emergency stop |

Các lớp này nên bổ sung cho nhau. Approval không thay thế authorization. Audit không thay thế prevention. Eval không thay thế monitoring. Một hệ thống trưởng thành cần nhiều lớp vì không lớp nào hoàn hảo.

## Approval phải có ngữ cảnh

Approval tốt không phải một nút “OK”. Người duyệt cần biết agent muốn làm gì, vì sao, tool nào sẽ gọi, input quan trọng là gì, side effect ra sao, có rollback không và nếu không làm thì hậu quả là gì. Nếu approval request quá mơ hồ, người duyệt sẽ approve theo thói quen, làm control mất giá trị.

Ví dụ, request “cho phép deploy?” quá nghèo. Request tốt hơn là “agent muốn deploy version `1.4.2` lên staging, thay đổi gồm migration read-only và fix validation, rollback bằng version `1.4.1`, test suite X đã pass”.

## Audit và trách nhiệm

Audit log cần gắn được user identity, agent identity và tool credential. Nếu mọi action đều xuất hiện dưới một token chung, không thể truy trách nhiệm. Audit cũng cần retention và redaction. Log quá ít thì không điều tra được. Log quá nhiều và chứa dữ liệu nhạy cảm thì tạo rủi ro mới.

## Release gate

Một agent workflow production nên có release gate giống phần mềm thông thường. Trước khi tăng quyền hoặc đổi model/prompt/tool, cần chạy regression eval. Gate nên kiểm task success, unsafe rate, cost, latency và human correction rate. Nếu một thay đổi tăng success nhưng tăng unsafe action, không nên release.

## Kết luận

Governance controls biến autonomy thành năng lực có kiểm soát. Agent không cần bị bóp nghẹt bởi policy, nhưng mọi quyền tự chủ phải đi kèm identity, permission, approval, audit, eval và rollback tương xứng.
