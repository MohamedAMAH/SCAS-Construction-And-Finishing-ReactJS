import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const projectCategories = ['Corporate', 'Hospitality', 'Commercial', 'Residential'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % projectCategories.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [projectCategories.length]);

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.slideshow}>
        {projectCategories.map((category, index) => (
          <div 
            key={index} 
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            aria-hidden={index !== currentSlide}
          >
            <div className={styles.backgroundImage} style={{backgroundImage: `url(/src/assets/images/hero/${category.toLowerCase()}.jpg)`}}></div>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>We Transform Spaces</h1>
        <p className={styles.subtitle}>Premier construction & high-end finishing contractor</p>
        <div className={styles.categories}>
          {projectCategories.map((category, index) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${index === currentSlide ? styles.activeCat : ''}`}
              onClick={() => setCurrentSlide(index)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;