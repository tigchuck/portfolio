import{ React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import HeaderBlock from './HeaderBlock';
import Footer from './Footer';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Rogue from './pages/Rogue';
import OnlineCourseCertificates from './pages/OnlineCourseCertificates';
import '../styles/App.css';


function App() {
  return (
    <div>
      <Header />
      <HeaderBlock />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/rogue-fitness" element={<Rogue />} />
          <Route path="/online-course-certificates" element={<OnlineCourseCertificates />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
