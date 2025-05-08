import React, { useState } from 'react';
import styles from './Services.module.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('corporate');

  const services = [
    {
      id: 'corporate',
      title: 'Corporate',
      description: 'Covering head offices and the banking industry. We ensure a comfortable and productive working environment is delivered, working with both prominent local and multinational organizations.',
      image: '/images/hero/corporate-new.webp'
    },
    {
      id: 'hospitality',
      title: 'Hospitality',
      description: 'Hotels & resort industry including all associated amenities executed to give our clients a touch of sophisticated finishing, detailed fitouts & the latest architectural atmosphere.',
      image: '/images/hero/hospitality-new.webp'
    },
    {
      id: 'commercial',
      title: 'Commercial',
      description: 'Restaurants & cafes, recreational facilities & retail stores brought to life in a unique ambiance. We construct detailed interior and exterior finishing works with a close eye on quality.',
      image: '/images/hero/commercial-new.webp'
    },
    {
      id: 'residential',
      title: 'Residential',
      description: 'Renowned spaces known for luxurious touch and impeccable craftsmanship, combining both style & class. Covering residential compounds, buildings, private apartments & summerhouses.',
      image: '/images/hero/residential-new.webp'
    }
  ];

  return (
    <section className={styles.services}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className={styles.title}>Our Services</h1>
            <p className={styles.subtitle}>
              SCAS provides complete finishing contracting services including premium fit-out works, 
              electro-mechanical and special systems. From concept to completion, we apply the highest 
              engineering standards to ensure our clients' expectations are met and exceeded.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className={styles.tabContainer}>
              {services.map(service => (
                <button
                  key={service.id}
                  className={`${styles.tabButton} ${activeTab === service.id ? styles.active : ''}`}
                  onClick={() => setActiveTab(service.id)}
                >
                  {service.title}
                </button>
              ))}
            </div>
            
            <div className={styles.serviceInfo}>
              <p className={styles.serviceDescription}>
                {services.find(s => s.id === activeTab).description}
              </p>
              <a href={`/services/${activeTab}`} className={styles.viewProjectsLink}>
                View Projects
              </a>
            </div>
          </div>
          
          <div className="col-md-8">
            <div className={styles.serviceImageContainer}>
              {services.map(service => (
                <div 
                  key={service.id}
                  className={`${styles.serviceImage} ${activeTab === service.id ? styles.active : ''}`}
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className={styles.imageOverlay}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;