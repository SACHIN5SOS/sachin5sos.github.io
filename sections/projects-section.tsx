import Section from "@/components/section";
import Image from "next/image";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Marketplace",
            description: "E-commerce web app",
            image: "/assets/project-1.png",
        },
        {
            title: "Navigator",
            description: "Navigation app design",
            image: "/assets/project-2.png",
        },
    ];

    return (
        <Section title="Projects">
            <div className="flex flex-wrap justify-center items-center gap-4 mr-auto lg:bg-white">
                {projects.map((project) => (
                    <div key={project.title} className="hover:-translate-y-0.5 transition duration-300 max-w-75 border border-gray-200 rounded-xl">
                        <Image
                            className="rounded-t-xl h-42 object-fit"
                            src={project.image}
                            alt={project.title}
                            width={300}
                            height={170}
                        />
                        <div className="p-4">
                            <h3 className="text-base font-medium">
                                {project.title}
                            </h3>
                            <p className="text-gray-500 mt-1">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}