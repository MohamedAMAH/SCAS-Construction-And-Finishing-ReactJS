import { useState } from 'react';
import styles from './ContactC.module.css';

const ContactC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Select Project Type',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: 'Select Project Type',
          message: '',
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.heroSection}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className={styles.heroTitle}>Let's Start a Conversation</h1>
              <p className={styles.heroText}>
                Whether you have a project in mind or just want to explore possibilities,
                we're here to help transform your vision into reality.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.contactCards}>
          <div className="row g-0">
            <div className="col-lg-4">
              <div className={styles.contactMethodCard}>
                <div className={styles.contactMethodIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h3 className={styles.contactMethodTitle}>Email Us</h3>
                <p className={styles.contactMethodText}>
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <div className={styles.contactMethodInfo}>
                  <a href="mailto:info@scas-construction.com" className={styles.contactLink}>
                    info@scas-construction.com
                  </a>
                  <a href="mailto:projects@scas-construction.com" className={styles.contactLink}>
                    projects@scas-construction.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className={`${styles.contactMethodCard} ${styles.primaryCard}`}>
                <div className={styles.contactMethodIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h3 className={styles.contactMethodTitle}>Call Us</h3>
                <p className={styles.contactMethodText}>
                  Speak directly with our project consultants during business hours.
                </p>
                <div className={styles.contactMethodInfo}>
                  <a href="tel:+201234567890" className={styles.contactLink}>
                    +20 123 456 7890
                  </a>
                  <p className={styles.workHours}>
                    Mon-Fri: 9:00 AM - 6:00 PM<br />
                    Sat: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className={styles.contactMethodCard}>
                <div className={styles.contactMethodIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h3 className={styles.contactMethodTitle}>Visit Us</h3>
                <p className={styles.contactMethodText}>
                  Stop by our office to meet our team and discuss your project in person.
                </p>
                <div className={styles.contactMethodInfo}>
                  <p className={styles.address}>
                    123 Business Park, Tower B<br />
                    Floor 8, Cairo, Egypt
                  </p>
                  <a href="https://goo.gl/maps/YourCompanyLocation" target="_blank" rel="noopener noreferrer" className={styles.directionsLink}>
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.formSection}>
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.formIntro}>
                <h2 className={styles.formTitle}>Tell Us About Your Project</h2>
                <p className={styles.formDescription}>
                  Fill out this form with details about your project, and one of our specialists will reach out 
                  to discuss how SCAS Construction & Finishing can help bring your vision to life.
                </p>
                <div className={styles.formHighlights}>
                  <div className={styles.highlight}>
                    <div className={styles.highlightIcon}>✓</div>
                    <p>Free project consultation and estimate</p>
                  </div>
                  <div className={styles.highlight}>
                    <div className={styles.highlightIcon}>✓</div>
                    <p>Professional project management</p>
                  </div>
                  <div className={styles.highlight}>
                    <div className={styles.highlightIcon}>✓</div>
                    <p>Quality materials and craftsmanship</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className={styles.formWrapper}>
                {formSubmitted ? (
                  <div className={styles.successMessage}>
                    <div className={styles.successIcon}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <h3>Thank You!</h3>
                    <p>Your message has been sent successfully. We'll be in touch with you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="email">Email Address*</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="projectType">Project Type</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                      >
                        <option value="Select Project Type" disabled>Select Project Type</option>
                        <option value="Corporate">Corporate</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Residential">Residential</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="message">Project Details*</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, timeline, and specific requirements..."
                        required
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className={styles.submitButton}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Submit Request'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.mapWrapper}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.76983808314!2d31.18390493391!3d30.05946949730262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1651234456789!5m2!1sen!2sus" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="SCAS Construction & Finishing Location"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactC;