import { upcomingEvents } from "@/data/content";
import { Clock, MapPin } from "lucide-react";

export default function EventsPage() {
    return (
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
            {/* Page Header */}
            <section className="space-y-6">
                <div className="bg-black text-white px-4 py-2 inline-block">
                    <h1 className="text-4xl md:text-6xl font-heading font-black uppercase">
                        Schedule
                    </h1>
                </div>
                <h2 className="text-5xl md:text-7xl font-heading font-black uppercase leading-none opacity-20">
                    Singapore Art Week
                </h2>
            </section>

            {/* Events List */}
            <section className="space-y-24">
                {upcomingEvents.map((event, i) => (
                    <div key={i} className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-16 group">
                        {/* Left Column: Date */}
                        <div className="md:col-span-4 border-t-4 border-black pt-6">
                            <h3 className="text-4xl md:text-5xl font-heading font-black uppercase leading-none break-words">
                                {event.date}
                            </h3>
                        </div>

                        {/* Right Column: Details */}
                        <div className="md:col-span-8 border-t-4 border-black pt-6 space-y-8">
                            <div className="space-y-2">
                                <h4 className="text-3xl md:text-5xl font-heading font-black uppercase leading-tight">
                                    {event.title}
                                </h4>
                                <div className="flex flex-wrap gap-6 text-sm md:text-base font-heading font-bold uppercase tracking-widest pt-2">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-5 w-5" />
                                        {event.time}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-5 w-5" />
                                        {event.location}
                                    </div>
                                </div>
                            </div>

                            <p className="font-body text-xl md:text-2xl leading-relaxed max-w-3xl">
                                {event.description}
                            </p>

                            <button className="border-heavy px-8 py-4 font-heading font-black uppercase text-lg hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 active:translate-y-0">
                                Join Event
                            </button>
                        </div>
                    </div>
                ))}
            </section>

            {/* RSVP / Footer Message */}
            <section className="bg-black text-white p-12 md:p-24 text-center space-y-8">
                <h3 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter">
                    SEE YOU IN SINGAPORE
                </h3>
                <p className="font-body text-xl md:text-2xl max-w-2xl mx-auto opacity-80">
                    SUPER PROJECTS invites you to join us as we bridge art, fashion, and culture during Singapore Art Week 2026.
                </p>
            </section>
        </div>
    );
}
