"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
    project: {
        artist: string;
        year: string;
        project: string;
        concept?: string;
        bio?: string;
        curatorial?: string;
        timeline?: { date?: string; year?: string; event: string }[];
    };
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            layout
            className="border-heavy bg-white overflow-hidden flex flex-col"
        >
            <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                    <span className="font-heading font-bold text-sm tracking-widest bg-black text-white px-2 py-1">
                        {project.year}
                    </span>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="hover:bg-black hover:text-white transition-colors"
                    >
                        {isExpanded ? <Minus className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
                    </Button>
                </div>

                <h3 className="text-5xl md:text-6xl font-heading font-black leading-none uppercase break-words">
                    {project.artist}
                </h3>
                <h4 className="text-xl font-heading font-bold uppercase tracking-tight">
                    {project.project}
                </h4>

                {!isExpanded && project.concept && (
                    <p className="font-body text-lg line-clamp-3">
                        {project.concept}
                    </p>
                )}
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                    >
                        <div className="px-8 pb-8 space-y-8 border-t-2 border-black pt-8">
                            {project.bio && (
                                <div className="space-y-4">
                                    <h5 className="font-heading font-bold uppercase text-sm border-b-2 border-black inline-block">Artist Bio</h5>
                                    <p className="font-body text-lg leading-relaxed">{project.bio}</p>
                                </div>
                            )}

                            {project.concept && !project.bio && (
                                <div className="space-y-4">
                                    <h5 className="font-heading font-bold uppercase text-sm border-b-2 border-black inline-block">Concept</h5>
                                    <p className="font-body text-lg leading-relaxed">{project.concept}</p>
                                </div>
                            )}

                            {project.curatorial && (
                                <div className="space-y-4">
                                    <h5 className="font-heading font-bold uppercase text-sm border-b-2 border-black inline-block">Curatorial Direction</h5>
                                    <p className="font-body text-lg italic">{project.curatorial}</p>
                                </div>
                            )}

                            {project.timeline && (
                                <div className="space-y-4">
                                    <h5 className="font-heading font-bold uppercase text-sm border-b-2 border-black inline-block">Project Timeline</h5>
                                    <div className="space-y-4">
                                        {project.timeline.map((item, i) => (
                                            <div key={i} className="flex gap-4 border-l-2 border-black pl-4 py-1">
                                                <span className="font-heading font-black text-sm whitespace-nowrap">
                                                    {item.date || item.year}
                                                </span>
                                                <p className="font-body text-lg">{item.event}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <Button
                                variant="outline"
                                className="w-full border-heavy font-heading font-black uppercase text-lg h-14 hover:bg-black hover:text-white transition-colors"
                                onClick={() => setIsExpanded(false)}
                            >
                                Close Project Details
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
