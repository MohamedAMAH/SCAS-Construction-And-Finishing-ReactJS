import { useState, useRef } from 'react';
import { Volume2, VolumeX, ArrowRight } from 'lucide-react';
import styles from './HeroV.module.css';

const HeroV = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/Conrad part 1_Final.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Building Tomorrow's Legacy</h1>
        <p className={styles.heroText}>
          Transforming visions into architectural masterpieces with precision, innovation, and unparalleled craftsmanship.
        </p>
        <a href="/about" className={styles.heroButton}>
          Discover Our Story
          <ArrowRight size={18} />
        </a>
      </div>

      <button 
        className={styles.muteButton}
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
    </section>
  );
};

export default HeroV; 