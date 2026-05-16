import React, { useState, useEffect } from 'react';
import { info, social } from '../data/data';
import styles from './Hero.module.css';

export default function Hero() {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setBlink(b => !b), 500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      {/* background glows */}
      <div className={`${styles.glow} ${styles.glow1}`} />
      <div className={`${styles.glow} ${styles.glow2}`} />

      <div className={`container ${styles.inner}`}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.tag}>
            <span className={styles.tagDot} />
            Available for work
          </div>

          <h1 className={styles.heading}>
            <span className={styles.hi}>Hi, I'm </span>
            <span className={styles.name}>Abdul Rehman!</span>
          </h1>

          <p className={styles.role}>// Front-End Developer</p>

          <p className={styles.para}>{info.Paragraph}</p>

          <div className={styles.ctas}>
            <a href="#projects" className="btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects').scrollIntoView({behavior:'smooth'}); }}>
              View Projects
            </a>
            <a
              href="/cv/Abdul_Rehman_Resume.pdf"
              download
              className="btn-cv"
            >
              <i className="fa-solid fa-download" /> Download CV
            </a>
            <a href="#contact" className="btn-outline" onClick={e => { e.preventDefault(); document.getElementById('contact').scrollIntoView({behavior:'smooth'}); }}>
              Hire Me
            </a>
          </div>

          <div className={styles.socialRow}>
            {social.map((s, i) => (
              <a key={i} href={s.path} target="_blank" rel="noreferrer" className="social-icon">
                <i className={s.logo}></i>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — code card */}
        <div className={styles.right}>
          <div className={styles.codeCard}>
            <div className={styles.dots}>
              <span className={`${styles.dot} ${styles.dotR}`} />
              <span className={`${styles.dot} ${styles.dotY}`} />
              <span className={`${styles.dot} ${styles.dotG}`} />
            </div>
            <div className={styles.codeLine}>
              <span className={styles.comment}>{'// portfolio.js'}</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.kw}>const</span>
              <span className={styles.plain}> dev </span>
              <span className={styles.op}>=</span>
              <span className={styles.bracket}> {'{'}</span>
            </div>
            <div className={styles.codeLine}>
              &nbsp;&nbsp;<span className={styles.kw}>name</span>
              <span className={styles.op}>:</span>
              <span className={styles.str}> "Abdul Rehman"</span>,
            </div>
            <div className={styles.codeLine}>
              &nbsp;&nbsp;<span className={styles.kw}>role</span>
              <span className={styles.op}>:</span>
              <span className={styles.str}> "Front-End Developer"</span>,
            </div>
            <div className={styles.codeLine}>
              &nbsp;&nbsp;<span className={styles.kw}>stack</span>
              <span className={styles.op}>:</span>
              <span className={styles.bracket}> [</span>
              <span className={styles.str}>"React"</span>,
              <span className={styles.str}> "MERN"</span>
              <span className={styles.bracket}>]</span>,
            </div>
            <div className={styles.codeLine}>
              &nbsp;&nbsp;<span className={styles.kw}>ai</span>
              <span className={styles.op}>:</span>
              <span className={styles.bracket}> [</span>
              <span className={styles.str}>"ElevenLabs"</span>,
              <span className={styles.str}> "n8n"</span>
              <span className={styles.bracket}>]</span>,
            </div>
            <div className={styles.codeLine}>
              &nbsp;&nbsp;<span className={styles.kw}>location</span>
              <span className={styles.op}>:</span>
              <span className={styles.str}> "Pakistan 🇵🇰"</span>,
            </div>
            <div className={styles.codeLine}>
              &nbsp;&nbsp;<span className={styles.kw}>status</span>
              <span className={styles.op}>:</span>
              <span className={styles.val}> available</span>
              <span className={styles.cursor} style={{ opacity: blink ? 1 : 0 }}> _</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.bracket}>{'}'}</span>
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>2+</span>
              <span className={styles.statLabel}>Years Exp.</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>10+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>∞</span>
              <span className={styles.statLabel}>Coffee Cups</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
