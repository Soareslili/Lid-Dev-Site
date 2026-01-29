import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';

function App() {
 

  return (
    <>
       <>
      <Helmet>
        <title>Lid.Dev | Desenvolvedora Front-End - Sites 3D & Interfaces Modernas</title>
        <meta 
          name="description" 
          content="Desenvolvedora Front-End especializada em sites modernos, animações 3D e interfaces que encantam. Transformo ideias em experiências digitais únicas." 
        />
        <meta name="keywords" content="desenvolvedora front-end, sites 3D, React, Three.js, interfaces modernas, animações web" />
        <link rel="canonical" href="https://lid.dev" />
      </Helmet>
      
      <main className="min-h-screen overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
       
      </main>
    </>
    </>
  )
}

export default App
