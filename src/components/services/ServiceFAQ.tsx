"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ServiceFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What digital services does DIGIVIXO offer?",
            answer: "DIGIVIXO provides five core digital services: Website Development, AI & ML Solutions, Digital Marketing & Social Media Marketing, Shopify Store Setup & Management, and Amazon Store Setup & Management."
        },
        {
            question: "What is the DIGIVIXO LMS and who is it for?",
            answer: "Our LMS aggregates premium global courses that normally cost hundreds or thousands of dollars, offering students access for 10,000–15,000 PKR. It's designed for founders, students, and businesses looking to learn practical, market-relevant skills."
        },
        {
            question: "Can DIGIVIXO help with both Shopify and Amazon stores?",
            answer: "Yes! We offer complete setup and management for both Shopify and Amazon stores, including store creation, product listings, optimization, and ongoing operations handling."
        },
        {
            question: "Does DIGIVIXO offer AI chatbot development?",
            answer: "Absolutely. Our AI & ML Solutions pillar includes AI chatbot development, automation workflows, and machine learning models tailored to improve your business efficiency."
        },
        {
            question: "What's the difference between dropshipping and wholesale services?",
            answer: "Dropshipping has no minimum order quantity—we handle fulfillment for individual orders. Wholesale is for bulk ordering with competitive pricing, ideal for established brands scaling their inventory."
        },
        {
            question: "How is DIGIVIXO qualified to teach these skills?",
            answer: "Our founders have 2–3 years of hands-on teaching experience locally and internationally. We understand real student learning gaps and focus on practical, outcome-based education rather than just theory."
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
