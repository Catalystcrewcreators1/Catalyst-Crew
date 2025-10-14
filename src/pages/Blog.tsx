import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  ArrowLeft,
  Search,
  Calendar,
  User,
  Tag,
  Clock,
  TrendingUp,
  BookOpen,
  Mail,
  ArrowRight,
  Star,
  Eye,
  MessageCircle
} from 'lucide-react';
import { ScrollReveal, FloatingElement } from '../components/ui/ScrollAnimations';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'tech', name: 'Technology', count: 8 },
    { id: 'design', name: 'Design', count: 6 },
    { id: 'business', name: 'Business', count: 5 },
    { id: 'events', name: 'Events', count: 3 },
    { id: 'insights', name: 'Insights', count: 2 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI in Web Development: 2024 Trends",
      excerpt: "Explore how artificial intelligence is revolutionizing web development with automated code generation, intelligent debugging, and predictive user experiences.",
      category: "Technology",
      author: "Ashwin Kumar",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      image: "🚀",
      views: "2.1K",
      likes: "89",
      comments: "23"
    },
    {
      id: 2,
      title: "Building Scalable React Applications: Best Practices",
      excerpt: "Learn the essential patterns and techniques for building maintainable, performant React applications that scale with your business.",
      category: "Development",
      author: "Priya Sharma",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      image: "⚛️",
      views: "1.8K",
      likes: "67",
      comments: "18"
    }
  ];

  const recentPosts = [
    {
      id: 3,
      title: "Design Systems: Creating Consistency at Scale",
      excerpt: "How to build and maintain design systems that ensure visual consistency across all digital touchpoints.",
      category: "Design",
      author: "Raj Patel",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      image: "🎨"
    },
    {
      id: 4,
      title: "The Psychology of Color in Digital Marketing",
      excerpt: "Understanding how color choices impact user behavior and conversion rates in digital campaigns.",
      category: "Marketing",
      author: "Sneha Reddy",
      date: "Dec 8, 2024",
      readTime: "5 min read",
      image: "🌈"
    },
    {
      id: 5,
      title: "Event Tech Trends That Are Shaping 2024",
      excerpt: "From virtual reality experiences to AI-powered networking, discover the technologies transforming the events industry.",
      category: "Events",
      author: "Vikram Singh",
      date: "Dec 5, 2024",
      readTime: "7 min read",
      image: "🎭"
    },
    {
      id: 6,
      title: "Sustainable Web Design: Building for the Future",
      excerpt: "Eco-friendly web development practices that reduce carbon footprint while maintaining performance.",
      category: "Technology",
      author: "Anita Desai",
      date: "Dec 3, 2024",
      readTime: "9 min read",
      image: "🌱"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-catalyst-dark via-black to-catalyst-red/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-catalyst-red/5 to-transparent" />
      {[...Array(8)].map((_, i) => (
        <FloatingElement key={i} intensity={15} speed={3 + i}>
          <div className={`absolute w-2 h-2 rounded-full opacity-30 ${
            i % 2 === 0 ? 'bg-catalyst-red' : 'bg-white'
          }`} style={{
            left: `${10 + (i * 12)}%`,
            top: `${20 + (i * 8)}%`
          }} />
        </FloatingElement>
      ))}

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-catalyst-red hover:text-white mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </ScrollReveal>

          <div className="text-center mb-16">
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-6 py-3 bg-catalyst-red/10 border border-catalyst-red/30 rounded-full mb-8 backdrop-blur-sm"
              >
                <BookOpen className="w-5 h-5 text-catalyst-red mr-3" />
                <span className="text-sm font-semibold text-catalyst-red">Catalyst Crew Blog</span>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#D71B1B' }}>Insights</span>
                <span className="text-white">& Ideas</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
                Discover the latest trends, insights, and innovations in design, development, and digital transformation.
                Stay ahead with expert knowledge and industry best practices.
              </p>
            </ScrollReveal>

            {/* Search Bar */}
            <ScrollReveal>
              <div className="max-w-2xl mx-auto relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:border-catalyst-red/50 focus:outline-none focus:ring-2 focus:ring-catalyst-red/20 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Posts */}
              <div className="mb-16">
                <ScrollReveal>
                  <div className="flex items-center mb-8">
                    <Star className="w-6 h-6 text-catalyst-red mr-3" />
                    <h2 className="text-3xl font-bold text-white">Featured Posts</h2>
                  </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8">
                  {featuredPosts.map((post, index) => (
                    <ScrollReveal key={post.id} direction="up" delay={index * 0.1}>
                      <motion.article
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="group relative bg-white/5 border border-white/20 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-catalyst-red/30 transition-all duration-300"
                      >
                        <div className="p-8">
                          <div className="flex items-center justify-between mb-4">
                            <span className="px-3 py-1 bg-catalyst-red/20 text-catalyst-red rounded-full text-sm font-medium">
                              {post.category}
                            </span>
                            <div className="flex items-center space-x-4 text-sm text-white/60">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {post.date}
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {post.readTime}
                              </div>
                            </div>
                          </div>

                          <div className="text-6xl mb-4">{post.image}</div>

                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-catalyst-red transition-colors duration-300">
                            {post.title}
                          </h3>

                          <p className="text-white/70 mb-6 leading-relaxed">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center text-sm text-white/60">
                                <User className="w-4 h-4 mr-2" />
                                {post.author}
                              </div>
                              <div className="flex items-center space-x-2 text-sm text-white/60">
                                <Eye className="w-4 h-4" />
                                <span>{post.views}</span>
                                <MessageCircle className="w-4 h-4 ml-2" />
                                <span>{post.comments}</span>
                              </div>
                            </div>

                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="p-2 bg-catalyst-red/20 rounded-lg text-catalyst-red hover:bg-catalyst-red/30 transition-colors duration-200"
                            >
                              <ArrowRight className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.article>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div>
                <ScrollReveal>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                      <TrendingUp className="w-6 h-6 text-catalyst-red mr-3" />
                      <h2 className="text-3xl font-bold text-white">Recent Posts</h2>
                    </div>

                    <div className="flex bg-white/5 border border-white/20 rounded-xl p-1">
                      <button className="px-4 py-2 bg-catalyst-red text-white rounded-lg font-medium">
                        Grid View
                      </button>
                      <button className="px-4 py-2 text-white/60 hover:text-white rounded-lg font-medium transition-colors duration-200">
                        List View
                      </button>
                    </div>
                  </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-6">
                  {recentPosts.map((post, index) => (
                    <ScrollReveal key={post.id} direction="up" delay={index * 0.1}>
                      <motion.article
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="group relative bg-white/5 border border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-catalyst-red/30 transition-all duration-300"
                      >
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="px-3 py-1 bg-catalyst-red/20 text-catalyst-red rounded-full text-sm font-medium">
                              {post.category}
                            </span>
                            <div className="flex items-center space-x-4 text-sm text-white/60">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {post.date}
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {post.readTime}
                              </div>
                            </div>
                          </div>

                          <div className="text-4xl mb-4">{post.image}</div>

                          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-catalyst-red transition-colors duration-300">
                            {post.title}
                          </h3>

                          <p className="text-white/70 mb-4 leading-relaxed line-clamp-2">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-white/60">
                              <User className="w-4 h-4 mr-2" />
                              {post.author}
                            </div>

                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="p-2 bg-catalyst-red/20 rounded-lg text-catalyst-red hover:bg-catalyst-red/30 transition-colors duration-200"
                            >
                              <ArrowRight className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.article>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Categories */}
                <ScrollReveal>
                  <div className="bg-white/5 border border-white/20 rounded-3xl p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                      <Tag className="w-5 h-5 mr-2 text-catalyst-red" />
                      Categories
                    </h3>

                    <div className="space-y-3">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
                            selectedCategory === category.id
                              ? 'bg-catalyst-red text-white shadow-lg shadow-catalyst-red/25'
                              : 'text-white/80 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <span>{category.name}</span>
                          <span className="text-sm opacity-70">({category.count})</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Newsletter Signup */}
                <ScrollReveal>
                  <div className="bg-catalyst-red/10 border border-catalyst-red/30 rounded-3xl p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-catalyst-red" />
                      Stay Updated
                    </h3>

                    <p className="text-white/80 mb-6">
                      Get the latest posts delivered right to your inbox. Join our community of innovators and creators.
                    </p>

                    <div className="space-y-4">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-catalyst-red/50 focus:outline-none transition-all duration-300"
                      />

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 bg-catalyst-red text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-catalyst-red/25 transition-all duration-300"
                      >
                        Subscribe Now
                      </motion.button>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Popular Tags */}
                <ScrollReveal>
                  <div className="bg-white/5 border border-white/20 rounded-3xl p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-catalyst-red" />
                      Popular Tags
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {['React', 'AI', 'Design', 'Development', 'Marketing', 'Events', 'Innovation', 'Technology'].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/5 border border-white/20 rounded-full text-sm text-white/80 hover:text-catalyst-red hover:border-catalyst-red/30 transition-colors duration-200 cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
