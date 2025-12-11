"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate form submission
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium uppercase tracking-wide">Name</label>
                    <input
                        id="name"
                        type="text"
                        required
                        className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-2 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                        placeholder="John Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium uppercase tracking-wide">Email</label>
                    <input
                        id="email"
                        type="email"
                        required
                        className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-2 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium uppercase tracking-wide">Subject</label>
                <select
                    id="subject"
                    className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-2 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                >
                    <option value="general">General Inquiry</option>
                    <option value="dropshipping">Dropshipping Partnership</option>
                    <option value="wholesale">Wholesale Order</option>
                    <option value="digital">Digital Products Support</option>
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium uppercase tracking-wide">Message</label>
                <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-2 focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
                    placeholder="How can we help you?"
                />
            </div>

            <button
                type="submit"
                disabled={loading || success}
                className={cn(
                    "w-full py-4 text-white text-sm uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2",
                    success ? "bg-green-600 hover:bg-green-700" : "bg-black dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200"
                )}
            >
                {loading ? "Sending..." : success ? "Message Sent" : (
                    <>Send Message <Send className="w-4 h-4" /></>
                )}
            </button>
        </form>
    );
}
