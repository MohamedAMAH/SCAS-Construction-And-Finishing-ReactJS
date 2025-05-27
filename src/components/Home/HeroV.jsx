import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroV.module.css';

const HeroV = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [wasUnmuted, setWasUnmuted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7
    };

    const handleIntersection = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);

      const video = videoRef.current;
      if (!video) return;

      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    const newMutedState = !isMuted;
    video.muted = newMutedState;
    setIsMuted(newMutedState);
    
    if (!newMutedState) {
      setWasUnmuted(true);
    }
  };

  return (
    <section className={styles.hero}>
      <video
        ref={videoRef}
        className={styles.video}
        autoPlay
        loop
        muted={isMuted}
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>Building Excellence</h1>
        <p className={styles.subtitle}>
          Crafting spaces that inspire, built with precision and passion
        </p>
        <div className={styles.actions}>
          <Link to="/about" className={styles.primaryButton}>
            Discover Our Story
          </Link>
        </div>
      </div>

      <button 
        className={styles.audioButton} 
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        )}
      </button>
    </section>
  );
};

export default HeroV; 