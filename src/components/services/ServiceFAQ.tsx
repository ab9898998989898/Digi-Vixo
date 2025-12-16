"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ServiceFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What are your shipping times?",
            answer: "For dropshipping, we offer 5-8 day delivery to US/UK/EU via our premium lines. Wholesale bulk orders typically arrive in 12-15 days depending on freight method."
        },
        {
            question: "Do you require a Minimum Order Quantity (MOQ)?",
            answer: "Dropshipping has NO MOQ. For wholesale custom branding, MOQs typically start at 50 units, significantly lower than industry standards."
        },
        {
            question: "What platforms do your digital services support?",
            answer: "Our development team specializes in Next.js, Shopify, and WordPress. We build scalable, high-performance applications tailored to your specific business needs."
        },
        {
            question: "How do I access my purchased digital products?",
            answer: "Upon purchase, you receive instant access to a secure dashboard where you can download all assets. You also get lifetime access to future updates at no extra cost."
        },
        {
            question: "Can you handle custom packaging?",
            answer: "Yes! We offer full custom packaging services including branded boxes, thank you cards, and stickers to elevate your customer's unboxing experience."
        },
        {
            question: "Do you offer post-launch support for websites?",
            answer: "Absolutely. All our development packages include 30 days of complimentary support. We also offer monthly maintenance retainers for ongoing optimization and updates."
        }
    ];

    return (
        <section className="py-24 px-6 bg-neutral-50 dark:bg-black">
            <div className="max-w-3xl mx-auto space-y-12">
                <h2 className="text-4xl font-bold tracking-tighter text-center">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
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
                                <p className="text-neutral-600 dark:text-neutral-400 pb-4 leading-relaxed">
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
