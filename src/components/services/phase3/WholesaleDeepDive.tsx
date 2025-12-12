"use client";

import { Box, Truck, BarChart2 } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function WholesaleDeepDive() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".feature-card", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out"
        });

        gsap.from(".case-study", {
            scrollTrigger: {
                trigger: ".case-study",
                start: "top 85%",
            },
            scale: 0.95,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.3
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 px-6 bg-neutral-50 dark:bg-black border-t border-neutral-200 dark:border-neutral-800">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center max-w-3xl mx-auto">
                    <h3 className="text-3xl font-bold text-primary mb-6">Enterprise-Grade Logistics</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                        For brands scaling beyond 100 daily orders, the economics of dropshipping shift. Our wholesale division provides the heavy lifting required for mass manufacturing and freight forwarding.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="feature-card p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-shadow">
                        <Box className="w-12 h-12 text-gold mb-6" />
                        <h4 className="text-xl font-bold mb-4">MOQ Management</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                            We negotiate Minimum Order Quantities (MOQs) down by an average of 40% using our aggregated buying power. Access factory-direct pricing usually reserved for Fortune 500 retailers. We handle the deposit, production QC, and final balance transfer securely.
                        </p>
                    </div>
                    <div className="feature-card p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-shadow">
                        <Truck className="w-12 h-12 text-accent mb-6" />
                        <h4 className="text-xl font-bold mb-4">Freight & Customs</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                            Navigating DDP (Delivered Duty Paid) vs DDU terms can be complex. We handle all freight forwarding bookings, customs clearance documentation, and last-mile delivery. Whether by Air Express (DHL/FedEx) or Sea Freight (LCL/FCL), we optimize for cost and speed.
                        </p>
                    </div>
                    <div className="feature-card p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-shadow">
                        <BarChart2 className="w-12 h-12 text-emerald-500 mb-6" />
                        <h4 className="text-xl font-bold mb-4">Private Labeling</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                            Transform generic goods into a defensible brand asset. Our design team works with factories to create custom molds, packaging, and inserts. We provide 3D renders for approval before a single unit is manufactured, minimizing the risk of design errors.
                        </p>
                    </div>
                </div>

                {/* Mini Case Study */}
                <div className="case-study bg-primary text-primary-foreground p-12 rounded-3xl relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
                        <div className="space-y-4">
                            <div className="text-gold font-bold uppercase tracking-widest text-sm">Case Study: Apparel Brand</div>
                            <h4 className="text-3xl font-bold">Scaling to $500k/Month</h4>
                            <p className="text-neutral-300 max-w-xl">
                                "Digivixo took us from printing labels in a garage to full 3PL integration. Their custom packaging solution increased our LTV by 22%."
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 min-w-[200px] text-center">
                            <div className="text-4xl font-bold text-white mb-2">45 Days</div>
                            <div className="text-neutral-300 text-sm">Concept to Launch</div>
                        </div>
                    </div>
                    {/* Texture */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent -z-0" />
                </div>
            </div>
        </section>
    );
}
