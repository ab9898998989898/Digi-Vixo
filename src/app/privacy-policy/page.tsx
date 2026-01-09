import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Digivixo",
    description: "Digivixo's Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="pt-20 pb-24 bg-black min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
                <div className="py-16 space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Privacy Policy</h1>
                    <p className="text-neutral-500">Last updated: January 9, 2026</p>
                </div>

                <div className="prose prose-invert prose-lg max-w-none space-y-12">
                    {/* Introduction */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            Digivixo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at digivixo.site and use our services.
                        </p>
                        <p className="text-neutral-300 leading-relaxed">
                            By accessing or using our website, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please do not access the site.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">2. Information We Collect</h2>

                        <h3 className="text-xl font-semibold text-white">2.1 Personal Information</h3>
                        <p className="text-neutral-300 leading-relaxed">
                            We may collect personally identifiable information that you voluntarily provide when you:
                        </p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                            <li>Fill out our contact form (name, email address, phone number, message content)</li>
                            <li>Subscribe to our newsletter</li>
                            <li>Request a consultation or quote for our services</li>
                            <li>Communicate with us via email or other channels</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white">2.2 Automatically Collected Information</h3>
                        <p className="text-neutral-300 leading-relaxed">
                            When you visit our website, we automatically collect certain information about your device and usage, including:
                        </p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                            <li>IP address and geographic location</li>
                            <li>Browser type and version</li>
                            <li>Operating system</li>
                            <li>Pages visited and time spent on pages</li>
                            <li>Referring website addresses</li>
                            <li>Device identifiers</li>
                        </ul>
                    </section>

                    {/* Cookies and Tracking */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">3. Cookies and Tracking Technologies</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            We use cookies and similar tracking technologies to collect and track information about your browsing activities on our website.
                        </p>

                        <h3 className="text-xl font-semibold text-white">3.1 Types of Cookies We Use</h3>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                            <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white">3.2 Third-Party Services</h3>
                        <p className="text-neutral-300 leading-relaxed">
                            We use the following third-party services that may place cookies on your device:
                        </p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                            <li><strong>Google Analytics:</strong> We use Google Analytics to analyze website traffic and user behavior. Google Analytics uses cookies to collect anonymous information about how visitors use our site. For more information, visit <a href="https://policies.google.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.</li>
                            <li><strong>Google AdSense:</strong> We may display advertisements served by Google AdSense. Google uses cookies to serve ads based on your prior visits to our website and other sites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</li>
                        </ul>

                        <p className="text-neutral-300 leading-relaxed">
                            You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
                        </p>
                    </section>

                    {/* How We Use Information */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">4. How We Use Your Information</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            We use the information we collect for the following purposes:
                        </p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                            <li>To respond to your inquiries and provide customer support</li>
                            <li>To deliver the services you request</li>
                            <li>To send you marketing communications (with your consent)</li>
                            <li>To improve our website and services</li>
                            <li>To analyze website usage and trends</li>
                            <li>To detect and prevent fraud or security issues</li>
                            <li>To comply with legal obligations</li>
                        </ul>
                    </section>

                    {/* Information Sharing */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">5. Information Sharing and Disclosure</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                        </p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                            <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our website and delivering services</li>
                            <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                            <li><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, or property</li>
                        </ul>
                    </section>

                    {/* Data Security */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">6. Data Security</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                        </p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                            <li>SSL/TLS encryption for data transmission</li>
                            <li>Secure hosting infrastructure</li>
                            <li>Regular security assessments</li>
                            <li>Access controls and authentication procedures</li>
                        </ul>
                        <p className="text-neutral-300 leading-relaxed">
                            However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                        </p>
                    </section>

                    {/* Your Rights - GDPR */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">7. Your Rights</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            Depending on your location, you may have the following rights regarding your personal data:
                        </p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                            <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you</li>
                            <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                            <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                            <li><strong>Right to Restrict Processing:</strong> Request limitation of how we use your data</li>
                            <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service</li>
                            <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
                            <li><strong>Right to Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                        </ul>
                        <p className="text-neutral-300 leading-relaxed">
                            To exercise any of these rights, please contact us using the information provided below.
                        </p>
                    </section>

                    {/* Data Retention */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">8. Data Retention</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                        </p>
                    </section>

                    {/* Children's Privacy */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">9. Children&apos;s Privacy</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            Our website and services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child without parental consent, we will take steps to delete that information.
                        </p>
                    </section>

                    {/* International Transfers */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">10. International Data Transfers</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. When we transfer your data internationally, we take appropriate safeguards to ensure your information remains protected.
                        </p>
                    </section>

                    {/* Changes to Policy */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">11. Changes to This Privacy Policy</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page with a new &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically.
                        </p>
                    </section>

                    {/* Contact Information */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">12. Contact Us</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                        </p>
                        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 space-y-2">
                            <p className="text-white font-semibold">Digivixo</p>
                            <p className="text-neutral-400">Email: <a href="mailto:contact@digivixo.com" className="text-accent hover:underline">contact@digivixo.com</a></p>
                            <p className="text-neutral-400">Address: 22 Southville Road, Feltham, Middlesex, London, TW14 8AU</p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
