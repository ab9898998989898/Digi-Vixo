"use client";

import { User, Linkedin, Twitter, Mail, Github, Instagram } from "lucide-react";
import Image from "next/image";

export default function TeamDetails() {
    return (
        <section className="py-24 px-6 bg-neutral-950 text-white">
            <div className="max-w-6xl mx-auto space-y-32">
                {/* Abdullah Profile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="aspect-[3/4] bg-neutral-800 rounded-2xl overflow-hidden relative group">
                        <Image src="/abdullah.jpeg" alt="Abdullah" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                <div className="flex gap-4 text-white">
                                    <a href="https://www.linkedin.com/in/abdullah-nadeem-319560285" className="hover:text-neutral-300 transition-colors"><Linkedin /></a>
                                    <a href="https://github.com/ab9898998989898" className="hover:text-neutral-300 transition-colors"><Github /></a>
                                    <a href="mailto:abdullahnadeem2580@gmail.com" className="hover:text-neutral-300 transition-colors"><Mail /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8 pt-8">
                        <div>
                            <h2 className="text-5xl font-bold mb-2">Abdullah</h2>
                            <p className="text-xl text-neutral-400 uppercase tracking-widest">Co-Founder, CEO & CTO</p>
                        </div>
                        <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                            <p>
                                Abdullah is the architect behind Digivixo's robust global infrastructure. With a background in computer engineering and logistics management, he realized early on that the biggest bottleneck for dropshippers wasn't marketing—it was supply chain reliability.
                            </p>
                            <p>
                                He spent three years on the ground in Shenzhen, building personal relationships with factory owners and developing the proprietary software that now powers Digivixo's real-time inventory tracking.
                            </p>

                            <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
                                <h4 className="text-xl font-bold mb-4 text-white">Core Philosophy</h4>
                                <p className="italic text-neutral-400">
                                    "Technology should be invisible. Our clients shouldn't have to worry about how a package gets from A to B; they should just know it will get there, on time, every time."
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold mb-4 text-white">Areas of Expertise</h4>
                                <ul className="grid grid-cols-2 gap-4 text-sm text-neutral-400">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-accent rounded-full" /> Website Development.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-accent rounded-full" /> AI Solutions.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-accent rounded-full" /> Digital Marketing.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-accent rounded-full" /> Data Analytics
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hassan Profile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start md:grid-flow-col-dense">
                    <div className="space-y-8 pt-8 md:col-start-2">
                        <div className="aspect-[3/4] bg-neutral-800 rounded-2xl overflow-hidden relative group">
                            <Image src="/hassan.jpeg" alt="Hassan" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                <div className="flex gap-4 text-white">
                                    <a href="#" className="hover:text-neutral-300 transition-colors"><Instagram /></a>
                                    <a href="#" className="hover:text-neutral-300 transition-colors"><Twitter /></a>
                                    <a href="mailto:e.com.hit@gmail.com" className="hover:text-neutral-300 transition-colors"><Mail /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8 pt-8 md:col-start-1">
                        <div>
                            <h2 className="text-5xl font-bold mb-2">Hassan</h2>
                            <p className="text-xl text-neutral-400 uppercase tracking-widest">Co-Founder & COO</p>
                        </div>
                        <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                            <p>
                                Hassan brings the strategic vision that translates Digivixo's technical capabilities into value for brands. An expert in consumer behavior and market trends, he ensures that Digivixo's product catalog is always ahead of the curve.
                            </p>
                            <p>
                                His focus is on the human element of business—building partnerships that last and creating educational resources that empower the next generation of entrepreneurs.
                            </p>

                            <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
                                <h4 className="text-xl font-bold mb-4 text-white">Core Philosophy</h4>
                                <p className="italic text-neutral-400">
                                    "In a digital world, trust is the most valuable currency. We don't just ship products; we deliver on promises."
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold mb-4 text-white">Areas of Expertise</h4>
                                <ul className="grid grid-cols-2 gap-4 text-sm text-neutral-400">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-accent rounded-full" /> Market Strategy
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-accent rounded-full" /> Product Sourcing
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-accent rounded-full" /> Amazon, Shopify & WooCommerce Management
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-accent rounded-full" /> Education & Training
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
