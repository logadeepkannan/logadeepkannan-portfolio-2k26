import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Blogs() {
  useScrollReveal();

  return (
    <section id="blogs" style={{ minHeight: '80vh', paddingTop: '160px', textAlign: 'center' }}>
      <div className="section-label" style={{ justifyContent: 'center' }}>
        Blogs
      </div>
      <h2 className="section-title reveal" style={{ marginBottom: '20px' }}>
        Writing <em>Soon</em>
      </h2>
      <p style={{ color: 'var(--muted)', fontSize: '0.9rem', maxWidth: '520px', margin: '0 auto 40px' }}>
        I'm working on a collection of posts about the Power Platform, M365 development, and
        automation. Check back soon.
      </p>
      <Link to="/" className="btn-outline">
        Back to Home
      </Link>
    </section>
  );
}
