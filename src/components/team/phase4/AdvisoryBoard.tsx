"use client";

import { Linkedin } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AdvisoryBoard() {
    const containerRef = useRef(null);
    const advisors = [
        {
            name: "Dr. Elena Vance",
            role: "Cloud Architecture",
            ex: "Ex-Engineering Lead at AWS",
            image: "bg-neutral-800"
        },
        {
            name: "Marcus Chen",
            role: "Cybersecurity & Compliance",
            ex: "Former CTO at Fintech Global",
            image: "bg-neutral-700"
        },
        {
            name: "Sarah O'Connell",
            role: "Digital Transformation",
            ex: "Strategy Lead at Google Cloud",
            image: "bg-neutral-600"
        }
    ];

    useGSAP(() => {
        gsap.from(".advisor-card", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)"
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 px-6 bg-card border-t border-white/10">
            <div className="max-w-6xl mx-auto text-center space-y-16">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Strategic Advisory Board</h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto">
                        Defining the future of Digivixo with guidance from industry veterans.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {advisors.map((advisor, i) => (
                        <div key={i} className="advisor-card group">
                            <div className={`w-32 h-32 mx-auto rounded-full ${advisor.image} mb-6 overflow-hidden border-4 border-transparent group-hover:border-gold transition-colors duration-300`}>
                                {/* Image placeholder */}
                                <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-neutral-500">
                                    {advisor.name.charAt(0)}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold">{advisor.name}</h3>
                            <p className="text-accent font-medium text-sm mb-2">{advisor.role}</p>
                            <p className="text-neutral-500 text-sm italic">{advisor.ex}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
