import { Users, Globe, Heart } from 'lucide-react';

const leadership = [
  {
    icon: Users,
    role: 'UNICEF UJ Board Member',
    year: '2024',
    description:
      'Spearheaded programs, partnerships, and community initiatives to drive youth engagement and social impact.',
  },
  {
    icon: Globe,
    role: 'Project Manager – UNICEF UJ',
    year: '2023-2024',
    description:
      'Led climate change and community awareness projects, coordinating teams and stakeholders for maximum impact.',
  },
];

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Leadership & <span className="gradient-text">Impact</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Driving change through community engagement and leadership
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {leadership.map((item, index) => (
                <div
                  key={index}
                  className="relative flex gap-8 group"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon size={28} className="text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-card rounded-2xl p-6 flex-1 card-hover gradient-border">
                    <span className="text-sm text-primary font-medium">{item.year}</span>
                    <h3 className="text-xl font-bold font-heading mt-1 mb-2 group-hover:text-primary transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
