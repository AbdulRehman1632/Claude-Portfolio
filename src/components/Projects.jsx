import React from 'react';
import { projects } from '../data/data';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <p className="section-tag">03 // Projects</p>
        <h2 className="section-title">
          My <span>Work</span>
        </h2>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div key={i} className={styles.card}>
              {/* Thumbnail */}
              <div className={styles.thumb}>
                <div className={styles.topBar} />
                <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.emoji}>{project.emoji}</span>
                {/* <div className={styles.overlay}>
                  <span className={styles.overlayText}>View Project →</span>
                </div> */}
              </div>

              {/* Body */}
              <div className={styles.body}>
                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.desc}>{project.description}</p>
                <div className={styles.links}>
                  <a
                    href={project.path}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square" /> Live Demo
                  </a>
                  {project.credentials && (
                    <a
                      href={project.credentials}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.link}
                    >
                      <i className="fa-brands fa-linkedin" /> Credentials
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
