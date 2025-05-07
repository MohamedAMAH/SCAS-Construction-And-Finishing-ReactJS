import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' }
  ];

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

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <nav className={styles.navbar}>
          <div className={styles.logoContainer}>
            <Link to="/" className={styles.logo}>
              <img 
                src="/images/logos/scas-black.png" 
                alt="SCAS Construction & Finishing" 
                className={styles.logoImage}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <ul className={styles.navLinks}>
              {navLinks.map((link) => (
                <li key={link.name} className={styles.navItem}>
                  <Link 
                    to={link.path} 
                    className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileNavContent}>
          <ul className={styles.mobileNavLinks}>
            {navLinks.map((link) => (
              <li key={link.name} className={styles.mobileNavItem}>
                <Link 
                  to={link.path} 
                  className={`${styles.mobileNavLink} ${location.pathname === link.path ? styles.active : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.mobileNavFooter}>
            <div className={styles.mobileNavInfo}>
              <p>info@scas-construction.com</p>
              <p>+20 123 456 7890</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;