import { BackgroundEffects } from './components/BackgroundEffects';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1C] text-white overflow-x-hidden">
      {/* Background Effects Layer */}
      <BackgroundEffects />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>

      {/* Subtle Ambient Glow Effects - Reduced intensity */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-600/3 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-violet-600/3 rounded-full blur-[100px]" />
      </div>
    </div>
  );
}