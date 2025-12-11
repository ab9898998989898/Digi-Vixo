"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GlobalMap() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hotspot", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
                scale: 0,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "back.out(1.7)"
            });

            gsap.to(".pulse-ring", {
                scale: 3,
                opacity: 0,
                duration: 2,
                repeat: -1,
                ease: "power1.out"
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const hotspots = [
        { top: "30%", left: "20%", label: "North America Hub" }, // US
        { top: "35%", left: "48%", label: "EU Logistics Center" }, // Europe
        { top: "40%", left: "75%", label: "Shenzhen HQ" }, // China
        { top: "65%", left: "85%", label: "Australia Fulfillment" }, // Aus
        { top: "55%", left: "60%", label: "Dubai Regional Office" }, // UAE
    ];

    return (
        <section ref={containerRef} className="py-32 px-6 bg-background text-white relative overflow-hidden">
            {/* Background Mesh Gradient */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-accent blur-[150px] rounded-full mix-blend-screen opacity-20" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-purple-900 blur-[150px] rounded-full mix-blend-screen opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 text-center mb-16">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gold mb-4">Global Reach</h2>
                <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">Border-less Operations.</h3>
            </div>

            {/* Abstract Map Container */}
            <div className="relative w-full max-w-6xl mx-auto aspect-[16/9] bg-neutral-900/50 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm p-4">
                {/* This represents a stylized world map. In a real app we might use a GeoJSON SVG. */}
                {/* For this aesthetic we use a dotted grid + hotspots */}
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                        backgroundSize: "30px 30px"
                    }}
                />

                {/* Stylized Continents Placeholders (CSS Shapes for abstract feel) */}
                <div className="absolute top-[20%] left-[10%] w-[25%] h-[30%] bg-white/5 rounded-full blur-3xl" /> {/* Americas */}
                <div className="absolute top-[20%] left-[45%] w-[15%] h-[20%] bg-white/5 rounded-full blur-3xl" /> {/* Europe */}
                <div className="absolute top-[25%] left-[65%] w-[20%] h-[30%] bg-white/5 rounded-full blur-3xl" /> {/* Asia */}

                {hotspots.map((spot, i) => (
                    <div key={i} className="hotspot absolute" style={{ top: spot.top, left: spot.left }}>
                        <div className="relative">
                            <div className="w-4 h-4 bg-accent rounded-full relative z-10 border-2 border-white shadow-[0_0_20px_rgba(37,99,235,0.8)]" />
                            <div className="pulse-ring absolute top-0 left-0 w-4 h-4 bg-accent rounded-full -z-10" />

                            {/* Label */}
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 text-center">
                                <p className="text-xs font-bold text-neutral-300 uppercase tracking-wider bg-black/80 px-2 py-1 rounded backdrop-blur-md border border-white/10">
                                    {spot.label}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="max-w-4xl mx-auto mt-16 text-center">
                <p className="text-xl text-neutral-400">
                    Our decentralized warehousing network places your products within 72 hours of 80% of the world's purchasing power. We don't just ship; we teleport.
                </p>
            </div>
        </section>
    );
}
