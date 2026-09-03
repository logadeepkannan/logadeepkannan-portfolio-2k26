const SKILL_CATEGORIES: { title: string; delay: string; tags: string[] }[] = [
  {
    title: 'Power Platform',
    delay: 'reveal-delay-1',
    tags: ['Power Apps', 'Power Automate', 'Power BI', 'Power Pages', 'Dataverse'],
  },
  {
    title: 'Copilot Studio & AI',
    delay: 'reveal-delay-2',
    tags: [
      'Copilot Studio',
      'Generative AI',
      'Power Virtual Agents',
      'Prompt Engineering',
      'Azure OpenAI',
      'Bot Framework',
      'Conversational AI',
    ],
  },
  {
    title: 'Microsoft 365',
    delay: 'reveal-delay-3',
    tags: ['SharePoint', 'Teams', 'Outlook', 'Azure AD', 'OneDrive', 'Excel Online'],
  },
  {
    title: 'SPFx / Add-ins',
    delay: 'reveal-delay-4',
    tags: ['SPFx', 'PnP JS', 'Fluent UI', 'Yeoman', 'Webpack', 'Node.js', 'App Catalog'],
  },
  {
    title: 'Azure & Integrations',
    delay: 'reveal-delay-1',
    tags: ['Azure Logic Apps', 'Azure Functions', 'REST APIs', 'Custom Connectors', 'SQL Server', 'Dynamics 365'],
  },
  {
    title: 'Dev & Tools',
    delay: 'reveal-delay-2',
    tags: ['Power Fx', 'JSON', 'Git', 'Azure DevOps', 'Figma', 'ALM / Solutions'],
  },
  {
    title: 'Frontend Development',
    delay: 'reveal-delay-3',
    tags: ['React', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'Backend Development',
    delay: 'reveal-delay-4',
    tags: ['Python', 'MySQL'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label">Skills</div>
      <h2 className="section-title reveal">
        What I <em>Work With</em>
      </h2>
      <div className="skills-grid">
        {SKILL_CATEGORIES.map((cat) => (
          <div className={`skill-category reveal ${cat.delay}`} key={cat.title}>
            <div className="skill-cat-title">{cat.title}</div>
            <div className="skill-tags">
              {cat.tags.map((tag) => (
                <span className="skill-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
