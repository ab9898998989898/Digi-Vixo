"use client";

import { Cpu, Server, Database, Cloud } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function TechStackGrid() {
    const containerRef = useRef(null);
    const stack = [
        {
            category: "Technical Performance",
            icon: <Cpu className="w-6 h-6 text-accent" />,
            items: ["High-Speed Load Times", "Optimized Core Web Vitals", "Scalable Infrastructure", "Adaptive User Interfaces"]
        },
        {
            category: "Operational Integrity",
            icon: <Server className="w-6 h-6 text-gold" />,
            items: ["99.9% Service Uptime", "Redundant System Backups", "Real-time Monitoring", "Seamless Data Integration"]
        },
        {
            category: "Security & Compliance",
            icon: <Database className="w-6 h-6 text-emerald-500" />,
            items: ["Advanced Data Encryption", "Secure Access Protocols", "Privacy Standard Compliance", "Regular Security Audits"]
        },
        {
            category: "Deployment Excellence",
            icon: <Cloud className="w-6 h-6 text-purple-500" />,
            items: ["Global Service Delivery", "Automated Release Pipeline", "Continuous Quality Assurance", "Multi-Region Availability"]
        }
    ];

    useGSAP(() => {
        gsap.from(".tech-card", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 px-6 bg-card border-y border-white/10">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Quality Benchmarks</h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto">
                        We adhere to the highest industry standards to ensure every digital solution we deliver is reliable, secure, and built for long-term performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stack.map((group, i) => (
                        <div key={i} className="tech-card bg-[#151D2F] p-6 rounded-2xl border border-white/5 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-white/5 rounded-lg">
                                    {group.icon}
                                </div>
                                <h3 className="font-bold text-sm uppercase tracking-wide">{group.category}</h3>
                            </div>
                            <ul className="space-y-3">
                                {group.items.map((item, j) => (
                                    <li key={j} className="text-sm text-neutral-400 border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
