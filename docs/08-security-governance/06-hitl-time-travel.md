---
title: Human-in-the-loop và Time-travel
---

# Human-in-the-loop và Time-travel

Khi agent có quyền tác động vào hệ thống thật, hai năng lực bắt đầu trở nên không thể thiếu: con người có thể chen vào đúng chỗ và đúng lúc, và hệ thống có thể quay về một trạng thái trước đó khi cần. Hai năng lực này thường được gọi là human-in-the-loop và time-travel. Chúng không phải tính năng riêng lẻ. Chúng là kiến trúc.

## Vì sao HITL không chỉ là “xác nhận”

Một số hệ thống đặt prompt “Bạn có muốn tiếp tục không?” rồi gọi đó là HITL. Cách này thường không đủ. HITL hữu ích khi nó cung cấp ba thứ cho người duyệt.

Thứ nhất, ngữ cảnh quyết định: agent định làm gì, vì sao, dựa trên evidence nào.

Thứ hai, tác động dự kiến: side effect, target environment, rollback plan.

Thứ ba, lựa chọn rõ: approve, deny, modify, escalate.

Một HITL không nêu rollback chỉ chuyển trách nhiệm cho người duyệt mà không cho họ công cụ.

## Các loại điểm chen

Có ba loại điểm chen thực dụng.

Pre-action gate đặt ở trước hành động có side effect. Agent dừng, đưa đề xuất, chờ approve.

Mid-run interrupt cho phép người dùng dừng giữa chừng. Agent phải lưu state để có thể tiếp tục hoặc rollback.

Post-action review không chặn hành động nhưng yêu cầu review nhanh sau khi xong. Phù hợp cho action ít rủi ro nhưng vẫn cần audit kỹ.

## Time-travel: ý tưởng

Time-travel là khả năng đưa hệ thống về một state đã ghi trước đó. Nó không có nghĩa là “xóa lịch sử”. Lịch sử vẫn được ghi để audit. Time-travel chỉ thay đổi state làm việc, không thay đổi log.

Để time-travel hoạt động, hệ thống cần ba thành phần.

Một là checkpoint định kỳ hoặc theo event quan trọng. Mỗi checkpoint chụp đủ state để tiếp tục: task state, memory, tool registry, permission, version model và prompt.

Hai là store có version. Mỗi checkpoint có id, timestamp, lý do tạo.

Ba là rollback contract. Rollback không phải xóa. Nó là tạo một bước mới đưa state về checkpoint cũ, gắn nhãn “rollback from X to Y”, kèm lý do.

```python
@dataclass
class Checkpoint:
    checkpoint_id: str
    created_at: str
    reason: str
    state: dict

def checkpoint(state, reason="auto") -> str:
    cid = new_id()
    save(Checkpoint(cid, now(), reason, snapshot(state)))
    return cid

def rollback(state, target_checkpoint_id, by_user) -> dict:
    cp = load(target_checkpoint_id)
    audit("rollback", from_state=state, to_checkpoint=cp.checkpoint_id, by_user=by_user)
    return cp.state
```

## Side effect bên ngoài và compensation

Time-travel ở mức state agent không tự động hoàn tác mọi side effect bên ngoài. Một email đã gửi vẫn đã gửi. Một deploy đã chạy vẫn đã chạy. Vì vậy, mỗi tool có side effect lớn cần compensation action: redeploy bản trước, gửi email đính chính, đảo migration.

Compensation action phải được khai báo trong tool design, không suy luận lúc khẩn cấp. Tool có quyền tạo side effect mà không có compensation rõ là tool nguy hiểm.

## Tích hợp HITL với time-travel

Khi HITL và time-travel cùng hoạt động, ta có một pattern an toàn rộng rãi.

1. Trước action có rủi ro, agent đề xuất kèm rollback plan.
2. Người duyệt approve hoặc deny.
3. Trước khi action chạy, hệ thống checkpoint.
4. Nếu phát hiện vấn đề trong post-action, người dùng rollback với 1 thao tác.
5. Audit log ghi đầy đủ: approve, action, checkpoint, rollback.

Pattern này biến rủi ro từ “không sửa được” thành “sửa được trong vài giây”.

## Anti-patterns

- HITL chỉ là confirm dialog không có rollback.
- Checkpoint không có version, làm rollback không xác định.
- Rollback xóa lịch sử, làm audit gãy.
- Tool có side effect không có compensation action.
- Quyền rollback không có ACL, ai cũng dùng được.

## Kết luận

HITL và time-travel là hai mặt của cùng một nguyên tắc: trao quyền cho agent nhưng giữ quyền kiểm soát cho con người và hệ thống. Khi hai năng lực này được thiết kế cùng nhau từ đầu, autonomy có thể tăng dần một cách có trách nhiệm. Khi chúng được nhét vào sau, autonomy luôn dừng ở mức thấp vì rủi ro vận hành không thể hấp thụ.
