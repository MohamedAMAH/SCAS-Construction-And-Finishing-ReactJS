import { useState, useEffect } from 'react';
import styles from './TT.module.css';

const TT = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      quote: "SCAS Construction delivered our corporate headquarters renovation on time and exceeded our expectations. Their team was professional, responsive, and the quality of work was exceptional.",
      author: "Ahmed Hassan",
      position: "Facilities Director",
      company: "Mansour Group",
      logo: "/images/logos/Mansour Group Logo.png"
    },
    {
      id: 2,
      quote: "We've worked with SCAS on multiple hotel renovation projects, and they consistently deliver premium results. Their ability to maintain operations during construction was invaluable.",
      author: "Sarah Mahmoud",
      position: "Project Manager",
      company: "Four Seasons Hotels",
      logo: "/images/logos/Four Seasons PNG.png"
    },
    {
      id: 3,
      quote: "The team at SCAS brought our cafe concept to life with exceptional execution. Their understanding of our brand vision and attention to detail made all the difference.",
      author: "Omar Fahmy",
      position: "CEO",
      company: "Beanos Cafe",
      logo: "/images/logos/Beanos Cafe.png"
    },
    {
      id: 4,
      quote: "Our industrial facility construction project had complex requirements, but SCAS managed the entire process seamlessly. Their technical expertise and project management were outstanding.",
      author: "Laila Sabry",
      position: "Operations Director",
      company: "ElSewedy Industries",
      logo: "/images/logos/El Sewedy Industries PNG.png"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className={styles.testimonialRow}>
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`${styles.testimonialCard} ${index === activeIndex ? styles.active : ''}`}
                  style={{
                    transform: `translateX(calc(${index - activeIndex} * 100%))`
                  }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.clientLogo}>
                      <img src={testimonial.logo} alt={testimonial.company} />
                    </div>
                  </div>
                  
                  <div className={styles.cardBody}>
                    <div className={styles.quoteText}>
                      "{testimonial.quote}"
                    </div>
                  </div>
                  
                  <div className={styles.cardFooter}>
                    <div className={styles.clientInfo}>
                      <h3 className={styles.clientName}>{testimonial.author}</h3>
                      <p className={styles.clientTitle}>
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.controls}>
              <div className={styles.indicators}>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.indicator} ${index === activeIndex ? styles.active : ''}`}
                    onClick={() => handleIndicatorClick(index)}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.backgroundPattern}></div>
    </section>
  );
};

export default TT;