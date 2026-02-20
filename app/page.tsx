import { brand } from "@/data/content";
import DynamicColorProvider from "@/components/DynamicColorProvider";

export default function Home() {
  return (
    <div
      className="relative flex flex-col min-h-screen transition-colors duration-500"
      style={{
        backgroundColor: "var(--dynamic-bg, #ffffff)",
        color: "var(--dynamic-fg, #000000)"
      }}
    >
      <DynamicColorProvider />
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20 min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-96px)]">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-heading font-black text-center leading-[0.85] tracking-tighter uppercase max-w-[90vw]">
          {brand.tagline}
        </h1>
      </section>

      {/* Marquee Ticker */}
      <div
        className="py-4 md:py-6 overflow-hidden border-t-2 transition-colors duration-500"
        style={{
          backgroundColor: "var(--dynamic-fg, #000000)",
          color: "var(--dynamic-bg, #ffffff)",
          borderColor: "var(--dynamic-fg, #000000)"
        }}
      >
        <div className="marquee [--gap:3rem]">
          <div className="marquee-content whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="text-2xl md:text-3xl font-heading font-black uppercase inline-block">
                UPCOMING: SINGAPORE ART WEEK — JAN 22 & 23 — JOIN US
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
