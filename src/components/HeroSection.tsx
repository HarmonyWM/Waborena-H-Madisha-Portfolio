import { ArrowDown, Download, ExternalLink, MapPin } from 'lucide-react';
import harmonyPortrait from '@/assets/harmony-portrait.jpeg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float delay-300" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="animate-fade-up">
              <p className="text-primary font-medium mb-4 flex items-center gap-2">
                <MapPin size={16} />
                Johannesburg, South Africa
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text text-glow">Waborena Harmony Madisha</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Business Management Graduate | Software Engineering Student | Cloud & AI Certified
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                I build technology-driven solutions that combine business strategy, software
                engineering, and AI to create real-world impact.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:scale-105 glow-box animate-pulse-glow"
                >
                  View Projects
                  <ExternalLink size={18} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-lg font-semibold transition-all duration-300 hover:bg-secondary gradient-border"
                >
                  Download CV
                  <Download size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-up delay-200">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden gradient-border glow-box">
                <img
                  src={harmonyPortrait}
                  alt="Waborena Harmony Madisha"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float delay-500" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#achievements" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
