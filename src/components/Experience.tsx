const EXPERIENCE: { year: string; title: string; company: string; desc: string; delay: string }[] = [
  {
    year: '2022 — Present',
    title: 'Motivational & Technical Speaker',
    company: 'Public Speaking Engagements',
    desc: 'Conducted technical workshops on the Microsoft 365 platform for developers, alongside webinars and seminars covering Power Platform and M365 development — for college students and IT professionals, sharing hands-on expertise and motivating audiences to grow their careers in tech.',
    delay: 'reveal-delay-1',
  },
  {
    year: '2024 — Present',
    title: 'Microsoft 365 Developer',
    company: 'ItTrident Solutions',
    desc: 'Designed and deployed 20+ Canvas Apps and model-driven apps on Dataverse, serving 500+ daily active users across operations, HR, and finance departments. Architected complex multi-stage Power Automate workflows integrating Dynamics 365 CRM, SharePoint, and third-party REST APIs — reducing manual processing time by over 65%. Built and published interactive Power BI dashboards with row-level security and custom DAX measures, consumed weekly by C-level stakeholders for strategic decision-making. Led solution architecture reviews, enforced ALM best practices using Azure DevOps pipelines for environment-based deployments, and mentored two junior developers on Power Fx and Dataverse data modelling.',
    delay: 'reveal-delay-2',
  },
  {
    year: '2023 — 2024',
    title: 'Freelance Frontend Developer',
    company: 'Self-Employed / Remote Clients',
    desc: 'Worked independently with 8+ clients across e-commerce, healthcare, and SaaS industries — designing and building responsive web interfaces using React, TypeScript, and CSS3. Translated Figma mockups into pixel-perfect, accessible UIs, integrated RESTful APIs for dynamic data rendering, and optimised frontend performance achieving sub-2s load times. Managed full project lifecycle from scoping and client communication to delivery and post-launch support, consistently receiving 5-star feedback for code quality and on-time delivery.',
    delay: 'reveal-delay-3',
  },
  {
    year: '2022 — 2024',
    title: 'Freelance Graphic Designer',
    company: 'Self-Employed / Remote Clients',
    desc: 'Delivered creative design solutions for 15+ clients across social media, branding, and marketing industries — specialising in Canva-based design systems, brand kits, and content templates. Produced high-impact social media graphics, pitch decks, posters, and promotional materials that elevated client brand identity. Developed reusable Canva template libraries adopted by small businesses to maintain visual consistency across platforms, reducing their content creation time by 50%. Managed end-to-end client briefs from concept and moodboarding through to final delivery, building a strong reputation for clean, modern aesthetics and fast turnaround.',
    delay: 'reveal-delay-4',
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-label">Experience</div>
      <h2 className="section-title reveal">
        Where I've <em>Worked</em>
      </h2>
      <div className="exp-list">
        {EXPERIENCE.map((e) => (
          <div className={`exp-item reveal ${e.delay}`} key={e.title}>
            <div className="exp-year">{e.year}</div>
            <div className="exp-right">
              <div className="exp-title">{e.title}</div>
              <div className="exp-company">{e.company}</div>
              <div className="exp-desc">{e.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
