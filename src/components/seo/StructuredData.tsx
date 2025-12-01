import React from 'react';
import type { WebPageData, OrganizationData, ServiceData } from '../../types/seo';

interface StructuredDataProps {
  data: WebPageData | OrganizationData | ServiceData;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          ...data,
        }),
      }}
    />
  );
};
