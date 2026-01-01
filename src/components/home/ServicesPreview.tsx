"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Globe, Layout, Palette, Cpu, ShoppingBag, Box } from "lucide-react";

export default function ServicesPreview() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".service-card", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const services = [
        {
            title: "Website Development",
            description: "Custom-built, high-performance websites optimized for speed, security, and scalability.",
            icon: <Globe className="w-8 h-8" />,
            link: "/services#web-dev"
        },
        {
            title: "Web Applications",
            description: "Advanced SaaS solutions and custom web applications tailored to your business processes.",
            icon: <Layout className="w-8 h-8" />,
            link: "/services#web-apps"
        },
        {
            title: "UI/UX & Design",
            description: "Premium brand identity, user interface, and experience design that converts visitors into customers.",
            icon: <Palette className="w-8 h-8" />,
            link: "/services#design"
        },
        {
            title: "Shopify Development",
            description: "Professional platform engineering and custom theme development for high-growth e-commerce brands.",
            icon: <ShoppingBag className="w-8 h-8" />,
            link: "/services#shopify"
        },
        {
            title: "Amazon Management",
            description: "Data-driven marketplace management and strategic growth solutions for Amazon Private Label.",
            icon: <Box className="w-8 h-8" />,
            link: "/services#amazon"
        },
        {
            title: "Digital Marketing",
            description: "Data-driven social media management and search engine marketing solutions for global brand growth.",
            icon: <Globe className="w-8 h-8" />,
            link: "/services#marketing"
        },
        {
            title: "WordPress Development",
            description: "Professional ecosystem engineering, custom themes, and enterprise-grade security for WordPress.",
            icon: <Layout className="w-8 h-8" />,
            link: "/services#wordpress"
        },
        {
            title: "Automation & AI",
            description: "Intelligent workflow automation and AI-driven tools to optimize operations and drive innovation.",
            icon: <Cpu className="w-8 h-8" />,
            link: "/services#ai"
        }
    ];

    return (
        <section ref={containerRef} className="py-24 px-6 bg-neutral-900">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="space-y-4 max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                        Comprehensive Digital <br />Service Solutions.
                    </h2>
                    <p className="text-neutral-400 text-lg">
                        We provide end-to-end IT services designed to build, scale, and automate your digital presence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.link}
                            className="service-card group block p-8 bg-black border border-neutral-800 hover:border-neutral-600 transition-colors"
                        >
                            <div className="mb-6 text-neutral-200 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
