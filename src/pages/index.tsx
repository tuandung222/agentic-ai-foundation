import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const parts = [
  ['00', 'Mental Model', 'Tách bạch LLM, assistant, agent và agentic system như các tầng kỹ thuật khác nhau.', '/docs/00-mental-model/01-overview'],
  ['01', 'Agent Anatomy', 'Planner, executor, tools, memory, evaluator và human oversight trong một vòng lặp agent.', '/docs/01-agent-anatomy/01-overview'],
  ['02', 'Context Engineering', 'Thiết kế context, instruction files, skills, workflows và memory để agent làm đúng việc.', '/docs/02-context-engineering/01-overview'],
  ['03', 'MCP và Tools', 'MCP client, server, resources, tool schema, capability design và quyền hạn.', '/docs/03-mcp-tool-protocols/01-overview'],
  ['04', 'A2A và ACP', 'Handoff, delegation, identity, shared state và giao tiếp giữa các agent.', '/docs/04-agent-to-agent/01-overview'],
  ['05', 'Multi-agent', 'Team mode, swarm, planner-coder-reviewer và các lỗi phối hợp thường gặp.', '/docs/05-multi-agent-systems/01-overview'],
  ['06', 'Agent-ready Repo', 'Cách biến một repo thành môi trường mà agent có thể đọc, sửa, test và review an toàn.', '/docs/06-agent-ready-repositories/01-overview'],
  ['07', 'Evaluation', 'Trace-based evals, golden tasks, replay, observability và debugging agent runs.', '/docs/07-evaluation-observability/01-overview'],
  ['08', 'Security', 'Prompt injection, tool injection, data exfiltration, confused deputy và governance.', '/docs/08-security-governance/01-overview'],
  ['09', 'Ecosystem Map', 'Phân loại protocol, convention, framework, product feature và marketing label.', '/docs/09-ecosystem-map/01-overview'],
  ['10', 'Case Studies', 'Áp dụng vào coding agent, research agent, pipeline nhiều agent và enterprise agent.', '/docs/10-case-studies/01-overview'],
];

function HomepageHeader(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.heroTitle}>{siteConfig.title}</Heading>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <div className={styles.heroButtons}>
          <Link className={`button button--primary button--lg ${styles.heroButton}`} to="/docs/intro">Bắt đầu đọc</Link>
          <Link className={`button button--secondary button--lg ${styles.heroButton}`} to="/docs/06-agent-ready-repositories/01-overview">Xem playbook</Link>
        </div>
      </div>
    </header>
  );
}

function PartGrid(): ReactNode {
  return (
    <section className={styles.gridSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Mười một phần bài giảng</Heading>
        <p className={styles.sectionSubtitle}>
          Lộ trình đi từ trực giác nền tảng tới thiết kế repo, protocol, multi-agent, evaluation và governance.
        </p>
        <div className={styles.grid}>
          {parts.map(([number, title, description, to]) => (
            <Link key={number} to={to} className={styles.card}>
              <div className={styles.cardNumber}>PHẦN {number}</div>
              <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
              <p className={styles.cardDescription}>{description}</p>
              <span className={styles.badgeReady}>Đang xây dựng</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophySection(): ReactNode {
  return (
    <section className={styles.philosophy}>
      <div className="container">
        <blockquote className={styles.quote}>
          <p><em>Agentic Engineering bắt đầu khi ta không còn chỉ hỏi model trả lời gì, mà hỏi toàn bộ hệ thống quan sát, quyết định, dùng công cụ, ghi nhớ, tự kiểm tra và chịu trách nhiệm ra sao.</em></p>
        </blockquote>
        <p className={styles.philosophyText}>
          Tài liệu này xem agent như một hệ thống phần mềm có runtime, context, tool boundary, evaluation, security và governance. Vì vậy, mỗi khái niệm đều được giải thích theo ba lớp: trực giác, mô hình kỹ thuật và checklist áp dụng vào repo thật.
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline as string}>
      <HomepageHeader />
      <main>
        <PartGrid />
        <PhilosophySection />
      </main>
    </Layout>
  );
}
