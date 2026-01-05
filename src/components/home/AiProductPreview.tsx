"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Bot, Sparkles, Zap, ArrowRight, BrainCircuit, Terminal } from "lucide-react";

export default function AiProductPreview() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax effect for the product card
            gsap.to(cardRef.current, {
                y: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            });

            // Reveal animations
            gsap.from(".ai-feature", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const features = [
        {
            icon: <Bot className="w-5 h-5 text-primary" />,
            title: "Intelligent Agents",
            description: "Autonomous bots that handle customer support and internal workflows 24/7."
        },
        {
            icon: <BrainCircuit className="w-5 h-5 text-primary" />,
            title: "Predictive Analytics",
            description: "Machine learning models that forecast trends and optimize decision-making."
        },
        {
            icon: <Terminal className="w-5 h-5 text-primary" />,
            title: "Code Generation",
            description: "Accelerate development with AI-assisted coding and testing pipelines."
        }
    ];

    return (
        <section ref={containerRef} className="py-32 px-6 bg-gradient-to-b from-black to-neutral-900 relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">

                {/* Text Content */}
                <div className="flex-1 space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                        <Sparkles className="w-4 h-4" />
                        <span>Next-Gen Intelligence</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                        Analyze. Automate. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Accelerate.</span>
                    </h2>

                    <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
                        Harness the power of Artificial Intelligence to transform your business operations. From predictive analytics to autonomous agents, we build the future of work.
                    </p>

                    <div className="space-y-6">
                        {features.map((feature, i) => (
                            <div key={i} className="ai-feature flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                                <div className="mt-1">{feature.icon}</div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                                    <p className="text-sm text-neutral-400">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-4">
                        <Link
                            href="/services#ai"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-blue-600 transition-all hover:scale-105"
                        >
                            Explore AI Solutions
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Product Preview/Glassmorphism Card */}
                <div className="flex-1 w-full relative perspective-1000">
                    <div ref={cardRef} className="relative z-10 w-full aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl">
                        {/* Mock UI Header */}
                        <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>

                        {/* Mock Content */}
                        <div className="p-8 pt-16 h-full flex flex-col gap-6">
                            <div className="flex gap-4">
                                <div className="w-1/3 h-32 rounded-xl bg-white/5 animate-pulse" />
                                <div className="w-2/3 h-32 rounded-xl bg-white/5 animate-pulse delay-75" />
                            </div>
                            <div className="flex-1 rounded-xl bg-white/5 p-6 border border-white/5">
                                <div className="h-4 w-1/4 bg-white/10 rounded mb-4" />
                                <div className="space-y-3">
                                    <div className="h-2 w-3/4 bg-white/5 rounded" />
                                    <div className="h-2 w-full bg-white/5 rounded" />
                                    <div className="h-2 w-5/6 bg-white/5 rounded" />
                                </div>
                                {/* Floating Elements */}
                                <div className="mt-8 flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Zap className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="flex-1 flex items-center">
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full w-2/3 bg-primary rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>

                    {/* Decorative Elements behind card */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary rounded-full blur-[80px] opacity-20" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400 rounded-full blur-[80px] opacity-20" />
                </div>
            </div>
        </section>
    );
}
