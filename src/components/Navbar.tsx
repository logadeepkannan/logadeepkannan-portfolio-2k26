import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SECTION_ITEMS: { id: string; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === '/';

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) setMenuOpen(false);
  };

  return (
    <nav id="navbar">
      <Link to="/" className="nav-logo">
        <img src="/logo-l.png" alt="Logadeep Kannan" className="nav-logo-img" />
      </Link>
      <ul
        className="nav-links"
        style={
          menuOpen
            ? {
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                top: '70px',
                right: '24px',
                background: '#0d1117',
                border: '1px solid rgba(255,255,255,0.06)',
                padding: '24px',
                borderRadius: '8px',
                gap: '20px',
                zIndex: 200,
              }
            : undefined
        }
      >
        {SECTION_ITEMS.map((item) => (
          <li key={item.id}>
            <a href={onHome ? `#${item.id}` : `/#${item.id}`} onClick={handleLinkClick}>
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <Link to="/blogs" onClick={handleLinkClick}>
            Blogs
          </Link>
        </li>
      </ul>
      <button className="nav-mobile-btn" onClick={() => setMenuOpen((v) => !v)}>
        Menu
      </button>
    </nav>
  );
}
