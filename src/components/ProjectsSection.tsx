import { Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Guardian Shield Analytics Platform',
    subtitle: 'Predictive Safety Intelligence',
    description:
      'Problem: Analyzed historical security incident data to identify risk patterns and predict potential threats. Data Extraction: Queried incident databases using SQL (JOIN operations across event, location, and user tables; GROUP BY for aggregations; WHERE clauses for filtering). Data Cleaning: Handled missing timestamps, removed duplicate records, standardized categorical variables. Python Analysis: Used Pandas for data transformation and NumPy for statistical calculations including correlation analysis between risk factors. EDA: Identified temporal patterns, high-risk locations, and incident frequency trends. Statistical Analysis: Applied regression techniques to develop predictive risk scores. Dashboard Development: Built Power BI dashboards displaying KPIs (incident rates, response times, risk scores) with drill-down capabilities. Business Impact: Improved incident prediction accuracy, enabled proactive resource deployment, reduced average response time through data-driven alerting.',
    tech: ['Python', 'Pandas', 'NumPy', 'SQL', 'Statistical Modelling', 'Power BI', 'Predictive Analytics'],
    skills: ['Data Cleaning', 'Feature Engineering', 'Trend Analysis', 'Dashboard Development', 'Business Intelligence'],
    github: 'https://github.com/HarmonyWM/guardian-shield',
    image: '/Waborena-H-Madisha-Portfolio/guardian-shield.svg',
  },
  {
    title: 'AquaWise SA: Water Consumption Analytics',
    subtitle: 'Sustainability Data Intelligence',
    description:
      'Problem Statement: Addressed water resource management challenges by analyzing consumption patterns and identifying conservation opportunities across South African municipalities. Data Extraction & Preparation: Queried environmental datasets using complex SQL (GROUP BY, aggregate functions, subqueries) to extract consumption metrics. Performed extensive data cleaning including outlier detection, null value imputation, and standardization of measurement units. Technical Execution: Developed Python analytics framework leveraging Pandas for data manipulation and statistical analysis. Conducted time-series forecasting to predict seasonal demand patterns and performed correlation analysis between consumption and demographic factors. Exploratory Data Analysis: Identified peak usage periods, regional consumption disparities, and conservation impact metrics. Developed KPIs tracking water efficiency and sustainability targets. Visualisation & Reporting: Built interactive Power BI dashboards presenting consumption trends, comparative regional analysis, and conservation recommendations. Created stakeholder reports with data storytelling techniques to communicate environmental impact. Business Impact: Enabled evidence-based policy recommendations, improved forecasting accuracy for resource planning, and provided actionable insights supporting 15-20% potential reduction in water waste through targeted interventions.',
    tech: ['Python', 'Pandas', 'SQL', 'Time-Series Analysis', 'Power BI', 'Statistical Forecasting', 'Data Visualization'],
    skills: ['Data Validation', 'Trend Forecasting', 'KPI Development', 'Stakeholder Reporting', 'Environmental Analytics'],
    github: 'https://github.com/HarmonyWM/aqua-wise-sa',
    image: '/Waborena-H-Madisha-Portfolio/aquawise-sa.svg',
  },
  {
    title: 'Nocta Healthcare Analytics System',
    subtitle: 'Clinical Workflow Intelligence',
    description:
      'Problem Statement: Optimized healthcare service delivery by analyzing patient flow, resource utilization, and operational bottlenecks to reduce administrative burden and improve care efficiency. Data Extraction & Preparation: Extracted clinical workflow data using SQL joins across patient records, appointment systems, and resource allocation tables. Cleaned datasets by resolving inconsistent patient identifiers, standardizing timestamps, and validating referential integrity. Technical Execution: Built Python-based analytics engine using Pandas for data transformation and NumPy for statistical calculations. Applied descriptive statistics to measure wait times, resource utilization rates, and service completion metrics. Developed automated reporting pipelines for daily operational insights. Exploratory Data Analysis: Identified workflow inefficiencies, peak demand periods, and resource allocation gaps. Performed comparative analysis across departments to benchmark performance. Visualisation & Reporting: Designed Power BI dashboards tracking KPIs including patient throughput, average wait times, and staff productivity metrics. Created executive reports presenting data-driven recommendations for process optimization. Business Impact: Reduced administrative processing time by approximately 25%, improved data accuracy in patient records, enhanced visibility into operational performance, and enabled evidence-based resource allocation decisions supporting better patient outcomes.',
    tech: ['Python', 'Pandas', 'NumPy', 'SQL', 'Descriptive Statistics', 'Power BI', 'Process Analytics'],
    skills: ['Data Integration', 'Performance Metrics', 'Operational Analytics', 'Dashboard Design', 'Decision Support'],
    github: 'https://github.com/israel77-1995/Nocta-system',
    image: '/Waborena-H-Madisha-Portfolio/nocta-system.svg',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Analytics <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Enterprise-grade data analytics solutions demonstrating technical proficiency and business impact
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
              <div className="relative h-48 overflow-hidden bg-secondary/50 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
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
                <p className="text-muted-foreground text-sm mb-4">
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
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    View Project
                    <ArrowRight size={14} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
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
