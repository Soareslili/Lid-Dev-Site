import { motion } from 'framer-motion';



const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/30"
       style={{ backgroundColor: '#09070E' }}>

      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
      
      <div className="relative container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#hero"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-xl font-bold text-gradient-neon"
          >
            Lid.Dev
          </motion.a>

         
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            © {currentYear} Lidiane Santos. Todos os direitos reservados.
            
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;