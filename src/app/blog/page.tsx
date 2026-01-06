import type { Metadata } from "next";
import { blogPosts } from "@/data/blogData";
import BlogPageHero from "@/components/blog/BlogPageHero";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
    title: "Blog | Digivixo - Insights on Web Development, Marketing & E-commerce",
    description: "Expert insights on web development, SaaS platforms, digital marketing, Shopify optimization, and Amazon selling strategies from the Digivixo team.",
    keywords: ["web development blog", "digital marketing insights", "e-commerce tips", "SaaS development", "Shopify blog", "Amazon seller tips"],
    openGraph: {
        title: "Blog | Digivixo",
        description: "Expert insights on web development, marketing, and e-commerce.",
        url: "https://digivixo.site/blog",
        type: "website",
    },
};

export default function BlogPage() {
    return (
        <main className="pt-20">
            {/* Hero Section */}
            <BlogPageHero
                title="Insights & Resources"
                subtitle="Expert perspectives on web development, digital marketing, e-commerce optimization, and business automation."
            />

            {/* Blog Grid */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                <BlogGrid posts={blogPosts} />
            </section>
        </main>
    );
}
