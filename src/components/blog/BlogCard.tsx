import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/blogData";

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group block bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
        >
            <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                    src={post.image.url}
                    alt={post.image.altText}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full ${post.type === 'case-study'
                            ? 'bg-purple-500/90 text-white'
                            : 'bg-primary/90 text-white'
                        }`}>
                        {post.type === 'case-study' ? 'Case Study' : 'Blog'}
                    </span>
                </div>
            </div>
            <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                </h3>
                <p className="text-muted text-sm line-clamp-2">
                    {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted pt-2">
                    <span>{post.author}</span>
                    <span>{post.readingTime}</span>
                </div>
            </div>
        </Link>
    );
}
