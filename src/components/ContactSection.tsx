import { motion, useInView } from 'framer-motion';
import { Send } from 'lucide-react';
import { useRef, useState } from 'react';
import { toast } from 'sonner';


const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };



  return (
    <section id="contact" className="relative py-20 overflow-hidden"
     style={{ backgroundColor: '#09070E' }}>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div ref={sectionRef} className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Vamos </span>
            <span className="text-gradient-neon">Conversar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pronta para transformar sua ideia em realidade. 
            Entre em contato e vamos criar algo incrível juntos!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 items-center ">
              <div>
                <label className="block text-sm font-display text-foreground mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className=" w-full border border-primary rounded-2xl px-4 py-3 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="Seu nome"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-display text-foreground mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-primary rounded-2xl px-4 py-3 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-display text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-primary rounded-2xl px-4 py-3 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="Conte-me sobre seu projeto..."
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-primary w-full cursor-pointer py-4 rounded-lg text-accent-foreground  flex items-center justify-center gap-2 group"
              >
                <span>Enviar Mensagem</span>
                <Send className="w-5 h-5 text-accent-foreground" />
              </button>
            </form>
          </motion.div>

        
       
            
        

            
        
        </div>
      </div>
    </section>

    
  );
};

export default ContactSection;