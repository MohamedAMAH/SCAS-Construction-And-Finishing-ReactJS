import styles from './Home.module.css';
import Hero from '../../components/Home/Hero';
import HeroV from '../../components/HeroV/HeroV';
import CompanyOverview from '../../components/Home/CompanyOverview';
import CTA from '../../components/Home/CTA';
import FAF from '../../components/Home/FAF';
import Services from '../../components/Home/Services';
import FB from '../../components/Home/FB';
import TT from '../../components/Home/TT';
import PT from '../../components/Home/PT';

const Home = () => {
  return (
    <div className={styles.home}>
      {/* <Hero /> */}
      <HeroV />
      {/* <CompanyOverview />
      <PT /> */}
      {/* <FB /> */}
      <Services />
      <FAF />
      <TT />
      <CTA />
    </div>
  );
};

export default Home;