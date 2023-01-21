import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function SEO({
  title,
  metaDescription,
  ogImageUrl,
  ogImageAlt,
  ogUrl,
}) {
  return (
    <Helmet>
      <title>{title} | Fixtools</title>
      <meta
        name='description'
        content={metaDescription}
        data-rh='true'
      />
      <meta
        property='og:title'
        content={`${title} | Fixtools`}
        data-rh='true'
      />
      <meta
        property='og:description'
        content={metaDescription}
        data-rh='true'
      />
      <meta
        property='og:image'
        content={`${ogImageUrl}`}
        data-rh='true'
      />
      <meta
        property='og:image:alt'
        content={ogImageAlt}
        data-rh='true'
      />
      <meta
        property='og:url'
        content={ogUrl}
        data-rh='true'
      />
      <meta
        property='og:locale'
        content='en_GB'
      />
      <meta
        property='og:type'
        content='website'
      />
      <meta
        name='twitter:image'
        content={ogImageUrl}
        data-rh='true'
      />
      <meta
        name='twitter:card'
        content='summary_large_image'
        data-rh='true'
      />

      <link
        rel='canonical'
        href={ogUrl}
        data-rh='true'
      />
    </Helmet>
  );
}
