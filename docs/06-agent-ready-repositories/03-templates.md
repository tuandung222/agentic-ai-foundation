---
title: Templates cho Agent-ready Repo
---

# Templates cho Agent-ready Repo

Templates giúp team bắt đầu nhanh, nhưng không nên copy máy móc. Một template tốt là khung để đặt câu hỏi đúng. Khi dùng template, hãy thay phần chung chung bằng thông tin thật của repo: command thật, folder thật, boundary thật và checklist thật.

## Template `AGENT.md`

```markdown
# AGENT.md

## Project overview
Mô tả repo làm gì, người dùng chính là ai và boundary nghiệp vụ quan trọng.

## Main directories
- `src/`: mã nguồn chính.
- `docs/`: tài liệu.
- `tests/`: kiểm thử.
- `scripts/`: automation nội bộ.

## Architecture notes
- Entry point chính.
- Module có domain logic.
- Module có side effect hoặc tích hợp bên ngoài.

## Safe commands
- `npm run typecheck`
- `npm test`
- `npm run build`

## Commands requiring approval
- Deploy production.
- Delete data.
- Rewrite git history.
- Run migration trên dữ liệu thật.

## Do not modify without explicit instruction
- Generated files.
- Lockfile nếu task không liên quan dependency.
- Security policy hoặc permission config.

## Completion checklist
- Build hoặc test phù hợp đã chạy.
- Không có dữ liệu nhạy cảm trong diff.
- Scope thay đổi được tóm tắt rõ.
- Rủi ro còn lại được nêu rõ.
```

## Template skill

```markdown
# Skill: Review React Component

## Use when
Khi task yêu cầu review component React hoặc UI logic.

## Inputs
- File component.
- Props contract.
- Expected user behavior.

## Steps
1. Đọc props và state.
2. Kiểm tra rendering path.
3. Kiểm tra accessibility.
4. Kiểm tra performance và unnecessary re-render.
5. Kiểm tra error và loading state.
6. Đề xuất sửa đổi nhỏ nhất.

## Output
Danh sách issue theo severity, evidence và recommendation.
```

## Template workflow

```markdown
# Workflow: Implement Feature

1. Xác định scope và acceptance criteria.
2. Đọc entry points liên quan.
3. Lập plan ngắn.
4. Sửa code theo batch nhỏ.
5. Chạy test phù hợp.
6. Review diff.
7. Báo cáo kết quả, verification và rủi ro.
```

## Template handoff packet

```yaml
task_id: stable-id
sender: planner-agent
receiver: reviewer-agent
goal: review security risk in auth changes
context_refs:
  - pull_request: 123
constraints:
  - no code edits
expected_artifact: structured_review
failure_policy: return blocked with reason
timeout: 15m
```

## Kết luận

Template chỉ có giá trị khi nó làm boundary rõ hơn. Nếu template dài nhưng không nói command, quyền hạn và điều kiện hoàn thành, agent vẫn phải đoán. Hãy xem template là khởi điểm để repo tự mô tả mình cho agent.
