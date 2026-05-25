---
title: Stateless MCP và mô hình vận hành
---

# Stateless MCP và mô hình vận hành

Một MCP server giữ trạng thái phiên giữa các request là pattern dễ viết, khó vận hành. Khi hệ thống lớn lên, ta gặp các bài toán quen thuộc của distributed systems: cân bằng tải, restart không đứt gãy, mở rộng theo chiều ngang, fail-over và rolling deploy. Tất cả đều khó hơn khi server stateful. Vì vậy, một xu hướng quan trọng là chuyển MCP server sang vận hành phi trạng thái nhiều nhất có thể.

## Stateful so với stateless

Trong mô hình stateful, client mở phiên, server cấp một định danh phiên và giữ trạng thái như cấu hình client, tool đang mở, cursor đọc resource hoặc workspace. Mọi request tiếp theo phải đi đúng tới instance giữ phiên đó. Khi instance restart, phiên mất. Khi cân bằng tải, ta cần sticky session.

Trong mô hình stateless, mỗi request mang đủ thông tin để xử lý độc lập: identity, scope, tool call, tham số và ngữ cảnh tối thiểu cần thiết. Server không cần nhớ phiên. Trạng thái dài hạn nằm ở store riêng có ACL, không nằm trong tiến trình server.

| Khía cạnh | Stateful | Stateless |
|---|---|---|
| Cân bằng tải | Cần sticky session | Round-robin thông thường |
| Restart | Có thể đứt phiên | Không ảnh hưởng client |
| Mở rộng ngang | Phức tạp, cần state sync | Đơn giản, scale như stateless HTTP |
| Fail-over | Cần replication state | Cần replication store dữ liệu, không cần replication phiên |
| Bảo mật | Phiên có thể bị hijack | Mỗi request tự authenticate |

## Hệ quả thiết kế khi đi stateless

Stateless không có nghĩa là “không có state ở đâu cả”. Nó có nghĩa là state được tách khỏi tiến trình xử lý request. Có ba tách lớp đáng giá.

Thứ nhất, identity và scope đi kèm mỗi request. Token chứa user, agent, organization và scope tool. Server không cần “nhớ” ai đang gọi.

Thứ hai, context cần thiết được truyền hoặc tham chiếu rõ. Nếu một tool cần workspace path, request phải nêu workspace. Nếu cần cursor, request phải nêu cursor. Server không suy đoán từ phiên trước.

Thứ ba, side effect được idempotent hoặc có idempotency key. Khi cùng một request có thể đến hai instance do retry, server cần phát hiện và không thực hiện hai lần.

## Stateless handler skeleton

```python
from dataclasses import dataclass
from typing import Any

@dataclass
class McpRequest:
    request_id: str
    auth: dict             # user, agent, scope, expiry
    tool: str
    arguments: dict
    workspace: str | None
    idempotency_key: str | None

@dataclass
class McpResponse:
    status: str            # ok, error, denied, rate_limited
    data: dict | None = None
    warnings: list[str] | None = None

def handle(req: McpRequest) -> McpResponse:
    if not verify_token(req.auth):
        return McpResponse(status="denied", warnings=["invalid token"])
    if not allow(req.auth, req.tool, req.arguments):
        return McpResponse(status="denied", warnings=["scope denied"])
    if req.idempotency_key and already_done(req.idempotency_key):
        return cached_response(req.idempotency_key)
    result = run_tool(req.tool, req.arguments, workspace=req.workspace, auth=req.auth)
    record(req.idempotency_key, result)
    return McpResponse(status="ok", data=result)
```

Ý quan trọng là `handle` không đọc bất kỳ biến phiên nào ngoài request. Mọi tra cứu trạng thái đi qua store có ACL.

## Khi nào vẫn cần stateful

Stateful hợp lý khi cost truyền state quá lớn, ví dụ streaming file lớn hoặc giữ một kết nối tốn kém với hệ thống cũ. Trong trường hợp này, nên giới hạn stateful trong một subsystem nhỏ, có ranh giới rõ và có cơ chế failure tolerance, không để stateful lan ra toàn bộ MCP server.

## Quan sát và audit

Stateless server dễ audit hơn vì mỗi request là một bản ghi đầy đủ. Trace nên bao gồm `request_id`, identity, tool, arguments đã redact, idempotency key, kết quả tóm tắt và thời gian xử lý. Nhờ vậy, debugging và security review có thể replay an toàn.

## Kết luận

Đưa MCP server về stateless càng nhiều càng tốt là quyết định vận hành quan trọng. Nó không làm capability ít đi. Nó làm khả năng vận hành, mở rộng và audit dễ hơn rất nhiều, đồng thời thu nhỏ blast radius khi sự cố xảy ra.
