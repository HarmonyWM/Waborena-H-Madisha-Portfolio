import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AchievementsSection from '@/components/AchievementsSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import LeadershipSection from '@/components/LeadershipSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AchievementsSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <LeadershipSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
