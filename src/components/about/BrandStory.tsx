"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BrandStory() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".story-text", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="space-y-12">
                <h1 className="story-text text-5xl md:text-7xl font-bold tracking-tighter">
                    We are <span className="text-accent">DIGIVIXO.</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg md:text-xl leading-relaxed text-neutral-300">
                    <p className="story-text">
                        DIGIVIXO is a one-platform tech and commerce solution founded by Abdullah and Hassan—two entrepreneurs with 2–3 years of hands-on teaching experience locally and internationally. We saw a gap: businesses struggling with unreliable suppliers, fragmented digital services, and expensive courses that don&apos;t translate to real-world skills.
                    </p>
                    <p className="story-text">
                        So we built something different. DIGIVIXO combines global dropshipping and wholesale operations with five core digital services—website development, AI solutions, digital marketing, and Shopify/Amazon store management. Through our LMS, we also provide affordable access to premium, market-relevant courses. Learn, execute, and scale—all in one place.
                    </p>
                </div>
            </div>
        </section>
    );
}
