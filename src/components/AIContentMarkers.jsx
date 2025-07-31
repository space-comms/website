// AI Content Markers Component
// Adds semantic HTML5 and ARIA attributes to help AI agents understand content structure

const AIContentMarkers = ({ children, type, topic, context }) => {
  const getSchemaType = (type) => {
    const types = {
      'article': 'Article',
      'news': 'NewsArticle', 
      'blog': 'BlogPosting',
      'about': 'AboutPage',
      'contact': 'ContactPage',
      'service': 'Service',
      'technology': 'TechArticle',
      'gallery': 'ImageGallery',
      'organization': 'Organization',
      'project': 'CreativeWork'
    };
    return types[type] || 'WebContent';
  };

  return (
    <div 
      role="main"
      itemScope 
      itemType={`https://schema.org/${getSchemaType(type)}`}
      data-ai-content-type={type}
      data-ai-topic={topic}
      data-ai-context={context}
      aria-label={`${type} content about ${topic}`}
    >
      {children}
    </div>
  );
};

export default AIContentMarkers;
