import type { SEOProps } from '../components/seo/SEO';

interface PageSEOConfig extends Omit<SEOProps, 'title' | 'description'> {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article' | 'profile' | 'book' | 'video' | 'music';
}

export const generateSEOConfig = (config: PageSEOConfig): SEOProps => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://catalystcrew.tech';
  const siteName = import.meta.env.VITE_SITE_NAME || 'Catalyst Crew';
  const defaultImage = import.meta.env.VITE_OG_IMAGE_URL || 'https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/catalyst%20crew%20logo.jpg';
  const twitterHandle = import.meta.env.VITE_TWITTER_HANDLE || '@catalystcrew';
  
  const fullUrl = `${siteUrl}${config.path.startsWith('/') ? config.path : `/${config.path}`}`;
  
  return {
    title: config.title,
    description: config.description,
    canonicalUrl: fullUrl,
    ogType: config.type || 'website',
    ogImageUrl: config.ogImageUrl || defaultImage,
    ogImageAlt: config.ogImageAlt || `${config.title} | ${siteName}`,
    twitterCard: 'summary_large_image',
    twitterSite: twitterHandle,
    twitterCreator: twitterHandle,
    keywords: config.keywords,
    noIndex: config.noIndex,
    noFollow: config.noFollow,
    additionalMetaTags: [
      {
        name: 'author',
        content: siteName,
      },
      ...(config.additionalMetaTags || []),
    ],
  };
};

// Common SEO configurations for different page types
export const seoConfigs = {
  home: () => generateSEOConfig({
    title: 'Premium Digital Solutions for Indian Businesses',
    description: 'Catalyst Crew offers expert web development, multilingual chatbots, and animation services in Kanpur, India. Transform your digital presence with our cutting-edge solutions.',
    path: '/',
    type: 'website',
    keywords: [
      'web development India',
      'multilingual chatbot development',
      'animation studio Kanpur',
      'e-commerce solutions',
      'digital marketing agency',
    ],
  }),
  
  services: () => generateSEOConfig({
    title: 'Our Services | Web Development & Digital Solutions',
    description: 'Explore our comprehensive range of digital services including web development, mobile apps, UI/UX design, and digital marketing solutions tailored for your business needs.',
    path: '/services',
    type: 'website',
  }),
  
  about: () => generateSEOConfig({
    title: 'About Us | Catalyst Crew - Digital Innovation Studio',
    description: 'Learn about Catalyst Crew, a leading digital solutions provider based in Kanpur, India. Our team of experts delivers cutting-edge web and mobile solutions.',
    path: '/about',
    type: 'website',
  }),
  
  contact: () => generateSEOConfig({
    title: 'Contact Us | Get in Touch with Our Team',
    description: 'Have a project in mind? Contact Catalyst Crew today to discuss how we can help bring your digital ideas to life with our expert services.',
    path: '/contact',
    type: 'website',
  }),
  
  // Add more page configurations as needed
};

export default generateSEOConfig;
