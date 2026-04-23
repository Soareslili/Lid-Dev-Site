
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
 

  return (
    <>
       <>
      
        <title>Lid.Dev | Desenvolvedora Front-End - Sites 3D & Interfaces Modernas</title>
        <meta 
          name="description" 
          content="Desenvolvedora Front-End especializada em sites modernos, animações 3D e interfaces que encantam. Transformo ideias em experiências digitais únicas." 
        />
        <meta name="keywords" content="desenvolvedora front-end, sites 3D, React, Three.js, interfaces modernas, animações web" />
        <link rel="canonical" href="https://lid.dev" />
     
      
      <main className="min-h-screen overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TimelineSection />
        <ContactSection />
       <Footer />
      </main>
    </>
    </>
  )
}

export default App
