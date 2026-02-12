import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Code2, Palette, Zap, Sparkles } from 'lucide-react';

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

            {/* Background effects */}
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

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Avatar/Image side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative w-80 h-80 mx-auto">
                            {/* Outer glow ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-neon opacity-20 blur-xl animate-pulse" />

                            {/* Avatar container */}
                            <div className="relative w-full h-full rounded-full border-2 border-primary/30 overflow-hidden glass">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="font-display text-8xl gradient-text font-bold">L</span>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center animate-float">
                                <Code2 className="w-8 h-8 text-primary" />
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                                <Sparkles className="w-7 h-7 text-accent" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Text side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="text-lg text-muted-foreground mb-12 space-y-4">
                            <TypewriterText
                                text="Olá! Sou a Lidiane, desenvolvedora front-end e web, especializada em criar interfaces modernas, funcionais e visualmente impactantes."
                                delay={500}
                            />

                            <p className="text-foreground/80 mt-8">
                                Sou desenvolvedora front-end e web, especializada na criação de interfaces
                                modernas, funcionais e responsivas. Atuo no desenvolvimento de sites,
                                landing pages e aplicações web com foco em performance, usabilidade
                                e experiência do usuário.
                            </p>

                            <p className="text-foreground/80">
                                Trabalho com tecnologias como HTML, CSS, JavaScript, React, TypeScript,
                                Tailwind CSS, Styled Components, Node.js, Express, MongoDB, Git e Figma,
                                aplicando boas práticas de código, design profissional e animações suaves
                                para entregar soluções digitais completas e de alto impacto.
                            </p>

                        </div>

                        {/* Skills grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    className="bg-dark-purple p-4 rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-[0_8px_16px_rgba(55, 45, 59, 0.3)]"
                                >
                                    <skill.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                                    <h3 className="font-display text-sm font-semibold text-foreground mb-1">
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
