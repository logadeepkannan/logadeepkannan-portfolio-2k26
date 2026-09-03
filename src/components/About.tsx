const CARDS: { num: string; suffix: string; desc: string; delay: string }[] = [
  {
    num: '02',
    suffix: '+',
    desc: 'Years of professional experience delivering Power Platform solutions across enterprise environments',
    delay: 'reveal-delay-2',
  },
  {
    num: '15',
    suffix: '+',
    desc: 'Power Apps & Automate solutions deployed to streamline real business operations',
    delay: 'reveal-delay-3',
  },
  {
    num: '100',
    suffix: '%',
    desc: 'Committed to building scalable, maintainable, and adoption-friendly Power Platform solutions',
    delay: 'reveal-delay-4',
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="section-label">About Me</div>
      <h2 className="section-title reveal">
        Who I <em>Am</em>
      </h2>
      <div className="about-grid">
        <div className="about-text reveal reveal-delay-1">
          <p>
            I'm a <strong>Microsoft Power Platform Developer</strong> based in{' '}
            <strong>Chennai, Tamil Nadu, India</strong> with a passion for turning complex
            business challenges into elegant, automated solutions. My focus is on{' '}
            <span className="highlight">Power Apps, Power Automate, and Power BI</span> —
            building tools that actually move the needle.
          </p>
          <p>
            With hands-on experience across enterprise environments, I've designed and delivered
            low-code applications, end-to-end workflow automations, and insightful dashboards
            that help teams work smarter — not harder.
          </p>
          <p>
            When I'm not building on the Power Platform, I'm exploring Microsoft 365
            integrations, learning about Copilot Studio, or figuring out how to automate the next
            repetitive process I encounter.
          </p>
          <div className="about-info">
            <div className="info-row">
              <span className="label">Location</span> Chennai, Tamil Nadu, India
            </div>
            <div className="info-row">
              <span className="label">Email</span>{' '}
              <a href="mailto:logadeepkannan2024@gmail.com">logadeepkannan2024@gmail.com</a>
            </div>
            <div className="info-row">
              <span className="label">LinkedIn</span>{' '}
              <a href="https://linkedin.com/in/logadeep-kannan-5974131aa" target="_blank" rel="noreferrer">
                linkedin.com/in/logadeep-kannan-5974131aa
              </a>
            </div>
          </div>
        </div>
        <div className="about-visual">
          {CARDS.map((c) => (
            <div className={`about-card reveal ${c.delay}`} key={c.num}>
              <div className="card-num">
                {c.num}
                <span>{c.suffix}</span>
              </div>
              <div className="card-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
