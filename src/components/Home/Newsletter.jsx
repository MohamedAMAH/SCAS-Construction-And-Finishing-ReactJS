import { useState } from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const newsletters = [
    { name: 'April 2025', file: 'April \'25 Newsletter.pdf' },
    { name: 'March 2025', file: 'March \'25.pdf' },
    { name: 'February 2025', file: 'Febraury 2025 Newsletter.pdf' },
    { name: 'January 2025', file: 'Janurary 2025.pdf' }
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send the email to your server
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className={styles.newsletter} id="newsletter">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.subscribeSection}>
            <h2 className={styles.title}>Stay Updated</h2>
            <p className={styles.description}>
              Subscribe to our newsletter to receive the latest updates, project showcases, and industry insights.
            </p>
            
            {!submitted ? (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    required
                    className={styles.input}
                  />
                  <button type="submit" className={styles.submitButton}>Subscribe</button>
                </div>
              </form>
            ) : (
              <div className={styles.thankYou}>
                <p>Thank you for subscribing! You'll receive our next newsletter soon.</p>
              </div>
            )}
          </div>
          
          <div className={styles.archiveSection}>
            <h3 className={styles.archiveTitle}>Newsletter Archive</h3>
            <ul className={styles.archiveList}>
              {newsletters.map((item, index) => (
                <li key={index} className={styles.archiveItem}>
                  <a href={`/Website Material/Newsletter/${item.file}`} target="_blank" rel="noopener noreferrer" className={styles.archiveLink}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.pdfIcon}>
                      <path d="M14 4.5V14C14 14.5304 13.7893 15.0391 13.4142 15.4142C13.0391 15.7893 12.5304 16 12 16H4C3.46957 16 2.96086 15.7893 2.58579 15.4142C2.21071 15.0391 2 14.5304 2 14V2C2 1.46957 2.21071 0.960859 2.58579 0.585786C2.96086 0.210714 3.46957 0 4 0H9.5L14 4.5Z" fill="#E53935"/>
                      <path d="M9 0V4.5H13.5" fill="#FF8A80"/>
                      <path d="M6.35 12.65C6.35 12.5 6.35 12.3 6.35 12.15C6.35 12 6.35 11.85 6.35 11.7C6.35 11.55 6.35 11.4 6.35 11.3C6.35 11.2 6.35 11.05 6.35 10.9H8.05V12.65H6.35ZM6.35 9.15V7.5H8.5V9.15H6.35ZM5 14H9.85V6H5V14Z" fill="white"/>
                    </svg>
                    {item.name} Newsletter
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;