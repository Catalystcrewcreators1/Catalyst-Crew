import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImageUrl?: string;
  ogImageAlt?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  keywords?: string[];
  noIndex?: boolean;
  noFollow?: boolean;
  themeColor?: string;
  viewport?: string;
  charSet?: string;
  additionalMetaTags?: Array<{
    name: string;
    content: string;
  }>;
  structuredData?: object; // Optional structured data object for JSON-LD
}

export const SEO = ({
  title,
  description,
  canonicalUrl = 'https://catalystcrew.tech',
  ogType = 'website',
  ogImageUrl = 'https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/catalyst%20crew%20logo.jpg',
  ogImageAlt = 'Catalyst Crew - Premium Digital Solutions',
  ogImageWidth = 1200,
  ogImageHeight = 630,
  twitterCard = 'summary_large_image',
  twitterSite = '@catalystcrew',
  twitterCreator = '@catalystcrew',
  keywords = [],
  noIndex = false,
  noFollow = false,
  themeColor = '#D71B1B',
  viewport = 'width=device-width, initial-scale=1',
  charSet = 'UTF-8',
  additionalMetaTags = [],
}: SEOProps) => {
  const siteName = 'Catalyst Crew';
  const defaultKeywords = [
    'web development India',
    'multilingual chatbot development',
    'animation studio Kanpur',
    'e-commerce solutions',
    'digital marketing agency',
    'software development company',
    'mobile app development',
    'UI/UX design services',
    ...(keywords || []),
  ];
  
  const robots = [
    noIndex ? 'noindex' : 'index',
    noFollow ? 'nofollow' : 'follow',
  ].join(',');
  
  const metaDescription = description || '';

  useEffect(() => {
    // Update document title
    document.title = `${title} | ${siteName}`;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: string) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.href = href;
    };

    // Basic meta tags
    updateMetaTag('charset', charSet);
    updateMetaTag('viewport', viewport);
    updateMetaTag('theme-color', themeColor);
    updateMetaTag('title', `${title} | ${siteName}`);
    updateMetaTag('description', metaDescription);
    updateMetaTag('keywords', defaultKeywords.join(', '));
    updateMetaTag('robots', robots);

    // Open Graph tags
    updateMetaTag('og:type', ogType, 'og:type');
    updateMetaTag('og:url', canonicalUrl, 'og:url');
    updateMetaTag('og:title', `${title} | ${siteName}`, 'og:title');
    updateMetaTag('og:description', metaDescription, 'og:description');
    updateMetaTag('og:image', ogImageUrl, 'og:image');
    updateMetaTag('og:image:alt', ogImageAlt, 'og:image:alt');
    updateMetaTag('og:image:width', ogImageWidth.toString(), 'og:image:width');
    updateMetaTag('og:image:height', ogImageHeight.toString(), 'og:image:height');
    updateMetaTag('og:site_name', siteName, 'og:site_name');
    updateMetaTag('og:locale', 'en_IN', 'og:locale');

    // Twitter tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:site', twitterSite);
    updateMetaTag('twitter:creator', twitterCreator);
    updateMetaTag('twitter:title', `${title} | ${siteName}`);
    updateMetaTag('twitter:description', metaDescription);
    updateMetaTag('twitter:image', ogImageUrl);
    updateMetaTag('twitter:image:alt', ogImageAlt);

    // Additional meta tags
    additionalMetaTags.forEach((tag, index) => {
      updateMetaTag(tag.name, tag.content);
    });

    // Link tags
    updateLinkTag('canonical', canonicalUrl);
    updateLinkTag('icon', '/favicon.ico');
    updateLinkTag('apple-touch-icon', '/apple-touch-icon.png');
    updateLinkTag('manifest', '/site.webmanifest');
    updateLinkTag('preconnect', 'https://ik.imagekit.io');
    
    // Preconnect to fonts
    const preconnectGoogle = document.querySelector('link[rel="preconnect"][href="https://fonts.googleapis.com"]') as HTMLLinkElement;
    if (!preconnectGoogle) {
      const link1 = document.createElement('link');
      link1.rel = 'preconnect';
      link1.href = 'https://fonts.googleapis.com';
      document.head.appendChild(link1);
    }
    
    const preconnectGstatic = document.querySelector('link[rel="preconnect"][href="https://fonts.gstatic.com"]') as HTMLLinkElement;
    if (!preconnectGstatic) {
      const link2 = document.createElement('link');
      link2.rel = 'preconnect';
      link2.href = 'https://fonts.gstatic.com';
      link2.crossOrigin = 'anonymous';
      document.head.appendChild(link2);
    }

    // Cleanup function
    return () => {
      // Meta tags persist, no cleanup needed for SEO
    };
  }, [title, description, canonicalUrl, ogType, ogImageUrl, ogImageAlt, ogImageWidth, ogImageHeight, twitterCard, twitterSite, twitterCreator, keywords, noIndex, noFollow, themeColor, viewport, charSet, additionalMetaTags]);

  // Structured data is now handled by the StructuredData component
  return null; // This component doesn't render anything visible
};

export default SEO;
