import Footer from "@/components/footer";
import AboutSection from "@/sections/about-section";
import ContactSection from "@/sections/contact-section";
import EducationSection from "@/sections/education-section";
import ExperienceSection from "@/sections/experience-section";
import HeroSection from "@/sections/hero-section";
import ProjectsSection from "@/sections/projects-section";
import SkillsSection from "@/sections/skills-section";

export default function Page() {
  return (
    <main className="max-md:px-4">
      <div className="min-h-screen w-full bg-white relative overflow-hidden">
        {/* Purple Corner Grid Background */}
        <div
          className="fixed inset-0 z-0  pointer-events-none"
          style={{
            backgroundImage: `
       linear-gradient(to right, #f0f0f0 1px, transparent 1px),
       linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
       radial-gradient(circle 600px at 0% 200px, #d5c5ff, transparent),
       radial-gradient(circle 600px at 100% 200px, #d5c5ff, transparent)
     `,
            backgroundSize: "20px 20px, 20px 20px, 100% 100%, 100% 100%",
          }}
        />
        {/* Your Content Here */}
        <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
        </div>
      </div>
    </main>
  );
}
