import React from 'react';
import { about, social } from '../data/data';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <p className="section-tag">01 // About me</p>
        <h2 className="section-title">
          About <span>Me!</span>
        </h2>

        <div className={styles.grid}>
          {/* Avatar */}
          <div className={styles.avatarWrap}>
            <div className={styles.avatarBox}>
              <span className={styles.avatarText}>&lt;AR/&gt;</span>
              <div className={styles.avatarGlow} />
            </div>
            <div className={styles.avatarShadow} />

            <div className={styles.socialRow}>
              {social.map((s, i) => (
                <a key={i} href={s.path} target="_blank" rel="noreferrer" className="social-icon">
                  <i className={s.logo}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Text */}
          <div className={styles.content}>
            <p className={styles.subHeading}>{about.SubHeading}</p>
            <ul className={styles.list}>
              {about.list.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  <span className={styles.arrow}>▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
