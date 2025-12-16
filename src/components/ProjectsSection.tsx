import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'EmpowerHer Web App',
    subtitle: 'SheLeads Hackathon',
    description:
      'A web platform designed to empower women by providing access to mentorship, resources, and community support.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python'],
    skills: ['Full-stack development', 'Teamwork', 'Rapid prototyping'],
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=400&fit=crop',
    link: '#',
  },
  {
    title: 'Dice Simulation & Statistical Analysis',
    subtitle: 'Data Science Project',
    description:
      'A data-driven simulation project analyzing dice roll probabilities using Python, visualized with histograms and statistical summaries.',
    tech: ['Python', 'Data Analysis'],
    skills: ['Statistical analysis', 'Data visualization'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    link: '#',
  },
  {
    title: 'Guardian Shield',
    subtitle: 'AI Safety Platform',
    description:
      'An AI-powered safety and awareness platform designed to enhance personal and community security through intelligent monitoring and alert systems.',
    tech: ['Python', 'AI Concepts', 'Backend Logic', 'Git'],
    skills: ['Problem-solving', 'AI application design', 'Secure system thinking'],
    github: 'https://github.com/HarmonyWM/guardian-shield',
    link: '#',
  },
  {
    title: 'AquaWise SA',
    subtitle: 'Sustainability Tech',
    description:
      'A sustainability-focused technology solution promoting water conservation and environmental awareness within South Africa.',
    tech: ['Python', 'Data Analysis', 'Sustainability Tech', 'Git'],
    skills: ['Environmental innovation', 'Data interpretation', 'Social impact design'],
    github: 'https://github.com/HarmonyWM/aqua-wise-sa',
    link: '#',
  },
  {
    title: 'Nocta System',
    subtitle: 'Healthcare Workflow App',
    description:
      'A healthcare workflow app designed to reduce paperwork, streamline communication between nurses, doctors, and patients, and improve overall service delivery using AI.',
    tech: ['Java', 'Python', 'System Design', 'Git', 'OOP'],
    skills: ['Team collaboration', 'Software architecture', 'Version control'],
    github: 'https://github.com/israel77-1995/Nocta-system',
    link: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A selection of my recent work showcasing innovation and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.subtitle}
                </span>
                <h3 className="text-xl font-bold font-heading mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-secondary rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    View Project
                    <ArrowRight size={14} />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
