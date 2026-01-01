"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the vertical line height
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

            // Fade in steps
            gsap.utils.toArray<HTMLElement>(".process-step").forEach((step, i) => {
                gsap.from(step, {
                    opacity: 0,
                    x: i % 2 === 0 ? -50 : 50,
                    duration: 1,
                    scrollTrigger: {
                        trigger: step,
                        start: "top 80%",
                    }
                });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const steps = [
        {
            number: "01",
            title: "Discovery & Strategy",
            content: "We begin by understanding your business objectives and technical requirements. Our team conducts a thorough analysis to define a roadmap that ensures your digital products align with your commercial goals."
        },
        {
            number: "02",
            title: "Custom Design & UI/UX",
            content: "We create high-fidelity prototypes and intuitive user interfaces. Our design process focuses on clarity, accessibility, and brand consistency to provide a seamless experience across all digital touchpoints."
        },
        {
            number: "03",
            title: "Technical Development",
            content: "Our developers build scalable, high-performance solutions using industry best practices. We ensure your website or application is secure, fast, and fully integrated with your existing business systems."
        },
        {
            number: "04",
            title: "Deployment & Optimization",
            content: "Beyond the launch, we provide ongoing support and performance monitoring. We use data-driven insights to continuously optimize your digital presence, ensuring long-term stability and growth."
        }
    ];

    return (
        <section ref={containerRef} className="py-32 px-6 bg-black relative">
            <div className="max-w-5xl mx-auto relative">
                <h2 className="text-center text-4xl md:text-6xl font-bold tracking-tighter mb-24">The Digivixo Process</h2>

                {/* Central timeline line */}
                <div className="absolute left-0 md:left-1/2 top-32 bottom-0 w-[1px] bg-neutral-800 -translate-x-1/2 hidden md:block">
                    <div ref={lineRef} className="w-full bg-white" />
                </div>

                <div className="space-y-24">
                    {steps.map((step, index) => (
                        <div key={index} className={cn(
                            "process-step flex flex-col md:flex-row gap-12 items-center",
                            index % 2 === 1 && "md:flex-row-reverse"
                        )}>
                            <div className="flex-1 w-full md:w-1/2 text-right md:text-right">
                                <div className={cn("p-8 rounded-3xl bg-neutral-900 border border-neutral-800", index % 2 === 1 ? "md:text-left" : "md:text-right text-left")}>
                                    <span className="text-6xl font-bold text-neutral-800 mb-4 block">{step.number}</span>
                                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-neutral-400 leading-relaxed">
                                        {step.content}
                                    </p>
                                </div>
                            </div>
                            {/* Spacer for center line */}
                            <div className="hidden md:block w-8 flex-shrink-0 relative">
                                <div className="w-4 h-4 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ring-4 ring-black" />
                            </div>
                            <div className="flex-1 w-full md:w-1/2" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
