import { useState } from 'react';
import styles from './Services.module.css';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      name: "Corporate",
      description: "Covering head offices and the banking industry. Ensure a comfortable and productive working environment is delivered. Working on both prominent local and multinational organizations whom we are proud to be associated with.",
      image: "corporate.jpg"
    },
    {
      name: "Hospitality",
      description: "Hotels & resort industry including all associated amenities executed to give our clients a touch of sophisticated finishing, detailed fitouts & the latest architectural atmosphere.",
      image: "hospitality.jpg"
    },
    {
      name: "Commercial",
      description: "Restaurants & cafes, recreational facilities & retail stores brought to life in an ambiance that is unique to the Egyptian market. We construct detailed interior and exterior finishing works with a close eye on quality.",
      image: "commercial.jpg"
    },
    {
      name: "Residential",
      description: "Renowned spaces known for its luxurious touch and impeccable craftsmanship. Combining both style & class. Covering residential compounds, buildings, private apartments & summerhouses.",
      image: "residential.jpg"
    }
  ];

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>Aligning Expectations with Results</p>
        </div>
        
        <div className={styles.description}>
          <p>
            <strong>SCAS</strong> provides complete finishing contracting services including premium fit-out works, 
            electro-mechanical and special systems. From concept to completion, we apply the highest engineering 
            standards to ensure our clients' expectations are met and beyond. Throughout the construction phase 
            confined project control processes are implemented with time, quality & cost closely monitored.
          </p>
        </div>
        
        <div className={styles.servicesContent}>
          <div className={styles.tabs}>
            {services.map((service, index) => (
              <button 
                key={service.name}
                className={`${styles.tab} ${index === activeService ? styles.activeTab : ''}`}
                onClick={() => setActiveService(index)}
              >
                {service.name}
              </button>
            ))}
          </div>
          
          <div className={styles.serviceDisplay}>
            <div className={styles.serviceImage} style={{backgroundImage: `url(/src/assets/images/${services[activeService].image})`}}>
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.serviceInfo}>
              <h3 className={styles.serviceName}>{services[activeService].name}</h3>
              <p className={styles.serviceDescription}>{services[activeService].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;