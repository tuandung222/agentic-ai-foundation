---
title: A2A và sự gộp của ACP
---

# A2A và sự gộp của ACP

Agent2Agent là protocol giao tiếp giữa các agent độc lập, được Google công bố tháng 4/2025 và chuyển về Linux Foundation tháng 6/2025. Đến đầu 2026, hơn 150 tổ chức bao gồm AWS, Microsoft, Salesforce, SAP, ServiceNow và Cisco đã ủng hộ. Agent Communication Protocol của IBM BeeAI sau một thời gian phát triển song song đã gộp vào A2A từ tháng 8/2025. Đây là sự kiện consolidation quan trọng nhất trong lớp agent-to-agent.

## Vấn đề A2A giải quyết

Trong một hệ thống nhiều agent, mỗi framework có cách riêng để định nghĩa nhiệm vụ, gọi capability, trả artifact và xử lý lỗi. Khi agent đến từ nhiều vendor và nhiều runtime, chi phí tích hợp tăng phi tuyến tính. A2A đưa ra ngôn ngữ chung: cách mô tả agent qua AgentCard, cách gọi nhiệm vụ qua JSON-RPC, cách stream tiến độ qua Server-Sent Events, cách trao đổi artifact đa định dạng.

A2A không phải framework. Nó không thay LangGraph, CrewAI, AutoGen hay Agent SDK. Nó là lớp protocol bên dưới: agent xây bằng bất kỳ framework nào đều có thể nói A2A nếu được trang bị adapter.

## AgentCard

Trái tim của A2A là AgentCard, một tài liệu JSON metadata mô tả agent. Một AgentCard tối thiểu gồm:

- Định danh agent: tên, version, organization, URL endpoint.
- Capability: skill nào agent biết, schema input output, modality (text, image, audio, structured).
- Authentication: cách auth khi gọi agent.
- Constraints: rate limit, jurisdiction, age restriction nếu có.
- Extension: protocol mở rộng được hỗ trợ (ví dụ AP2 cho payment).

```json
{
  "name": "policy-research-agent",
  "version": "1.4.0",
  "url": "https://agents.example.com/policy-research",
  "auth": {"scheme": "oauth2", "scopes": ["agent:read"]},
  "skills": [
    {
      "id": "summarize_policy",
      "description": "Tóm tắt chính sách công ty từ tài liệu nội bộ.",
      "input_schema": {"type": "object", "properties": {"policy_id": {"type": "string"}}},
      "output_schema": {"type": "object"},
      "supports_streaming": true
    }
  ],
  "extensions": ["a2a/ap2"]
}
```

AgentCard có thể được công bố tại endpoint `/.well-known/agent.json` để các agent khác discover bằng convention. Đây là cách A2A tạo discovery layer mà không cần registry tập trung.

## Lifecycle và streaming

Một phiên A2A bắt đầu bằng việc client agent đọc AgentCard của remote agent. Client agent kiểm capability phù hợp với task, lấy auth, rồi gửi `tasks/create` qua JSON-RPC. Remote agent trả về task_id và bắt đầu xử lý.

Tiến độ được stream qua SSE: từng partial artifact, từng decision đáng chú ý, từng request bổ sung thông tin. Client agent có thể cancel, pause hoặc cập nhật yêu cầu trong khi task đang chạy.

Khi task hoàn tất, remote agent gửi sự kiện `task.completed` với final artifact. Khi lỗi, gửi `task.failed` với mã lỗi có cấu trúc.

Cách thiết kế này phản ánh thực tế agent không phải tool đồng bộ. Một task agent có thể chạy nhiều phút, sinh nhiều artifact trung gian, đôi khi cần input bổ sung.

## ACP đã gộp như thế nào

ACP và A2A từng được phát triển song song với cùng mục tiêu giao tiếp giữa agent độc lập. ACP nghiêng về REST thuần và đơn giản hóa adoption. A2A nghiêng về JSON-RPC và streaming SSE. Tháng 8/2025, IBM BeeAI và Google công bố hợp nhất ACP và A2A dưới quản trị của Linux Foundation. Lý do hợp nhất gồm tránh chia rẽ thị trường, gộp engineering effort, và đáp ứng nhu cầu enterprise muốn một chuẩn duy nhất.

Hệ quả thực tế:

- Đặc tả A2A hiện thừa hưởng các convention REST từ ACP, ví dụ endpoint discovery `/.well-known/`.
- BeeAI platform của IBM nay dùng A2A; có migration guide cho code ACP cũ.
- Tài liệu ACP của AGNTCY và các bên thứ ba được cập nhật thành A2A.

Bài học cho team đang tích hợp: không bắt đầu mới với ACP. Dùng A2A. Nếu repo đang có code ACP, theo migration guide chính thức.

## Quan hệ A2A và MCP

Câu hỏi thường gặp là A2A khác MCP ra sao và khi nào dùng cái nào.

MCP đứng ở lớp agent-to-tool. Một agent dùng MCP để gọi tool và đọc resource. A2A đứng ở lớp agent-to-agent. Hai agent dùng A2A để giao việc và trao đổi artifact.

Trong thực tế, một hệ thống production dùng cả hai. Mỗi agent dùng MCP để tiếp cận tool. Các agent giao tiếp với nhau qua A2A. Có thể nói MCP là “interface với hệ thống”, còn A2A là “interface với đồng nghiệp agent”.

## Khi nào nên dùng A2A

A2A có giá trị khi có ít nhất một trong các điều kiện sau:

- Agent đến từ nhiều framework hoặc nhiều vendor.
- Cần discovery để client agent tìm capability mới.
- Cần streaming task dài.
- Có nhu cầu chuẩn hóa contract giữa team hoặc giữa organization.
- Có kế hoạch dùng AP2 cho payment hoặc các extension khác.

Khi tất cả agent nằm trong cùng repo và cùng team, một workflow nội bộ thường vẫn đơn giản hơn. Đừng thêm A2A chỉ vì xu hướng.

## Giá trị thực tiễn

A2A đang ở mức “nên biết”. Sự ủng hộ của Linux Foundation, hợp nhất với ACP, hơn 150 tổ chức tham gia, embed sẵn vào các cloud platform lớn và xuất hiện trong khóa học chính thống cho thấy đây không phải nhãn marketing. Nhưng cần lưu ý A2A là protocol chứ không phải framework. Bạn vẫn cần chọn framework để xây agent, vẫn cần thiết kế role decomposition, vẫn cần governance, vẫn cần eval. A2A xử lý một mảnh quan trọng nhưng không phải tất cả.
