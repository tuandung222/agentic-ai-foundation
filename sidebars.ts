import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  lectureSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Phần 0: Mental Model',
      link: {type: 'doc', id: '00-mental-model/01-overview'},
      collapsed: false,
      items: [
        '00-mental-model/01-overview',
        '00-mental-model/02-llm-assistant-agent',
        '00-mental-model/03-agentic-engineering',
      ],
    },
    {
      type: 'category',
      label: 'Phần 1: Anatomy của Agent',
      link: {type: 'doc', id: '01-agent-anatomy/01-overview'},
      collapsed: false,
      items: [
        '01-agent-anatomy/01-overview',
        '01-agent-anatomy/02-planner-executor-memory',
        '01-agent-anatomy/03-agent-loop-patterns',
      ],
    },
    {
      type: 'category',
      label: 'Phần 2: Context Engineering',
      link: {type: 'doc', id: '02-context-engineering/01-overview'},
      collapsed: false,
      items: [
        '02-context-engineering/01-overview',
        '02-context-engineering/02-instruction-files',
        '02-context-engineering/03-skills-workflows-memory',
      ],
    },
    {
      type: 'category',
      label: 'Phần 3: MCP và Tool Protocols',
      link: {type: 'doc', id: '03-mcp-tool-protocols/01-overview'},
      collapsed: false,
      items: [
        '03-mcp-tool-protocols/01-overview',
        '03-mcp-tool-protocols/02-mcp-architecture',
        '03-mcp-tool-protocols/03-tool-design',
        '03-mcp-tool-protocols/04-mcp-security-model',
        '03-mcp-tool-protocols/05-building-mcp-server',
      ],
    },
    {
      type: 'category',
      label: 'Phần 4: A2A và ACP',
      link: {type: 'doc', id: '04-agent-to-agent/01-overview'},
      collapsed: false,
      items: [
        '04-agent-to-agent/01-overview',
        '04-agent-to-agent/02-handoff-delegation',
        '04-agent-to-agent/03-protocol-comparison',
        '04-agent-to-agent/04-identity-state-contracts',
      ],
    },
    {
      type: 'category',
      label: 'Phần 5: Multi-agent và Swarm',
      link: {type: 'doc', id: '05-multi-agent-systems/01-overview'},
      collapsed: false,
      items: [
        '05-multi-agent-systems/01-overview',
        '05-multi-agent-systems/02-team-patterns',
        '05-multi-agent-systems/03-failure-modes',
        '05-multi-agent-systems/04-blackboard-shared-state',
      ],
    },
    {
      type: 'category',
      label: 'Phần 6: Agent-ready Repository',
      link: {type: 'doc', id: '06-agent-ready-repositories/01-overview'},
      collapsed: false,
      items: [
        '06-agent-ready-repositories/01-overview',
        '06-agent-ready-repositories/02-repo-playbook',
        '06-agent-ready-repositories/03-templates',
      ],
    },
    {
      type: 'category',
      label: 'Phần 7: Evaluation và Observability',
      link: {type: 'doc', id: '07-evaluation-observability/01-overview'},
      collapsed: false,
      items: [
        '07-evaluation-observability/01-overview',
        '07-evaluation-observability/02-trace-based-evals',
        '07-evaluation-observability/03-debugging-agent-runs',
        '07-evaluation-observability/04-evaluation-harness',
      ],
    },
    {
      type: 'category',
      label: 'Phần 8: Security và Governance',
      link: {type: 'doc', id: '08-security-governance/01-overview'},
      collapsed: false,
      items: [
        '08-security-governance/01-overview',
        '08-security-governance/02-threat-model',
        '08-security-governance/03-governance-controls',
        '08-security-governance/04-prompt-injection-defense',
        '08-security-governance/05-permission-model',
      ],
    },
    {
      type: 'category',
      label: 'Phần 9: Ecosystem Map',
      link: {type: 'doc', id: '09-ecosystem-map/01-overview'},
      collapsed: false,
      items: [
        '09-ecosystem-map/01-overview',
        '09-ecosystem-map/02-platforms-frameworks',
        '09-ecosystem-map/03-standards-maturity',
        '09-ecosystem-map/04-decision-guide',
      ],
    },
    {
      type: 'category',
      label: 'Phần 10: Case Studies',
      link: {type: 'doc', id: '10-case-studies/01-overview'},
      collapsed: false,
      items: [
        '10-case-studies/01-overview',
        '10-case-studies/02-coding-agent',
        '10-case-studies/03-enterprise-agent',
        '10-case-studies/04-research-agent-with-mcp',
      ],
    },
    {
      type: 'category',
      label: 'Tài nguyên',
      collapsed: true,
      items: [
        'resources/glossary',
        'resources/maturity-matrix',
        'resources/checklists',
        'resources/cross-reference',
        'resources/agentic-engineering-map',
        'resources/learning-paths',
        'resources/labs',
        'resources/rubrics',
        'resources/adoption-roadmap',
      ],
    },
  ],
};

export default sidebars;
