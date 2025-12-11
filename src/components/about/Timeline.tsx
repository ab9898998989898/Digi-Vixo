"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item, i) => {
                gsap.from(item, {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                    }
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const milestones = [
        {
            year: "2018",
            title: "The Inception",
            description: "Abdullah and Hassan identify the gap in reliable dropshipping supply chains while running their own e-commerce ventures. They begin building a private network of trusted suppliers."
        },
        {
            year: "2020",
            title: "The Beta Launch",
            description: "Digivixo launches as an invite-only platform for high-volume sellers. We process our first 10,000 orders and establish key partnerships in Shenzhen."
        },
        {
            year: "2022",
            title: "Expansion to Wholesale",
            description: "Responding to partner demand, we open our B2B wholesale division, allowing brands to manufacture custom products with lower MOQs."
        },
        {
            year: "2024",
            title: "Digital Ecosystem",
            description: "We launch our Digital Assets library, providing the education and tools necessary for new entrepreneurs to enter the market."
        },
        {
            year: "2025",
            title: "Going Global",
            description: "Digivixo opens its public portal, democratizing access to enterprise-grade logistics for businesses worldwide."
        }
    ];

    return (
        <section ref={containerRef} className="py-32 px-6 bg-neutral-950 text-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-24 text-center">Our Journey</h2>

                <div className="space-y-16 relative border-l border-neutral-800 ml-4 md:ml-0 pl-8 md:pl-0">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="timeline-item md:grid md:grid-cols-[1fr_auto_1fr] gap-12 items-start relative">
                            {/* Left Side (Even Index) */}
                            <div className={cn("hidden md:block text-right", index % 2 === 1 && "invisible")}>
                                <span className="text-8xl font-bold text-neutral-900 absolute top-0 right-0 -z-10 select-none transform translate-x-12">{milestone.year}</span>
                                <h3 className="text-2xl font-bold mb-4 pt-4">{milestone.title}</h3>
                                <p className="text-neutral-400 leading-relaxed max-w-sm ml-auto">
                                    {milestone.description}
                                </p>
                            </div>

                            {/* Dot */}
                            <div className="absolute left-[-37px] md:left-auto md:relative w-4 h-4 bg-white rounded-full mt-6 ring-4 ring-black" />

                            {/* Right Side (Odd Index) */}
                            <div className={cn("block md:block", index % 2 === 0 && "md:invisible")}>
                                <div className="md:hidden mb-2">
                                    <span className="text-sm font-bold text-neutral-500">{milestone.year}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 md:hidden">{milestone.title}</h3>

                                <div className="hidden md:block">
                                    <span className="text-8xl font-bold text-neutral-900 absolute top-0 left-0 -z-10 select-none transform -translate-x-12">{milestone.year}</span>
                                    <h3 className="text-2xl font-bold mb-4 pt-4">{milestone.title}</h3>
                                </div>

                                <p className="text-neutral-400 leading-relaxed max-w-sm">
                                    {milestone.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
