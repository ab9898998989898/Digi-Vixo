"use client";

import Link from "next/link";
import { User } from "lucide-react";

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
                    <div className="p-8 rounded-2xl bg-neutral-800/50 border border-neutral-700 hover:bg-neutral-800 transition-colors text-left space-y-6">
                        <div className="w-16 h-16 rounded-full bg-neutral-700 flex items-center justify-center">
                            <User className="w-8 h-8 text-neutral-400" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">Abdullah</h3>
                            <p className="text-neutral-400 text-sm uppercase tracking-widest">Co-Founder</p>
                        </div>
                        <p className="text-neutral-300 leading-relaxed">
                            Driving the strategic vision and technical innovation at Digivixo. Expert in scaling digital infrastructures.
                        </p>
                    </div>

                    {/* Hassan */}
                    <div className="p-8 rounded-2xl bg-neutral-800/50 border border-neutral-700 hover:bg-neutral-800 transition-colors text-left space-y-6">
                        <div className="w-16 h-16 rounded-full bg-neutral-700 flex items-center justify-center">
                            <User className="w-8 h-8 text-neutral-400" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">Hassan</h3>
                            <p className="text-neutral-400 text-sm uppercase tracking-widest">Co-Founder</p>
                        </div>
                        <p className="text-neutral-300 leading-relaxed">
                            Leading product strategy and operations. Passionate about creating seamless user experiences and efficient supply chains.
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
