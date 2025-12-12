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
        <section ref={containerRef} className="py-24 px-6 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="left-col lg:col-span-1 space-y-6">
                    <h2 className="text-3xl font-bold tracking-tighter">Corporate Governance</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Digivixo operates with the transparency and compliance standards expected of a public entity. We believe that ethical supply chains are the only sustainable supply chains.
                    </p>
                    <div className="flex gap-4 pt-4">
                        {/* Trust Badges placeholder */}
                        <div className="w-16 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center">
                            <Shield className="w-8 h-8 text-neutral-400" />
                        </div>
                        <div className="w-16 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center">
                            <Lock className="w-8 h-8 text-neutral-400" />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="gov-item space-y-4">
                        <FileText className="w-8 h-8 text-accent" />
                        <h3 className="text-xl font-bold">Labor Compliance</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed">
                            We require all partner factories to adhere to the ILO (International Labour Organization) core conventions. This includes zero tolerance for forced labor, and unsafe working conditions. We conduct unannounced audits biannually.
                        </p>
                    </div>
                    <div className="gov-item space-y-4">
                        <FileText className="w-8 h-8 text-gold" />
                        <h3 className="text-xl font-bold">Data Privacy</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed">
                            Your proprietary data—customer lists, gross merchandise value (GMV), and winning product SKUs—are siloed. We utilize bank-grade AES-256 encryption. We strictly do not use client data to complete or launch internal brands.
                        </p>
                    </div>
                    <div className="gov-item space-y-4">
                        <FileText className="w-8 h-8 text-emerald-500" />
                        <h3 className="text-xl font-bold">Environmental Impact</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed">
                            We are committed to reducing the carbon footprint of cross-border trade. We prioritize suppliers with ISO 14001 certification and offer carbon-neutral shipping options via our partnerships with major carriers.
                        </p>
                    </div>
                    <div className="gov-item space-y-4">
                        <FileText className="w-8 h-8 text-purple-500" />
                        <h3 className="text-xl font-bold">Financial Integrity</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed">
                            Digivixo maintains fully audited financial statements. We hold client funds in segregated accounts for wholesale deposits, ensuring that your capital is never used for operational expenses until production begins.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
