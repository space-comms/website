import { useEffect } from 'react';

// SEO and AI-friendly metadata helper
const usePageMetadata = (metadata) => {
  useEffect(() => {
    // Update page title
    if (metadata.title) {
      document.title = `${metadata.title} | Leeds Space Comms`;
    }
    
    // Update meta description
    if (metadata.description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', metadata.description);
      }
    }
    
    // Update Open Graph meta tags for AI agents
    if (metadata.ogTitle) {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', metadata.ogTitle);
      }
    }
    
    if (metadata.ogDescription) {
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', metadata.ogDescription);
      }
    }
    
    if (metadata.ogUrl) {
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', metadata.ogUrl);
      }
    }
    
    // Update Twitter meta tags
    if (metadata.twitterTitle) {
      const twitterTitle = document.querySelector('meta[property="twitter:title"]');
      if (twitterTitle) {
        twitterTitle.setAttribute('content', metadata.twitterTitle);
      }
    }
    
    if (metadata.twitterDescription) {
      const twitterDescription = document.querySelector('meta[property="twitter:description"]');
      if (twitterDescription) {
        twitterDescription.setAttribute('content', metadata.twitterDescription);
      }
    }
    
    // Add structured data for specific page content
    if (metadata.structuredData) {
      // Remove existing structured data script if any
      const existingScript = document.getElementById('page-structured-data');
      if (existingScript) {
        existingScript.remove();
      }
      
      // Add new structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-structured-data';
      script.textContent = JSON.stringify(metadata.structuredData);
      document.head.appendChild(script);
    }
    
    // Add AI-friendly content markers
    if (metadata.aiTags) {
      const aiMeta = document.createElement('meta');
      aiMeta.name = 'ai-content-tags';
      aiMeta.content = metadata.aiTags.join(', ');
      document.head.appendChild(aiMeta);
    }
    
  }, [metadata]);
};

export default usePageMetadata;
