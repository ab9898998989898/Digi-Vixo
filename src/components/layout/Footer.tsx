import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-20 px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl font-bold tracking-tighter">DIGIVIXO</h2>
                    <p className="max-w-xs text-neutral-400">
                        Empowering businesses with professional IT solutions, custom development, and intelligent digital services.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm uppercase tracking-widest text-neutral-500">Navigation</h3>
                        <Link href="/about" className="hover:text-neutral-400 transition-colors">About Us</Link>
                        <Link href="/services" className="hover:text-neutral-400 transition-colors">Services</Link>
                        <Link href="/team" className="hover:text-neutral-400 transition-colors">Team</Link>
                        <Link href="/blog" className="hover:text-neutral-400 transition-colors">Blog</Link>
                        <Link href="/contact" className="hover:text-neutral-400 transition-colors">Contact</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm uppercase tracking-widest text-neutral-500">Legal</h3>
                        <Link href="/privacy-policy" className="hover:text-neutral-400 transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-neutral-400 transition-colors">Terms of Service</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm uppercase tracking-widest text-neutral-500">Connect</h3>
                        <a href="https://www.linkedin.com/company/digivixo" className="hover:text-neutral-400 transition-colors">LinkedIn</a>
                        <a href="mailto:contact@digivixo.site" className="hover:text-neutral-400 transition-colors">Email Us</a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between gap-4 text-neutral-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Digivixo. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="/privacy-policy" className="hover:text-neutral-400 transition-colors">Privacy</Link>
                    <Link href="/terms-of-service" className="hover:text-neutral-400 transition-colors">Terms</Link>
                </div>
            </div>
        </footer>
    );
}
