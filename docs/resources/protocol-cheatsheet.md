---
title: Protocol Cheatsheet
---

# Protocol Cheatsheet

Trang này gom mọi protocol agent đã đề cập trong tài liệu vào một bảng tra cứu nhanh. Dùng nó như tài liệu tham chiếu khi review architecture, phỏng vấn kỹ thuật, hoặc đánh giá đề xuất từ vendor.

## Bảng tổng hợp một trang

| Protocol | Tên đầy đủ | Lớp | Người dẫn dắt | Governance hiện tại | Năm công bố | Trạng thái 2026 | Khi nào dùng |
|---|---|---|---|---|---|---|---|
| MCP | Model Context Protocol | Agent-to-tool | Anthropic | Open source, cộng đồng rộng | 11/2024 | Production, công nghiệp adopt | Mọi agent kết nối tool |
| A2A | Agent2Agent Protocol | Agent-to-agent | Google, nay Linux Foundation | Linux Foundation | 4/2025 | Production, 150+ tổ chức | Nhiều agent hoặc cross-vendor |
| ACP | Agent Communication Protocol | Agent-to-agent | IBM BeeAI | Đã gộp vào A2A | 3/2025 | Đã merge vào A2A từ 8/2025 | Không bắt đầu mới, migrate |
| ANP | Agent Network Protocol | Agent-to-agent decentralized | ANP Team, W3C CG | W3C Community Group | 2024 đến 2025 | Đặc tả, đang chuẩn hóa | Decentralized cross-organization |
| AGORA | Agora | Meta-protocol | Đại học Oxford | Academic | 2024 | Nghiên cứu | Concept và prototype |
| AGNTCY | AGNTCY Internet of Agents | Infrastructure mạng agent | Cisco Outshift, Linux Foundation | Linux Foundation | 3/2025 | Production-grade, mở rộng | Platform multi-agent quy mô |
| SLIM | Secure Low-Latency Interactive Messaging | Messaging transport | Cisco, trong AGNTCY | Linux Foundation | 2025 | Production trong AGNTCY | Latency thấp, multi-modal |
| OASF | Open Agent Schema Framework | Discovery schema | AGNTCY | Linux Foundation | 2025 | Production | Mô tả capability agent |
| AP2 | Agent Payments Protocol | Payments | Google + Coinbase + 60+ | Open consortium | 9/2025 | Đặc tả, sample code | Commerce với authorization |
| x402 | HTTP 402 Payment Protocol | Payment rail | Coinbase, Cloudflare | x402 Foundation | 5/2025 | Production, multi-chain | Pay-per-call, agent payments |
| UCP | Universal Commerce Protocol | Commerce | Google + retail/payment | Google-led với open spec | 1/2026 | Rollout retail | Agentic commerce end-to-end |
| AG-UI | Agent-User Interaction Protocol | Agent-to-user UI | CopilotKit | Open source | 2025 | Niche, growing | UI tương tác agent chuyên biệt |

## Quy ước viết tắt nhanh

- JSON-RPC: chuẩn gọi hàm qua JSON.
- SSE: Server-Sent Events, kênh stream một chiều qua HTTP.
- DID: Decentralized Identifier, chuẩn W3C cho định danh phi tập trung.
- OAuth 2.1: framework auth dùng access token.
- mTLS: mutual TLS, hai bên xác thực bằng chứng chỉ.
- Mandate: trong AP2, là Verifiable Credential ký bởi user hoặc bên có thẩm quyền.
- Facilitator: trong x402, dịch vụ verify và settle on-chain payment.
- AgentCard: trong A2A, JSON metadata mô tả agent.

## Khi nào dùng protocol nào, bảng nhanh

| Tình huống | Protocol nên dùng |
|---|---|
| Agent cần đọc file, gọi API, chạy command | MCP |
| Hai agent ở hai team cần phối hợp | A2A |
| Một marketplace agent công khai | ANP (theo dõi), AGNTCY directory (production) |
| Nền tảng multi-agent ở quy mô lớn | AGNTCY + A2A + MCP |
| Agent mua hàng cho user | AP2, tích hợp UCP nếu có |
| Agent mua tài nguyên qua HTTP API có pricing | x402 |
| Cần streaming task dài giữa agent | A2A với SSE hoặc SLIM |
| Cần identity cross-organization không lệ thuộc registry | ANP với DID |
| Cần meta-protocol thử nghiệm trong nội bộ | AGORA hoặc tự thiết kế |
| Cần expose agent qua UI custom | AG-UI |

## Quan hệ phân lớp

```
+----------------------------------------+
|  Commerce: UCP                         |
|  Payments: AP2 (mandate chain)         |
|  Payment rail: x402                    |
+----------------------------------------+
|  Agent-to-agent: A2A, ANP, AGORA       |
+----------------------------------------+
|  Infrastructure: AGNTCY directory,     |
|  identity, SLIM messaging, observ.     |
+----------------------------------------+
|  Agent-to-tool: MCP                    |
+----------------------------------------+
|  Agent-to-user UI: AG-UI               |
+----------------------------------------+
```

## Cách dùng cheatsheet trong review

Trước khi quyết định adopt protocol nào trong production:

1. Xác định lớp đang cần.
2. So sánh các option cùng lớp trong bảng.
3. Kiểm governance và mức adoption hiện tại.
4. Kiểm SDK cho ngôn ngữ team đang dùng.
5. Đối chiếu với khung 5 câu hỏi trong Phần 4 chương 11.
6. Lập migration plan trước khi adopt.

Một review tốt không hỏi “protocol này có hot không” mà hỏi “protocol này có giải quyết vấn đề rõ, có governance ổn, có ROI và có migration path không”.

## Cập nhật và rủi ro tham chiếu

Hệ sinh thái protocol đang vận động nhanh. Một số protocol có thể gộp với protocol khác, một số có thể bị bỏ. Khi tham chiếu trang này sau vài quý, hãy kiểm trực tiếp tại nguồn chính của mỗi protocol để xác minh status. Cheatsheet này phản ánh trạng thái đầu năm 2026.
