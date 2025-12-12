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
            category: "Frontend Architecture",
            icon: <Cpu className="w-6 h-6 text-accent" />,
            items: ["Next.js 14 App Router", "React Server Components", "Tailwind CSS 4.0", "Framer Motion / GSAP"]
        },
        {
            category: "Backend Infrastructure",
            icon: <Server className="w-6 h-6 text-gold" />,
            items: ["Node.js Microservices", "Redis Caching Layer", "GraphQL API Gateway", "Docker Containerization"]
        },
        {
            category: "Data Integrity",
            icon: <Database className="w-6 h-6 text-emerald-500" />,
            items: ["PostgreSQL (TimescaleDB)", "AES-256 Encryption", "Daily Offsite Backups", "GDPR Compliance Suite"]
        },
        {
            category: "Cloud Operations",
            icon: <Cloud className="w-6 h-6 text-purple-500" />,
            items: ["AWS (Lambda, S3, RDS)", "Cloudflare Edge Network", "Kubernetes Orchestration", "Multi-Region Failover"]
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
        <section ref={containerRef} className="py-24 px-6 bg-neutral-50 dark:bg-card border-y border-neutral-200 dark:border-white/10">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Proprietary Tech Stack</h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto">
                        We don't rely on third-party plugins. We built our own logistics operating system (LogOS) from the ground up to ensure millisecond-latency inventory syncing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stack.map((group, i) => (
                        <div key={i} className="tech-card bg-white dark:bg-[#151D2F] p-6 rounded-2xl border border-neutral-200 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-neutral-100 dark:bg-white/5 rounded-lg">
                                    {group.icon}
                                </div>
                                <h3 className="font-bold text-sm uppercase tracking-wide">{group.category}</h3>
                            </div>
                            <ul className="space-y-3">
                                {group.items.map((item, j) => (
                                    <li key={j} className="text-sm text-neutral-600 dark:text-neutral-400 border-b border-neutral-100 dark:border-white/5 pb-2 last:border-0 last:pb-0">
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
