import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
};

/**
 * Lightweight SEO head manager without extra deps. Updates title, description, keywords, and canonical.
 */
export default function SEO({ title, description, keywords, canonical }: SEOProps) {
  useEffect(() => {
    // Title
    if (title) document.title = title;

    // Description
    if (description) {
      const metaDesc = ensureMeta('description');
      metaDesc.setAttribute('content', description);
    }

    // Keywords
    if (keywords && keywords.length > 0) {
      const metaKeywords = ensureMeta('keywords');
      metaKeywords.setAttribute('content', keywords.join(', '));
    }

    // Canonical link
    if (canonical) {
      let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
  }, [title, description, keywords, canonical]);

  return null;
}

function ensureMeta(name: string): HTMLMetaElement {
  let meta = document.querySelector(`meta[name='${name}']`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  return meta;
}


