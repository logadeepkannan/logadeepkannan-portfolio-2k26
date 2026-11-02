const CERTIFICATIONS: {
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  image: string;
  verifyUrl?: string;
  delay: string;
}[] = [
  {
    title: 'Microsoft Certified: Power Platform Fundamentals',
    issuer: 'Microsoft',
    year: '2026',
    credentialId: '7EDFDCED199C0417',
    image: '/certs/pl-900.jpg',
    verifyUrl:
      'https://learn.microsoft.com/api/credentials/share/en-us/LogadeepKannan-4467/7EDFDCED199C0417?sharingId=BC945A02A0572BBA',
    delay: 'reveal-delay-1',
  },
  {
    title: 'Copilot Studio Agent Academy — Recruit',
    issuer: 'Microsoft',
    year: '2026',
    image: '/certs/copilot-studio-agent-academy-recruit.png',
    delay: 'reveal-delay-2',
  },
];

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="section-label">Certifications</div>
      <h2 className="section-title reveal">
        Credentials I've <em>Earned</em>
      </h2>
      <div className="certs-grid">
        {CERTIFICATIONS.map((c) => {
          const Tag = c.verifyUrl ? 'a' : 'div';
          return (
            <Tag
              {...(c.verifyUrl ? { href: c.verifyUrl, target: '_blank', rel: 'noreferrer' } : {})}
              className={`cert-card reveal ${c.delay}`}
              key={c.title}
            >
              <div className="cert-image-wrap">
                <img src={c.image} alt={`${c.title} certificate`} className="cert-image" loading="lazy" />
              </div>
              <div className="cert-body">
                <div className="cert-title">{c.title}</div>
                <div className="cert-issuer">{c.issuer}</div>
                <div className="cert-meta">
                  Earned {c.year}
                  {c.credentialId ? ` · ID: ${c.credentialId}` : ''}
                </div>
                {c.verifyUrl && (
                  <div className="cert-link">
                    Verify Credential
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </div>
                )}
              </div>
            </Tag>
          );
        })}
      </div>
    </section>
  );
}
