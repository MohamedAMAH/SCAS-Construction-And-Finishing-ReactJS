import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Who We Are</h2>
        </div>
        
        <div className={styles.content}>
          <div className={styles.text}>
            <h3 className={styles.subtitle}>About Us</h3>
            <p>
              SCAS is recognized as a premier contractor renowned for delivering
              excellence in construction, high-end finishing and fit outs including
              advanced electromechanical works. Our reputation is built on a legacy of
              precision, sophistication, and an unwavering commitment to quality and
              reliability.
            </p>
            <p>
              Our team of professional talent continues to lead various
              projects to new heights, bringing us immense pride and joy. We proudly
              serve sectors as varied as buildings, corporate offices, hospitality,
              commercial and industrial facilities; further we have expanded to meet
              the growing demands of banking, medical, and educational institutions,
              solidifying our industry presence.
            </p>
            <p>
              Driven by core values and a
              commitment to surpassing client expectations; <strong>We Transform Spaces.</strong>
            </p>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.stat}>
              <h3 className={styles.number}>308,300+</h3>
              <p className={styles.label}>Total Area Completed (sqm)</p>
            </div>
            <div className={styles.stat}>
              <h3 className={styles.number}>127,400+</h3>
              <p className={styles.label}>Total Area In Progress (sqm)</p>
            </div>
            <div className={styles.stat}>
              <h3 className={styles.number}>435,700+</h3>
              <p className={styles.label}>Total Built Up Area (sqm)</p>
            </div>
            <div className={styles.stat}>
              <h3 className={styles.number}>30%+</h3>
              <p className={styles.label}>Repeat Clients</p>
            </div>
            <div className={styles.stat}>
              <h3 className={styles.number}>285+</h3>
              <p className={styles.label}>Satisfied Clients</p>
            </div>
            <div className={styles.stat}>
              <h3 className={styles.number}>302+</h3>
              <p className={styles.label}>Completed Projects</p>
            </div>
            <div className={styles.stat}>
              <h3 className={styles.number}>18+</h3>
              <p className={styles.label}>Ongoing Projects</p>
            </div>
            <div className={styles.stat}>
              <h3 className={styles.number}>320+</h3>
              <p className={styles.label}>Total Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;