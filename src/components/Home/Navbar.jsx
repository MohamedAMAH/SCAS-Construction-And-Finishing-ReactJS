import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };
  
  const navLinks = [
    { name: 'Home', path: '#' },
    { name: 'About', path: '#about' },
    { name: 'Services', path: '#services' },
    { name: 'Projects', path: '#projects' },
    { name: 'Team', path: '#team' },
    { name: 'Testimonials', path: '#testimonials' },
    { name: 'Contact', path: '#contact' }
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#" aria-label="SCAS Home">
            <img 
              src={isScrolled ? "/src/assets/images/logos/scas-black.png" : "/src/assets/images/logos/scas-white-down.png"} 
              alt="SCAS" 
              className={styles.logoImage}
            />
          </a>
        </div>
        
        <div className={styles.menuToggle} onClick={toggleMobileMenu} aria-expanded={mobileMenuOpen} aria-label="Toggle menu">
          <div className={`${styles.hamburger} ${mobileMenuOpen ? styles.active : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <div className={`${styles.menu} ${mobileMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            {navLinks.map((link, index) => (
              <li key={index} className={styles.navItem}>
                <a 
                  href={link.path} 
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;