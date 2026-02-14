"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white border-b-2 border-black">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 md:h-24">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image src="/logo-v2.png" alt="SUPER PROJECTS" width={300} height={100} className="h-10 md:h-12 w-auto" priority />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="font-heading font-bold uppercase tracking-wider text-sm hover:underline decoration-2 underline-offset-4"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Nav Toggle */}
                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="hover:bg-transparent">
                                    <Menu className="h-8 w-8 text-black" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-full bg-white border-l-2 border-black p-0">
                                <SheetHeader className="p-4 border-b-2 border-black flex flex-row justify-between items-center">
                                    <SheetTitle className="text-xl font-heading font-black uppercase text-left">
                                        SUPER PROJECTS
                                    </SheetTitle>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setIsOpen(false)}
                                        className="hover:bg-transparent"
                                    >
                                        <X className="h-8 w-8 text-black" />
                                    </Button>
                                </SheetHeader>
                                <div className="flex flex-col p-6 gap-8">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-4xl font-heading font-black uppercase tracking-tighter hover:bg-black hover:text-white p-2 -mx-2 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
