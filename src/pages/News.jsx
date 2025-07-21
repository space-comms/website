import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Satellite, Award, Globe } from 'lucide-react';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'RSGB Education-Affliated Club Recognition',
      excerpt: 'Recognition for our innovative satellite communication systems and contributions to the space industry.',
      date: '2025-4-15',
      readTime: '3 min read',
      category: 'Awards',
      icon: Award,
      featured: true
    },
    {
      id: 2,
      title: 'New Ground Station Successfully Deployed',
      excerpt: 'Our latest generation ground station are now operational, providing enhanced coverage and tracking of satellites orbiting over Leeds.',
      date: '2023-11-28',
      readTime: '5 min read',
      category: 'Launch',
      icon: Satellite,
      featured: true
    },
    {
      id: 3,
      title: 'Presentation at Leeds Undergraduate Research Conference',
      excerpt: 'Invited to present findings at our first conference involvement.',
      date: '2025-06-10',
      readTime: '4 min read',
      category: 'Publications',
      icon: Globe,
      featured: false
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
      'Partnership': 'bg-blue-500/20 text-blue-400 border-blue-400/30',
      'Technology': 'bg-purple-500/20 text-purple-400 border-purple-400/30',
      'Business': 'bg-orange-500/20 text-orange-400 border-orange-400/30',
      'Publications': bg-orange-500/20 text-orange-400 border-orange-400/30,
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
      <section className="py-24 bg-gradient-to-br from-space-800 to-space-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white">
              Latest News
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Stay updated with our latest developments and industry insights
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-space-900">
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
                  <div className="glass-effect rounded-xl overflow-hidden card-hover h-full">
                    <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-space-600 flex items-center justify-center">
                      <IconComponent className="w-12 h-12 text-primary-400" />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-2 py-1 rounded-full border text-xs font-medium ${getCategoryColor(article.category)}`}>
                          {article.category}
                        </span>
                        <div className="flex items-center text-white/60 text-xs space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(article.date)}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-white/70 text-sm leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-white/60 text-xs">{article.readTime}</span>
                        <div className="inline-flex items-center space-x-1 text-primary-400 text-sm font-medium">
                          <span>Read More</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>
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
