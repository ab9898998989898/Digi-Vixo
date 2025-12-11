"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white py-6 px-8 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
                DIGIVIXO
            </Link>
            <nav className="hidden md:flex gap-8">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "text-sm uppercase tracking-widest hover:opacity-70 transition-opacity",
                            pathname === link.href && "opacity-100 underline underline-offset-4"
                        )}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
            <Link
                href="/contact"
                className="hidden md:block border border-white px-6 py-2 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
                Get in Touch
            </Link>
        </header>
    );
}
