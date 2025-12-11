export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Digivixo",
        "url": "https://digivixo.com",
        "logo": "https://digivixo.com/logo.png",
        "sameAs": [
            "https://www.instagram.com/digivixo",
            "https://www.linkedin.com/company/digivixo",
            "https://twitter.com/digivixo"
        ],
        "description": "Premium dropshipping and wholesale partner offering digital products and global supply chain solutions.",
        "founders": [
            {
                "@type": "Person",
                "name": "Abdullah"
            },
            {
                "@type": "Person",
                "name": "Hassan"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
