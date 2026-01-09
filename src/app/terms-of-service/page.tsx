import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Digivixo",
    description: "Digivixo's Terms of Service outlines the rules, guidelines, and legal agreements for using our website and professional IT services.",
};

export default function TermsOfServicePage() {
    return (
        <main className="pt-20 pb-24 bg-black min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
                <div className="py-16 space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Terms of Service</h1>
                    <p className="text-neutral-500">Last updated: January 9, 2026</p>
                </div>

                <div className="prose prose-invert prose-lg max-w-none space-y-12">
                    {/* Introduction */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">1. Agreement to Terms</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and Digivixo (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) concerning your access to and use of the digivixo.site website and any related services.
                        </p>
                        <p className="text-neutral-300 leading-relaxed">
                            By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our website or services.
                        </p>
                    </section>

                    {/* Services Description */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">2. Description of Services</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            Digivixo provides professional IT and digital services, including but not limited to:
                        </p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                            <li>Website development and design</li>
                            <li>Custom web application development</li>
                            <li>E-commerce solutions (Shopify, Amazon marketplace management)</li>
                            <li>Digital marketing and SEO services</li>
                            <li>WordPress development and maintenance</li>
                            <li>Business automation and AI integration</li>
                            <li>Graphic design and UI/UX services</li>
                        </ul>
                        <p className="text-neutral-300 leading-relaxed">
                            Specific services, deliverables, timelines, and pricing are defined in separate service agreements or proposals provided to clients.
                        </p>
                    </section>

                    {/* User Responsibilities */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">3. User Responsibilities</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            By using our website and services, you agree to:
                        </p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                            <li>Provide accurate and complete information when contacting us or using our services</li>
                            <li>Use our website only for lawful purposes</li>
                            <li>Not attempt to gain unauthorized access to our systems or networks</li>
                            <li>Not interfere with the proper functioning of our website</li>
                            <li>Not transmit any malicious code, viruses, or harmful content</li>
                            <li>Not use our services for any fraudulent or illegal activities</li>
                            <li>Comply with all applicable laws and regulations</li>
                        </ul>
                    </section>

                    {/* Intellectual Property */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">4. Intellectual Property Rights</h2>

                        <h3 className="text-xl font-semibold text-white">4.1 Our Content</h3>
                        <p className="text-neutral-300 leading-relaxed">
                            All content on this website, including but not limited to text, graphics, logos, images, software, and design elements, is the property of Digivixo or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from our content without our express written permission.
                        </p>

                        <h3 className="text-xl font-semibold text-white">4.2 Client Work</h3>
                        <p className="text-neutral-300 leading-relaxed">
                            Ownership and intellectual property rights for work created for clients are governed by the specific service agreement between Digivixo and the client. Generally, upon full payment, clients receive ownership of custom work created specifically for them, while Digivixo retains ownership of pre-existing tools, frameworks, and methodologies.
                        </p>

                        <h3 className="text-xl font-semibold text-white">4.3 Feedback</h3>
                        <p className="text-neutral-300 leading-relaxed">
                            Any feedback, suggestions, or ideas you provide to us regarding our website or services become our property, and we may use such feedback without any obligation to you.
                        </p>
                    </section>

                    {/* Service Agreements */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">5. Service Agreements and Payment</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            Professional services are provided under separate written agreements that specify:
                        </p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                            <li>Scope of work and deliverables</li>
                            <li>Project timelines and milestones</li>
                            <li>Pricing and payment terms</li>
                            <li>Revision policies</li>
                            <li>Termination conditions</li>
                        </ul>
                        <p className="text-neutral-300 leading-relaxed">
                            These Terms of Service apply in addition to any specific service agreement. In case of conflict, the specific service agreement shall prevail for the services covered by that agreement.
                        </p>
                    </section>

                    {/* Disclaimers */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">6. Disclaimers</h2>

                        <h3 className="text-xl font-semibold text-white">6.1 Website Availability</h3>
                        <p className="text-neutral-300 leading-relaxed">
                            We strive to maintain the availability of our website but do not guarantee uninterrupted access. We may suspend, withdraw, or restrict availability of the website for business or operational reasons.
                        </p>

                        <h3 className="text-xl font-semibold text-white">6.2 Information Accuracy</h3>
                        <p className="text-neutral-300 leading-relaxed">
                            While we make reasonable efforts to ensure the accuracy of information on our website, we do not warrant that all content is complete, accurate, or current. The content on our website is provided for general information purposes only.
                        </p>

                        <h3 className="text-xl font-semibold text-white">6.3 Third-Party Links</h3>
                        <p className="text-neutral-300 leading-relaxed">
                            Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or availability of these external sites. Inclusion of any link does not imply endorsement.
                        </p>

                        <h3 className="text-xl font-semibold text-white">6.4 No Warranties</h3>
                        <p className="text-neutral-300 leading-relaxed">
                            THE WEBSITE AND ITS CONTENT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                        </p>
                    </section>

                    {/* Limitation of Liability */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">7. Limitation of Liability</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            TO THE FULLEST EXTENT PERMITTED BY LAW, DIGIVIXO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, BUSINESS OPPORTUNITIES, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH:
                        </p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                            <li>Your use or inability to use our website</li>
                            <li>Any content or information obtained from our website</li>
                            <li>Unauthorized access to or alteration of your data</li>
                            <li>Any third-party conduct or content on our website</li>
                        </ul>
                        <p className="text-neutral-300 leading-relaxed">
                            Our total liability for any claims arising under these Terms shall not exceed the amount you have paid to us in the twelve (12) months preceding the claim.
                        </p>
                    </section>

                    {/* Indemnification */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">8. Indemnification</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            You agree to indemnify, defend, and hold harmless Digivixo and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys&apos; fees) arising out of or related to:
                        </p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                            <li>Your violation of these Terms</li>
                            <li>Your use of our website or services</li>
                            <li>Your violation of any rights of a third party</li>
                            <li>Your violation of any applicable laws or regulations</li>
                        </ul>
                    </section>

                    {/* Termination */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">9. Termination</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            We reserve the right to terminate or suspend your access to our website at any time, without prior notice, for any reason, including but not limited to a breach of these Terms. Upon termination, your right to use our website will immediately cease.
                        </p>
                    </section>

                    {/* Governing Law */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">10. Governing Law and Jurisdiction</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                        </p>
                    </section>

                    {/* Severability */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">11. Severability</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                        </p>
                    </section>

                    {/* Changes to Terms */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">12. Changes to These Terms</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on this page with an updated &quot;Last updated&quot; date. Your continued use of our website after any changes constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.
                        </p>
                    </section>

                    {/* Contact Information */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">13. Contact Us</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            If you have any questions about these Terms of Service, please contact us at:
                        </p>
                        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 space-y-2">
                            <p className="text-white font-semibold">Digivixo</p>
                            <p className="text-neutral-400">Email: <a href="mailto:contact@digivixo.site" className="text-accent hover:underline">contact@digivixo.site</a></p>
                            <p className="text-neutral-400">Address: 22 Southville Road, Feltham, Middlesex, London, TW14 8AU</p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
