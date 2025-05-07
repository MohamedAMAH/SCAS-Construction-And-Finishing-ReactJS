import { useState, useRef, useEffect } from 'react';
import styles from './CompanyOverview.module.css';

const CompanyOverview = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  // Properly toggle video play/pause state
  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleMuteToggle = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const options = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (videoRef.current && videoRef.current.paused) {
            videoRef.current.play()
              .then(() => {
                setIsPlaying(true);
              })
              .catch(e => {
                console.error('Autoplay failed:', e);
              });
          }
        } else {
          setIsInView(false);
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      });
    }, options);

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, []);

  return (
    <section className={`${styles.overview}`}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div>
              <h1 className={styles.title}>About Us</h1>
              <p className={styles.description}>
                We specialize in high-quality construction and finishing solutions across multiple sectors including 
                residential, commercial, hospitality, corporate, medical, and building projects. Our commitment to 
                excellence and attention to detail sets us apart in the industry.
              </p>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div 
              ref={videoContainerRef}
              className={styles.videoContainer}
            >
              <video 
                ref={videoRef}
                className={styles.video}
                src="/videos/Conrad part 1_Final.mp4" 
                poster="/images/video-thumbnail.jpg"
                preload="metadata"
                muted
                playsInline
                onClick={handleVideoToggle}
              />
              
              {!isPlaying && (
                <button 
                  className={styles.playButton}
                  onClick={handleVideoToggle}
                  aria-label="Play video"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                  </svg>
                </button>
              )}
              
              {isPlaying && (
                <button 
                  className={styles.pauseButton}
                  onClick={handleVideoToggle}
                  aria-label="Pause video"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" fill="currentColor"/>
                  </svg>
                </button>
              )}
              
              <button 
                className={styles.audioButton}
                onClick={handleMuteToggle}
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12Z" fill="currentColor"/>
                    <path d="M19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12Z" fill="currentColor"/>
                    <path d="M4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="currentColor"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z" fill="currentColor"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;