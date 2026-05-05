import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Code2, Palette, Zap, Sparkles } from 'lucide-react';
import ImgDev from '../assets/Lidiane.jpg'

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const [displayText, setDisplayText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let index = 0;
        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                if (index < text.length) {
                    setDisplayText(text.slice(0, index + 1));
                    index++;
                } else {
                    setIsComplete(true);
                    clearInterval(interval);
                }
            }, 30);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timeout);
    }, [text, delay, isInView]);

    return (
        <span ref={ref} className="inline">
            {displayText}
            {!isComplete && <span className="animate-pulse text-primary">|</span>}
        </span>
    );
};

const skills = [
    { icon: Code2, title: 'Desenvolvimento', desc: 'React, TypeScript, HTML, CSS, Javascript, Express, Node.js, MongoDB, Tailwind CSS, Styled Components' },
    { icon: Palette, title: 'Design UI/UX', desc: 'Interfaces modernas e intuitivas' },
    { icon: Zap, title: 'Performance', desc: 'Sites rápidos e otimizados' },
    { icon: Sparkles, title: 'Animações', desc: 'Experiências interativas e fluidas' },
];

const AboutSection = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section id="about" className="relative py-30 overflow-hidden"
            style={{ backgroundColor: '#09070E' }}>


            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09070E]/60 to-[#09070E] pointer-events-none" />

            <div className="absolute inset-0 bg-gradient-radial from-purple-500/25 via-transparent to-transparent pointer-events-none" />

            <div ref={containerRef} className="relative container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
                        Sobre Mim
                    </span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                        <span className="text-gradient-neon text-7xl">Lid.Dev</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Imagem */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px] mx-auto">

                          
                            <div className="absolute inset-0 rounded-full bg-gradient-neon opacity-20 blur-xl animate-pulse" />

                           
                            <div className="relative w-full h-full rounded-2xl border-2 border-primary/30 overflow-hidden glass">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                                <img
                                    src={ImgDev}
                                    alt="Lidiane"
                                    className="w-full h-full object-cover md:object-contain"
                                />
                            </div>

                        </div>
                    </motion.div>

                   
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-center lg:text-left"  
                    >
                        <div className="text-lg text-muted-foreground mb-8 lg:mb-12 space-y-4">
                            <TypewriterText
                                text="Olá! Sou a Lidiane, desenvolvedora front-end e web, especializada em criar interfaces modernas, funcionais e visualmente impactantes."
                                delay={500}
                            />

                            <p className="text-foreground/80 mt-8 text-sm lg:text-base">
                                Sou desenvolvedora front-end e web, especializada na criação de interfaces
                                modernas, funcionais e responsivas. Atuo no desenvolvimento de sites,
                                landing pages e aplicações web com foco em performance, usabilidade
                                e experiência do usuário.
                            </p>

                            <p className="text-foreground/80 text-sm lg:text-base">
                                 Trabalho com tecnologias como HTML, CSS, JavaScript, React, TypeScript,
                                Tailwind CSS, Styled Components, Node.js, Express, MongoDB, Git e Figma,
                                aplicando boas práticas de código, design profissional e animações suaves
                                para entregar soluções digitais completas e de alto impacto.
                            </p>
                        </div>

                       
                        <div className="grid grid-cols-2 gap-3 lg:gap-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    className="bg-dark-purple p-3 lg:p-4 rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-[0_8px_16px_rgba(55,45,59,0.3)]"
                                >
                                    <skill.icon className="w-6 h-6 lg:w-8 lg:h-8 text-primary mb-2 lg:mb-3" />
                                    <h3 className="font-display text-xs lg:text-sm font-semibold text-foreground mb-1">
                                        {skill.title}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">{skill.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
