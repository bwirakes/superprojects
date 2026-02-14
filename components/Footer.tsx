import { brand } from "@/data/content";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#f7f7f7] border-t-2 border-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                    <Image src="/logo-v2.png" alt="SUPER PROJECTS" width={200} height={60} className="h-8 w-auto mb-2" />
                    <p className="text-xs uppercase tracking-widest font-heading font-bold opacity-70">
                        {brand.tagline}
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-8 text-sm font-heading font-bold uppercase tracking-wider">
                    <a href="#" className="hover:underline decoration-2 underline-offset-4">Instagram</a>
                    <a href="#" className="hover:underline decoration-2 underline-offset-4">Facebook</a>
                    <a href="#" className="hover:underline decoration-2 underline-offset-4">Subscribe</a>
                </div>
                <div className="text-xs font-heading font-bold uppercase opacity-50">
                    © {year} {brand.name}. ALL RIGHTS RESERVED.
                </div>
            </div>
        </footer>
    );
}
