"use client";

import { Award, Leaf, HeartHandshake, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Certifications() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".cert-card", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
            },
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 px-6 bg-[#0F1629]">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center">
                    <h2 className="text-4xl font-bold tracking-tighter mb-4">Compliance & Responsibility</h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto">
                        We hold ourselves to the highest international standards. Digivixo is more than an IT solutions provider; we are a responsible global partner dedicated to ethical technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="cert-card bg-card p-8 rounded-2xl border border-white/5 shadow-sm">
                        <ShieldCheck className="w-10 h-10 text-accent mb-6" />
                        <h3 className="text-lg font-bold mb-2">Quality Excellence</h3>
                        <p className="text-sm text-neutral-400">
                            Our internal processes are built on international standards for Quality Management Systems, ensuring consistent service delivery and technical integrity.
                        </p>
                    </div>
                    <div className="cert-card bg-card p-8 rounded-2xl border border-white/5 shadow-sm">
                        <Leaf className="w-10 h-10 text-emerald-500 mb-6" />
                        <h3 className="text-lg font-bold mb-2">Sustainable Innovation</h3>
                        <p className="text-sm text-neutral-400">
                            We prioritize sustainable technical growth and energy-efficient cloud solutions to minimize the environmental impact of our digital products.
                        </p>
                    </div>
                    <div className="cert-card bg-card p-8 rounded-2xl border border-white/5 shadow-sm">
                        <HeartHandshake className="w-10 h-10 text-rose-500 mb-6" />
                        <h3 className="text-lg font-bold mb-2">Technical Integrity</h3>
                        <p className="text-sm text-neutral-400">
                            We are committed to ethical software development practices, ensuring fair professional standards and transparency across all our technical partnerships.
                        </p>
                    </div>
                    <div className="cert-card bg-card p-8 rounded-2xl border border-white/5 shadow-sm">
                        <Award className="w-10 h-10 text-gold mb-6" />
                        <h3 className="text-lg font-bold mb-2">Security & Privacy</h3>
                        <p className="text-sm text-neutral-400">
                            Full compliance with global data protection regulations (GDPR/CCPA), ensuring your data and your users&apos; privacy are protected with advanced encryption.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
