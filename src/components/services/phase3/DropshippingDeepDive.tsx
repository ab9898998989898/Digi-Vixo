"use client";

import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function DropshippingDeepDive() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        });

        tl.from(".left-content", {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
            .from(".right-content", {
                x: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.6");
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 px-6 bg-neutral-900 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="left-content space-y-8">
                    <h3 className="text-3xl font-bold text-primary">The Technical Architecture</h3>
                    <div className="prose prose-invert max-w-none text-neutral-400">
                        <p>
                            Digivixo’s dropshipping infrastructure is not merely a connection to suppliers; it is a fully integrated, API-first supply chain solution designed for high-volume redundancy.
                        </p>
                        <p>
                            <strong>Multi-Node Routing:</strong> Our proprietary algorithm automatically routes orders to the warehouse closest to your end customer. We maintain inventory pools in Shenzhen, Yiwu, New Jersey, and Poland. If one node is congested, volume is instantly rerouted to ensure SLA compliance.
                        </p>
                        <p>
                            <strong>Quality Control Protocols (QCP):</strong> Unlike Ali-Express aggregators, every product entering our network undergoes a 3-stage physical inspection:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Stage 1 (Inbound):</strong> Raw materials check at the factory gate.</li>
                            <li><strong>Stage 2 (Pre-Shipment):</strong> Random sampling of 15% of units for functional stress testing.</li>
                            <li><strong>Stage 3 (Final Pack):</strong> Visual inspection during the pick-and-pack process to ensure packaging integrity.</li>
                        </ul>
                        <p>
                            <strong>The Result:</strong> A return rate of less than 0.8% across 4,000+ active SKUs, compared to the industry average of 5-7%.
                        </p>
                    </div>
                </div>

                <div className="right-content bg-black p-10 rounded-3xl border border-neutral-800">
                    <h3 className="text-2xl font-bold mb-6">Integration Capabilities</h3>
                    <ul className="space-y-4">
                        {[
                            "Real-time Inventory Sync (Webhooks)",
                            "Automatic Tracking Number Upload",
                            "Custom CSV/XML Order Parsing",
                            "White-Label Invoicing Generation",
                            "Profit Margin Analytics Dashboard",
                            "Dispute Auto-Resolution System"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-neutral-300 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 pt-10 border-t border-neutral-800">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">Supported Platforms</h4>
                        <div className="flex gap-4 flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Text representation of logos for simplicity */}
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">Shopify</span>
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">WooCommerce</span>
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">Magento</span>
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">BigCommerce</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
