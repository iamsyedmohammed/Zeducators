import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, canonical, type = 'website', image, schema }) {
    const siteUrl = 'https://zeducators.org';
    const defaultImage = '/logo.png'; // Using logo as fallback if no specific image
    const fullTitle = title === 'Home' ? 'Zeducators - Where Future Achievers Begin Their Journey' : `${title} | Zeducators`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={`${siteUrl}${canonical}`} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={`${siteUrl}${canonical}`} />
            <meta property="og:site_name" content="Zeducators" />
            {image && <meta property="og:image" content={`${siteUrl}${image}`} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={`${siteUrl}${image}`} />}

            {/* Structured Data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}
