import { Database, TrendingUp, BarChart3 } from 'lucide-react';

const dataAnalyticsSkills = [
  'Python (Pandas, NumPy)',
  'SQL Query Development',
  'Data Extraction & Transformation',
  'Data Cleaning & Validation',
  'Statistical Modelling',
  'Exploratory Data Analysis (EDA)',
  'Quantitative Analysis',
];

const businessIntelligenceSkills = [
  'Power BI Dashboard Development',
  'Data Visualization',
  'Business Intelligence Reporting',
  'KPI Development & Tracking',
  'Decision Support Analytics',
  'Reporting Automation',
  'Operational Performance Metrics',
];

const professionalSkills = [
  'Data-Driven Insights',
  'Stakeholder Collaboration',
  'Business Strategy',
  'Project Management',
  'Executive Reporting',
  'Cross-Functional Communication',
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
            Comprehensive analytics capabilities from data extraction to strategic insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Data Analytics & Engineering */}
          <div className="bg-card rounded-2xl p-8 gradient-border glow-box-hover card-hover">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-xl text-primary">
                <Database size={28} />
              </div>
              <h3 className="text-xl font-bold font-heading">Data Analytics</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {dataAnalyticsSkills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Business Intelligence */}
          <div className="bg-card rounded-2xl p-8 gradient-border glow-box-hover card-hover">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/20 rounded-xl text-accent">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-xl font-bold font-heading">Business Intelligence</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {businessIntelligenceSkills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="bg-card rounded-2xl p-8 gradient-border glow-box-hover card-hover">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-xl text-primary">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-bold font-heading">Professional Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {professionalSkills.map((skill) => (
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
