import React from 'react';
import { skills, skillscontent } from '../data/data';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-tag">02 // Skills</p>
        <h2 className="section-title">
          Tech <span>Stack</span>
        </h2>
        <p className={styles.intro}>{skillscontent.para}</p>

        <div className={styles.grid}>
          {skills.map((skill, i) => (
            <div key={i} className={styles.chip}>
              <span className={styles.icon}>{skill.icon}</span>
              <span className={styles.name}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
