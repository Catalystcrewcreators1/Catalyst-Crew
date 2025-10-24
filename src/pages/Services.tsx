import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Check,
  Zap,
  Palette,
  Code,
  Users,
  Sparkles,
  Target,
  Rocket,
  TrendingUp,
  FileText,
  Monitor,
  Brush,
  Bot
} from 'lucide-react';
import { ScrollReveal, FloatingElement } from '../components/ui/ScrollAnimations';

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Logo Design",
      subtitle: "Creative Logo Solutions",
      description: "Professional logo design services that capture your brand's essence with unique, memorable designs tailored to your vision.",
      features: [
        "Custom Logo Concepts",
        "Multiple Design Revisions",
        "High-Resolution Files",
        "Brand Guidelines",
        "Vector Formats",
        "Source Files Included"
      ],
      timeline: "1-2 weeks",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Graphic Design",
      subtitle: "Visual Communication Experts",
      description: "Comprehensive graphic design services for all your visual needs, from marketing materials to digital assets.",
      features: [
        "Marketing Collateral",
        "Brochure & Flyer Design",
        "Poster & Banner Design",
        "Infographic Creation",
        "Digital Asset Design",
        "Print-Ready Files"
      ],
      timeline: "2-3 weeks",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      subtitle: "Modern Web Solutions",
      description: "Custom web development services building responsive, fast, and user-friendly websites and applications.",
      features: [
        "Responsive Website Design",
        "E-commerce Development",
        "Content Management Systems",
        "SEO Optimization",
        "Mobile-Friendly Interfaces",
        "Ongoing Support"
      ],
      timeline: "4-8 weeks",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Brand Identity",
      subtitle: "Complete Brand Packages",
      description: "Full brand identity services including logos, color schemes, typography, and guidelines for cohesive branding.",
      features: [
        "Logo Design & Variations",
        "Color Palette Selection",
        "Typography Guidelines",
        "Brand Style Guide",
        "Business Card Design",
        "Stationery Design"
      ],
      timeline: "3-4 weeks",
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Print Design",
      subtitle: "High-Quality Print Materials",
      description: "Professional print design services for business cards, brochures, posters, and other physical marketing materials.",
      features: [
        "Business Card Design",
        "Brochure & Catalog Design",
        "Poster & Flyer Design",
        "Packaging Design",
        "Print-Ready Artwork",
        "Company Brochure Available",
        "Quality Assurance"
      ],
      timeline: "2-3 weeks",
      color: "from-indigo-500/20 to-purple-500/20",
      borderColor: "border-indigo-500/30",
      customCTA: {
        text: "View Our Brochure",
        href: "https://online.fliphtml5.com/Catalyst_Crew/rwae/",
        external: true
      }
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Digital Design",
      subtitle: "Digital Asset Creation",
      description: "Creative digital design services for websites, apps, social media, and online marketing campaigns.",
      features: [
        "Website Graphics",
        "Social Media Assets",
        "Email Template Design",
        "Banner & Ad Design",
        "Icon & Illustration",
        "Responsive Graphics"
      ],
      timeline: "1-2 weeks",
      color: "from-teal-500/20 to-blue-500/20",
      borderColor: "border-teal-500/30"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Social Media Managing",
      subtitle: "Engage Your Audience",
      description: "Comprehensive social media management including content creation, posting schedules, and audience engagement strategies.",
      features: [
        "Content Calendar Planning",
        "Post Creation & Scheduling",
        "Audience Engagement",
        "Analytics & Reporting",
        "Platform Optimization",
        "Growth Strategies"
      ],
      timeline: "Ongoing",
      color: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-500/30"
    },
    {
      icon: <Brush className="w-12 h-12" />,
      title: "Illustration",
      subtitle: "Custom Artwork Creation",
      description: "Bespoke illustration services for books, websites, marketing materials, and personal projects with unique artistic styles.",
      features: [
        "Custom Illustrations",
        "Character Design",
        "Book & Editorial Art",
        "Digital & Hand-Drawn",
        "Concept Art",
        "High-Resolution Delivery"
      ],
      timeline: "2-4 weeks",
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "AI Bot / Agent Automation",
      subtitle: "Intelligent Automation Solutions",
      description: "Advanced AI-powered bots and agents for automating tasks, improving efficiency, and enhancing user interactions across platforms.",
      features: [
        "Custom AI Chatbots",
        "Automated Workflows",
        "Natural Language Processing",
        "Integration with Platforms",
        "24/7 Customer Support",
        "Analytics & Optimization"
      ],
      timeline: "3-6 weeks",
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your business goals, target audience, and competition to create a tailored strategy.",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Our team creates stunning designs and develops robust solutions using cutting-edge technologies.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Testing & Launch",
      description: "Rigorous testing ensures quality, followed by smooth deployment and launch.",
      icon: <Rocket className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Support & Growth",
      description: "Ongoing support, maintenance, and optimization to ensure continued success.",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-catalyst-dark via-black to-catalyst-red/5">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-catalyst-red/10 to-transparent" />

        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <FloatingElement key={i} intensity={25} speed={5 + i}>
            <div className={`absolute w-3 h-3 rounded-full opacity-50 ${
              i % 2 === 0 ? 'bg-catalyst-red' : 'bg-white'
            }`} style={{
              left: `${10 + (i * 12)}%`,
              top: `${15 + (i * 10)}%`
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
                <Sparkles className="w-5 h-5 text-catalyst-red mr-3" />
                <span className="text-sm font-semibold text-catalyst-red">Our Revolutionary Services</span>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#D71B1B' }}>Next-Gen</span>
                <span className="text-white">Digital Solutions</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
                From concept to execution, we deliver comprehensive digital solutions that drive growth, enhance experiences, and transform businesses in the modern digital landscape.
              </p>
            </ScrollReveal>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} direction="up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -10 }}
                  className="group relative h-full"
                >
                  <div className={`
                    relative overflow-hidden rounded-2xl md:rounded-3xl p-6 md:p-8 h-full
                    bg-gradient-to-br ${service.color}
                    border ${service.borderColor} backdrop-blur-xl shadow-2xl
                    transition-all duration-700 ease-out
                    hover:shadow-[0_25px_50px_-12px_rgba(215,27,27,0.3)]
                  `}>

                    {/* Animated background glow */}
                    <motion.div
                      className="absolute -inset-1 md:-inset-2 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-xl"
                      style={{
                        background: `linear-gradient(135deg, ${service.color.includes('purple') ? '#9333ea' : service.color.includes('blue') ? '#3b82f6' : service.color.includes('green') ? '#10b981' : service.color.includes('orange') ? '#f97316' : '#ef4444'}40, transparent)`,
                      }}
                    />

                    {/* Icon */}
                    <motion.div
                      className="relative mb-4 md:mb-6"
                      whileHover={{ rotateY: 15, rotateX: 15, z: 30 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 border border-white/20 group-hover:border-catalyst-red/30 transition-colors duration-300">
                        <div className="text-catalyst-red">
                          {service.icon}
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">{service.title}</h3>
                      <p className="text-xs md:text-sm text-catalyst-red font-medium">{service.subtitle}</p>
                    </motion.div>

                    <p className="text-white/80 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4 md:mb-6">
                      <h4 className="text-white font-semibold mb-2 md:mb-3 text-sm md:text-base">What's Included:</h4>
                      <div className="space-y-1 md:space-y-2">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="flex items-center text-xs md:text-sm text-white/70"
                          >
                            <Check className="w-3 h-3 md:w-4 md:h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="text-center mb-4 md:mb-6 p-3 md:p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-xs text-white/60">Timeline</p>
                      <p className="text-xs md:text-sm font-semibold text-white">{service.timeline}</p>
                    </div>

                    {/* CTA Button */}
                    {service.customCTA ? (
                      <motion.a
                        href={service.customCTA.href}
                        target={service.customCTA.external ? "_blank" : "_self"}
                        rel={service.customCTA.external ? "noopener noreferrer" : ""}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-2.5 md:py-3 bg-gradient-to-r from-catalyst-red to-red-600 text-white rounded-xl font-semibold transition-all duration-300 text-sm md:text-base hover:from-red-600 hover:to-catalyst-red hover:shadow-lg text-center block"
                      >
                        {service.customCTA.text}
                      </motion.a>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-2.5 md:py-3 bg-gradient-to-r from-catalyst-red to-red-600 text-white rounded-xl font-semibold transition-all duration-300 text-sm md:text-base hover:from-red-600 hover:to-catalyst-red hover:shadow-lg"
                      >
                        Get Started
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-catalyst-red/5 via-transparent to-catalyst-red/5" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
            >
              <div className="w-20 h-20 bg-catalyst-red/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <FileText className="w-10 h-10 text-catalyst-red" />
              </div>

              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                <span className="block" style={{ color: '#D71B1B' }}>View Our</span>
                <span className="text-white">Company Brochure</span>
              </h2>

              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Discover our comprehensive range of services, portfolio highlights, and company information in our interactive digital brochure.
              </p>

              <motion.a
                href="https://online.fliphtml5.com/Catalyst_Crew/rwae/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-catalyst-red to-red-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:from-red-600 hover:to-catalyst-red hover:shadow-lg"
              >
                <FileText className="w-5 h-5 mr-3" />
                View Interactive Brochure
              </motion.a>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-catalyst-red/5 to-transparent" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="block" style={{ color: '#D71B1B' }}>Our Process</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                A proven methodology that ensures quality, efficiency, and exceptional results every time.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="relative"
                >
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-catalyst-red/30 to-transparent transform translate-x-4" />
                  )}

                  <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-3xl backdrop-blur-sm hover:border-catalyst-red/30 transition-all duration-300">
                    <motion.div
                      className="w-16 h-16 bg-catalyst-red/20 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-catalyst-red">
                        {step.icon}
                      </div>
                    </motion.div>

                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-catalyst-red mb-2">{step.step}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    </div>

                    <p className="text-white/70 leading-relaxed text-center">
                      {step.description}
                    </p>
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

export default Services;
