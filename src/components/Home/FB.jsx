import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './FB.module.css';

const FB = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  
  const featuredProjects = [
    {
      id: 1,
      title: 'Conrad Hotel',
      category: 'Hospitality',
      description: 'Renovation of luxury hotel facilities including lobby, restaurants, pool area, and health club.',
      image: '/images/projects/conrad.jpg',
      stats: '12,500 sqm',
      location: 'Cairo, Egypt'
    },
    {
      id: 2,
      title: 'Knauf Headquarters',
      category: 'Corporate',
      description: 'Modern corporate office design and construction with premium finishes and specialized workspaces.',
      image: '/images/projects/knauf.jpg',
      stats: '3,200 sqm',
      location: 'New Cairo, Egypt'
    },
    {
      id: 3,
      title: 'STA Industrial Facility',
      category: 'Buildings',
      description: 'Large-scale industrial building with specialized equipment installation and office facilities.',
      image: '/images/projects/sta.jpg',
      stats: '25,000 sqm',
      location: 'Sadat City, Egypt'
    }
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
        setIsInView(true);
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

  useEffect(() => {
    // Auto-rotate through projects every 5 seconds if in view
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveProject(prev => (prev + 1) % featuredProjects.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isInView, featuredProjects.length]);

  const handleProjectClick = (index) => {
    setActiveProject(index);
  };

  return (
    <section className={styles.featuredBlock} ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className={styles.blockContent}>
              <h2 className={styles.blockTitle}>Featured Projects</h2>
              <p className={styles.blockDescription}>
                Explore a selection of our notable projects showcasing our expertise across different sectors.
                Each project represents our commitment to quality craftsmanship and attention to detail.
              </p>
              
              <div className={styles.projectTabs}>
                {featuredProjects.map((project, index) => (
                  <button
                    key={project.id}
                    className={`${styles.projectTab} ${activeProject === index ? styles.active : ''}`}
                    onClick={() => handleProjectClick(index)}
                  >
                    <span className={styles.projectNumber}>0{index + 1}</span>
                    <div className={styles.projectTabContent}>
                      <h3 className={styles.projectTabTitle}>{project.title}</h3>
                      <p className={styles.projectTabCategory}>{project.category}</p>
                    </div>
                  </button>
                ))}
              </div>
              
              <Link to="/projects" className={styles.viewAllLink}>
                <span>View All Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="col-lg-8">
            <div className={styles.projectsShowcase}>
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`${styles.projectDisplay} ${activeProject === index ? styles.active : ''}`}
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className={styles.projectOverlay}></div>
                  <div className={styles.projectInfo}>
                    <div className={styles.projectStats}>
                      <div className={styles.projectStat}>
                        <span className={styles.statLabel}>Area</span>
                        <span className={styles.statValue}>{project.stats}</span>
                      </div>
                      <div className={styles.projectStat}>
                        <span className={styles.statLabel}>Location</span>
                        <span className={styles.statValue}>{project.location}</span>
                      </div>
                    </div>
                    <div className={styles.projectMeta}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.projectDescription}>{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className={styles.projectIndicators}>
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.indicator} ${activeProject === index ? styles.active : ''}`}
                    onClick={() => handleProjectClick(index)}
                    aria-label={`View project ${index + 1}`}
                  >
                    <span className={styles.indicatorDot}></span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FB;