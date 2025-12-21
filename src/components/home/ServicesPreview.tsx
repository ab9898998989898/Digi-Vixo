"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Globe, Truck, ShoppingBag, BarChart3 } from "lucide-react";

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
            title: "Dropshipping",
            description: "End-to-end fulfillment with global sourcing and fast shipping times.",
            icon: <Truck className="w-8 h-8" />,
            link: "/services#dropshipping"
        },
        {
            title: "Wholesale",
            description: "Bulk ordering solutions for scaling brands with competitive pricing.",
            icon: <ShoppingBag className="w-8 h-8" />,
            link: "/services#wholesale"
        },
        {
            title: "Digital Services",
            description: "Website development, AI solutions, Shopify & Amazon store management.",
            icon: <Globe className="w-8 h-8" />,
            link: "/services#digital-services"
        },
        {
            title: "Education & LMS",
            description: "Affordable access to premium, market-relevant courses for practical skill-building.",
            icon: <BarChart3 className="w-8 h-8" />,
            link: "/services#digital"
        }
    ];

    return (
        <section ref={containerRef} className="py-24 px-6 bg-neutral-900">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="space-y-4 max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                        Complete Solutions <br />for Digital Business.
                    </h2>
                    <p className="text-neutral-400 text-lg">
                        Five core digital services, global commerce operations, and practical education—all on one platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
