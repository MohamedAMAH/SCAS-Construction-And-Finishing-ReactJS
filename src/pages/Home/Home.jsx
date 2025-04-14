import styles from './Home.module.css';
import Navbar from '../../components/Home/Navbar';
import Hero from '../../components/Home/Hero';
import About from '../../components/Home/About';
import Services from '../../components/Home/Services';
import Projects from '../../components/Home/Projects';
import Team from '../../components/Home/Team';
import Values from '../../components/Home/Values';
import Testimonials from '../../components/Home/Testimonials';
import Newsletter from '../../components/Home/Newsletter';
import Contact from '../../components/Home/Contact';
import Footer from '../../components/Home/Footer';

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team />
      <Values />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;