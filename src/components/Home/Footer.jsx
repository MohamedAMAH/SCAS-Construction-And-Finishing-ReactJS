import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <img src="/images/logos/scas-white.png" alt="SCAS" />
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkColumn}>
              <h3>Company</h3>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#values">Core Values</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h3>Services</h3>
              <ul>
                <li><a href="#services">Corporate</a></li>
                <li><a href="#services">Hospitality</a></li>
                <li><a href="#services">Commercial</a></li>
                <li><a href="#services">Residential</a></li>
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h3>Portfolio</h3>
              <ul>
                <li><a href="#projects">All Projects</a></li>
                <li><a href="#projects">Featured</a></li>
                <li><a href="#projects">Recent</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h3>Connect</h3>
              <ul>
                <li><a href="#newsletter">Newsletter</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>© {currentYear} SCAS Construction & Finishing. All Rights Reserved.</p>
          <div className={styles.terms}>
            <a href="#">Privacy Policy</a>
            <span className={styles.divider}>|</span>
            <a href="#">Terms of Service</a>
          </div>
          <p className={styles.tagline}>We Transform Spaces</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;