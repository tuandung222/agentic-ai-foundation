---
title: Checklists
---

# Checklists

## Agent-ready repo

- Có instruction file rõ.
- Có command build, test, lint.
- Có architecture map ngắn.
- Có danh sách vùng không được sửa.
- Có completion checklist.

## MCP server security

- Quyền tối thiểu.
- Tool schema rõ.
- Side effect được đánh dấu.
- Có audit log.
- Có version pinning.
- Không expose secret trong output.

## Agent evaluation

- Có golden tasks.
- Có trace lưu lại.
- Có phân loại failure.
- Có metric cost và latency.
- Có human review cho task rủi ro cao.

## Multi-agent design

- Mỗi agent có role rõ.
- Mỗi role có artifact rõ.
- Có owner cuối cùng.
- Có shared state hoặc handoff packet.
- Có giới hạn vòng lặp.
