import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, MapPin, Phone, Globe } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us | Digivixo",
    description: "Get in touch with Digivixo for partnerships, dropshipping inquiries, and wholesale opportunities.",
};

export default function ContactPage() {
    return (
        <main className="pt-20 pb-24 bg-neutral-50 dark:bg-black min-h-screen">
            <div className="py-24 text-center space-y-6 px-6">
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">Get in Touch</h1>
                <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
                    We are ready to scale your business. Choose your path below.
                </p>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 px-6">

                {/* Contact Info Side */}
                <div className="flex-1 space-y-12">
                    <div className="bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-8">
                        <h2 className="text-2xl font-bold">Contact Information</h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-full">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Email Us</h3>
                                    <p className="text-neutral-500 text-sm mb-2">For general inquiries and support:</p>
                                    <a href="mailto:support@digivixo.com" className="text-lg font-medium hover:underline">support@digivixo.com</a>
                                    <p className="text-neutral-500 text-sm mt-2 mb-2">For partnerships:</p>
                                    <a href="mailto:partners@digivixo.com" className="text-lg font-medium hover:underline">partners@digivixo.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-full">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Global HQ</h3>
                                    <p className="text-neutral-500">
                                        123 Commerce Blvd, Suite 400 <br />
                                        Dubai, UAE
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-full">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Operating Hours</h3>
                                    <p className="text-neutral-500">Mon - Fri: 9:00 AM - 6:00 PM (GST)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black text-white p-8 rounded-3xl space-y-6">
                        <h2 className="text-2xl font-bold">Expectations</h2>
                        <ul className="space-y-4 text-neutral-300">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-white rounded-full" />
                                <span>All inquiries responded to within 24 hours.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-white rounded-full" />
                                <span>Dedicated support for active partners.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-white rounded-full" />
                                <span>Prioritized technical assistance.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Form Side */}
                <div className="flex-[1.5] bg-white dark:bg-neutral-900 rounded-3xl p-8 md:p-12 border border-neutral-200 dark:border-neutral-800 shadow-xl shadow-neutral-200/50 dark:shadow-none">
                    <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}
