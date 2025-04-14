import { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: "Ahmed ElSewedy",
      position: "President & CEO, ElSewedy Electric",
      content: "Dear Eng. Scarello: On behalf of Elsewedy Electric Foundation, I would like to thank you for the exceptional work your team put into the construction of Elsewedy Technical Academy Branch in Saddat. Today's inauguration was a significant event, attended by important guests including the Minister of Education and Technical Education, along with our project partners. Your commitment and dedication to this project were evident in every detail. The quality of the finishing and materials used throughout the academy truly impressed us. It not only enhances the physical appearance of the facility but also reflects positively on the quality of education and services we aim to provide to our students.",
      company: "ElSewedy Electric"
    },
    {
      name: "Sarah Salem",
      position: "Senior Construction Manager, TTEC",
      content: "Ttec offices, located in Smart Village, Maadi faced so many challenges, however with the team's keen effort we were able to deliver as requested. Special thanks to the project coordination team for their ongoing dedication.",
      company: "TTEC"
    },
    {
      name: "Amr El-Khazindar",
      position: "Founder & Chief Executive Officer, 30 North LLC",
      content: "Doing business with the SCAS Team was a wonderful experience, I must salute each and every person who has worked on the 30 NORTH Garden 8 project for their involvement and amazing spirit. I must also thank SCAS's Management Team for the great support we received during the very difficult COVID closure period and for bearing with us. We look forward to many more projects together going forward inshallah. PS: thank you for the photos, beautiful.",
      company: "30 North LLC"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Testimonials</h2>
          <p className={styles.subtitle}>What Our Clients Say</p>
        </div>
        
        <div className={styles.slider}>
          <div className={styles.slides} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div className={styles.slide} key={index}>
                <div className={styles.testimonial}>
                  <div className={styles.content}>
                    <div className={styles.quote}>
                      <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 0H9.5C6.84784 0 4.3043 1.05357 2.44078 2.92893C0.577253 4.8043 0 7.34784 0 10V26C0 28.6522 1.05357 31.1957 2.92893 33.0592C4.8043 34.9227 7.34784 36 10 36H16C18.6522 36 21.1957 34.9464 23.0592 33.0711C24.9227 31.1957 26 28.6522 26 26V10C26 7.34784 24.9464 4.8043 23.0711 2.94078C21.1957 1.05357 18.6522 0 16 0ZM16 26H10V10H16V26ZM42 0H35.5C32.8478 0 30.3043 1.05357 28.4408 2.92893C26.5773 4.8043 26 7.34784 26 10V26C26 28.6522 27.0536 31.1957 28.9289 33.0592C30.8043 34.9227 33.3478 36 36 36H42C44.6522 36 47.1957 34.9464 49.0592 33.0711C50.9227 31.1957 52 28.6522 52 26V10C52 7.34784 50.9464 4.8043 49.0711 2.94078C47.1957 1.05357 44.6522 0 42 0ZM42 26H36V10H42V26Z" fill="#CCCCCC"/>
                      </svg>
                    </div>
                    <p className={styles.testimonialText}>{testimonial.content}</p>
                    <div className={styles.clientInfo}>
                      <div className={styles.clientDetails}>
                        <h3 className={styles.clientName}>{testimonial.name}</h3>
                        <p className={styles.clientPosition}>{testimonial.position}</p>
                      </div>
                      <div className={styles.companyLogo}>
                        <img src={`/src/assets/images/logos/${testimonial.company.toLowerCase().replace(/\s+/g, '-')}.png`} alt={testimonial.company} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.controls}>
            <button className={styles.prevButton} onClick={prevSlide} aria-label="Previous testimonial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            <button className={styles.nextButton} onClick={nextSlide} aria-label="Next testimonial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;