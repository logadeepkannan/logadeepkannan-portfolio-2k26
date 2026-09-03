const COUNTERS: { value: string; suffix: string; label: string }[] = [
  { value: '02', suffix: '+', label: 'Years Exp.' },
  { value: '12', suffix: '+', label: 'Projects' },
  { value: '04', suffix: '+', label: 'Clients' },
];

export default function Hero() {
  return (
    <section id="home">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="hero-content">
        <div className="hero-tag">Available for work</div>
        <h1 className="hero-name">
          Logadeep
          <br />
          <span className="line2">Kannan</span>
        </h1>
        <p className="hero-tagline">
          Microsoft Power Platform Developer —<br />
          <span>I build intelligent, low-code solutions</span> that automate business processes
          and drive digital transformation.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line"></div>
        Scroll to explore
      </div>
      <div className="hero-counter">
        {COUNTERS.map((c) => (
          <div className="counter-item" key={c.label}>
            <div className="counter-num">
              {c.value}
              <span>{c.suffix}</span>
            </div>
            <div className="counter-label">{c.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
