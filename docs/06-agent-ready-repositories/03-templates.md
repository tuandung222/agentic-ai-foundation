---
title: Templates cho Agent-ready Repo
---

# Templates cho Agent-ready Repo

## AGENT.md

```markdown
# AGENT.md

## Project overview
Mô tả ngắn repo làm gì và boundary chính.

## Main directories
- `src/`: mã nguồn chính.
- `docs/`: tài liệu.
- `tests/`: kiểm thử.

## Safe commands
- `npm run build`
- `npm run typecheck`

## Commands requiring approval
- Deploy production
- Delete data
- Rewrite git history

## Completion checklist
- Build hoặc test phù hợp đã chạy.
- Không có secret trong diff.
- Scope thay đổi được tóm tắt rõ.
```

## Skill template

```markdown
# Skill: Review React Component

## Use when
Khi task yêu cầu review component React hoặc UI logic.

## Steps
1. Đọc props và state.
2. Kiểm tra rendering path.
3. Kiểm tra accessibility.
4. Kiểm tra performance và unnecessary re-render.
5. Đề xuất sửa đổi nhỏ nhất.

## Output
Danh sách issue theo mức độ nghiêm trọng.
```

## Workflow template

```markdown
# Workflow: Implement Feature

1. Xác định scope và acceptance criteria.
2. Đọc entry points liên quan.
3. Sửa code nhỏ theo từng batch.
4. Chạy test phù hợp.
5. Review diff.
6. Báo cáo kết quả và rủi ro.
```
