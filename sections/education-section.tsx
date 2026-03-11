import Section from "@/components/section";
import Image from "next/image";

export default function EducationSection() {
    return (
        <Section title="Education">
            <div className="w-full border border-gray-200 p-6 rounded-xl bg-white">
                <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg">
                            <Image
                                src="/assets/lpu-logo.png"
                                alt="Education"
                                width={50}
                                height={50}
                                className="size-10.5"
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-gray-800">
                                Lovely Professional University
                            </h3>
                            <div>Bachelors of Computer Science</div>
                        </div>
                    </div>
                    <div>July 2016 - July 2020</div>
                </div>
                <p className="mt-6 text-gray-500">A significant part of the education involves practical experience through labs and projects, which are designed to enhance problem-solving skills</p>
            </div>
        </Section>
    );
}