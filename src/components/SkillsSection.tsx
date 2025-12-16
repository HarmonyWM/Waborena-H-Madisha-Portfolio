import { Code, Briefcase } from 'lucide-react';

const technicalSkills = [
  'Python',
  'Java',
  'C++',
  'JavaScript',
  'MySQL',
  'Cloud Computing',
  'AI & Generative AI',
  'Full Stack Development',
];

const businessSkills = [
  'Project Management',
  'Stakeholder Engagement',
  'Business Strategy',
  'Data Analysis',
  'Marketing & Digital Campaigns',
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A blend of technical proficiency and business acumen
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Technical Skills */}
          <div className="bg-card rounded-2xl p-8 gradient-border glow-box-hover card-hover">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-xl text-primary">
                <Code size={28} />
              </div>
              <h3 className="text-2xl font-bold font-heading">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Business Skills */}
          <div className="bg-card rounded-2xl p-8 gradient-border glow-box-hover card-hover">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/20 rounded-xl text-accent">
                <Briefcase size={28} />
              </div>
              <h3 className="text-2xl font-bold font-heading">Business & Professional</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {businessSkills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
