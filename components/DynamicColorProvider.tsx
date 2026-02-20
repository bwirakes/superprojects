"use client";

import { useEffect, useState } from "react";
import { neonPalettes } from "@/lib/colors";

export default function DynamicColorProvider() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Pick random palette
        const mix = neonPalettes[Math.floor(Math.random() * neonPalettes.length)];

        // Inject variables to root document
        document.documentElement.style.setProperty("--dynamic-bg", mix.bg);
        document.documentElement.style.setProperty("--dynamic-fg", mix.fg);

        setMounted(true);

        // Cleanup on unmount, so it reverts to safe defaults on other pages
        return () => {
            document.documentElement.style.removeProperty("--dynamic-bg");
            document.documentElement.style.removeProperty("--dynamic-fg");
        };
    }, []);

    // Use this state anywhere else if strictly needed for hydration,
    // but CSS vars are safest to prevent mismatch during hydration.
    if (!mounted) return null;

    return null;
}
