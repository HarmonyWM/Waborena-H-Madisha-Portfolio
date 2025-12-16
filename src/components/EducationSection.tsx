import { GraduationCap, Award, Calendar } from 'lucide-react';
import harmonyEducation from '@/assets/harmony-education.jpeg';

const education = [
  {
    degree: 'Occupational Certificate: Software Engineering (NQF 6)',
    institution: 'WeThinkCode_',
    period: '2025 – Present',
  },
  {
    degree: 'BCom Business Management',
    institution: 'University of Johannesburg',
    period: '2020 – 2024',
  },
];

const certifications = [
  'Oracle Cloud Infrastructure (OCI)',
  'Full Stack Development – FNB App Academy',
  'Microsoft AI Fluency',
  'Generative AI for Software Engineers',
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Education & Certs */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-card rounded-2xl p-6 gradient-border card-hover">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/20 rounded-xl text-primary">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4 hover:border-primary transition-colors">
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-card rounded-2xl p-6 gradient-border card-hover">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/20 rounded-xl text-accent">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-[420px] rounded-2xl overflow-hidden gradient-border glow-box">
                <img
                  src={harmonyEducation}
                  alt="Harmony at graduation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
