import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
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

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <Home />,
//     children: [
//       {
//         path: "/contact/", 
//         element: <Contact />,
//       },
//       {
//         path: "/education",
//         element: <Education />
//       },
//       {
//         path: "/experience",
//         element: <Experience />
//       }
//     ],
//   }
// ]);


function App() {
  return (
    <div>
      <Header />
      <HeaderBlock />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="education" element={<Education />} />
          <Route exact path="experience" element={<Experience />} />
          <Route exact path="projects" element={<Projects />} />
          <Route exact path="rogue-fitness" element={<Rogue />} />
          <Route exact path="online-course-certificates" element={<OnlineCourseCertificates />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
