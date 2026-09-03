import { useEffect, useRef, useState } from 'react';

type Category = 'all' | 'enterprise' | 'intranet' | 'chatbot' | 'automation' | 'spfx';

interface Project {
  num: string;
  title: string;
  desc: string;
  stack: string[];
  category: Exclude<Category, 'all'>;
  delay: string;
}

const FILTERS: { category: Category; label: string; count: number }[] = [
  { category: 'all', label: 'All', count: 6 },
  { category: 'enterprise', label: 'Enterprise App', count: 2 },
  { category: 'intranet', label: 'Intranet Site', count: 1 },
  { category: 'chatbot', label: 'Chat Bot', count: 1 },
  { category: 'automation', label: 'Automation', count: 1 },
  { category: 'spfx', label: 'SPFx / Add-ins', count: 1 },
];

const PROJECTS: Project[] = [
  {
    num: '01 / ENTERPRISE APP',
    title: 'IT Help Desk Portal',
    desc: 'End-to-end IT HelpDesk workflow built using Power Automate and SharePoint. Automated ticket creation, issue tracking, and approval processes—improving response time and reducing manual effort by 80%',
    stack: ['Power Automate', 'SharePoint', 'Teams', 'Azure AD'],
    category: 'enterprise',
    delay: 'reveal-delay-1',
  },
  {
    num: '02 / ENTERPRISE APP',
    title: 'Customer Relationship Management App',
    desc: 'Canvas app built for managing customer relationships, tracking interactions, and handling business data efficiently. Integrated with SharePoint for data storage and Power Automate for workflow automation and notifications.',
    stack: ['Power Apps', 'SharePoint', 'Power BI', 'Power Automate', 'Excel Online'],
    category: 'enterprise',
    delay: 'reveal-delay-2',
  },
  {
    num: '03 / INTRANET SITE',
    title: 'Corporate Intranet site',
    desc: 'Modern SharePoint Online intranet built with custom branding, department news hubs, quick links, and employee directory. Increased internal engagement by 45% within the first quarter of launch.',
    stack: ['SharePoint Online', 'Teams', 'Azure AD'],
    category: 'intranet',
    delay: 'reveal-delay-3',
  },
  {
    num: '04 / CHAT BOT',
    title: 'AskHub Chatbot',
    desc: 'Our AI-powered Copilot chatbot, built using Copilot Studio and integrated with Microsoft Teams and SharePoint, is designed to provide instant, accurate answers by leveraging content across the entire intranet ecosystem—including all associated subsites.',
    stack: ['Copilot Studio', 'Teams', 'SharePoint Online'],
    category: 'chatbot',
    delay: 'reveal-delay-4',
  },
  {
    num: '05 / AUTOMATION',
    title: 'Employee Daily Timelog Automation',
    desc: 'End-to-end workflow for automating employee daily timelog submissions, built on Power Automate and SharePoint. Automated IT provisioning, document collection, and manager approvals — reducing administrative burden by 60%.',
    stack: ['Power Automate', 'SharePoint Online', 'Excel Online', 'Azure AD'],
    category: 'automation',
    delay: 'reveal-delay-1',
  },
  {
    num: '06 / SPFX & ADD-INS',
    title: 'Custom SharePoint Web Part',
    desc: 'Built a React-based SPFx web part for an organization-wide announcement board with rich text, scheduling, and audience targeting. Deployed via App Catalog across 3,000+ users with zero downtime.',
    stack: ['SPFx', 'React', 'TypeScript', 'SharePoint Online'],
    category: 'spfx',
    delay: 'reveal-delay-2',
  },
];

export default function Projects() {
  const [active, setActive] = useState<Category>('all');
  const gridRef = useRef<HTMLDivElement>(null);

  const visibleCount = PROJECTS.filter((p) => active === 'all' || p.category === active).length;

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = grid.querySelectorAll<HTMLElement>('.project-card[data-category]');
    cards.forEach((card) => {
      const match = active === 'all' || card.dataset.category === active;
      if (match) {
        card.classList.add('fade-in');
        const timer = setTimeout(() => card.classList.remove('fade-in'), 400);
        return () => clearTimeout(timer);
      }
    });
  }, [active]);

  return (
    <section id="projects">
      <div className="section-label">Projects</div>
      <h2 className="section-title reveal">
        Things I've <em>Built</em>
      </h2>

      <div className="project-filters reveal">
        {FILTERS.map((f) => (
          <button
            key={f.category}
            className={`filter-btn${active === f.category ? ' active' : ''}`}
            onClick={() => setActive(f.category)}
          >
            <span className="filter-dot"></span> {f.label} <span className="filter-count">{f.count}</span>
          </button>
        ))}
      </div>

      <div className="projects-grid" id="projectsGrid" ref={gridRef}>
        {PROJECTS.map((p) => {
          const match = active === 'all' || p.category === active;
          return (
            <div
              key={p.title}
              className={`project-card reveal ${p.delay}${match ? '' : ' hidden'}`}
              data-category={p.category}
            >
              <div className="project-num">{p.num}</div>
              <div className="project-title">{p.title}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-stack">
                {p.stack.map((s) => (
                  <span className="stack-tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          );
        })}

        <div className={`projects-empty${visibleCount === 0 ? ' visible' : ''}`} id="projectsEmpty">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <p>No projects in this category yet.</p>
        </div>
      </div>
    </section>
  );
}
