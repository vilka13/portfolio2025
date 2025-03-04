
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import ProjectCarousel from '../components/ProjectCarousel';
import ResumeDownload from '../components/ResumeDownload';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <ProjectCarousel />
      <ResumeDownload />
      <Footer />
    </div>
  );
};

export default Index;
