import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Zap, Globe, Target, Sparkles, Play, ArrowRight, ExternalLink } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { StructuredData } from '../components/seo/StructuredData';
import { seoConfigs } from '../utils/seoConfig';
import ParticleBackground from '../components/ui/ParticleBackground';
import ServiceCard from '../components/ui/ServiceCard';
import { ScrollReveal } from '../components/ui/ScrollAnimations';

const Home = () => {
  // Get default SEO config for home page
  const seoConfig = seoConfigs.home();
  
  // Additional structured data for home page
  const webpageData = {
    '@type': 'WebPage' as const,
    name: seoConfig.title,
    description: seoConfig.description,
    url: seoConfig.canonicalUrl,
    mainEntityOfPage: {
      '@type': 'WebPage' as const,
      '@id': seoConfig.canonicalUrl,
    },
    publisher: {
      '@type': 'Organization' as const,
      name: 'Catalyst Crew',
      logo: {
        '@type': 'ImageObject' as const,
        url: seoConfig.ogImageUrl,
      },
    },
  };

  const organizationData = {
    '@type': 'Organization' as const,
    name: 'Catalyst Crew',
    url: seoConfig.canonicalUrl,
    logo: seoConfig.ogImageUrl,
    sameAs: [
      'https://www.linkedin.com/company/catalyst-crew-tech',
      'https://www.instagram.com/catalyst.crew',
    ],
  };
  const services = [
    {
      icon: '🎨',
      title: 'Logo Design',
      description: 'Professional logo design services that capture your brand\'s essence with unique, memorable designs tailored to your vision',
      path: '/services/design',
      gradient: 'from-purple-500/20 via-pink-500/20 to-catalyst-red/20',
      features: ['Custom Logo Concepts', 'Multiple Design Revisions', 'High-Resolution Files']
    },
    {
      icon: '🖼️',
      title: 'Graphic Design',
      description: 'Comprehensive graphic design services for all your visual needs, from marketing materials to digital assets',
      path: '/services/graphic-design',
      gradient: 'from-blue-500/20 via-cyan-500/20 to-catalyst-red/20',
      features: ['Marketing Collateral', 'Brochure & Flyer Design', 'Digital Asset Design']
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web development services building responsive, fast, and user-friendly websites and applications',
      path: '/services/development',
      gradient: 'from-green-500/20 via-emerald-500/20 to-catalyst-red/20',
      features: ['Responsive Design', 'E-commerce Development', 'SEO Optimization']
    },
    {
      icon: '🎯',
      title: 'Brand Identity',
      description: 'Full brand identity services including logos, color schemes, typography, and guidelines for cohesive branding',
      path: '/services/brand-identity',
      gradient: 'from-orange-500/20 via-red-500/20 to-catalyst-red/20',
      features: ['Logo Design & Variations', 'Color Palette Selection', 'Brand Style Guide']
    },
    {
      icon: '🖨️',
      title: 'Print Design',
      description: 'Professional print design services for business cards, brochures, posters, and other physical marketing materials',
      path: '/services/print-design',
      gradient: 'from-indigo-500/20 via-purple-500/20 to-catalyst-red/20',
      features: ['Business Card Design', 'Brochure & Catalog Design', 'Print-Ready Artwork']
    },
    {
      icon: '📱',
      title: 'Digital Design',
      description: 'Creative digital design services for websites, apps, social media, and online marketing campaigns',
      path: '/services/digital-design',
      gradient: 'from-teal-500/20 via-blue-500/20 to-catalyst-red/20',
      features: ['Website Graphics', 'Social Media Assets', 'Responsive Graphics']
    },
    {
      icon: '📊',
      title: 'Social Media Managing',
      description: 'Comprehensive social media management including content creation, posting schedules, and audience engagement strategies',
      path: '/services/social-media',
      gradient: 'from-pink-500/20 via-rose-500/20 to-catalyst-red/20',
      features: ['Content Calendar Planning', 'Post Creation & Scheduling', 'Audience Engagement']
    },
    {
      icon: '✏️',
      title: 'Illustration',
      description: 'Bespoke illustration services for books, websites, marketing materials, and personal projects with unique artistic styles',
      path: '/services/illustration',
      gradient: 'from-yellow-500/20 via-orange-500/20 to-catalyst-red/20',
      features: ['Custom Illustrations', 'Character Design', 'Book & Editorial Art']
    },
    {
      icon: '🤖',
      title: 'AI Bot / Agent Automation',
      description: 'Advanced AI-powered bots and agents for automating tasks, improving efficiency, and enhancing user interactions across platforms',
      path: '/services/ai-bot',
      gradient: 'from-cyan-500/20 via-blue-500/20 to-catalyst-red/20',
      features: ['Custom AI Chatbots', 'Automated Workflows', 'Natural Language Processing']
    }
  ];

  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI-Powered",
      description: "Intelligent automation and smart recommendations",
      color: "text-blue-400"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized performance with cutting-edge technologies",
      color: "text-yellow-400"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Worldwide presence with 24/7 support",
      color: "text-green-400"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal Focused",
      description: "Results-driven approach with measurable outcomes",
      color: "text-red-400"
    }
  ];

  // Featured Projects Data
  const featuredProjects = [
    {
      id: 1,
      title: "Sulax Solar",
      category: "Web Development",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/project_1-removebg-preview%20(1).png?updatedAt=1755976929939",
      description: "Corporate solar energy website optimized for search visibility, featuring a custom backend for dynamic content updates.",
      technologies: ["Backend", "SEO"],
      link: "https://sulaxsolar.com/",
      featured: true
    },
    {
      id: 6,
      title: "Joylicious Menu Design",
      category: "Graphic Design",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/JOlicious.png",
      description: "Vibrant, student-friendly menu poster for CSJM University startup with brand identity and modern typography.",
      technologies: ["Photoshop", "Illustrator", "Canva"],
      link: "/portfolio",
      featured: true
    },
    {
      id: 2,
      title: "Catalyst Crew Inventory",
      category: "Web Application",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/project_2-removebg-preview.png?updatedAt=1755976929781",
      description: "A custom-built inventory management system for Catalyst Crew to efficiently track and manage production assets.",
      technologies: ["Storage", "Backend"],
      link: "https://crew-inventory.vercel.app/",
      featured: true
    },
    {
      id: 7,
      title: "Catalyst Crew – Food Menu Design",
      category: "Graphic Design",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/menu.png",
      description: "Visually appealing food menu with bold yellow accents and dark textured background, perfect for promotions and events.",
      technologies: ["Photoshop", "Illustrator", "Graphic Design"],
      link: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/Food%20Menu.pdf",
      featured: true
    },
    {
      id: 3,
      title: "Premium Portfolio",
      category: "Web Application",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/project_3-removebg-preview.png?updatedAt=1755976929799",
      description: "A dynamic portfolio web app template with a sleek UI, backend integration, and motion-based animations for modern creatives.",
      technologies: ["React", "Node.js"],
      link: "https://arpitportfolio-ten.vercel.app/",
      featured: true
    },
    {
      id: 4,
      title: "Our Website",
      category: "Website",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/project_4-removebg-preview.png?updatedAt=1755976929761",
      description: "Catalyst Crew's official digital home built for performance, clarity, and a powerful brand-driven user experience.",
      technologies: ["HTML/CSS", "JavaScript"],
      link: "https://catalyst-crew-alpha.vercel.app/",
      featured: true
    },
    {
      id: 5,
      title: "Ashwin Jauhary – Advanced Portfolio",
      category: "Portfolio",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/Ashwin-portfolio_5QO948eZ2?updatedAt=1761308179872",
      description: "A sleek, animated portfolio showcasing skills, projects, and creativity with modern design and seamless interactions.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "EmailJS"],
      link: "https://ashwin-portolio-react.vercel.app/",
      featured: true
    }
  ];

  // Marquee state - no state needed for continuous scrolling

  return (
    <PageLayout 
      pageType="home"
      className="relative overflow-hidden"
    >
      <StructuredData data={webpageData} />
      <StructuredData data={organizationData} />
      {/* Enhanced Particle Background */}
      <ParticleBackground />

      {/* Enhanced Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center pt-24 pb-20"
        itemScope
        itemType="https://schema.org/WPHeader"
      >
        {/* Dynamic Background with Multiple Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-catalyst-dark via-black to-catalyst-red/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-catalyst-red/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />

        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Large floating elements */}
          <motion.div
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-catalyst-red/20 to-catalyst-red/5 rounded-full border border-catalyst-red/30 hidden md:block"
          />

          <motion.div
            animate={{
              y: [20, -20, 20],
              rotate: [0, -180, -360],
              scale: [1.2, 1, 1.2]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
            className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-full border border-blue-500/30 hidden lg:block"
          />

          <motion.div
            animate={{
              y: [-15, 15, -15],
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 10
            }}
            className="absolute bottom-40 left-20 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-full border border-purple-500/30 hidden xl:block"
          />

          {/* Medium floating elements */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              x: [0, 5, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 left-1/4 w-6 h-6 bg-catalyst-red/40 rounded-full hidden md:block"
          />

          <motion.div
            animate={{
              y: [10, -10, 10],
              x: [0, -5, 0]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute top-2/3 right-1/3 w-4 h-4 bg-white/30 rounded-full hidden lg:block"
          />

          {/* Small floating particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i) * 10, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 8 + (i * 0.5),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
              className={`absolute w-1 h-1 rounded-full ${
                i % 3 === 0 ? 'bg-catalyst-red' : i % 3 === 1 ? 'bg-white' : 'bg-blue-400'
              } opacity-40`}
              style={{
                left: `${15 + (i * 7)}%`,
                top: `${25 + (i * 5)}%`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-catalyst-red/10 to-red-500/10 border border-catalyst-red/30 rounded-full mb-8 backdrop-blur-sm"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-catalyst-red rounded-full border-t-transparent mr-3"
                />
                <span className="text-sm font-semibold text-catalyst-red">Next Generation Digital Innovation</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-heading font-bold mb-6 leading-tight">
                  <div className="mb-4">
                    <span className="block">
                      <span style={{ color: '#ffffff' }}>Catalyst </span>
                      <span style={{ color: '#D71B1B' }}>Crew</span>
                    </span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-white mb-4"
                  >
                    Where Innovation
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <span className="block" style={{ color: '#D71B1B' }}>
                      Meets Excellence
                    </span>
                  </motion.div>
                </h1>
              </motion.div>

              <ScrollReveal direction="up" delay={0.2}>
                <motion.p
                  className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed"
                  whileHover={{ scale: 1.02 }}
                >
                  Experience the future of digital creativity with our revolutionary approach to design,
                  development, and digital transformation. We don't just create - we innovate, inspire, and transform.
                </motion.p>
              </ScrollReveal>

              {/* Enhanced CTA Buttons */}
              <ScrollReveal direction="up" delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/contact"
                      className="group relative px-10 py-5 bg-catalyst-red text-white rounded-2xl font-bold text-lg shadow-2xl shadow-catalyst-red/25 hover:shadow-catalyst-red/40 transition-all duration-500 flex items-center space-x-3 overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-catalyst-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <span className="relative z-10">Start Your Revolution</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="relative z-10"
                      >
                        <ArrowRight className="w-6 h-6" />
                      </motion.div>
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/portfolio"
                      className="group px-10 py-5 border-2 border-catalyst-red/50 text-catalyst-red hover:bg-catalyst-red hover:text-white rounded-2xl font-bold text-lg transition-all duration-500 flex items-center space-x-3 backdrop-blur-sm"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Play className="w-6 h-6" />
                      </motion.div>
                      <span>View Our Work</span>
                    </Link>
                  </motion.div>
                </div>
              </ScrollReveal>

              {/* Enhanced Feature Pills */}
              <ScrollReveal direction="up" delay={0.6}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
                  {features.map((feature) => (
                    <motion.div
                      key={feature.title}
                      whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                      className="group relative flex flex-col items-center p-4 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl backdrop-blur-xl hover:border-catalyst-red/40 transition-all duration-500 hover:shadow-2xl hover:shadow-catalyst-red/10"
                    >
                      <motion.div
                        className={`${feature.color} mb-3 group-hover:scale-125 transition-all duration-500`}
                        whileHover={{
                          rotate: [0, -15, 15, 0],
                          scale: [1, 1.2, 1.1]
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-white mb-1 group-hover:text-catalyst-red transition-colors duration-300">{feature.title}</div>
                        <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300">{feature.description}</div>
                      </div>
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-catalyst-red/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Responsive Image Section - Works on ALL devices */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative"
              >
                {/* Fully Responsive Image Container */}
                <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[380px] md:h-[450px] lg:h-[520px] xl:h-[600px] 2xl:h-[650px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 backdrop-blur-sm">
                  <img
                    src="https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/post.png?updatedAt=1755974392379"
                    alt="Catalyst Crew Building"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  {/* Responsive Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 sm:from-black/50 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-catalyst-red/8 sm:from-catalyst-red/10 via-transparent to-transparent" />

                  {/* Responsive Floating Elements */}
                  <motion.div
                    animate={{
                      y: [-6, 6, -6],
                      rotate: [0, 4, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-catalyst-red rounded-full opacity-60"
                  />
                  <motion.div
                    animate={{
                      y: [6, -6, 6],
                      rotate: [0, -4, 0]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                    className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-2 sm:left-3 md:left-4 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-white rounded-full opacity-40"
                  />

                  {/* Additional floating elements for larger screens */}
                  <motion.div
                    animate={{
                      y: [-8, 8, -8],
                      rotate: [0, 3, 0]
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute top-1/2 left-2 sm:left-3 md:left-4 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-catalyst-red/60 rounded-full opacity-50 hidden sm:block"
                  />
                </div>

                {/* Responsive Decorative Frame */}
                <div className="absolute -inset-1 sm:-inset-1.5 md:-inset-2 border-2 border-catalyst-red/30 rounded-2xl sm:rounded-3xl -z-10 opacity-50" />
                <div className="absolute -inset-1.5 sm:-inset-2 md:-inset-3 lg:-inset-4 border border-white/10 rounded-2xl sm:rounded-3xl -z-20" />

                {/* Responsive Stats Overlay */}
                <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 bg-black/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 border border-white/20">
                  <div className="grid grid-cols-2 gap-1 sm:gap-2 text-center">
                    <div>
                      <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-catalyst-red">200+</div>
                      <div className="text-[10px] sm:text-xs text-white/80">Projects</div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-catalyst-red">50+</div>
                      <div className="text-[10px] sm:text-xs text-white/80">Clients</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-24 relative overflow-hidden z-10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 bg-catalyst-red/10 border border-catalyst-red/30 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-catalyst-red mr-2" />
                <span className="text-sm text-catalyst-red font-medium">Our Revolutionary Services</span>
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#D71B1B' }}>Next-Gen Solutions</span>
                <span className="text-white">for Modern Businesses</span>
              </h2>

              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Discover our cutting-edge services designed to propel your business into the future
                with innovative technology and creative excellence.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                path={service.path}
                gradient={service.gradient}
                features={service.features}
                index={index}
              />
            ))}
          </div>

          <ScrollReveal className="text-center mt-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 text-catalyst-red hover:text-white font-semibold text-lg transition-colors duration-200 px-8 py-4 border-2 border-catalyst-red rounded-xl hover:bg-catalyst-red"
              >
                <span>Explore All Services</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 bg-catalyst-red/10 border border-catalyst-red/30 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-catalyst-red mr-2" />
                <span className="text-sm text-catalyst-red font-medium">Featured Projects</span>
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#D71B1B' }}>Our Latest</span>
                <span className="text-white">Template Projects</span>
              </h2>

              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Explore our showcase of innovative template projects demonstrating our expertise across
                web development, design, and digital solutions.
              </p>
            </div>
          </ScrollReveal>

          {/* Marquee Container */}
          <div className="relative overflow-hidden">
            {/* Marquee Track */}
            <div className="relative">
              {/* First set of projects */}
              <motion.div
                className="flex space-x-6"
                animate={{
                  x: [0, -4480] // Adjust based on total width (7 projects × 320px + 6 gaps × 24px = 2240px × 2 for duplicate)
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25, // Slightly slower for more projects
                    ease: "linear"
                  }
                }}
              >
                {/* Duplicate projects for seamless loop */}
                {[...featuredProjects, ...featuredProjects].map((project, index) => (
                  <motion.div
                    key={`${project.id}-${index}`}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="flex-shrink-0 w-80 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm rounded-2xl overflow-hidden"
                  >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-catalyst-red/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      
                      <p className="text-white/70 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gradient-to-r from-catalyst-red/20 to-catalyst-red/10 border border-catalyst-red/30 rounded-full text-white/70 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gradient-to-r from-catalyst-red/20 to-catalyst-red/10 border border-catalyst-red/30 rounded-full text-white/70 text-xs">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Action Button */}
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                          to={project.link}
                          target="_blank"
                          className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2 bg-catalyst-red text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-catalyst-red/40"
                        >
                          <span>View Project</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none z-10" />
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/portfolio"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-catalyst-red text-white rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-catalyst-red/40"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
