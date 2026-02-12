import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

import Dashboard from '../assets/Dashboard.png'
import Fitness from '../assets/Fitness.png'
import Possessed from '../assets/Possessed.png'

const projects = [
  {
    id: 1,
    title: 'E-Commerce 3D',
    description: 'Loja virtual com visualização 3D de produtos e animações fluidas.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tags: ['React', 'Three.js', 'Stripe'],
    
  },
  {
    id: 2,
    title: 'Dashboard DentalPro',
    description: 'Dashboard de Gestão Odontológica desenvolvido para otimizar a organização, a eficiência e a tomada de decisão em clínicas.',
    image: Dashboard,
    tags: ['React', 'Tailwind', 'TypeScript'],
    liveURL:'https://dasboard-dental-pro-lt4z.vercel.app/',
    githubURL:'https://github.com/Soareslili/Dasboard---DentalPro.git'
  },
  {
    id: 3,
    title: 'FitCoach – Landing Page para Personal Trainer',
    description: 'Projeto desenvolvido para apresentar um serviço de personal trainer / fitness, com foco em conversão e experiência do usuário.',
    image: Fitness,
    tags: ['React', 'Tailwind', 'Typescript'],
    liveURL:'https://fitcoach-nine.vercel.app/',
    githubURL:'https://github.com/Soareslili/FITCOACH.git'
  },
  {
    id: 4,
    title: 'Portfolio Criativo',
    description: 'Site portfolio com scroll parallax e transições suaves.',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&h=400&fit=crop',
    tags: ['React', 'GSAP', 'Framer'],
  },
  {
    id: 5,
    title: 'Landing Page SaaS',
    description: 'Página de vendas com micro-interações e alta conversão.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop',
    tags: ['Vue.js', 'Animation', 'SEO'],
  },
  {
    id: 6,
    title: 'Possessed – Site Institucional',
    description: 'Site desenvolvido para apresentação profissional de serviços, com design moderno, responsivo e focado em experiência do usuário.',
    image: Possessed,
    tags: ['React', 'Typescript', 'Tailwind CSS', 'Vite'],
    liveURL:'https://projeto-possessed-vygr.vercel.app/',
    githubURL:'https://github.com/Soareslili/Projeto-Possessed.git'
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current as HTMLDivElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current as HTMLDivElement;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl overflow-hidden border-glow glass transition-all duration-300"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Glow effect on hover */}
      <div 
    
        className={`absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`}
      />
      
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Overlay buttons */}
        <div className={`absolute inset-0 flex items-center justify-center gap-4 bg-background/80 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <a href={project.liveURL} 
           target="_blank" rel='noopener noreferrer'
          className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform">
            <ExternalLink className="w-5 h-5" />
          </a>
          <a href={project.githubURL} 
           target="_blank" rel='noopener noreferrer'
          className="p-3 rounded-full bg-secondary text-secondary-foreground hover:scale-110 transition-transform">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-primary/5 shadow-lg shadow-primary/50" style={{ transform: 'translateZ(20px)' }}>
        <h3 className="font-display text-xl font-bold text-foreground mb-2  group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-display rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section   id='projects' className="relative py-32 overflow-hidden"
      style={{ backgroundColor: '#09070E' }}>
    
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div ref={sectionRef} className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Portfólio
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Meus </span>
            <span className="text-gradient-neon">Projetos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma seleção de trabalhos que demonstram minha paixão por criar 
            experiências digitais únicas e memoráveis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
