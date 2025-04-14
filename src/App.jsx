import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import ScrollToTop from './components/Home/ScrollToTop';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;