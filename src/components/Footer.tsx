import { Mail, Phone, MapPin, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold font-heading mb-6 gradient-text">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:madishaharmony@yahoo.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
                madishaharmony@yahoo.com
              </a>
              <a
                href="tel:+27648026856"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={20} />
                064 802 6856
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={20} />
                Johannesburg, South Africa
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-6">Quick Links</h3>
            <div className="space-y-3">
              {['Home', 'Projects', 'Skills', 'Education', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-6">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/HarmonyWM"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:madishaharmony@yahoo.com"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2025 Waborena Harmony Madisha. Made with{' '}
            <Heart size={16} className="text-primary" /> in South Africa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
