"use client";

import Link from "next/link";
import Image from "next/image";

export default function TeamPreview() {
    return (
        <section className="py-24 px-6 bg-neutral-900 text-white">
            <div className="max-w-7xl mx-auto text-center space-y-16">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Meet The Founders</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        The visionaries behind Digivixo, dedicated to building the future of digital commerce.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Abdullah */}
                    <div className="p-8 rounded-2xl bg-neutral-900 border border-white/10 hover:border-accent/50 transition-colors text-left space-y-6 group">
                        <div className="w-16 h-16 rounded-full bg-neutral-800 relative overflow-hidden group-hover:bg-accent/20 transition-colors">
                            <Image src="/abdullah.jpeg" alt="Abdullah" fill className="object-cover" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">Abdullah</h3>
                            <p className="text-accent text-sm uppercase tracking-widest font-bold">Chief Executive Officer</p>
                        </div>
                        <p className="text-neutral-400 leading-relaxed">
                            A strategic architect of digital commerce ecosystems. Abdullah specializes in high-velocity scaling, overseeing the infrastructure that powers Digivixo’s global logistics network.
                        </p>
                    </div>

                    {/* Hassan */}
                    <div className="p-8 rounded-2xl bg-neutral-900 border border-white/10 hover:border-accent/50 transition-colors text-left space-y-6 group">
                        <div className="w-16 h-16 rounded-full bg-neutral-800 relative overflow-hidden group-hover:bg-accent/20 transition-colors">
                            <Image src="/hassan.jpeg" alt="Hassan" fill className="object-cover" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">Hassan</h3>
                            <p className="text-accent text-sm uppercase tracking-widest font-bold">Chief Operations Officer</p>
                        </div>
                        <p className="text-neutral-400 leading-relaxed">
                            The operational backbone of Digivixo. Hassan engineers seamless supply chain solutions and optimizes cross-border trade flows for maximum efficiency and client retention.
                        </p>
                    </div>
                </div>

                <Link href="/team" className="inline-block px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors">
                    Read Full Bios
                </Link>
            </div>
        </section>
    );
}
