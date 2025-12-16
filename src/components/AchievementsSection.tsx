import { Trophy, Award, Star } from 'lucide-react';
import achievementsBg from '@/assets/achievements-bg.jpeg';

const achievements = [
  {
    icon: Trophy,
    title: '1st Place – Meta LLaMA Hackathon',
    year: '2025',
    description:
      'Built an AI-driven solution using Meta LLaMA models, focusing on innovation, rapid prototyping, and real-world impact.',
    color: 'primary',
  },
  {
    icon: Award,
    title: 'Top 10 Finalist – NEMISA Discothon',
    year: '2025',
    description:
      'Selected among top teams nationally for innovative use of emerging technologies.',
    color: 'accent',
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={achievementsBg}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Achievements & <span className="gradient-text">Awards</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Recognition for innovation and excellence in technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 card-hover gradient-border glow-box-hover"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-4 rounded-xl ${
                    achievement.color === 'primary'
                      ? 'bg-primary/20 text-primary'
                      : 'bg-accent/20 text-accent'
                  }`}
                >
                  <achievement.icon size={32} />
                </div>
                <div className="flex-1">
                  <span className="text-sm text-muted-foreground font-medium">
                    {achievement.year}
                  </span>
                  <h3 className="text-xl font-bold font-heading mt-1 mb-3 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </div>

              {/* Decorative star */}
              <Star
                size={16}
                className="absolute top-4 right-4 text-primary/30 group-hover:text-primary/60 transition-colors"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
