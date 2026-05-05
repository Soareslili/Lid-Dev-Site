import { motion } from 'framer-motion';
import GradientBarsBackground from './ui/gradient-bars-background';



const HeroSection = () => {
  return (
    <section id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >

        <div className='absolute inset-0 z-0 pointer-events-none'>
          <GradientBarsBackground
          numBars={15}
          gradientFrom="rgb(255, 0, 247)"
          gradientTo="transparent"
          animationDuration={1}
        />
        </div>

     



      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] 
    -translate-x-1/2 -translate-y-1/2 
    bg-purple-600/30 rounded-full blur-[160px]" />

        <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px]
    bg-cyan-400/20 rounded-full blur-[140px]" />
      </div>

     
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09070E]/60 to-[#09070E] pointer-events-none" />

      <div className="absolute inset-0 bg-gradient-radial from-purple-500/25 via-transparent to-transparent pointer-events-none" />


   
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block mb-6 px-4 py-2 mt-12 rounded-full border border-primary/30 text-primary font-display text-sm tracking-widest uppercase glow-purple"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Desenvolvedora Front-End
          </motion.span>

          <motion.h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block text-foreground">Sites Profissionais com</span>
            <span className="block text-purple-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.7)]">
              Design, Estratégia e Presença
            </span>

          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Desenvolvedora Front-End especializada em sites modernos, animações
            e interfaces que encantam. Transformo ideias em experiências digitais únicas.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="btn-neon px-8 py-4 rounded-lg bg-primary text-primary-foreground"
            >
              Ver Projetos
            </a>
            <a
              href="#contact"
              className="btn-outline-neon px-8 py-4 border border-primary rounded-lg text-primary font-bold"
            >
              Contato
            </a>
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
};

export default HeroSection;
