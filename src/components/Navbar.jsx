import React, { useState, useEffect } from 'react';
import { namelogo, social } from '../data/data';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const scrollTo = (id) => {
    const el = document.getElementById(id === 'Home' ? 'hero' : id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <span className={styles.lt}>&lt;</span>
        <span className={styles.name}>AbdulRehman</span>
        <span className={styles.gt}>/&gt;</span>
      </div>

      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <button key={link} className={styles.link} onClick={() => scrollTo(link)}>
            {link}
          </button>
        ))}
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <i className={`fa-solid ${menuOpen ? 'fa-x' : 'fa-bars'}`}></i>
      </button>
    </nav>
  );
}
