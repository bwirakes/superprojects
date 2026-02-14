import { vision, mission, concept, team } from "@/data/content";

export default function AboutPage() {
    const founders = team.filter((t) => t.role === "Founding Team");
    const advisors = team.filter((t) => t.role === "Advisor");

    return (
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
            {/* Page Header */}
            <section>
                <div className="bg-black text-white px-4 py-2 inline-block mb-12">
                    <h1 className="text-4xl md:text-6xl font-heading font-black">ABOUT SUPER PROJECTS</h1>
                </div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-surface/20 opacity-20 uppercase leading-none">
                    ART THAT MEETS THE MOMENT
                </h2>
            </section>

            {/* Vision & Mission */}
            <section className="grid md:grid-cols-2 gap-20">
                <div className="space-y-8">
                    <h3 className="text-3xl font-heading font-black border-b-2 border-black pb-4">VISION</h3>
                    <p className="text-2xl md:text-3xl font-body leading-relaxed">
                        {vision.statement}
                    </p>
                </div>
                <div className="space-y-8">
                    <h3 className="text-3xl font-heading font-black border-b-2 border-black pb-4">MISSION</h3>
                    <p className="text-xl md:text-2xl font-body font-bold italic">
                        {mission.core}
                    </p>
                    <div className="space-y-6 pt-8">
                        <p className="text-lg font-body">{mission.preamble}</p>
                        <ul className="space-y-4">
                            {mission.pillars.map((pillar, i) => (
                                <li key={i} className="flex gap-4">
                                    <span className="font-heading font-black text-xl">0{i + 1}</span>
                                    <p className="text-lg font-body">
                                        <span className="font-bold">{pillar.title}</span> {pillar.description}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Concept */}
            <section className="space-y-12">
                <h3 className="text-3xl font-heading font-black border-b-2 border-black pb-4">CONCEPT</h3>
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                    <div className="space-y-8 text-xl font-body leading-relaxed">
                        {concept.paragraphs.slice(0, 2).map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                    <div className="space-y-8 text-xl font-body leading-relaxed">
                        {concept.paragraphs.slice(2).map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founders */}
            <section className="space-y-12">
                <div className="bg-black text-white px-4 py-2 inline-block">
                    <h3 className="text-3xl font-heading font-black">SUPER PROJECTS – FOUNDING TEAM</h3>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
                    {founders.map((member) => (
                        <div key={member.name} className="space-y-6">
                            <h4 className="text-2xl font-heading font-black border-b-2 border-black pb-2">
                                {member.name.toUpperCase()}
                            </h4>
                            <p className="text-lg font-body leading-relaxed">
                                {member.bio}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Advisor */}
            <section className="space-y-12 bg-surface p-8 md:p-16 border-heavy">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/3">
                        <h4 className="text-3xl font-heading font-black">{advisors[0].name.toUpperCase()}</h4>
                        <p className="text-sm font-heading font-bold uppercase tracking-widest mt-2">{advisors[0].role}</p>
                    </div>
                    <p className="md:w-2/3 text-xl font-body leading-relaxed">
                        {advisors[0].bio}
                    </p>
                </div>
            </section>
        </div>
    );
}
