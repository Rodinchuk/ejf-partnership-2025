// Компонент на Next.js

import styles from './AboutBEST.module.css';

export default function AboutBESTen() {
  return (
    <section  className={styles.section}> 
      <h2 className={styles.title}>Event organizer</h2>
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.textBlock}>
          <h3 className={styles.subtitle}>BEST Lviv</h3>
          <p className={styles.description}>
            (Board of European Students of Technology) is a constantly growing non-profit and non-political organization that brings together students of technical specialties. Our mission is to develop students through knowledge exchange and cooperation between companies, universities, and students in Europe.

          </p>
          <a href="https://www.best-lviv.org.ua/" className={styles.link}>
            View more on website ↗
          </a>
        </div>
        <div className={styles.infoBlock}>
          <img
            src="./images/best-logo.svg"
            className={styles.logo}
          />
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>84</span>
              <span className={styles.statLabel}>Local BEST Groups</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>30</span>
              <span className={styles.statLabel}>countries</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>36</span>
              <span className={styles.statLabel}>years of experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
