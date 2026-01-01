"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ServiceFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What core digital services does Digivixo offer?",
            answer: "Digivixo specializes in a comprehensive suite of IT and E-commerce pillars: Custom Website Development, Web Applications & SaaS solutions, Graphic Design, Shopify Platform Engineering, Amazon Marketplace Management, Digital Marketing & Social Media, WordPress Development, and Intelligent Automation & AI services."
        },
        {
            question: "Does Digivixo provide custom Shopify development?",
            answer: "Yes, we specialize in professional Shopify engineering, including bespoke theme development, advanced app integration, and headless commerce solutions for high-growth brands."
        },
        {
            question: "How does your Amazon management service work?",
            answer: "We provide data-driven Amazon Private Label management, focusing on A9 SEO, PPC optimization, account health monitoring, and strategic marketplace expansion to drive consistent growth."
        },
        {
            question: "How does your digital marketing approach drive ROI?",
            answer: "We focus on data-driven performance marketing. By combining technical SEO, precise audience segmentation on Meta and TikTok, and optimized Google Ads campaigns, we ensure every marketing dollar is focused on high-value conversions."
        },
        {
            question: "Does Digivixo handle custom WordPress requirements?",
            answer: "Absolutely. We specialize in custom WordPress engineering, including bespoke theme development from scratch, custom plugin creation, and advanced performance optimization to ensure your CMS is enterprise-grade."
        },
        {
            question: "Does Digivixo provide end-to-end software development?",
            answer: "Yes, we handle the entire development lifecycle, from initial discovery and strategy to UI/UX design, technical implementation, deployment, and ongoing optimization."
        },
        {
            question: "Can you help optimize existing digital platforms?",
            answer: "Absolutely. We provide comprehensive audits and optimization services for existing systems, focusing on performance enhancement, security hardening, and better user experience."
        },
        {
            question: "What is your approach to UI/UX design?",
            answer: "Our design process is user-centered and data-driven. We focus on creating intuitive interfaces that reduce friction, ensure brand consistency, and follow international accessibility standards."
        },
        {
            question: "Do you offer long-term support and maintenance?",
            answer: "Yes, we provide robust Service Level Agreements (SLAs) that include ongoing maintenance, security patches, and technical support to ensure your digital solutions remain high-performing and secure."
        }
    ];

    return (
        <section className="py-24 px-6 bg-black">
            <div className="max-w-3xl mx-auto space-y-12">
                <h2 className="text-4xl font-bold tracking-tighter text-center">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-neutral-800 pb-4">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between text-left py-4 focus:outline-none"
                            >
                                <span className="text-lg font-medium">{faq.question}</span>
                                {openIndex === index ? <Minus className="w-5 h-5 flex-shrink-0" /> : <Plus className="w-5 h-5 flex-shrink-0" />}
                            </button>
                            <div className={cn(
                                "overflow-hidden transition-all duration-300 ease-in-out",
                                openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                            )}>
                                <p className="text-neutral-400 pb-4 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
