import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
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
    { id: 'all', label: 'All', count: 8 },
    { id: 'web-design', label: 'Web Design', count: 2 },
    { id: 'web-application', label: 'Web Applications', count: 2 },
    { id: 'portfolio-design', label: 'Portfolio Design', count: 2 },
    { id: 'graphic-design', label: 'Graphic Design', count: 2 }
  ];

  const projects = [
    // Web Design Projects
    {
      id: 1,
      title: "Sulax Solar",
      category: "web-design",
      description: "Corporate solar energy website optimized for search visibility, featuring a custom backend for dynamic content updates.",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/project_1-removebg-preview%20(1).png?updatedAt=1755976929939",
      technologies: ["Backend", "SEO"],
      client: "Sulax Solar",
      year: "2024",
      featured: true,
      link: "https://sulaxsolar.com/",
      github: "#"
    },
    {
      id: 4,
      title: "Our Website",
      category: "web-design",
      description: "Catalyst Crew's official digital home built for performance, clarity, and a powerful brand-driven user experience.",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/project_4-removebg-preview.png?updatedAt=1755976929761",
      technologies: ["HTML/CSS", "JavaScript"],
      client: "Catalyst Crew",
      year: "2023",
      featured: false,
      link: "https://catalyst-crew-alpha.vercel.app/",
      github: "#"
    },
    
    // Web Application Projects
    {
      id: 2,
      title: "Catalyst Crew Inventory",
      category: "web-application",
      description: "A custom-built inventory management system for Catalyst Crew to efficiently track and manage production assets.",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/project_2-removebg-preview.png?updatedAt=1755976929781",
      technologies: ["Storage", "Backend"],
      client: "Catalyst Crew",
      year: "2024",
      featured: true,
      link: "https://crew-inventory.vercel.app/",
      github: "#"
    },
    {
      id: 3,
      title: "Premium Portfolio",
      category: "web-application",
      description: "A dynamic portfolio web app template with a sleek UI, backend integration, and motion-based animations for modern creatives.",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/project_3-removebg-preview.png?updatedAt=1755976929799",
      technologies: ["React", "Node.js"],
      client: "Arpit Bajpai",
      year: "2024",
      featured: true,
      link: "https://arpitportfolio-ten.vercel.app/",
      github: "#"
    },
    
    // Portfolio Design Projects
    {
      id: 5,
      title: "Portfolio Website",
      category: "portfolio-design",
      description: "A creative personal website design showcasing elegant transitions, lightweight performance, and modern dark-mode support.",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/project%205%20(2).png?updatedAt=1755978151851",
      technologies: ["HTML/CSS", "JS"],
      client: "Twinkle Pal",
      year: "2023",
      featured: false,
      link: "https://catalystcrew1.github.io/Twinkle-Pal-Portfolio/",
      github: "#"
    },
    {
      id: 6,
      title: "Ashwin Jauhary – Advanced Portfolio",
      category: "portfolio-design",
      description: "A sleek, animated portfolio showcasing skills, projects, and creativity with modern design and seamless interactions.",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/Ashwin-portfolio_5QO948eZ2?updatedAt=1761308179872",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "EmailJS"],
      client: "Ashwin Jauhary",
      year: "2025",
      featured: true,
      link: "https://ashwin-portolio-react.vercel.app/",
      github: "#"
    },
    
    // Graphic Design Projects
    {
      id: 7,
      title: "Joylicious Menu Design",
      category: "graphic-design",
      description: "Vibrant, student-friendly menu poster for CSJM University startup. Features brand identity, appetizing illustrations, and modern typography with clear product highlights.",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/JOlicious.png",
      technologies: ["Photoshop", "Illustrator", "Canva"],
      client: "Joylicious - CSJM University Startup",
      year: "2025",
      featured: true,
      link: "#",
      github: "#"
    },
    {
      id: 8,
      title: "Catalyst Crew – Food Menu Design",
      category: "graphic-design",
      description: "Visually appealing food menu with main courses, appetizers, and beverages. Features bold yellow accents, dark textured background, and organized sections perfect for promotions and events.",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/menu.png",
      technologies: ["Photoshop", "Illustrator", "Graphic Design"],
      client: "Catalyst Crew",
      year: "2025",
      featured: true,
      link: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/Memnu.pdf",
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
                className="inline-flex items-center px-6 py-3 border rounded-full mb-8 backdrop-blur-sm" style={{ backgroundColor: 'rgba(215, 27, 27, 0.1)', borderColor: '#D71B1B' }}
              >
                <Award className="w-5 h-5 mr-3" style={{ color: '#D71B1B' }} />
                <span className="text-sm font-semibold" style={{ color: '#D71B1B' }}>Our Portfolio</span>
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
                      ? 'text-white shadow-lg'
                      : 'bg-white/5 text-white/80 border hover:bg-catalyst-red/10'
                  }`}
                  style={{
                    backgroundColor: activeFilter === filter.id ? '#D71B1B' : undefined,
                    borderColor: '#D71B1B'
                  }}
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
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                  style={{
                    backgroundColor: viewMode === 'grid' ? '#D71B1B' : undefined
                  }}
                >
                  <Grid className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                  style={{
                    backgroundColor: viewMode === 'list' ? '#D71B1B' : undefined
                  }}
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
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent" />

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
                  className="group relative overflow-hidden rounded-3xl backdrop-blur-sm transition-all duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(215, 27, 27, 0.1), rgba(215, 27, 27, 0.05))',
                    border: `2px solid rgba(215, 27, 27, 0.4)`,
                    boxShadow: '0 10px 30px rgba(215, 27, 27, 0.15)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#D71B1B';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(215, 27, 27, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(215, 27, 27, 0.4)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(215, 27, 27, 0.15)';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  {/* Project Image */}
                  <div className={`relative ${viewMode === 'list' ? 'w-full md:w-1/2' : ''}`}>
                    <div className={`aspect-video transition-colors duration-300 overflow-hidden ${
                      viewMode === 'list' ? 'rounded-t-2xl md:rounded-l-3xl md:rounded-tr-none' : 'rounded-t-2xl md:rounded-t-3xl'
                    }`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500"
                      />

                      {/* Featured badge */}
                      {project.featured && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="absolute top-3 md:top-4 left-3 md:left-4"
                        >
                          <div className="px-3 py-1.5 rounded-full text-xs font-bold shadow-lg" style={{ backgroundColor: '#D71B1B', color: 'white' }}>
                            ⭐ Featured
                          </div>
                        </motion.div>
                      )}

                      {/* Category badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="absolute top-3 md:top-4 right-3 md:right-4"
                      >
                        <div className="px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm border" style={{ backgroundColor: 'rgba(215, 27, 27, 0.2)', color: '#D71B1B', borderColor: '#D71B1B' }}>
                          {project.category}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#D71B1B' }}>
                        {project.category}
                      </span>
                      <div className="flex items-center text-xs text-white/60">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.year}
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 transition-colors duration-300" style={{ color: '#D71B1B' }}>
                      {project.title}
                    </h3>

                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300"
                          style={{
                            backgroundColor: 'rgba(215, 27, 27, 0.15)',
                            color: '#D71B1B',
                            border: '1px solid rgba(215, 27, 27, 0.3)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#D71B1B';
                            e.currentTarget.style.color = 'white';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(215, 27, 27, 0.15)';
                            e.currentTarget.style.color = '#D71B1B';
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Client */}
                    <div className="text-sm text-white/70 mb-4">
                      <span className="font-semibold" style={{ color: '#D71B1B' }}>Client:</span> {project.client}
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.link, '_blank')}
                      className="w-full py-3 rounded-xl font-bold transition-all duration-300 text-base"
                      style={{
                        backgroundColor: '#D71B1B',
                        color: 'white',
                        boxShadow: '0 4px 15px rgba(215, 27, 27, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#B91C1C';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(215, 27, 27, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#D71B1B';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(215, 27, 27, 0.3)';
                      }}
                    >
                      View Project
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]" style={{ background: `radial-gradient(ellipse at center, rgba(215, 27, 27, 0.05), transparent)` }} />

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
                  whileHover={{ scale: 1.02, y: -10 }}
                  className="group relative overflow-hidden rounded-3xl backdrop-blur-sm transition-all duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(215, 27, 27, 0.08), rgba(215, 27, 27, 0.03))',
                    border: `2px solid rgba(215, 27, 27, 0.3)`,
                    boxShadow: '0 8px 25px rgba(215, 27, 27, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#D71B1B';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(215, 27, 27, 0.25)';
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(215, 27, 27, 0.3)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(215, 27, 27, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Featured badge */}
                    {project.featured && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="absolute top-3 left-3"
                      >
                        <div className="px-3 py-1.5 rounded-full text-xs font-bold shadow-lg" style={{ backgroundColor: '#D71B1B', color: 'white' }}>
                          ⭐ Featured
                        </div>
                      </motion.div>
                    )}

                    {/* Category badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="absolute top-3 right-3"
                    >
                      <div className="px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm border" style={{ backgroundColor: 'rgba(215, 27, 27, 0.2)', color: '#D71B1B', borderColor: '#D71B1B' }}>
                        {project.category}
                      </div>
                    </motion.div>
                  </div>

                  <div className="p-5">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300"
                          style={{
                            backgroundColor: 'rgba(215, 27, 27, 0.15)',
                            color: '#D71B1B',
                            border: '1px solid rgba(215, 27, 27, 0.3)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#D71B1B';
                            e.currentTarget.style.color = 'white';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(215, 27, 27, 0.15)';
                            e.currentTarget.style.color = '#D71B1B';
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.link, '_blank')}
                      className="w-full py-3 rounded-xl font-bold transition-all duration-300 text-base"
                      style={{
                        backgroundColor: '#D71B1B',
                        color: 'white',
                        boxShadow: '0 4px 15px rgba(215, 27, 27, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#B91C1C';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(215, 27, 27, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#D71B1B';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(215, 27, 27, 0.3)';
                      }}
                    >
                      View Project
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
