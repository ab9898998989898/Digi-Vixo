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
                    We are <span className="text-accent">Digivixo.</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg md:text-xl leading-relaxed text-neutral-600 dark:text-neutral-300">
                    <p className="story-text">
                        Born from a vision to simplify global commerce, Digivixo started as a small initiative by two passionate entrepreneurs, Abdullah and Hassan. We saw the complexities of dropshipping and wholesale—the fragmented supply chains, the lack of transparency, and the technological barriers.
                    </p>
                    <p className="story-text">
                        We decided to change that. By combining cutting-edge technology with established global networks, we created a platform that empowers businesses to scale without limits. Today, Digivixo stands as a beacon of trust and efficiency in the digital economy.
                    </p>
                </div>
            </div>
        </section>
    );
}
