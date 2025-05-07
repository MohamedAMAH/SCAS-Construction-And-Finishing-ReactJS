import React, { useState } from 'react';
import styles from './NewsC.module.css';

const NewsC = () => {
  const [email, setEmail] = useState('');
  
  const newsletters = [
    {
      id: 1,
      title: 'SCAS Completes Conrad Hotel Renovation',
      date: 'May 15, 2025',
      image: '/images/projects/conrad.jpg',
      pdfUrl: '/Newsletter/April \'25 Newsletter.pdf'
    },
    {
      id: 2,
      title: 'New Corporate Office Project with Knauf',
      date: 'April 22, 2025',
      image: '/images/projects/knauf.jpg',
      pdfUrl: '/Newsletter/March \'25.pdf'
    },
    {
      id: 3,
      title: 'Expansion of Services in Commercial Sector',
      date: 'March 10, 2025',
      image: '/images/projects/blooms-com.jpg',
      pdfUrl: '/Newsletter/Febraury 2025 Newsletter.pdf'
    },
    {
      id: 4,
      title: 'Residential Projects Overview for Q1',
      date: 'February 5, 2025',
      image: '/images/projects/hacienda.jpg',
      pdfUrl: '/Newsletter/Janurary 2025.pdf'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <section className={styles.newsContainer}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <h1 className={styles.title}>Company Updates</h1>
            <p className={styles.subtitle}>
              Stay informed about our latest projects, achievements, and industry insights.
              Our monthly newsletters provide valuable information about the construction and finishing industry.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="row g-4">
              {newsletters.map((newsletter) => (
                <div key={newsletter.id} className="col-md-6">
                  <div className={styles.newsletterCard}>
                    <div className={styles.imageContainer}>
                      <img 
                        src={newsletter.image} 
                        alt={newsletter.title} 
                        className={styles.newsletterImage}
                      />
                    </div>
                    <div className={styles.cardContent}>
                      <span className={styles.date}>{newsletter.date}</span>
                      <h3 className={styles.cardTitle}>{newsletter.title}</h3>
                      <a 
                        href={newsletter.pdfUrl} 
                        download 
                        className={styles.downloadLink}
                      >
                        <span>View PDF</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.subscribeSection}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className={styles.subscribeTitle}>Subscribe to Our Newsletter</h2>
              <p className={styles.subscribeText}>
                Receive monthly updates on our latest projects, industry trends, and company news.
              </p>
              
              <form onSubmit={handleSubmit} className={styles.subscribeForm}>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className={styles.emailInput}
                  />
                  <button type="submit" className={styles.subscribeButton}>
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsC;