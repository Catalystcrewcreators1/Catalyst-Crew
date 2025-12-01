import type { ReactNode } from 'react';
import { SEO } from '../seo/SEO';
import { StructuredData } from '../seo/StructuredData';
import { seoConfigs } from '../../utils/seoConfig';
import type { SEOProps } from '../seo/SEO';
import type { WebPageData, OrganizationData, ServiceData } from '../../types/seo';

type StructuredDataProps = WebPageData | OrganizationData | ServiceData;

interface PageLayoutProps {
  children: ReactNode;
  seo?: Partial<SEOProps> & { title: string; description: string };
  pageType?: keyof typeof seoConfigs;
  structuredData?: StructuredDataProps;
  className?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  seo = {},
  pageType,
  structuredData,
  className = '',
}) => {
  // Get default SEO config based on page type
  const defaultSEO = (pageType ? seoConfigs[pageType]() : {}) as SEOProps;
  
  // Merge default and custom SEO props
  const seoProps = {
    ...defaultSEO,
    ...seo,
  };

  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      <SEO {...seoProps} />
      
      {/* Add structured data if provided */}
      {structuredData && <StructuredData data={structuredData} />}
      
      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* You can add a common footer here if needed */}
    </div>
  );
};

export default PageLayout;
