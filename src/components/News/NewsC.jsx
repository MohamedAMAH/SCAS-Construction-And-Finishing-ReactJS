import React, { useState } from 'react';
import { Eye, FileText } from 'lucide-react';
import styles from './NewsC.module.css';

const NewsC = () => {
  const [email, setEmail] = useState('');
  
  const newsletters = [
    {
      id: 1,
      title: 'Conrad Hotel',
      date: 'May 15, 2025',
      pdfUrl: '/Newsletter/April \'25 Newsletter.pdf'
    },
    {
      id: 2,
      title: 'Knauf Office Development',
      date: 'April 22, 2025',
      pdfUrl: '/Newsletter/March \'25.pdf'
    },
    {
      id: 3,
      title: 'Commercial Division Growth',
      date: 'March 10, 2025',
      pdfUrl: '/Newsletter/Febraury 2025 Newsletter.pdf'
    },
    {
      id: 4,
      title: 'Q1 Residential Update',
      date: 'February 5, 2025',
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
        <div className="row mb-4">
          <div className="col-lg-12 text-center">
            <div className={styles.titleContainer}>
              <img 
                src="/Website Material/SCAS Brand Identity/Graphic Elements/SCAS_Buildings_Dark Grey.png"
                alt=""
                className={styles.graphicElement}
              />
              <h1 className={styles.title}>Company Updates</h1>
            </div>
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
                      <span className={styles.pdfWatermark}>PDF</span>
                      <FileText size={64} className={styles.pdfIcon} />
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
                        <Eye size={16} />
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
              <div className={styles.subscribeTitleContainer}>
                <img 
                  src="/Website Material/SCAS Brand Identity/Graphic Elements/SCAS_Hospitality_Dark Grey.png"
                  alt=""
                  className={styles.subscribeGraphic}
                />
                <h2 className={styles.subscribeTitle}>Subscribe to Our Newsletter</h2>
              </div>
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