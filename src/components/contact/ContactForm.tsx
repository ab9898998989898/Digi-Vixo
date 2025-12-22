"use client";

import { ArrowRight, ExternalLink } from "lucide-react";

export default function ContactForm() {
    return (
        <div className="flex flex-col items-start justify-center h-full space-y-8 min-h-[400px]">
            <div className="space-y-4">
                <h3 className="text-xl font-bold">Streamlined Intake Process</h3>
                <p className="text-neutral-400 leading-relaxed">
                    To ensure your inquiry is routed to the correct department immediately, we utilize a centralized intake form. Please click the button below to submit your partnership request.
                </p>
            </div>

            <a
                href="https://forms.gle/jmbPHHzFfxDmJnGq6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-black py-4 px-8 rounded-full font-bold uppercase tracking-widest hover:opacity-80 transition-opacity flex items-center justify-center gap-3 group"
            >
                Open Application Form
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <p className="text-xs text-neutral-400">
                You will be redirected to Google Forms securely.
            </p>
        </div>
    );
}
