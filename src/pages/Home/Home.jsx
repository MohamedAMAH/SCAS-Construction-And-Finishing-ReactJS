import styles from './Home.module.css';
import Hero from '../../components/Home/Hero';
import CompanyOverview from '../../components/Home/CompanyOverview';
import CTA from '../../components/Home/CTA';
import FAF from '../../components/Home/FAF';
import Services from '../../components/Home/Services';
import NewsC from '../../components/News/NewsC';

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <CompanyOverview />
      <FAF />
      <Services />
      <CTA />
    </div>
  );
};

export default Home;