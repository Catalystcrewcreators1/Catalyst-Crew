import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  TrendingUp,
  Target,
  BarChart3,
  Search,
  CheckCircle,
} from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollAnimations';

const MarketingConsulting = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Strategy",
      description: "Data-driven strategies to accelerate business growth and market expansion"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Performance Marketing",
      description: "ROI-focused campaigns across digital platforms and traditional media"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Insights",
      description: "Advanced analytics and actionable insights for informed decision making"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO & SEM",
      description: "Comprehensive search engine optimization and marketing strategies"
    }
  ];

  const services = [
    {
      title: "Digital Marketing Strategy",
      description: "Comprehensive digital marketing plans tailored to your business objectives",
      features: ["Market research", "Competitor analysis", "Channel strategy", "Content planning"]
    },
    {
      title: "Performance Marketing",
      description: "Results-driven campaigns focused on conversions and ROI optimization",
      features: ["PPC campaigns", "Social media ads", "Conversion tracking", "A/B testing"]
    },
    {
      title: "Brand Positioning",
      description: "Strategic brand development and positioning for competitive advantage",
      features: ["Brand audit", "Positioning strategy", "Messaging framework", "Visual identity"]
    },
    {
      title: "Growth Consulting",
      description: "Strategic consulting to scale your business and enter new markets",
      features: ["Growth planning", "Market expansion", "Partnership strategy", "Exit planning"]
    }
  ];

  const packages = [
    {
      name: "Strategy Consultation",
      price: "₹50,000",
      description: "Perfect for businesses needing strategic direction",
      features: [
        "Comprehensive audit",
        "Strategic roadmap",
        "Action plan development",
        "30-day follow-up",
        "Executive summary"
      ]
    },
    {
      name: "Full Marketing Suite",
      price: "₹2,00,000",
      description: "Complete marketing transformation package",
      features: [
        "Strategy development",
        "Campaign execution",
        "Content creation",
        "Performance monitoring",
        "Monthly reporting",
        "3 months support"
      ],
      popular: true
    },
    {
      name: "Growth Partnership",
      price: "₹5,00,000",
      description: "Ongoing partnership for sustained growth",
      features: [
        "Dedicated consultant",
        "Monthly strategy sessions",
        "Campaign management",
        "Advanced analytics",
        "Priority support",
        "12 months partnership"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20">
        <div className="absolute inset-0 bg-indigo-900" />
        <div className="absolute inset-0 bg-indigo-900/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full mb-8"
              >
                <TrendingUp className="w-4 h-4 text-indigo-400 mr-2" />
                <span className="text-sm text-indigo-400 font-medium">Marketing & Consulting</span>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
                <span className="block mb-2" style={{ color: '#6366F1' }}>Strategic</span>
                <span className="text-white">Growth Solutions</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Accelerate your business growth with data-driven marketing strategies and expert
                consulting. We help you navigate the digital landscape and achieve sustainable success.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="group relative px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-500 flex items-center space-x-3 overflow-hidden"
                  >
                    <span className="relative z-10">Get Strategic Consultation</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/portfolio"
                    className="px-10 py-5 border-2 border-indigo-500/50 text-indigo-400 hover:bg-indigo-600 hover:text-white rounded-2xl font-bold text-lg transition-all duration-500 flex items-center space-x-3"
                  >
                    <span>View Case Studies</span>
                  </Link>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Back to Services */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-8 left-8"
        >
          <Link
            to="/services"
            className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Services</span>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#6366F1' }}>Marketing</span>
                <span className="text-white">Expertise</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                From strategy development to campaign execution, we deliver comprehensive marketing solutions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group relative p-8 bg-indigo-900/20 border border-indigo-500/30 rounded-2xl backdrop-blur-xl hover:border-indigo-400/50 transition-all duration-500"
                >
                  <motion.div
                    className="text-indigo-400 mb-4 group-hover:scale-125 transition-all duration-500"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative bg-gradient-to-br from-indigo-900/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#6366F1' }}>Our Consulting</span>
                <span className="text-white">Services</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Strategic consulting services designed to transform your business and drive sustainable growth.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="relative p-8 bg-indigo-900/30 border border-indigo-500/40 rounded-2xl"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/70 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#6366F1' }}>Consulting</span>
                <span className="text-white">Approach</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Deep dive into your business, market, and competitive landscape"
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Custom strategy creation based on data-driven insights"
              },
              {
                step: "03",
                title: "Implementation Support",
                description: "Hands-on support for strategy execution and optimization"
              },
              {
                step: "04",
                title: "Measurement & Growth",
                description: "Continuous monitoring, optimization, and growth acceleration"
              }
            ].map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative p-8 bg-indigo-900/30 border border-indigo-500/40 rounded-2xl"
                >
                  <div className="text-6xl font-bold text-indigo-400 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#6366F1' }}>Consulting</span>
                <span className="text-white">Packages</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Choose the perfect consulting package for your business needs and growth stage.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <ScrollReveal key={pkg.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  className={`relative p-8 bg-indigo-900/20 border rounded-2xl backdrop-blur-xl transition-all duration-500 ${
                    pkg.popular
                      ? 'border-indigo-400 shadow-2xl shadow-indigo-500/20'
                      : 'border-indigo-500/30 hover:border-indigo-400/50'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-indigo-400 mb-2">{pkg.price}</div>
                    <p className="text-white/60">{pkg.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                        : 'border-2 border-indigo-500/50 text-indigo-400 hover:bg-indigo-600 hover:text-white'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-indigo-900/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              <span className="block mb-2" style={{ color: '#6366F1' }}>Ready to Accelerate</span>
              <span className="text-white">Your Growth?</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Let's discuss your business goals and develop a strategic roadmap for success.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-indigo-600/25"
              >
                <span>Start Your Growth Journey</span>
                <ArrowLeft className="w-6 h-6 rotate-180" />
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default MarketingConsulting;
