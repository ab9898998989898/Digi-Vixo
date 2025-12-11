"use client";

import { Linkedin } from "lucide-react";

export default function AdvisoryBoard() {
    const advisors = [
        {
            name: "Dr. Elena Vance",
            role: "Supply Chain Strategy",
            ex: "Ex-VP Logistics at Amazon",
            image: "bg-neutral-200 dark:bg-neutral-800" // Placeholder color
        },
        {
            name: "Marcus Chen",
            role: "Global Trade Compliance",
            ex: "Former Trade Commissioner",
            image: "bg-neutral-300 dark:bg-neutral-700"
        },
        {
            name: "Sarah O'Connell",
            role: "E-commerce Growth",
            ex: "CMO at Shopify Plus Agency",
            image: "bg-neutral-400 dark:bg-neutral-600"
        }
    ];

    return (
        <section className="py-24 px-6 bg-white dark:bg-card border-t border-neutral-200 dark:border-white/10">
            <div className="max-w-6xl mx-auto text-center space-y-16">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Strategic Advisory Board</h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto">
                        Defining the future of Digivixo with guidance from industry veterans.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {advisors.map((advisor, i) => (
                        <div key={i} className="group">
                            <div className={`w-32 h-32 mx-auto rounded-full ${advisor.image} mb-6 overflow-hidden border-4 border-transparent group-hover:border-gold transition-colors duration-300`}>
                                {/* Image placeholder */}
                                <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-neutral-500">
                                    {advisor.name.charAt(0)}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold">{advisor.name}</h3>
                            <p className="text-accent font-medium text-sm mb-2">{advisor.role}</p>
                            <p className="text-neutral-500 text-sm italic">{advisor.ex}</p>

                            <a href="#" className="inline-block mt-4 text-neutral-400 hover:text-blue-500 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
