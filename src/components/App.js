import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/education",
    element: <Education />
  },
  {
    path: "/experience",
    element: <Experience />
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/rogue-fitness",
    element: <Rogue />
  },
  {
    path: "/online-course-certificates",
    element: <OnlineCourseCertificates />
  }
]);

function App() {
  return (
    <div>
      <Header />
      <HeaderBlock />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
