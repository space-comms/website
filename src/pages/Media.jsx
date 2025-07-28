import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

// Import all images
import mainEmleyImg from '../assets/Emley-Moor Visit/main_emley.JPG';
import emleyMoorImg1 from '../assets/Emley-Moor Visit/IMG_0765.jpg';
import emleyMoorImg2 from '../assets/Emley-Moor Visit/IMG_0766.jpg';
import emleyMoorImg3 from '../assets/Emley-Moor Visit/IMG_0767.jpg';
import emleyMoorImg4 from '../assets/Emley-Moor Visit/IMG_0768.jpg';
import emleyMoorImg5 from '../assets/Emley-Moor Visit/IMG_0770.jpg';
import emleyMoorImg6 from '../assets/Emley-Moor Visit/IMG_0771.jpg';
import emleyMoorImg7 from '../assets/Emley-Moor Visit/IMG_0772.jpg';
import emleyMoorImg8 from '../assets/Emley-Moor Visit/IMG_0773.jpg';
import emleyMoorImg9 from '../assets/Emley-Moor Visit/IMG_0774.jpg';
import emleyMoorImg10 from '../assets/Emley-Moor Visit/IMG_0777.jpg';
import emleyMoorImg11 from '../assets/Emley-Moor Visit/IMG_0778.jpg';
import emleyMoorImg12 from '../assets/Emley-Moor Visit/IMG_0779.jpg';
import emleyMoorImg13 from '../assets/Emley-Moor Visit/IMG_0780.jpg';
import emleyMoorImg14 from '../assets/Emley-Moor Visit/IMG_0781.jpg';
import emleyMoorImg15 from '../assets/Emley-Moor Visit/IMG_0782.jpg';
import emleyMoorImg16 from '../assets/Emley-Moor Visit/IMG_0839.JPG';
import emleyMoorImg17 from '../assets/Emley-Moor Visit/IMG_0841.JPG';
import emleyMoorImg18 from '../assets/Emley-Moor Visit/IMG_0842.JPG';
import emleyMoorImg19 from '../assets/Emley-Moor Visit/IMG_0843.JPG';
import ugrcImg1 from '../assets/UGRC 2025/IMG_0630 1.jpg';
import ugrcImg2 from '../assets/UGRC 2025/IMG_0642.jpg';
import ugrcImg3 from '../assets/UGRC 2025/54EB7559-81D3-4544-95D4-7159AC973F74.jpg';
import otleyImg1 from '../assets/Otley Visit June 2025/Media (8).jpg';
import otleyImg2 from '../assets/Otley Visit June 2025/Media (9).jpg';
import otleyImg3 from '../assets/Otley Visit June 2025/Media (10).jpg';

const Media = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const galleryItems = [
    {
      id: 1,
      src: mainEmleyImg,
      title: 'Emley Moor Transmitter - Main View',
      description: 'The iconic 330-meter tower dominating the Yorkshire skyline',
      category: 'Field Trips',
      date: '2025-06-18',
      location: 'Emley Moor, Yorkshire'
    },
    {
      id: 2,
      src: emleyMoorImg1,
      title: 'Approaching the Tower',
      description: 'Getting our first close-up view of this engineering marvel',
      category: 'Field Trips',
      date: '2025-06-18',
      location: 'Emley Moor, Yorkshire'
    },
    {
      id: 3,
      src: emleyMoorImg2,
      title: 'Team Photo at Base',
      description: 'Society members at the base of the transmitter',
      category: 'Field Trips',
      date: '2025-06-18',
      location: 'Emley Moor, Yorkshire'
    },
    {
      id: 4,
      src: emleyMoorImg3,
      title: 'Technical Infrastructure',
      description: 'Exploring the supporting transmission equipment',
      category: 'Field Trips',
      date: '2025-06-18',
      location: 'Emley Moor, Yorkshire'
    },
    {
      id: 5,
      src: emleyMoorImg4,
      title: 'Control Room Tour',
      description: 'Inside the sophisticated broadcast control systems',
      category: 'Field Trips',
      date: '2025-06-18',
      location: 'Emley Moor, Yorkshire'
    },
    {
      id: 6,
      src: emleyMoorImg5,
      title: 'RF Equipment Close-up',
      description: 'Professional-grade transmission hardware',
      category: 'Field Trips',
      date: '2025-06-18',
      location: 'Emley Moor, Yorkshire'
    },
    {
      id: 7,
      src: emleyMoorImg6,
      title: 'Antenna Array Details',
      description: 'Examining the precision of broadcast antenna systems',
      category: 'Field Trips',
      date: '2025-06-18',
      location: 'Emley Moor, Yorkshire'
    },
    {
      id: 8,
      src: emleyMoorImg7,
      title: 'Safety Systems Tour',
      description: 'Learning about the critical safety infrastructure',
      category: 'Field Trips',
      date: '2025-06-18',
      location: 'Emley Moor, Yorkshire'
    },
    {
      id: 9,
      src: emleyMoorImg8,
      title: 'Transmission Line Study',
      description: 'Understanding high-power RF transmission principles',
      category: 'Field Trips',
      date: '2025-06-18',
      location: 'Emley Moor, Yorkshire'
    },
    {
      id: 10,
      src: emleyMoorImg9,
      title: 'Group Learning Session',
      description: 'Arqiva engineers explaining broadcast technology',
      category: 'Field Trips',
      date: '2025-06-18',
      location: 'Emley Moor, Yorkshire'
    },
    {
      id: 11,
      src: emleyMoorImg10,
      title: 'Tower Perspective View',
      description: 'Appreciating the massive scale from different angles',
      category: 'Field Trips',
      date: '2025-06-18',
      location: 'Emley Moor, Yorkshire'
    },
    {
      id: 12,
      src: emleyMoorImg11,
      title: 'Technical Discussion',
      description: 'Deep dive into RF engineering principles',
      category: 'Field Trips',
      date: '2025-06-18',
      location: 'Emley Moor, Yorkshire'
    },
    {
      id: 13,
      src: emleyMoorImg12,
      title: 'Equipment Room Exploration',
      description: 'Professional broadcast equipment up close',
      category: 'Field Trips',
      date: '2025-06-18',
      location: 'Emley Moor, Yorkshire'
    },
    {
      id: 14,
      src: emleyMoorImg13,
      title: 'Power Systems Overview',
      description: 'Understanding the massive power requirements',
      category: 'Field Trips',
      date: '2025-06-18',
      location: 'Emley Moor, Yorkshire'
    },
    {
      id: 15,
      src: emleyMoorImg14,
      title: 'Cooling Systems Study',
      description: 'Learning about thermal management at scale',
      category: 'Field Trips',
      date: '2025-06-18',
      location: 'Emley Moor, Yorkshire'
    },
    {
      id: 16,
      src: emleyMoorImg15,
      title: 'Site Operations Center',
      description: 'Behind the scenes of broadcast operations',
      category: 'Field Trips',
      date: '2025-06-18',
      location: 'Emley Moor, Yorkshire'
    },
    {
      id: 17,
      src: emleyMoorImg16,
      title: 'Final Group Photo',
      description: 'Commemorating an incredible learning experience',
      category: 'Field Trips',
      date: '2025-06-18',
      location: 'Emley Moor, Yorkshire'
    },
    {
      id: 18,
      src: emleyMoorImg17,
      title: 'Equipment Details',
      description: 'Close examination of broadcast technology',
      category: 'Field Trips',
      date: '2025-06-18',
      location: 'Emley Moor, Yorkshire'
    },
    {
      id: 19,
      src: emleyMoorImg18,
      title: 'Technical Specifications',
      description: 'Understanding the engineering specifications',
      category: 'Field Trips',
      date: '2025-06-18',
      location: 'Emley Moor, Yorkshire'
    },
    {
      id: 20,
      src: emleyMoorImg19,
      title: 'Tour Conclusion',
      description: 'Wrapping up our comprehensive site visit',
      category: 'Field Trips',
      date: '2025-06-18',
      location: 'Emley Moor, Yorkshire'
    },
    {
      id: 21,
      src: ugrcImg1,
      title: 'UGRC 2025 Presentation',
      description: 'Ahmad presenting decentralized communications research',
      category: 'Research',
      date: '2025-06-11',
      location: 'University of Leeds'
    },
    {
      id: 22,
      src: ugrcImg2,
      title: 'Research Conference',
      description: 'Undergraduate Research Council gathering insights from peers',
      category: 'Research',
      date: '2025-06-11',
      location: 'University of Leeds'
    },
    {
      id: 23,
      src: ugrcImg3,
      title: 'Academic Presentation',
      description: 'Discussing disaster relief communication networks',
      category: 'Research',
      date: '2025-06-11',
      location: 'University of Leeds'
    },
    {
      id: 24,
      src: otleyImg1,
      title: 'Otley Amateur Radio Society Visit',
      description: 'Presenting our 80m beam antenna design to experienced operators',
      category: 'Community',
      date: '2025-06-03',
      location: 'Otley, West Yorkshire'
    },
    {
      id: 25,
      src: otleyImg2,
      title: 'Technical Discussion',
      description: 'Engaging with seasoned amateur radio enthusiasts',
      category: 'Community',
      date: '2025-06-03',
      location: 'Otley, West Yorkshire'
    },
    {
      id: 26,
      src: otleyImg3,
      title: 'Knowledge Sharing',
      description: 'Learning from decades of amateur radio experience',
      category: 'Community',
      date: '2025-06-03',
      location: 'Otley, West Yorkshire'
    }
  ];

  const categories = ['All', 'Field Trips', 'Research', 'Community'];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Field Trips': 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-400/30',
      'Research': 'bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-400/30',
      'Community': 'bg-green-500/20 text-green-600 dark:text-green-400 border-green-400/30',
    };
    return colors[category] || 'bg-gray-500/20 text-gray-600 dark:text-gray-400 border-gray-400/30';
  };

  const openLightbox = (item) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 dark:bg-gradient-to-br dark:from-space-800 dark:to-space-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white">
              Media Gallery
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-white/80 max-w-4xl mx-auto leading-relaxed">
              Explore our visual journey through space communications, field trips, research presentations, and community engagement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white dark:bg-space-900 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white border-primary-600'
                    : 'bg-white dark:bg-space-800 text-gray-700 dark:text-white/70 border-gray-300 dark:border-white/20 hover:border-primary-600 dark:hover:border-primary-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white dark:bg-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <div className="glass-effect rounded-xl overflow-hidden card-hover">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <span className={`inline-block px-2 py-1 rounded-full border text-xs font-medium mb-2 ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                      <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                      <div className="flex items-center text-white/80 text-xs space-x-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(item.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl w-full max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              className="bg-white dark:bg-space-800 rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full border text-sm font-medium ${getCategoryColor(selectedImage.category)}`}>
                    {selectedImage.category}
                  </span>
                  <div className="flex items-center text-gray-600 dark:text-white/60 text-sm space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(selectedImage.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedImage.location}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-700 dark:text-white/70">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Media;
