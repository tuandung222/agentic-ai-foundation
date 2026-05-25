---
title: Tổng quan Agent-ready Repository
---

# Tổng quan Agent-ready Repository

Một repo tốt cho con người chưa chắc đã tốt cho agent. Con người có thể hỏi đồng nghiệp, nhớ convention ngầm, đọc nhiều file không theo thứ tự và suy luận từ kinh nghiệm tổ chức. Agent thì phụ thuộc rất nhiều vào những gì repo thể hiện ra: cấu trúc thư mục, command, test, instruction file, naming convention, architecture notes và checklist hoàn thành.

Agent-ready repository là repo được thiết kế để agent có thể hiểu, thay đổi và verify với ít đoán mò nhất. Mục tiêu không phải là biến agent thành chủ sở hữu repo. Mục tiêu là làm cho môi trường phần mềm trở nên rõ ràng, có boundary và có cơ chế kiểm chứng. Repo càng rõ, agent càng ít phải suy đoán. Agent càng ít suy đoán, rủi ro càng thấp.

## Thành phần tối thiểu

- **Project map:** mô tả ngắn repo làm gì, thư mục chính ở đâu, entry point nào quan trọng.
- **Instruction file:** ví dụ `AGENT.md`, `CLAUDE.md` hoặc file tương đương cho agent platform.
- **Command catalog:** install, build, test, lint, format, typecheck, serve, deploy.
- **Safety boundaries:** file không nên sửa, command cần approval, dữ liệu nhạy cảm không được log.
- **Completion checklist:** điều kiện để agent được báo task đã xong.
- **Architecture notes:** các quyết định thiết kế quan trọng, dependency chính và invariants.
- **Troubleshooting notes:** lỗi thường gặp và cách verify.

Các thành phần này không cần dài. Điều quan trọng là rõ và cập nhật. Một trang ngắn nhưng đúng thường hữu ích hơn một tài liệu dài nhưng lỗi thời.

## Repo như một môi trường học của agent

Mỗi lần agent vào repo, nó phải xây dựng một mental model: dự án dùng framework gì, code nằm ở đâu, test chạy thế nào, convention nào cần giữ, thay đổi nào nguy hiểm. Nếu repo không nói rõ, agent sẽ suy đoán từ pattern. Suy đoán có thể đúng trong demo nhỏ, nhưng rất rủi ro trong hệ thống thật.

Hãy so sánh hai repo. Repo thứ nhất có `package.json` rõ script, docs architecture ngắn, test ổn định và instruction file nói vùng nào không sửa. Repo thứ hai có nhiều script cũ, test flaky, folder lộn xộn và không có checklist. Cùng một model, repo thứ nhất sẽ cho kết quả agent tốt hơn đáng kể.

## Boundary quan trọng hơn độ dài tài liệu

Một lỗi phổ biến là viết instruction file rất dài nhưng không nói boundary. Agent cần biết không chỉ “nên làm gì”, mà cả “không được làm gì” và “khi nào phải hỏi”. Ví dụ, đọc file là an toàn, nhưng xóa migration cũ thì không. Chạy test là an toàn, nhưng deploy production thì cần approval. Sửa docs có thể đơn giản, nhưng đổi public API cần review.

Boundary nên được viết cụ thể. Thay vì “cẩn thận với dữ liệu”, hãy viết “không in environment variables ra log, không commit `.env`, không copy customer data vào prompt”. Cụ thể giúp agent và reviewer cùng hiểu.

## Agent-ready không thay thế engineering discipline

Làm repo agent-ready không có nghĩa là bỏ test, bỏ review hoặc bỏ CI. Ngược lại, agent-ready repo cần các cơ chế đó rõ hơn. Agent là một người cộng tác mới trong hệ thống engineering. Nếu hệ thống vốn thiếu test và thiếu convention, agent sẽ khuếch đại sự mơ hồ.

## Kết luận

Agent-ready repository là một dạng developer experience mới. Trước đây ta tối ưu repo cho con người đọc và máy build. Bây giờ ta cần tối ưu thêm cho agent đọc, hành động và tự kiểm tra. Repo càng rõ ràng, agent càng hữu ích. Repo càng mơ hồ, agent càng nguy hiểm hoặc tốn công giám sát.
