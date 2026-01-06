import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogBySlug, getAllBlogSlugs } from "@/data/blogData";
import BlogHero from "@/components/blog/BlogHero";
import BlogContent from "@/components/blog/BlogContent";

interface BlogArticlePageProps {
    params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    return getAllBlogSlugs().map((slug) => ({
        slug,
    }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogBySlug(slug);

    if (!post) {
        return {
            title: "Article Not Found | Digivixo",
        };
    }

    return {
        title: post.seo.metaTitle,
        description: post.seo.metaDescription,
        keywords: post.seo.keywords,
        openGraph: {
            title: post.seo.metaTitle,
            description: post.seo.metaDescription,
            url: `https://digivixo.site/blog/${post.slug}`,
            type: "article",
            images: [
                {
                    url: post.image.url,
                    alt: post.image.altText,
                },
            ],
            publishedTime: post.publishedAt,
            authors: [post.author],
        },
        twitter: {
            card: "summary_large_image",
            title: post.seo.metaTitle,
            description: post.seo.metaDescription,
            images: [post.image.url],
        },
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
    };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
    const { slug } = await params;
    const post = getBlogBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="pt-20">
            <BlogHero post={post} />
            <BlogContent sections={post.content} />

            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": post.type === "case-study" ? "Article" : "BlogPosting",
                        headline: post.title,
                        description: post.excerpt,
                        image: post.image.url,
                        author: {
                            "@type": "Organization",
                            name: post.author,
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "Digivixo",
                            url: "https://digivixo.site",
                        },
                        datePublished: post.publishedAt,
                        dateModified: post.publishedAt,
                        mainEntityOfPage: {
                            "@type": "WebPage",
                            "@id": `https://digivixo.site/blog/${post.slug}`,
                        },
                    }),
                }}
            />
        </main>
    );
}
