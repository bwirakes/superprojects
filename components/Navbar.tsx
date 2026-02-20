"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import LogoSVG from "./LogoSVG";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <nav
            className="sticky top-0 z-50 w-full border-b-2 transition-colors duration-500"
            style={{
                backgroundColor: isHome ? 'var(--dynamic-bg, #f7f7f7)' : '#f7f7f7',
                color: isHome ? 'var(--dynamic-fg, #000000)' : '#000000',
                borderColor: isHome ? 'var(--dynamic-fg, #000000)' : '#000000'
            }}
        >
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 md:h-24">
                    {/* Logo */}
                    <Link href="/" className="flex items-center text-inherit">
                        <LogoSVG className="h-10 md:h-12 w-[auto] fill-current" />
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
                                <Button variant="ghost" size="icon" className="hover:bg-transparent text-inherit">
                                    <Menu className="h-8 w-8 text-inherit" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="w-full border-l-2 p-0 transition-colors duration-500"
                                style={{
                                    backgroundColor: isHome ? 'var(--dynamic-bg, #ffffff)' : '#ffffff',
                                    color: isHome ? 'var(--dynamic-fg, #000000)' : '#000000',
                                    borderColor: isHome ? 'var(--dynamic-fg, #000000)' : '#000000'
                                }}
                            >
                                <SheetHeader
                                    className="p-4 border-b-2 flex flex-row justify-between items-center"
                                    style={{ borderColor: isHome ? 'var(--dynamic-fg, #000000)' : '#000000' }}
                                >
                                    <SheetTitle className="text-xl font-heading font-black uppercase text-left text-inherit">
                                        SUPER PROJECTS
                                    </SheetTitle>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setIsOpen(false)}
                                        className="hover:bg-transparent text-inherit"
                                    >
                                        <X className="h-8 w-8 text-inherit" />
                                    </Button>
                                </SheetHeader>
                                <div className="flex flex-col p-6 gap-8">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-4xl font-heading font-black uppercase tracking-tighter p-2 -mx-2 transition-colors hover:bg-[var(--dynamic-fg,black)] hover:text-[var(--dynamic-bg,white)]"
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
