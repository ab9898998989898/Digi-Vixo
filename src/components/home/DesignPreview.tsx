"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, BookOpen, Download } from "lucide-react";
import Image from "next/image";

export default function DesignPreview() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            });

            tl.from(contentRef.current, { x: -50, opacity: 0, duration: 1 })
                .from(imageRef.current, { x: 50, opacity: 0, duration: 1 }, "-=0.8");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-6 border-y border-neutral-800">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div ref={contentRef} className="flex-1 space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-xs uppercase tracking-widest font-medium">
                        <Download className="w-3 h-3" /> Design Assets
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        Elevate Your <br /> Digital Brand.
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-md">
                        Access our curated collection of design frameworks, UI kits, and technical guides developed to streamline your digital transformation.
                    </p>

                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-white rounded-full" />
                            <span>Premium UI/UX Design Assets</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-white rounded-full" />
                            <span>Customizable Brand Identity Kits</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-white rounded-full" />
                            <span>Technical Documentation & Guides</span>
                        </li>
                    </ul>

                    <Link href="/services#design" className="inline-flex items-center gap-2 text-lg font-medium hover:gap-4 transition-all">
                        Explore Library <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                <div ref={imageRef} className="flex-1 w-full aspect-square md:aspect-auto md:h-[500px] bg-neutral-800 rounded-2xl overflow-hidden relative">
                    {/* Placeholder for actual image */}
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                        <Image src='/design-assets.png' fill className="object-cover" alt="digital design assets" />
                    </div>
                    <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                        <p className="text-sm font-medium text-white">Latest Release</p>
                        <p className="text-xl font-bold text-white">Modern UI Design Standards 2025</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
