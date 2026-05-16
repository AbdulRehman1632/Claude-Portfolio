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
          {/* {skills.map((skill, i) => (
            <div key={i} className={styles.chip}>
              <span className={styles.icon}>{skill.icon}</span>
              <span className={styles.name}>{skill.name}</span>
            </div>
          ))} */}
          {skills.map((skill, index) => {
  const Icon = skill.icon;

  return (
    <div
      key={index}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        padding: "20px",
      }}
    >
      <Icon size={50} />
      <p className={styles.name} style={{ margin: 0, textAlign: "center" }}>
        {skill.name}
      </p>
    </div>
  );
})}
        </div>
      </div>
    </section>
  );
}
