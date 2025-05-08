import styles from './Projects.module.css';
import ProjectsC from '../../components/Projects/ProjectsC';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <ProjectsC />
    </div>
  );
};

export default Projects;