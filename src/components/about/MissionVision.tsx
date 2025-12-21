"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MissionVision() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".mv-card", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.3
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 px-6 bg-neutral-900">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="mv-card p-10 bg-black rounded-3xl border border-neutral-800 space-y-6">
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                    <p className="text-neutral-400 leading-relaxed">
                        To enable founders, students, and businesses to access global dropshipping and wholesale operations, leverage complete digital business solutions, and learn market-relevant skills through practical execution—all on one platform.
                    </p>
                </div>
                <div className="mv-card p-10 bg-white text-black rounded-3xl space-y-6">
                    <h2 className="text-3xl font-bold">Our Vision</h2>
                    <p className="text-neutral-600 leading-relaxed">
                        To be the world&apos;s most trusted one-platform solution for digital business operations, dropshipping, wholesale, and education—built on clarity, practical systems, long-term credibility, and sustainable growth.
                    </p>
                </div>
            </div>
        </section>
    );
}
