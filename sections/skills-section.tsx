import Section from "@/components/section";

export default function SkillsSection() {
    const skills = [
        "JavaScript",
        "React.js",
        "HTML5",
        "CSS3",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "MySQL",
        "Git",
        "Java"
    ];

    return (
        <Section title="Skills">
            <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                    <p key={skill} className="bg-white border cursor-default border-gray-300 hover:bg-gray-100/70 text-gray-600 text-[13px] rounded-full px-5 py-1.5">
                        {skill}
                    </p>
                ))}
            </div>
        </Section>
    );
}