"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { BlogPost } from "@/data/blogData";

if (typeof window !== "undefined") {
    gsap.registerPlugin(useGSAP);
}

interface BlogHeroProps {
    post: BlogPost;
}

export default function BlogHero({ post }: BlogHeroProps) {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".hero-image", {
            scale: 1.1,
            opacity: 0,
            duration: 1.2,
        })
            .from(".hero-badge", {
                y: 20,
                opacity: 0,
                duration: 0.6,
            }, "-=0.6")
            .from(".hero-title", {
                y: 40,
                opacity: 0,
                duration: 0.8,
            }, "-=0.4")
            .from(".hero-excerpt", {
                y: 30,
                opacity: 0,
                duration: 0.6,
            }, "-=0.5")
            .from(".hero-meta", {
                y: 20,
                opacity: 0,
                duration: 0.5,
            }, "-=0.3");
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative">
            {/* Hero Image */}
            <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
                <Image
                    src={post.image.url}
                    alt={post.image.altText}
                    fill
                    className="hero-image object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
            </div>

            {/* Content Overlay */}
            <div className="relative max-w-4xl mx-auto px-6 -mt-32 md:-mt-40 z-10">
                <div className="space-y-6">
                    {/* Type Badge */}
                    <span className={`hero-badge inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full ${post.type === 'case-study'
                            ? 'bg-purple-500 text-white'
                            : 'bg-primary text-white'
                        }`}>
                        {post.type === 'case-study' ? 'Case Study' : 'Blog'}
                    </span>

                    {/* Title */}
                    <h1 className="hero-title text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                        {post.title}
                    </h1>

                    {/* Excerpt */}
                    <p className="hero-excerpt text-lg md:text-xl text-muted max-w-3xl">
                        {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="hero-meta flex flex-wrap items-center gap-4 text-sm text-muted pt-2">
                        <span className="font-medium text-foreground">{post.author}</span>
                        <span className="w-1 h-1 rounded-full bg-muted" />
                        <span>{post.publishedAt}</span>
                        <span className="w-1 h-1 rounded-full bg-muted" />
                        <span>{post.readingTime}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
