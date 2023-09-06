import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio" element={<Home />}></Route>
          <Route path="/portfolio/contact" element={<Contact />}></Route>
          <Route path="/portfolio/education" element={<Education />}></Route>
          <Route path="/portfolio/experience" element={<Experience />}></Route>
          <Route path="/portfolio/projects" element={<Projects />}></Route>
          <Route path="/portfolio/rogue-fitness" element={<Rogue />}></Route>
          <Route path="/portfolio/online-course-certificates" element={<OnlineCourseCertificates />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
