---
title: Governance Policy Template
---

# Governance Policy Template

Governance policy cho agentic systems cần đủ cụ thể để enforce được. Nếu policy chỉ nói “agent phải an toàn”, runtime không biết chặn ở đâu. Template dưới đây giúp chuyển nguyên tắc thành rule theo identity, data, tool, approval, logging và release.

## Policy header

```yaml
policy_name: agentic-system-policy
version: 1.0.0
owner: platform-team
scope:
  - coding-agent
  - research-agent
  - enterprise-assistant
review_cycle: quarterly
```

## Identity policy

```yaml
identity:
  require_user_identity: true
  require_agent_identity: true
  require_tool_credential_scope: true
  disallow_shared_production_tokens: true
```

Mọi hành động quan trọng phải gắn được user, agent role và credential. Nếu dùng token chung, audit sẽ yếu và blast radius lớn.

## Data policy

```yaml
data:
  classifications:
    - public
    - internal
    - confidential
    - regulated
  model_context:
    disallow_raw_secrets: true
    require_redaction_for_confidential: true
  trace_retention:
    default_days: 30
    regulated_days: 7
```

Data policy phải nói rõ dữ liệu nào được vào context, dữ liệu nào chỉ được xử lý qua tool, và dữ liệu nào không được lưu trong trace.

## Tool policy

```yaml
tools:
  categories:
    read_only:
      approval_required: false
    draft:
      approval_required: false
    side_effect:
      approval_required: true
    production_impacting:
      approval_required: true
      dry_run_required: true
  max_tool_calls_per_task: 30
  max_retries_per_tool: 2
```

Tool policy nên enforce bằng runtime hoặc broker, không chỉ bằng prompt.

## Approval policy

```yaml
approval:
  require_context:
    - proposed_action
    - target
    - expected_side_effect
    - evidence
    - rollback
    - risk
  timeout_minutes: 60
  deny_on_missing_context: true
```

Approval thiếu ngữ cảnh không nên được xem là approval hợp lệ. Nếu người duyệt không biết side effect và rollback, họ không thể duyệt có trách nhiệm.

## Release policy

```yaml
release:
  require_eval_pass: true
  require_security_tasks: true
  require_canary_for_new_tools: true
  require_rollback_plan: true
  block_on_unsafe_regression: true
```

Release policy giúp kiểm soát thay đổi prompt, model, tool schema, retrieval index và permission.

## Incident policy

```yaml
incident:
  containment_actions:
    - pause_agent
    - disable_tool
    - revoke_credential
    - switch_to_draft_mode
  require_postmortem_for_severity:
    - high
    - critical
```

Incident policy phải có hành động containment cụ thể để team không phải suy nghĩ từ đầu khi sự cố xảy ra.
