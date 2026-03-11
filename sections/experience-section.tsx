import Section from "@/components/section";
import Image from "next/image";

export default function ExperienceSection() {
    const experience = [
        {
            image: "/assets/rubrik-logo1.png",
            title: "Software engineer II",
            company: "Rubrik",
            location: "Bengaluru",
            start: "July 2022",
            end: "Present",
            description: [
                "Architected frontend solutions for a large-scale legacy-to-cloud platform migration, delivering scalable, production-grade workflows using React, TypeScript, and GraphQL.",
                "Established frontend test coverage standards using Jest and React Testing Library, lifting Data Protection team coverage from 50% to 90% through TDD enforcement and proactive Bug SLO monitoring using Sentry.",
                "Contributed to migrating a monolithic frontend to a multi-package architecture and upgraded core libraries, including React Router, reducing inter-team dependency friction.",
                "Enforced frontend best practices across the team, including accessibility standards, performance optimization, and thorough code reviews, maintaining high code quality across the Data Protection codebase."
            ],
        },
        {
            image: "/assets/sprinkledata.jpeg",
            title: "Software engineer",
            company: "Sprinkle Data",
            location: "Bengaluru",
            start: "July 2019",
            end: "July 2022",
            description: [
                "Introduced React Query for server-state management, improving data synchronization and reducing redundant API calls.",
                "Contributed to migration of legacy jQuery application to React, enhancing scalability and modularity.",
                "Built interactive dashboards using React and Google Charts, enabling real-time visualization of business metrics.",
                "Designed and delivered end-to-end Billing module (Java + MSSQL backend, React frontend), owning feature development from concept to production."
            ],
        },
    ];

    return (
        <Section title="Experience">
            <div className="space-y-6">
                {experience.map((experience) => (
                    <div key={experience.title} className="w-full border border-gray-200 p-6 rounded-xl bg-white">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg">
                                    <Image
                                        src={experience.image}
                                        alt={experience.title}
                                        width={25}
                                        height={25}
                                        className="size-10"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-800">
                                        {experience.title}
                                    </h3>
                                    <div>{experience.company}</div>
                                </div>
                            </div>
                            <div>{experience.start} - {experience.end}</div>
                        </div>
                        <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
                            {experience.description.map((description) => (
                                <li key={description}>{description}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}