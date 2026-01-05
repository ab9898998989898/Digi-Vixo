"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Search, Compass, Rocket } from "lucide-react";

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(lineRef.current,
                { height: "0%" },
                {
                    height: "100%",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                        end: "bottom 80%",
                        scrub: 1,
                    }
                }
            );

            gsap.utils.toArray<HTMLElement>(".process-node").forEach((node, i) => {
                gsap.from(node, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: node,
                        start: "top 80%",
                    }
                });
            });

            gsap.utils.toArray<HTMLElement>(".process-content").forEach((content, i) => {
                gsap.from(content, {
                    x: i % 2 === 0 ? -50 : 50,
                    opacity: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: content,
                        start: "top 80%",
                    }
                });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const steps = [
        {
            icon: <Search className="w-6 h-6" />,
            title: "Audit & Discovery",
            content: "We dive deep into your existing infrastructure and business goals. A comprehensive audit reveals bottlenecks and opportunities, setting the stage for data-driven decisions."
        },
        {
            icon: <Compass className="w-6 h-6" />,
            title: "Strategic Roadmap",
            content: "We engineer a tailored strategy that aligns technology with your commercial objectives. Every milestone is calculated to maximize impact and minimize friction."
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "Execution & Scale",
            content: "We implement the solution with precision engineering. Post-launch, we focus on performance optimization and scaling your digital presence to dominate the market."
        }
    ];

    return (
        <section ref={containerRef} className="py-32 px-6 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-24 max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white">The Process</h2>
                    <p className="text-neutral-400 text-lg">A streamlined approach designed for speed, precision, and maximum impact.</p>
                </div>

                {/* Central timeline line */}
                <div className="absolute left-8 md:left-1/2 top-48 bottom-12 w-[2px] bg-neutral-900 -translate-x-1/2">
                    <div ref={lineRef} className="w-full bg-gradient-to-b from-primary via-primary to-transparent box-shadow-glow" />
                </div>

                <div className="space-y-24">
                    {steps.map((step, index) => (
                        <div key={index} className={cn(
                            "flex flex-col md:flex-row gap-12 items-center relative",
                            index % 2 === 1 && "md:flex-row-reverse"
                        )}>
                            <div className="flex-1 w-full md:w-1/2 pl-24 md:pl-0 md:text-right">
                                <div className={cn(
                                    "process-content p-8 rounded-3xl bg-card border border-neutral-800 hover:border-primary/50 transition-colors duration-300",
                                    index % 2 === 1 ? "md:text-left" : "md:text-right text-left"
                                )}>
                                    <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                                    <p className="text-neutral-400 leading-relaxed">
                                        {step.content}
                                    </p>
                                </div>
                            </div>

                            {/* Timeline Node */}
                            <div className="process-node absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-neutral-900 border-4 border-black z-20 shadow-xl">
                                <div className="text-primary">
                                    {step.icon}
                                </div>
                            </div>

                            <div className="flex-1 w-full md:w-1/2 hidden md:block" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
