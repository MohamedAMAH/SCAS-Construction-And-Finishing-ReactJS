import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className="container text-center">
        <h1 className={styles.title}>Ready to transform your space?</h1>
        <p className={styles.description}>
          Let's discuss how SCAS Construction and Finishing can bring your vision to life.
          Our team of experts is ready to deliver exceptional results for your next project.
        </p>
        
        <div className={styles.actions}>
          <a href="/contact" className={styles.primaryButton}>
            GET IN TOUCH
          </a>
          <a href="/projects" className={styles.secondaryButton}>
            VIEW OUR PROJECTS
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;