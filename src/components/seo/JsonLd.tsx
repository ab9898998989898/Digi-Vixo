export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://digivixo.site/#organization",
                "name": "Digivixo",
                "url": "https://digivixo.site",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://digivixo.site/logo.png",
                    "width": 112,
                    "height": 112
                },
                "sameAs": [
                    "https://www.instagram.com/digivixo",
                    "https://www.linkedin.com/company/digivixo",
                    "https://twitter.com/digivixo"
                ],
                "description": "Professional IT and digital services provider specialized in website development, web applications, automation, and AI solutions.",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer support",
                    "email": "contact@digivixo.site"
                }
            },
            {
                "@type": "WebSite",
                "@id": "https://digivixo.site/#website",
                "url": "https://digivixo.site",
                "name": "Digivixo",
                "description": "Professional IT & Digital Business Solutions",
                "publisher": {
                    "@id": "https://digivixo.site/#organization"
                },
                "inLanguage": "en-US"
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
