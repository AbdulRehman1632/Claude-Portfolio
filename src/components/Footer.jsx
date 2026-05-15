import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <span className={styles.lt}>&lt;</span>
        AbdulRehman
        <span className={styles.gt}>/&gt;</span>
      </div>
      <p className={styles.copy}>
        © {year} · Crafted with <span className={styles.heart}>♥</span> by Abdul Rehman · Pakistan 🇵🇰
      </p>
      <a
        href="/cv/Abdul-Rehman-CV.pdf"
        download
        className={styles.cvBtn}
      >
        <i className="fa-solid fa-download" /> CV
      </a>
    </footer>
  );
}
