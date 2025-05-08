import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: '/images/projects/conrad-new.webp',
      title: 'Crafting Excellence',
      subtitle: 'Innovative Construction & Premium Finishing'
    },
    {
      id: 2,
      image: '/images/projects/knauf-new.webp',
      title: 'Building Dreams',
      subtitle: 'Turning Visions into Reality'
    },
    {
      id: 3,
      image: '/images/projects/blooms-new.webp',
      title: 'Quality in Every Detail',
      subtitle: 'Excellence in Construction Since 2010'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.slideContainer}>
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={styles.content}>
              <h1 className={styles.title}>{slide.title}</h1>
              <p className={styles.subtitle}>{slide.subtitle}</p>
              <div className={styles.actions}>
                <a href="/about" className={styles.secondaryButton}>
                  Explore
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
