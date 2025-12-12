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
        <section ref={containerRef} className="py-24 px-6 bg-neutral-100 dark:bg-[#0F1629]">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center">
                    <h2 className="text-4xl font-bold tracking-tighter mb-4">Compliance & Responsibility</h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto">
                        We hold ourselves to the highest international standards. Digivixo is more than a logistics provider; we are a responsible global citizen.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="cert-card bg-white dark:bg-card p-8 rounded-2xl border border-neutral-200 dark:border-white/5 shadow-sm">
                        <ShieldCheck className="w-10 h-10 text-accent mb-6" />
                        <h3 className="text-lg font-bold mb-2">ISO 9001:2015</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            Certified for Quality Management Systems. Our processes are audited annually by Bureau Veritas to ensure consistent service delivery.
                        </p>
                    </div>
                    <div className="cert-card bg-white dark:bg-card p-8 rounded-2xl border border-neutral-200 dark:border-white/5 shadow-sm">
                        <Leaf className="w-10 h-10 text-emerald-500 mb-6" />
                        <h3 className="text-lg font-bold mb-2">Carbon Neutral Shipping</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            Partnered with Pachama to offset 100% of our carbon emissions through reforestation projects in the Amazon rainforest.
                        </p>
                    </div>
                    <div className="cert-card bg-white dark:bg-card p-8 rounded-2xl border border-neutral-200 dark:border-white/5 shadow-sm">
                        <HeartHandshake className="w-10 h-10 text-rose-500 mb-6" />
                        <h3 className="text-lg font-bold mb-2">Fair Labor Association</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            Active member of the FLA. We strictly prohibit forced labor and ensure fair wages across our entire partner factory network.
                        </p>
                    </div>
                    <div className="cert-card bg-white dark:bg-card p-8 rounded-2xl border border-neutral-200 dark:border-white/5 shadow-sm">
                        <Award className="w-10 h-10 text-gold mb-6" />
                        <h3 className="text-lg font-bold mb-2">GDPR & CCPA Compliant</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            Your data is yours. We are fully compliant with EU and California privacy laws, ensuring your customer data is never sold or shared.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
