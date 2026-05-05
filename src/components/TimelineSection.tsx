import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Palette, Code, TestTube, Rocket } from 'lucide-react';


const steps = [

    {
        icon: MessageCircle,
        title: "Conversa Inicial",
        description: "Entendo suas necessidades, objetivos e visão para o projeto."
    },
    {
        icon: Palette,
        title: "Design",
        description: "Crio wireframes e protótipos com foco em UX e estética."
    },
    {
        icon: Code,
        title: "Desenvolvimento",
        description: "Codifico com tecnologias modernas e boas práticas."
    },
    {
        icon: TestTube,
        title: "Testes",
        description: "Garanto qualidade com testes de funcionalidade e performance."
    },
    {
        icon: Rocket,
        title: "Entrega",
        description: "Publico seu projeto e ofereço suporte contínuo."
    },
];

const TimelineStep = ({ step, index, isLast }: { step: typeof steps[0]; index: number; isLast: boolean }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const isEven = index % 2 === 0;

    return (
        <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
    
      <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
        <div className={`inline-block p-6 rounded-2xl border-glow  hover:bg-primary/10 transition-all duration-300 ${isEven ? 'md:ml-auto' : 'md:mr-auto'}`}>
          <h3 className="font-display text-xl font-bold text-foreground mb-2">
            {step.title}
          </h3>
          <p className="text-muted-foreground text-sm">
            {step.description}
          </p>
        </div>
      </div>

   
      <div className="relative z-10 flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
          className="w-16 h-16 rounded-full border border-primary p-2 shadow-lg shadow-primary/50"
        >
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
            <step.icon className="w-7 h-7 text-primary" />
          </div>
        </motion.div>
        
    
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
            className="absolute top-full left-1/2 -translate-x-1/2 w-[2px] h-24 bg-gradient-to-b from-primary to-primary/20"
          />
        )}
      </div>

  
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

const TimelineSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative py-32 overflow-hidden"
         style={{ backgroundColor: '#09070E' }}>
    
    
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div ref={sectionRef} className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Processo
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Como </span>
            <span className="text-gradient-neon">Trabalho</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um processo estruturado para garantir resultados excepcionais 
            em cada projeto.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12 ">
          {steps.map((step, index) => (
            <TimelineStep 
              key={step.title}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
           
              
             
            />
          ))}
        </div>
      </div>
    </section>
    )
}

export default TimelineSection;