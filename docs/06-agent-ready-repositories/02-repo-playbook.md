---
title: Repo Playbook
---

# Repo Playbook

Playbook này dùng để biến một repo thường thành repo agent-friendly. Mục tiêu là giảm đoán mò và tăng khả năng verify.

## Bước 1: Viết map dự án

Agent cần biết các entry point chính. Với frontend, đó có thể là `src/pages`, `src/components`, routing và API client. Với backend, đó là routes, services, database layer và job workers. Với docs site, đó là `docs`, `sidebars.ts`, `docusaurus.config.ts` và build scripts.

## Bước 2: Chuẩn hóa command

Các command cần rõ:

```bash
npm install
npm run build
npm run typecheck
npm test
```

Nếu command nào chậm hoặc cần secret, hãy ghi rõ. Nếu command nào có side effect, không xếp nó vào nhóm safe command.

## Bước 3: Tạo completion checklist

Mỗi task agent nên kết thúc bằng checklist:

- Đã giới hạn scope thay đổi.
- Đã chạy build hoặc test phù hợp.
- Đã kiểm tra không lộ secret.
- Đã ghi rõ file thay đổi.
- Đã nêu rủi ro còn lại.

## Bước 4: Review gate

Agent không nên tự merge mọi thứ. Với thay đổi lớn, cần review gate: human review, CI pass, security scan hoặc staged rollout.
