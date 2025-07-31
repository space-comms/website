import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, Users, Clock, Share2 } from 'lucide-react';
import usePageMetadata from '../hooks/usePageMetadata';

// Import images
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

const BlogPost = () => {
  const { id } = useParams();

  const blogPosts = {
    '1': {
      title: 'New Ground Station Successfully Deployed',
      date: '2025-7-27',
      category: 'Launch',
      readTime: '5 min read',
      author: 'Leeds Space Comms Team',
      content: `
        <p>We're absolutely thrilled to announce that our new ground station is now fully operational! After months of careful planning, late-night design sessions, and more than a few "did we connect that right?" moments, we've successfully deployed our latest generation ground station.</p>
        
        <p>This isn't just another piece of kit for us - it's a real game-changer. The system provides enhanced coverage and tracking capabilities for satellites orbiting over Leeds, bringing us significantly closer to our goal of establishing reliable space communications links.</p>
        
        <h3>What Makes This Special?</h3>
        <p>Unlike our previous setup (which, let's be honest, was held together with enthusiasm and zip ties), this ground station represents a massive leap forward in our capabilities. We can now track satellites with much greater precision, maintain stronger signal locks, and handle multiple concurrent communications sessions.</p>
        
        <p>The tracking system uses state-of-the-art stepper motors and precision encoders that we sourced through our connections with local engineering firms. It's incredibly satisfying to watch the antenna smoothly follow a satellite's path across the sky - definitely beats the old manual tracking method!</p>
        
        <h3>Real-World Impact</h3>
        <p>What does this mean for our society and our mission? Quite a lot, actually. We can now offer our members hands-on experience with professional-grade satellite communication equipment. Students studying electronics, aerospace engineering, or telecommunications can work with systems that mirror what they'll encounter in industry.</p>
        
        <p>We're also planning to use the station for educational outreach programs with local schools. There's something magical about showing young people a live satellite pass and explaining how we're receiving signals from hundreds of miles above their heads.</p>
        
        <h3>Looking Forward</h3>
        <p>This ground station is just the beginning. We're already planning phase two improvements, including automated scheduling software and integration with online satellite tracking databases. The goal is to create a fully autonomous system that can be operated remotely by society members.</p>
        
        <p>Thanks to everyone who contributed to this project - from the members who helped with physical assembly to those who provided technical expertise and moral support during the inevitable moments of "why isn't this working?!"</p>
      `,
      images: []
    },
    '2': {
      title: 'Exploring the Future of Broadcasting: Arqiva Site Visit at Emley Moor',
      date: '2025-6-18',
      category: 'Field Trip',
      readTime: '6 min read',
      author: 'Leeds Space Comms Team',
      content: `
        <p>You know that massive transmitter mast you can see from miles away when driving through Yorkshire? The one that dominates the skyline like a giant metal exclamation point? Well, we finally got to visit it up close, and it was absolutely incredible.</p>
        
        <p>The Emley Moor transmitter station isn't just big - it's properly massive. Standing at 330 meters tall, this concrete and steel giant has been beaming television and radio signals across Yorkshire since the 1960s. But seeing it on the horizon and actually walking around its base are completely different experiences.</p>
        
        <h3>More Than Just a Big Mast</h3>
        <p>What struck us immediately was the sheer scale of the supporting infrastructure. The transmitter building at the base houses equipment that would make any RF engineer's heart race - banks of high-power amplifiers, massive cooling systems, and backup generators that could probably power a small town.</p>
        
        <p>Our guides from Arqiva, Craig Kelly and Joanna Szymik, were absolutely brilliant, explaining not just how everything works, but why certain design decisions were made. For instance, the concrete tower design was chosen for stability and longevity - this thing needs to handle Yorkshire weather for decades while maintaining millimeter-precise antenna positioning.</p>
        
        <h3>The Technical Bits That Blew Our Minds</h3>
        <p>The power levels involved are just staggering. We're talking about tens of kilowatts being pumped through transmission lines the size of drainpipes. The cooling systems alone are more complex than most of the electronics projects we work on!</p>
        
        <p>But what really got us excited was learning about the future plans for the site. Digital broadcasting, 5G infrastructure, and emerging communication technologies are all being considered. It's amazing to think that this 60-year-old tower will continue to be relevant for decades to come.</p>
        
        <h3>Inspiration for Our Own Projects</h3>
        <p>Seeing professional-grade RF engineering in action has given us loads of ideas for our own projects. The attention to detail, the redundancy planning, and the systematic approach to problem-solving are all things we can apply to our satellite communication work.</p>
        
        <p>We left with a much deeper appreciation for the complexity of terrestrial broadcasting and a renewed enthusiasm for our own RF adventures. Plus, we got some fantastic photos that really capture the scale of this engineering marvel.</p>
        
        <p>Huge thanks to Arqiva for hosting us, and special thanks to Craig Kelly and Joanna Szymik who showed us around and shared their incredible expertise. Their passion for the technology and willingness to explain everything in detail made this visit truly exceptional. This is exactly the kind of real-world learning experience that makes our society special.</p>
      `,
      images: [
        mainEmleyImg, 
        emleyMoorImg1, emleyMoorImg2, emleyMoorImg3, emleyMoorImg4, emleyMoorImg5, 
        emleyMoorImg6, emleyMoorImg7, emleyMoorImg8, emleyMoorImg9, emleyMoorImg10, 
        emleyMoorImg11, emleyMoorImg12, emleyMoorImg13, emleyMoorImg14, emleyMoorImg15, 
        emleyMoorImg16, emleyMoorImg17, emleyMoorImg18, emleyMoorImg19
      ]
    },
    '3': {
      title: 'Breaking New Ground: Decentralised Communications for Disaster Relief',
      date: '2025-6-11',
      category: 'Research',
      readTime: '4 min read',
      author: 'Ahmad Al-Musbahi',
      content: `
        <p>When I stood up to present at the Leeds Undergraduate Research Council, I was honestly a bit nervous. Not because I wasn't prepared - I'd been working on this research for months - but because the implications of what we're exploring are genuinely exciting and potentially life-changing.</p>
        
        <p>Think about the last major disaster you heard about on the news. Earthquake, hurricane, flooding - one of the first things that happens is the communication infrastructure goes down. Cell towers topple, internet cables get severed, and suddenly people can't call for help or let their families know they're safe.</p>
        
        <h3>The Problem We're Trying to Solve</h3>
        <p>Traditional communication networks are incredibly centralized. Everything depends on base stations, data centers, and physical infrastructure that can be destroyed or overwhelmed during emergencies. When these fail, entire regions can go silent at precisely the moment when communication is most critical.</p>
        
        <p>That's where decentralized mesh networking comes in. Instead of relying on massive infrastructure, imagine if every phone, tablet, or radio could become a relay point, creating a self-healing network that gets stronger as more people join it.</p>
        
        <h3>How It Actually Works</h3>
        <p>The technology isn't science fiction - it's engineering that we can build today. Using a combination of low-power radio modules, smart routing algorithms, and mobile device integration, we can create networks that automatically find the best path for messages, even when traditional infrastructure is completely unavailable.</p>
        
        <p>The really clever bit is how the network adapts. If one node goes offline, the system automatically reroutes through other available paths. It's like having a communication system that repairs itself.</p>
        
        <h3>Real-World Applications</h3>
        <p>During my presentation, I outlined several scenarios where this technology could make a genuine difference. Emergency services could maintain coordination even when their usual communication systems fail. Families could stay in touch using their phones even without cell service. Aid organizations could establish communication networks in remote disaster zones within hours instead of weeks.</p>
        
        <p>The feedback from the conference was incredibly encouraging. Several professors suggested ways to expand the research, and I've already had conversations with local emergency services about potential pilot programs.</p>
        
        <h3>What's Next?</h3>
        <p>This research is just the beginning. We're planning to build working prototypes and test them in controlled scenarios. The goal is to create something that's not just technically impressive, but genuinely useful for people who need it most.</p>
        
        <p>It's this kind of practical, human-centered engineering that gets me excited about working in communications technology. We're not just building cool gadgets - we're potentially saving lives.</p>
      `,
      images: [ugrcImg1, ugrcImg2, ugrcImg3]
    },
    '4': {
      title: 'Sharing Knowledge: 80m Beam Antenna Design at Otley Amateur Radio Society',
      date: '2025-6-3',
      category: 'Presentation',
      readTime: '3 min read',
      author: 'Leeds Space Comms Team',
      content: `
        <p>There's something really special about presenting to a room full of experienced amateur radio operators. These are people who've been building antennas since before we were born, who understand propagation theory inside and out, and who aren't shy about asking the really challenging questions.</p>
        
        <p>When we walked into the Otley Amateur Radio Society meeting that evening, we knew we were in for a treat. The club has been running for decades, and their meeting room is decorated with QSL cards from around the world and photos of impressive antenna installations that would make any RF engineer jealous.</p>
        
        <h3>Our 80m Beam Design</h3>
        <p>The antenna we presented represents months of modeling, testing, and refinement. It's a portable 3-element beam designed specifically for the 80-meter band - a frequency that's brilliant for long-distance communication but notoriously challenging for beam antennas due to the wavelength involved.</p>
        
        <p>The key innovation in our design is the mechanical system that allows the entire antenna to be set up by two people in under an hour, yet still maintain the precision needed for optimal performance. We've used telescoping elements, custom-machined clamps, and a clever counterweight system that makes rotation smooth and predictable.</p>
        
        <h3>The Real Test: Experienced Operators</h3>
        <p>What made the evening so valuable wasn't just sharing our design - it was the feedback we received. These operators had practical experience with every type of 80m antenna imaginable, and they weren't afraid to point out potential issues we hadn't considered.</p>
        
        <p>Someone asked about wind loading calculations (fair point - Yorkshire weather isn't gentle). Another wanted to know about the SWR bandwidth across the entire band. A third operator shared a story about a similar antenna that worked brilliantly until the first winter, when thermal expansion caused the elements to detune.</p>
        
        <h3>Learning from the Experts</h3>
        <p>The discussion that followed our presentation was honestly more valuable than months of theoretical study. We learned about real-world installation challenges, maintenance considerations, and practical tips that you simply can't find in textbooks.</p>
        
        <p>One operator shared his experience with antenna modeling software, explaining how to validate simulations with actual field measurements. Another discussed the importance of documenting resonant frequencies over time, as weather and aging can gradually shift antenna characteristics.</p>
        
        <h3>Building Community</h3>
        <p>What struck us most was how generous everyone was with their knowledge and experience. Amateur radio has this wonderful tradition of mentorship and knowledge sharing, and evenings like this are a perfect example of why the hobby continues to thrive.</p>
        
        <p>We left with pages of notes, several new project ideas, and invitations to visit some impressive home shacks. Most importantly, we'd contributed something back to the community that's taught us so much about RF engineering and the joy of experimental radio.</p>
      `,
      images: [otleyImg1, otleyImg2, otleyImg3]
    },
    '5': {
      title: 'RSGB Education-Affiliated Club Recognition',
      date: '2025-6-1',
      category: 'Awards',
      readTime: '3 min read',
      author: 'Leeds Space Comms Team',
      content: `
        <p>We're absolutely delighted to announce that Leeds Space Communications has been officially recognized as an RSGB Education-Affiliated Club! This recognition means a lot to us - it's formal acknowledgment that what we're doing as a student society is making a genuine contribution to radio and telecommunications education.</p>
        
        <h3>What This Recognition Means</h3>
        <p>The Radio Society of Great Britain doesn't hand out these affiliations lightly. They're looking for clubs that demonstrate a real commitment to education, training, and advancing the art and science of radio communication. The fact that they've recognized our work validates everything we've been trying to achieve.</p>
        
        <p>For our members, this opens up some fantastic opportunities. We now have access to RSGB educational resources, training materials, and support for our outreach programs. We're also eligible for educational grants that could help fund future projects and equipment purchases.</p>
        
        <h3>Our Educational Mission</h3>
        <p>From day one, Leeds Space Comms has been about more than just building cool radio equipment (though we definitely do that too). We're passionate about sharing knowledge, teaching practical skills, and inspiring the next generation of engineers and radio enthusiasts.</p>
        
        <p>Our weekly meetings always include an educational component - whether it's a technical presentation, a hands-on workshop, or a problem-solving session where we tackle real engineering challenges. We believe that the best way to learn is by doing, and our projects are designed to give members practical experience with everything from basic electronics to advanced RF design.</p>
        
        <h3>Looking Forward</h3>
        <p>This recognition comes with responsibilities as well as benefits. We're committed to expanding our educational outreach, developing more structured training programs, and sharing our knowledge with other clubs and educational institutions.</p>
        
        <p>We're already planning workshops for local schools, guest lectures for engineering students, and collaborative projects with other RSGB-affiliated organizations. The goal is to create a sustainable program that continues to inspire new people to get involved in radio communication and space technology.</p>
        
        <p>Thanks to everyone who supported our application, especially our faculty advisors and the RSGB education team who guided us through the process. This is just the beginning of what we hope will be a long and productive relationship with the broader amateur radio community.</p>
      `,
      images: []
    }
  };

  const post = blogPosts[id];

  // Dynamic SEO and AI-friendly metadata based on the blog post
  usePageMetadata(post ? {
    title: post.title,
    description: `${post.title} - ${post.content.replace(/<[^>]*>/g, '').substring(0, 160)}...`,
    ogTitle: post.title,
    ogDescription: post.content.replace(/<[^>]*>/g, '').substring(0, 200),
    ogUrl: `https://leedsspacecomms.co.uk/blog/${id}`,
    twitterTitle: post.title,
    twitterDescription: post.content.replace(/<[^>]*>/g, '').substring(0, 140),
    aiTags: [
      post.category.toLowerCase().replace(' ', '-'),
      'blog-post',
      'leeds-space-comms',
      ...(post.category === 'Field Trip' ? ['emley-moor', 'arqiva', 'field-trip'] : []),
      ...(post.category === 'Research' ? ['ugrc', 'disaster-relief', 'mesh-networking'] : []),
      ...(post.category === 'Community' ? ['amateur-radio', 'otley', 'antenna-design'] : []),
      ...(post.category === 'Awards' ? ['rsgb', 'recognition', 'education'] : []),
      ...(post.category === 'Launch' ? ['ground-station', 'deployment', 'satellite'] : [])
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.content.replace(/<[^>]*>/g, '').substring(0, 200),
      "author": {
        "@type": "Organization",
        "name": post.author
      },
      "publisher": {
        "@type": "Organization", 
        "name": "Leeds Space Communications Society",
        "logo": {
          "@type": "ImageObject",
          "url": "https://leedsspacecomms.co.uk/logo.png"
        }
      },
      "datePublished": post.date,
      "dateModified": post.date,
      "articleSection": post.category,
      "keywords": [post.category, "space communications", "student society", "University of Leeds"],
      "url": `https://leedsspacecomms.co.uk/blog/${id}`,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://leedsspacecomms.co.uk/blog/${id}`
      },
      ...(post.images && post.images.length > 0 && {
        "image": {
          "@type": "ImageObject",
          "url": `https://leedsspacecomms.co.uk${post.images[0]}`,
          "width": 1200,
          "height": 630
        }
      })
    }
  } : {});

  if (!post) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
          <Link to="/news" className="text-primary-600 dark:text-primary-400 hover:underline">
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Awards': 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-400/30',
      'Launch': 'bg-green-500/20 text-green-600 dark:text-green-400 border-green-400/30',
      'Field Trip': 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-400/30',
      'Research': 'bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-400/30',
      'Presentation': 'bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-400/30',
    };
    return colors[category] || 'bg-gray-500/20 text-gray-600 dark:text-gray-400 border-gray-400/30';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 dark:bg-gradient-to-br dark:from-space-800 dark:to-space-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/news" 
              className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to News</span>
            </Link>
            
            <div className="mb-6">
              <span className={`inline-block px-3 py-1 rounded-full border text-sm font-medium ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-white/70">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      {post.images && post.images.length > 0 && (
        <section className="py-8 bg-white dark:bg-space-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-video rounded-xl overflow-hidden"
            >
              <img 
                src={post.images[0]} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="py-16 bg-white dark:bg-space-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Image Gallery */}
          {post.images && post.images.length > 1 && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {post.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${post.title} - Image ${index + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Share Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10"
          >
            <div className="flex items-center justify-between">
              <Link 
                to="/news" 
                className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All News</span>
              </Link>
              
              <button className="inline-flex items-center space-x-2 text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPost;
