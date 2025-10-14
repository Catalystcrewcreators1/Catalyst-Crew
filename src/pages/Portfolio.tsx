import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Eye,
  Heart,
  Share2,
  Grid,
  List,
  Award
} from 'lucide-react';
import { ScrollReveal, FloatingElement } from '../components/ui/ScrollAnimations';
import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filters = [
    { id: 'all', label: 'All Projects', count: 24 },
    { id: 'web', label: 'Web Development', count: 8 },
    { id: 'design', label: 'Design', count: 6 },
    { id: 'media', label: 'Media', count: 5 },
    { id: 'events', label: 'Events', count: 3 },
    { id: 'marketing', label: 'Marketing', count: 2 }
  ];

  const projects = [
    {
      id: 1,
      title: "TechFlow CRM Platform",
      category: "web",
      description: "A comprehensive CRM solution with AI-powered analytics and real-time collaboration features.",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/projects/techflow.jpg?updatedAt=1755974392379",
      technologies: ["React", "Node.js", "PostgreSQL", "AI/ML"],
      client: "TechFlow Inc",
      year: "2024",
      featured: true,
      metrics: { users: "10K+", revenue: "₹50L+", growth: "300%" },
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "EcoGreen Mobile App",
      category: "design",
      description: "Sustainable living app with carbon footprint tracking and eco-friendly recommendations.",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/projects/ecogreen.jpg?updatedAt=1755974392379",
      technologies: ["React Native", "Firebase", "MongoDB"],
      client: "EcoGreen Solutions",
      year: "2024",
      featured: true,
      metrics: { downloads: "25K+", rating: "4.8", impact: "50K trees" },
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "StartupX Website",
      category: "web",
      description: "Modern, responsive website for a fintech startup with advanced animations and interactions.",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/projects/startupx.jpg?updatedAt=1755974392379",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      client: "StartupX",
      year: "2023",
      featured: false,
      metrics: { conversion: "85%", bounce: "12%", leads: "2K+" },
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Fashion Week 2024",
      category: "events",
      description: "Complete event management for international fashion week with live streaming and virtual attendance.",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/projects/fashion.jpg?updatedAt=1755974392379",
      technologies: ["Event Management", "Live Streaming", "VR"],
      client: "Fashion Week Org",
      year: "2024",
      featured: true,
      metrics: { attendees: "5K+", views: "100K+", engagement: "95%" },
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "BrandRevive Campaign",
      category: "marketing",
      description: "Complete digital marketing campaign that increased brand visibility by 400%.",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/projects/brandrevive.jpg?updatedAt=1755974392379",
      technologies: ["Digital Marketing", "SEO", "Social Media"],
      client: "BrandRevive",
      year: "2023",
      featured: false,
      metrics: { reach: "1M+", engagement: "45%", roi: "350%" },
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "MediaCorp Video Series",
      category: "media",
      description: "Professional video series showcasing corporate achievements and milestones.",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/projects/mediacorp.jpg?updatedAt=1755974392379",
      technologies: ["4K Production", "Drone Cinematography", "Post-Production"],
      client: "MediaCorp",
      year: "2024",
      featured: true,
      metrics: { views: "500K+", shares: "10K+", awards: "3" },
      link: "#",
      github: "#"
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-catalyst-dark via-black to-catalyst-red/5">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-catalyst-red/10 to-transparent" />

        {/* Floating Elements */}
        {[...Array(10)].map((_, i) => (
          <FloatingElement key={i} intensity={20} speed={6 + i}>
            <div className={`absolute w-2 h-2 rounded-full opacity-40 ${
              i % 2 === 0 ? 'bg-catalyst-red' : 'bg-white'
            }`} style={{
              left: `${5 + (i * 10)}%`,
              top: `${10 + (i * 8)}%`
            }} />
          </FloatingElement>
        ))}

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
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-catalyst-red/10 to-orange-500/10 border border-catalyst-red/30 rounded-full mb-8 backdrop-blur-sm"
              >
                <Award className="w-5 h-5 text-catalyst-red mr-3" />
                <span className="text-sm font-semibold text-catalyst-red">Our Portfolio</span>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#D71B1B' }}>Featured</span>
                <span className="text-white">Work</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
                Explore our collection of innovative projects that showcase our expertise in design, development, and digital transformation.
              </p>
            </ScrollReveal>
          </div>

          {/* Filter Buttons */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeFilter === filter.id
                      ? 'bg-catalyst-red text-white shadow-lg shadow-catalyst-red/25'
                      : 'bg-white/5 text-white/80 border border-white/20 hover:border-catalyst-red/30 hover:bg-catalyst-red/10'
                  }`}
                >
                  <span>{filter.label}</span>
                  <span className="text-xs opacity-70">({filter.count})</span>
                </motion.button>
              ))}
            </div>
          </ScrollReveal>

          {/* View Mode Toggle */}
          <ScrollReveal>
            <div className="flex justify-center mb-8">
              <div className="flex bg-white/5 border border-white/20 rounded-xl p-1">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-catalyst-red text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-catalyst-red text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-catalyst-red/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="block" style={{ color: '#D71B1B' }}>Featured Projects</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our most innovative and impactful projects that showcase our expertise and creativity.
              </p>
            </div>
          </ScrollReveal>

          <div className={`grid gap-6 md:gap-8 ${
            viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}>
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.id} direction="up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -10 }}
                  className={`group relative overflow-hidden rounded-2xl md:rounded-3xl backdrop-blur-sm border border-white/20 hover:border-catalyst-red/30 transition-all duration-500 hover:shadow-2xl hover:shadow-catalyst-red/10 ${
                    viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
                >
                  {/* Project Image */}
                  <div className={`relative ${viewMode === 'list' ? 'w-full md:w-1/2' : ''}`}>
                    <div className={`aspect-video bg-gradient-to-br from-catalyst-red/20 to-catalyst-red/5 border-b border-white/10 group-hover:border-catalyst-red/30 transition-colors duration-300 overflow-hidden ${
                      viewMode === 'list' ? 'rounded-t-2xl md:rounded-l-3xl md:rounded-tr-none' : 'rounded-t-2xl md:rounded-t-3xl'
                    }`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Animated overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                      >
                        <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 flex justify-between items-center">
                          <div className="flex space-x-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="p-2 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                            >
                              <ExternalLink className="w-3 h-3 md:w-4 md:h-4 text-white" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="p-2 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                            >
                              <Github className="w-3 h-3 md:w-4 md:h-4 text-white" />
                            </motion.button>
                          </div>
                          <div className="flex space-x-1">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="p-1.5 md:p-2 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                            >
                              <Eye className="w-3 h-3 md:w-4 md:h-4 text-white" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="p-1.5 md:p-2 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                            >
                              <Heart className="w-3 h-3 md:w-4 md:h-4 text-white" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="p-1.5 md:p-2 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                            >
                              <Share2 className="w-3 h-3 md:w-4 md:h-4 text-white" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>

                      {/* Featured badge */}
                      {project.featured && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="absolute top-3 md:top-4 left-3 md:left-4"
                        >
                          <div className="bg-gradient-to-r from-catalyst-red to-orange-500 text-white px-2 md:px-3 py-1 rounded-full text-xs font-semibold">
                            Featured
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className={`p-4 md:p-6 ${viewMode === 'list' ? 'w-full md:w-1/2' : ''}`}>
                    <div className="flex items-center justify-between mb-2 md:mb-3">
                      <span className="text-xs text-catalyst-red font-semibold uppercase tracking-wide">
                        {project.category}
                      </span>
                      <div className="flex items-center text-xs text-white/60">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.year}
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-catalyst-red transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-white/70 text-sm mb-3 md:mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 md:px-3 py-1 bg-white/5 border border-white/20 rounded-full text-xs text-white/80 hover:border-catalyst-red/30 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 md:gap-4 mb-3 md:mb-4">
                      {Object.entries(project.metrics).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-sm md:text-lg font-bold text-catalyst-red">{value}</div>
                          <div className="text-xs text-white/60 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Client */}
                    <div className="text-xs md:text-sm text-white/60 mb-3 md:mb-4">
                      <span className="font-semibold">Client:</span> {project.client}
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-2 md:py-3 bg-catalyst-red text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-catalyst-red/25 transition-all duration-300 text-sm md:text-base"
                    >
                      View Case Study
                    </motion.button>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="py-20 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-catalyst-red/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="block" style={{ color: '#D71B1B' }}>All Projects</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Discover our complete portfolio of innovative projects across various industries and technologies.
              </p>
            </div>
          </ScrollReveal>

          <div className={`grid gap-6 ${
            viewMode === 'grid'
              ? 'md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1'
          }`}>
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id} direction="up" delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 hover:border-catalyst-red/30 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-catalyst-red/10"
                >
                  <div className="aspect-video bg-catalyst-red/5 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-3xl opacity-30">📁</div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                    >
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs text-catalyst-red font-semibold uppercase tracking-wide">
                            {project.category}
                          </span>
                          <div className="flex space-x-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="p-2 bg-white/10 rounded-lg backdrop-blur-sm"
                            >
                              <ExternalLink className="w-3 h-3 text-white" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="p-2 bg-white/10 rounded-lg backdrop-blur-sm"
                            >
                              <Github className="w-3 h-3 text-white" />
                            </motion.button>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-catalyst-red transition-colors duration-300">
                          {project.title}
                        </h3>

                        <p className="text-white/70 text-sm mb-3 line-clamp-2">
                          {project.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-white/60">{project.client}</span>
                          <span className="text-xs text-white/60">{project.year}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="p-4">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/5 border border-white/20 rounded text-xs text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-white/5 border border-white/20 rounded text-xs text-white/60">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-2 bg-catalyst-red/10 text-catalyst-red rounded-lg font-semibold hover:bg-catalyst-red hover:text-white transition-all duration-300 border border-catalyst-red/30"
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
