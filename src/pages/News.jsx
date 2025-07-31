import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Satellite, Award, Users, Radio, Presentation } from 'lucide-react';
import usePageMetadata from '../hooks/usePageMetadata';

// Import images
import mainEmleyImg from '../assets/Emley-Moor Visit/main_emley.JPG';
import emleyMoorImg1 from '../assets/Emley-Moor Visit/IMG_0765.jpg';
import emleyMoorImg2 from '../assets/Emley-Moor Visit/IMG_0773.jpg';
import ugrcImg1 from '../assets/UGRC 2025/IMG_0630 1.jpg';
import ugrcImg2 from '../assets/UGRC 2025/IMG_0642.jpg';
import otleyImg1 from '../assets/Otley Visit June 2025/Media (8).jpg';
import otleyImg2 from '../assets/Otley Visit June 2025/Media (9).jpg';

const News = () => {
  // SEO and AI-friendly metadata
  usePageMetadata({
    title: 'News & Updates',
    description: 'Latest news and updates from Leeds Space Communications Society including ground station deployments, field trips to Emley Moor, research presentations, and RSGB recognition.',
    ogTitle: 'Leeds Space Comms News & Updates',
    ogDescription: 'Stay updated with our latest space communications projects, research, and society activities',
    ogUrl: 'https://leedsspacecomms.co.uk/news',
    twitterTitle: 'Leeds Space Comms News',
    twitterDescription: 'Latest updates from our space communications society',
    aiTags: ['news', 'updates', 'ground-station', 'emley-moor', 'arqiva', 'research', 'ugrc', 'rsgb', 'amateur-radio', 'field-trips'],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Leeds Space Comms News",
      "description": "News and updates from Leeds Space Communications Society",
      "url": "https://leedsspacecomms.co.uk/news",
      "mainEntity": {
        "@type": "ItemList",
        "name": "News Articles",
        "numberOfItems": 5,
        "itemListElement": [
          {
            "@type": "Article",
            "headline": "New Ground Station Successfully Deployed",
            "datePublished": "2025-07-27",
            "author": "Leeds Space Comms Team",
            "url": "https://leedsspacecomms.co.uk/blog/1"
          },
          {
            "@type": "Article", 
            "headline": "Exploring the Future of Broadcasting: Arqiva Site Visit at Emley Moor",
            "datePublished": "2025-06-18",
            "author": "Leeds Space Comms Team",
            "url": "https://leedsspacecomms.co.uk/blog/2"
          }
        ]
      }
    }
  });

  const newsArticles = [
    {
      id: 1,
      title: 'New Ground Station Successfully Deployed',
      excerpt: 'Our latest generation ground station is now operational, providing enhanced coverage and tracking capabilities for satellites orbiting over Leeds. The system represents a major milestone in our journey to advance satellite communications.',
      date: '2025-7-27',
      readTime: '5 min read',
      category: 'Launch',
      icon: Satellite,
      featured: true,
      content: 'After months of planning and development, we\'re thrilled to announce that our new ground station is fully operational. This state-of-the-art facility enables us to track and communicate with satellites passing overhead, bringing us closer to our goal of establishing reliable space communications links.'
    },
    {
      id: 2,
      title: 'Exploring the Future of Broadcasting: Arqiva Site Visit at Emley Moor',
      excerpt: 'Our team had an incredible opportunity to visit the iconic Emley Moor transmitter station, one of the UK\'s most important broadcasting sites. We got up close with the massive infrastructure that keeps the nation connected.',
      date: '2025-6-18',
      readTime: '6 min read',
      category: 'Field Trip',
      icon: Radio,
      featured: true,
      images: [mainEmleyImg, emleyMoorImg1, emleyMoorImg2],
      content: 'Standing at 330 meters tall, the Emley Moor transmitter is an engineering marvel that we\'ve always admired from afar. During our visit, Craig Kelly and Joanna Szymik from Arqiva showed us around the facility\'s impressive infrastructure, explained the technical challenges of high-power broadcasting, and shared valuable insights into the future of terrestrial transmission systems. The scale of the operation was absolutely mind-blowing!'
    },
    {
      id: 3,
      title: 'Breaking New Ground: Decentralised Communications for Disaster Relief',
      excerpt: 'Ahmad Al-Musbahi represented our society at the Leeds Undergraduate Research Council, presenting groundbreaking research on how decentralised communication networks could revolutionize emergency response during disasters.',
      date: '2025-6-11',
      readTime: '4 min read',
      category: 'Research',
      icon: Users,
      featured: true,
      images: [ugrcImg1, ugrcImg2],
      content: 'When traditional communication infrastructure fails during disasters, lives are at stake. Ahmad\'s presentation explored innovative mesh networking solutions that could maintain critical communications even when cell towers and internet infrastructure are compromised. The research has significant implications for emergency services and humanitarian aid organizations.'
    },
    {
      id: 4,
      title: 'Sharing Knowledge: 80m Beam Antenna Design at Otley Amateur Radio Society',
      excerpt: 'We had the pleasure of presenting our portable 80-meter 3-element beam antenna design to the enthusiastic members of Otley Amateur Radio Society. Great discussions about HF propagation and antenna theory followed!',
      date: '2025-6-3',
      readTime: '3 min read',
      category: 'Presentation',
      icon: Presentation,
      featured: false,
      images: [otleyImg1, otleyImg2],
      content: 'Amateur radio societies are the backbone of our hobby, and we were delighted to share our latest antenna design with the friendly folks at Otley ARS. Our portable 80m beam represents months of modeling, testing, and refinement. The evening sparked fascinating discussions about propagation patterns, antenna modeling software, and field deployment strategies.'
    },
    {
      id: 5,
      title: 'RSGB Education-Affiliated Club Recognition',
      excerpt: 'We\'re proud to announce our recognition as an RSGB Education-Affiliated Club, acknowledging our commitment to advancing radio and satellite communications education among students.',
      date: '2025-6-1',
      readTime: '3 min read',
      category: 'Awards',
      icon: Award,
      featured: false,
      content: 'This recognition from the Radio Society of Great Britain validates our educational mission and opens new opportunities for collaboration with other clubs and institutions. We\'re committed to inspiring the next generation of radio enthusiasts and telecommunications professionals.'
    }
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Awards': 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30',
      'Launch': 'bg-green-500/20 text-green-400 border-green-400/30',
      'Field Trip': 'bg-blue-500/20 text-blue-400 border-blue-400/30',
      'Research': 'bg-purple-500/20 text-purple-400 border-purple-400/30',
      'Presentation': 'bg-orange-500/20 text-orange-400 border-orange-400/30',
      'Partnership': 'bg-cyan-500/20 text-cyan-400 border-cyan-400/30',
      'Technology': 'bg-indigo-500/20 text-indigo-400 border-indigo-400/30',
      'Publications': 'bg-pink-500/20 text-pink-400 border-pink-400/30'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400 border-gray-400/30';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 dark:bg-gradient-to-br dark:from-space-800 dark:to-space-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white">
              Latest News
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-white/80 max-w-4xl mx-auto leading-relaxed">
              Stay updated with our latest developments and industry insights
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => {
              const IconComponent = article.icon;
              return (
                <motion.article
                  key={article.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${article.id}`} className="block">
                    <div className="glass-effect rounded-xl overflow-hidden card-hover h-full">
                    {article.images && article.images.length > 0 ? (
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={article.images[0]} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-2 right-2">
                          <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-space-600 dark:from-primary-500/20 dark:to-space-600 flex items-center justify-center">
                        <IconComponent className="w-12 h-12 text-primary-600 dark:text-primary-400" />
                      </div>
                    )}
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-2 py-1 rounded-full border text-xs font-medium ${getCategoryColor(article.category)}`}>
                          {article.category}
                        </span>
                        <div className="flex items-center text-gray-600 dark:text-white/60 text-xs space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(article.date)}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-700 dark:text-white/70 text-sm leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-white/60 text-xs">{article.readTime}</span>
                        <div className="inline-flex items-center space-x-1 text-primary-600 dark:text-primary-400 text-sm font-medium">
                          <span>Read More</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default News;
