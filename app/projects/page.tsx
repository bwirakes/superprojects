import { futureProgramming } from "@/data/content";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
    return (
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
            {/* Page Header */}
            <section className="space-y-6">
                <div className="bg-black text-white px-4 py-2 inline-block">
                    <h1 className="text-4xl md:text-6xl font-heading font-black uppercase">
                        Programming Overview
                    </h1>
                </div>
                <h2 className="text-5xl md:text-7xl font-heading font-black uppercase leading-none opacity-20">
                    2026–2027 Commissions
                </h2>
            </section>

            {/* Projects Grid */}
            <section className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left Column */}
                <div className="space-y-8 lg:space-y-12">
                    {futureProgramming.filter((_, i) => i % 2 === 0).map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}
                </div>

                {/* Right Column (Staggered) */}
                <div className="space-y-8 lg:space-y-12 md:mt-32">
                    {futureProgramming.filter((_, i) => i % 2 !== 0).map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}

                    {/* Visual Filler / CTA */}
                    <div className="border-heavy p-12 bg-surface flex flex-col justify-between min-h-[400px]">
                        <h3 className="text-4xl font-heading font-black uppercase leading-tight">
                            Expanding how art is produced, experienced, and remembered.
                        </h3>
                        <p className="font-body text-xl">
                            Our upcoming cycle of site-specific commissions and performances explores the intersection of social imagination and public space.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
