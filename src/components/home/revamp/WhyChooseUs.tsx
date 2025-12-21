"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, BarChart4, Globe2, Zap } from "lucide-react";

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".why-card", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const features = [
        {
            icon: <ShieldCheck className="w-10 h-10 mb-6 text-emerald-500" />,
            title: "Vetted Supplier Network",
            description: "Every supplier in our network undergoes rigorous inspection to ensure product quality and reliability for your dropshipping and wholesale operations.",
        },
        {
            icon: <BarChart4 className="w-10 h-10 mb-6 text-blue-500" />,
            title: "Five Core Digital Services",
            description: "Website development, AI solutions, digital marketing, and Shopify/Amazon store management—complete digital business support under one roof.",
        },
        {
            icon: <Globe2 className="w-10 h-10 mb-6 text-purple-500" />,
            title: "Teaching Experience",
            description: "With 2–3 years of hands-on teaching experience locally and internationally, we understand real student learning gaps and focus on practical, market-relevant skills.",
        },
        {
            icon: <Zap className="w-10 h-10 mb-6 text-amber-500" />,
            title: "Affordable Premium Education",
            description: "Access premium courses that normally cost hundreds or thousands of dollars—for just 10,000–15,000 PKR through our LMS platform.",
        },
    ];

    return (
        <section ref={sectionRef} className="py-32 px-6 bg-neutral-950 text-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-900/50 skew-x-12 transform origin-top-right -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mb-24">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">Why Digivixo?</h2>
                    <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                        Built on Trust. <br />
                        Powered by Results.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="why-card p-10 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors group">
                            <div className="transform group-hover:scale-110 transition-transform duration-500 origin-left">
                                {feature.icon}
                            </div>
                            <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                            <p className="text-neutral-400 leading-relaxed text-lg">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
