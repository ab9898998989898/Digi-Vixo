"use client";

import { Shield, FileText, Lock } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function CorporateGovernance() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".left-col", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            },
            x: -40,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });

        gsap.from(".gov-item", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.2,
            ease: "power2.out"
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 px-6 bg-neutral-900 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="left-col lg:col-span-1 space-y-6">
                    <h2 className="text-3xl font-bold tracking-tighter">Corporate Governance</h2>
                    <p className="text-neutral-400 leading-relaxed">
                        Digivixo operates with the transparency and compliance standards expected of a professional technical entity. We believe that ethical engineering practices are the only sustainable path to digital innovation.
                    </p>
                    <div className="flex gap-4 pt-4">
                        {/* Trust Badges placeholder */}
                        <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center">
                            <Shield className="w-8 h-8 text-neutral-400" />
                        </div>
                        <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center">
                            <Lock className="w-8 h-8 text-neutral-400" />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="gov-item space-y-4">
                        <FileText className="w-8 h-8 text-accent" />
                        <h3 className="text-xl font-bold">Technical Standards</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed">
                            We require all our technical processes and partner integrations to adhere to international security and quality standards. This includes zero tolerance for compromised code, and ensuring robust technical integrity across all project lifecycles.
                        </p>
                    </div>
                    <div className="gov-item space-y-4">
                        <FileText className="w-8 h-8 text-gold" />
                        <h3 className="text-xl font-bold">Data Sovereignty</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed">
                            Your proprietary data—business logic, client databases, and intellectual property—are completely siloed and protected. We utilize bank-grade AES-256 encryption and strictly ensure that client assets are never utilized for external projects.
                        </p>
                    </div>
                    <div className="gov-item space-y-4">
                        <FileText className="w-8 h-8 text-emerald-500" />
                        <h3 className="text-xl font-bold">Sustainable Infrastructure</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed">
                            We are committed to reducing the environmental impact of digital infrastructure. We prioritize energy-efficient cloud providers and implement optimized code architectures to minimize server load and carbon footprint.
                        </p>
                    </div>
                    <div className="gov-item space-y-4">
                        <FileText className="w-8 h-8 text-purple-500" />
                        <h3 className="text-xl font-bold">Operational Integrity</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed">
                            Digivixo maintains fully transparent project management and financial reporting. We ensure that project investments are managed with total integrity, providing regular progress audits and clear milestones for every technical engagement.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
