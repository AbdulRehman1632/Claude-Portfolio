import React, { useState } from 'react';
import { contactContent, contact, social } from '../data/data';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up to EmailJS or Formspree by replacing this block
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact">
      <div className="container">
        <p className="section-tag">04 // Contact</p>
        <h2 className="section-title">
          Reach Out to <span>Me!</span>
        </h2>

        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.left}>
            <p className={styles.para}>
              I am always open to discussing
              <span> new projects, opportunities in tech world, partnerships</span>
              {' '}and more so <span>mentorship.</span>
            </p>

            <div className={styles.items}>
              {contact.map((c, i) => (
                <div key={i} className={styles.item}>
                  <div className={styles.iconBox}>
                    <i className={c.icon}></i>
                  </div>
                  <div>
                    <p className={styles.label}>{c.name}</p>
                    <p className={styles.value}>{c.content}</p>
                  </div>
                </div>
              ))}
              <div className={styles.item}>
                <div className={styles.iconBox}>
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p className={styles.label}>Location:</p>
                  <p className={styles.value}>Pakistan 🇵🇰</p>
                </div>
              </div>
            </div>

            <div className={styles.socialRow}>
              {social.map((s, i) => (
                <a key={i} href={s.path} target="_blank" rel="noreferrer" className="social-icon">
                  <i className={s.logo}></i>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row2}>
              <div className={styles.group}>
                <label className={styles.flabel}>Your Name</label>
                <input
                  className={styles.finput}
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className={styles.group}>
                <label className={styles.flabel}>Your Email</label>
                <input
                  className={styles.finput}
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className={styles.group}>
              <label className={styles.flabel}>Subject</label>
              <input
                className={styles.finput}
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
              />
            </div>

            <div className={styles.group}>
              <label className={styles.flabel}>Message</label>
              <textarea
                className={`${styles.finput} ${styles.textarea}`}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button type="submit" className="btn-primary">
              {sent ? '✓ Message Sent!' : 'Send Message →'}
            </button>

            {sent && (
              <p className={styles.successMsg}>
                Thanks! Abdul will get back to you soon 🚀
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
