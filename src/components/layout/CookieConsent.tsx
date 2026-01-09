"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Small delay to prevent flash on page load
            const timer = setTimeout(() => setShowBanner(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setShowBanner(false);
    };

    const declineCookies = () => {
        localStorage.setItem("cookie-consent", "declined");
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-neutral-900 border-t border-neutral-800 shadow-2xl">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-semibold text-white">Cookie Consent</h3>
                    <p className="text-sm text-neutral-400 max-w-2xl">
                        We use cookies to enhance your browsing experience, analyze site traffic, and serve personalized content.
                        By clicking &quot;Accept All&quot;, you consent to our use of cookies as described in our{" "}
                        <Link href="/privacy-policy" className="text-accent hover:underline">
                            Privacy Policy
                        </Link>.
                    </p>
                </div>
                <div className="flex gap-3 shrink-0">
                    <button
                        onClick={declineCookies}
                        className="px-5 py-2.5 text-sm font-medium text-neutral-400 hover:text-white border border-neutral-700 hover:border-neutral-600 rounded-full transition-colors"
                    >
                        Decline
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="px-5 py-2.5 text-sm font-medium bg-accent text-black hover:bg-accent/90 rounded-full transition-colors"
                    >
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
}
