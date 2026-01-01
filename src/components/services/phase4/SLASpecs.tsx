"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function SLASpecs() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from("tr", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 px-6 bg-[#050812]">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Service Level Agreement (SLA)</h2>

                <div className="overflow-x-auto rounded-3xl border border-white/10">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-[#0A0F1F]">
                            <tr>
                                <th className="p-6 text-sm font-bold uppercase tracking-wider text-neutral-500">Metric</th>
                                <th className="p-6 text-sm font-bold uppercase tracking-wider text-neutral-500">Standard</th>
                                <th className="p-6 text-sm font-bold uppercase tracking-wider text-neutral-500">Premium (Enterprise)</th>
                                <th className="p-6 text-sm font-bold uppercase tracking-wider text-neutral-500">Guarantee</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                            <tr className="bg-background hover:bg-white/5 transition-colors">
                                <td className="p-6 font-medium">System Availability</td>
                                <td className="p-6 text-neutral-400">99.5%</td>
                                <td className="p-6 text-accent font-bold">99.99%</td>
                                <td className="p-6 text-green-500 text-sm">High-Availability Infrastructure</td>
                            </tr>
                            <tr className="bg-background hover:bg-white/5 transition-colors">
                                <td className="p-6 font-medium">Support Response Time</td>
                                <td className="p-6 text-neutral-400">12 Hours</td>
                                <td className="p-6 text-accent font-bold">1 Hour</td>
                                <td className="p-6 text-green-500 text-sm">Dedicated Communication Channel</td>
                            </tr>
                            <tr className="bg-background hover:bg-white/5 transition-colors">
                                <td className="p-6 font-medium">Security Patch Deployment</td>
                                <td className="p-6 text-neutral-400">48 Hours</td>
                                <td className="p-6 text-accent font-bold">4 Hours</td>
                                <td className="p-6 text-green-500 text-sm">Automated Security Audits</td>
                            </tr>
                            <tr className="bg-background hover:bg-white/5 transition-colors">
                                <td className="p-6 font-medium">Project Reliability</td>
                                <td className="p-6 text-neutral-400">98% Success</td>
                                <td className="p-6 text-accent font-bold">100% Delivery</td>
                                <td className="p-6 text-green-500 text-sm">Comprehensive QA Testing</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="mt-4 text-xs text-neutral-400 text-right">
                    * Service Level Agreements are defined in the Project Service Agreement.
                </p>
            </div>
        </section>
    );
}
