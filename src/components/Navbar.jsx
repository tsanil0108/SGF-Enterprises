import { useState, useEffect } from 'react';
import { navLinks, siteInfo } from '../data/siteData';
import useActiveSection from '../hooks/useActiveSection';
import scrollToHash from '../utils/scroll';
import Button from './Button';
import logo from '../../asset/image/logo.png';
import './Navbar.css';

const sectionIds = navLinks.map((l) => l.path.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile/tablet menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setOpen(false);
    scrollToHash(path);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={(e) => handleNavClick(e, '#home')}>
          <span className="navbar__logo-circle">
            <img src={logo} alt="SGF Enterprises" className="navbar__logo-img" />
          </span>
          <span className="navbar__logo-text">
            SGF<br /><span>Enterprises</span>
          </span>
        </a>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          {navLinks.map((link, i) => (
            <a
              key={link.path}
              href={link.path}
              className={`navbar__link ${activeId === link.path.slice(1) ? 'is-active' : ''}`}
              onClick={(e) => handleNavClick(e, link.path)}
              style={{ transitionDelay: open ? `${i * 0.04}s` : '0s' }}
            >
              {link.label}
            </a>
          ))}
          <div className="navbar__mobile-cta">
            <a href={`tel:${siteInfo.phone}`} className="navbar__phone navbar__phone--mobile">
              <span className="navbar__phone-icon" aria-hidden="true">&#9742;</span>
              {siteInfo.phone}
            </a>
            <Button to="#contact" variant="primary" size="sm">Enquire Now</Button>
          </div>
        </nav>

        <div className="navbar__actions">
          <a href={`tel:${siteInfo.phone}`} className="navbar__phone">
            <span className="navbar__phone-icon" aria-hidden="true">&#9742;</span>
            {siteInfo.phone}
          </a>
          <Button to="#contact" variant="primary" size="sm">Get Brochure</Button>
          <button
            className={`navbar__toggle ${open ? 'is-open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && <div className="navbar__scrim" onClick={() => setOpen(false)} />}
    </header>
  );
}
