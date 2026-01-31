import { motion } from 'framer-motion';
import { Instagram, Mail, Phone, Heart } from 'lucide-react';

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

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://instagram.com/lid.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="mailto:contato@lid.dev"
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            © {currentYear} Lid.Dev. Feito com
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;