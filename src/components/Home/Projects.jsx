import { useState } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'hospitality', name: 'Hospitality' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'residential', name: 'Residential' },
    { id: 'buildings', name: 'Buildings' },
    { id: 'medical', name: 'Medical' }
  ];
  
  const projects = [
    {
      id: 1,
      name: 'Conrad Health Club',
      category: 'hospitality',
      image: 'conrad.jpg',
      client: 'Conrad Hotels'
    },
    {
      id: 2,
      name: 'Blooms & Beans Cafe',
      category: 'commercial',
      image: 'blooms-com.jpg', /* This was changed from "blooms.jpg" to "blooms-com.jpg" because of compression */
      client: 'Blooms & Beans'
    },
    {
      id: 3,
      name: 'Hacienda White Villa',
      category: 'residential',
      image: 'hacienda.jpg',
      client: 'Hacienda'
    },
    {
      id: 4,
      name: 'Knauf Corporate Office',
      category: 'corporate',
      image: 'knauf.jpg',
      client: 'Knauf'
    },
    {
      id: 5,
      name: 'STA Building',
      category: 'buildings',
      image: 'sta.jpg',
      client: 'STA'
    },
    {
      id: 6,
      name: 'Alfa Labs',
      category: 'medical',
      image: 'alfa.jpg',
      client: 'Alfa Labs'
    }
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Our Projects</h2>
          <p className={styles.subtitle}>Building Excellence Across Industries</p>
        </div>
        
        <div className={styles.filters}>
          {categories.map(category => (
            <button 
              key={category.id}
              className={`${styles.filter} ${activeCategory === category.id ? styles.activeFilter : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className={styles.grid}>
          {filteredProjects.map(project => (
            <div className={styles.project} key={project.id}>
              <div className={styles.projectImage} style={{backgroundImage: `url(/images/projects/${project.image})`}}>
                <div className={styles.overlay}>
                  <div className={styles.projectInfo}>
                    <h3 className={styles.projectName}>{project.name}</h3>
                    <p className={styles.projectClient}>{project.client}</p>
                    <button className={styles.viewButton}>View Project</button>
                  </div>
                </div>
              </div>
              <div className={styles.projectCategory}>
                <span>{categories.find(cat => cat.id === project.category)?.name}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.viewAll}>
          <button className={styles.viewAllButton}>View All Projects</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;