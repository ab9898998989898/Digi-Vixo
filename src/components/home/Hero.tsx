"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (titleRef.current && subtitleRef.current && ctaRef.current) {
            // Initial reveal
            tl.fromTo(titleRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, delay: 0.2 }
            )
                .fromTo(subtitleRef.current,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    "-=0.8"
                )
                .fromTo(ctaRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "-=0.6"
                );
        }

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-[95vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
            {/* Background with premium glow effects */}
            <div className="absolute inset-0 -z-10 bg-black">
                <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-purple-500/10 blur-[120px] rounded-full mix-blend-screen animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen animate-pulse delay-1000" />
            </div>

            <div className="max-w-5xl mx-auto space-y-10 z-10">
                <div className="overflow-hidden">
                    <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 leading-[1.1] pb-4">
                        Your Complete <br />Digital Business Partner.
                    </h1>
                </div>

                <p ref={subtitleRef} className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed opacity-0">
                    DIGIVIXO integrates global dropshipping, wholesale operations, five core digital services, and practical education—so you can learn, execute, and scale all in one place.
                </p>

                <div ref={ctaRef} className="flex flex-col md:flex-row gap-6 justify-center items-center opacity-0 pt-4 mb-2">
                    <a href="/services" className="w-full md:w-auto px-10 py-5 bg-accent text-black rounded-full text-lg font-bold tracking-wide hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(212,175,55,0.3)]">
                        Explore Solutions
                    </a>
                    <a href="/contact" className="w-full md:w-auto px-10 py-5 border border-white/20 rounded-full text-lg font-medium tracking-wide hover:bg-white/10 transition-colors backdrop-blur-sm text-white">
                        Partner With Us
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </div>
        </section>
    );
}
