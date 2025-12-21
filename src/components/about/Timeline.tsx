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
            year: "2021",
            title: "The Beginning",
            description: "Abdullah and Hassan begin their journey in e-commerce and digital education, gaining hands-on experience teaching locally and internationally while running their own online ventures."
        },
        {
            year: "2022",
            title: "Digital Services Launch",
            description: "We formalize our five core digital services: website development, AI solutions, digital marketing, and Shopify/Amazon store management—helping businesses establish their online presence."
        },
        {
            year: "2023",
            title: "Commerce Operations",
            description: "DIGIVIXO expands into global dropshipping and wholesale operations in Pakistan, creating reliable supply chains for entrepreneurs and established businesses alike."
        },
        {
            year: "2024",
            title: "LMS & Education",
            description: "We launch our Learning Management System, providing affordable access to premium courses that normally cost hundreds or thousands of dollars—for just a fraction of the price."
        },
        {
            year: "2025",
            title: "One-Platform Ecosystem",
            description: "DIGIVIXO becomes a complete tech and commerce solution: Main website, LMS, and active e-commerce store—allowing users to learn, see, and apply real-world business strategies."
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
