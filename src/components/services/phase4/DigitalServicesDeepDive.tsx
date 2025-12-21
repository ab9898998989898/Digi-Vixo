"use client";

import { CheckCircle2, Code2, Globe, Laptop, Smartphone } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function DigitalServicesDeepDive() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        });

        tl.from(".left-content-s", {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
            .from(".right-content-s", {
                x: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.6");
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 px-6 bg-neutral-900 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="left-content-s space-y-8">
                    <h3 className="text-3xl font-bold text-primary">Five Core Digital Services</h3>
                    <div className="prose prose-invert max-w-none text-neutral-400">
                        <p>
                            DIGIVIXO provides complete digital business solutions through five specialized service areas. We handle everything from building your online presence to managing your e-commerce operations.
                        </p>
                        <p>
                            <strong>Our Five Pillars:</strong>
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Website Development:</strong> Custom design, development, and maintenance for high-performance sites.</li>
                            <li><strong>AI & ML Solutions:</strong> AI chatbots, automation, and machine learning models for business efficiency.</li>
                            <li><strong>Digital Marketing & SMM:</strong> Paid ads, SEO, content creation, and social media campaigns.</li>
                            <li><strong>Shopify Store Management:</strong> Complete setup, listing optimization, and operations handling.</li>
                            <li><strong>Amazon Store Management:</strong> Store creation, product listings, and sales management.</li>
                        </ul>
                        <p className="mt-4 text-sm border-l-2 border-accent pl-4">
                            Want to learn these skills yourself? Our LMS provides affordable access to premium, market-relevant courses.
                        </p>
                    </div>
                </div>

                <div className="right-content-s bg-black p-10 rounded-3xl border border-neutral-800">
                    <h3 className="text-2xl font-bold mb-6">Development Stack</h3>
                    <ul className="space-y-4">
                        {[
                            "Full-Stack Web Development",
                            "AI Chatbot Integration",
                            "Headless CMS Implementation",
                            "Custom E-commerce Flows",
                            "API Development & Integration",
                            "UI/UX Design Systems"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-neutral-300 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 pt-10 border-t border-neutral-800">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">Core Technologies</h4>
                        <div className="flex gap-4 flex-wrap">
                            <span className="flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded font-bold text-sm">
                                <Globe className="w-4 h-4 text-white" /> Next.js
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded font-bold text-sm">
                                <Code2 className="w-4 h-4 text-blue-500" /> TypeScript
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded font-bold text-sm">
                                <Laptop className="w-4 h-4 text-cyan-500" /> Tailwind
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded font-bold text-sm">
                                <Smartphone className="w-4 h-4 text-green-500" /> Shopify
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
