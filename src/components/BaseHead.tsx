import React from 'react';

interface BaseHeadProps {
  title: string;
  description: string;
  image?: string;
}

const BaseHead: React.FC<BaseHeadProps> = ({ title, description, image = '/blog-placeholder-1.jpg' }) => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="sitemap" href="/sitemap-index.xml" />
      <link rel="alternate" type="application/rss+xml" title={title} href="/rss.xml" />
      <meta name="generator" content="React" />

      <link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossOrigin="anonymous" />

      <link rel="canonical" href={window.location.href} />

      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={window.location.href} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </>
  );
};

export default BaseHead; 