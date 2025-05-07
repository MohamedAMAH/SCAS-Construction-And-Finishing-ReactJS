import styles from './News.module.css';
import NewsC from '../../components/News/NewsC';

const News = () => {
  return (
    <div className={styles.news}>
      <NewsC />
    </div>
  );
};

export default News;