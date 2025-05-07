import { useState, useEffect, useRef } from 'react';
import styles from './FAF.module.css';

const FAF = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const factsData = [
    { value: 308300, label: 'Total Area Completed', subtitle: 'square meters', suffix: '+', icon: 'square' },
    { value: 127400, label: 'Area In Progress', subtitle: 'square meters', suffix: '+', icon: 'construction' },
    { value: 435700, label: 'Total Built Area', subtitle: 'square meters', suffix: '+', icon: 'building' },
    { value: 30, label: 'Repeat Clients', subtitle: 'percentage', suffix: '%', icon: 'users' },
    { value: 285, label: 'Satisfied Clients', subtitle: 'and counting', suffix: '+', icon: 'star' },
    { value: 302, label: 'Completed Projects', subtitle: 'since 2010', suffix: '+', icon: 'check-circle' },
    { value: 18, label: 'Ongoing Projects', subtitle: 'currently active', suffix: '+', icon: 'clock' },
    { value: 320, label: 'Total Projects', subtitle: 'and growing', suffix: '+', icon: 'folder' }
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Counter animation when component becomes visible
  const Counter = ({ value, suffix, duration = 2000, start = 0 }) => {
    const [count, setCount] = useState(start);
    
    useEffect(() => {
      if (!isVisible) return;
      
      let startTime;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setCount(Math.floor(progress * (value - start) + start));
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      
      requestAnimationFrame(animateCount);
    }, [isVisible, value, duration, start]);
    
    return (
      <span className={styles.counterValue}>
        {count.toLocaleString()}{suffix}
      </span>
    );
  };

  // Function to render icon based on name
  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'square':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case 'construction':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 21H22M20 21V11L14 5V3M14 11V5M14 11H8M14 5H8M8 5V11M8 5L4 9V11M8 11L4 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'building':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21H21M3 7V21M21 7V21M3 7H21M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7M6 10H8M6 14H8M6 18H8M16 10H18M16 14H18M16 18H18M11 21V17C11 16.4477 11.4477 16 12 16H13C13.5523 16 14 16.4477 14 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'users':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'star':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'check-circle':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'clock':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'folder':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className={styles.faf} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Facts & Figures</h1>
        </div>
        
        <div className="row g-4">
          {factsData.map((fact, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className={styles.statCard}>
                <div className={styles.iconWrapper}>
                  {renderIcon(fact.icon)}
                </div>
                <div className={styles.statContent}>
                  {isVisible ? (
                    <Counter value={fact.value} suffix={fact.suffix} />
                  ) : (
                    <span className={styles.counterValue}>0{fact.suffix}</span>
                  )}
                  <h3 className={styles.statLabel}>{fact.label}</h3>
                  <p className={styles.statSubtitle}>{fact.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAF;