import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Palette,
  PenTool,
  Layers,
  Zap,
  CheckCircle,
  Quote,
  Star,
} from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollAnimations';

const LogoDesign = () => {
  const features = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Custom Logo Concepts",
      description: "Unique logo designs created specifically for your brand identity"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Multiple Design Revisions",
      description: "Unlimited revisions until you find the perfect design"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "High-Resolution Files",
      description: "Professional quality files in all necessary formats"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Brand Guidelines",
      description: "Complete brand guidelines to maintain consistency"
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "₹25,000",
      description: "Perfect for startups and small businesses",
      features: [
        "3 Logo Concepts",
        "Basic Brand Guidelines",
        "High-resolution files (PNG, JPG)",
        "Vector Formats (SVG, PDF)",
        "3 revisions included",
        "Delivery in 1-2 weeks"
      ]
    },
    {
      name: "Professional",
      price: "₹50,000",
      description: "Complete logo solution for growing brands",
      features: [
        "5 Logo Concepts",
        "Complete Brand Guidelines",
        "High-resolution files (PNG, JPG)",
        "Vector Formats (SVG, PDF, AI)",
        "Source Files Included",
        "Unlimited revisions",
        "Brand Color Palette",
        "Typography Guidelines"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹1,00,000",
      description: "Full-scale logo transformation for large organizations",
      features: [
        "Unlimited Logo Concepts",
        "Complete Brand Identity Package",
        "All File Formats",
        "Source Files Included",
        "Business Card Design",
        "Social Media Kit",
        "Unlimited revisions",
        "Priority support",
        "Brand Style Guide"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20">
        <div className="absolute inset-0 bg-purple-900" />
        <div className="absolute inset-0 bg-purple-900/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-8"
              >
                <Palette className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-sm text-purple-400 font-medium">Logo Design</span>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
                <span className="block mb-2" style={{ color: '#A855F7' }}>Creative Logo</span>
                <span className="text-white">Solutions</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Professional logo design services that capture your brand's essence with unique,
                memorable designs tailored to your vision.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="group relative px-10 py-5 bg-purple-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-purple-600/25 hover:shadow-purple-600/40 transition-all duration-500 flex items-center space-x-3 overflow-hidden"
                  >
                    <span className="relative z-10">Get Started</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/portfolio"
                    className="px-10 py-5 border-2 border-purple-500/50 text-purple-400 hover:bg-purple-600 hover:text-white rounded-2xl font-bold text-lg transition-all duration-500 flex items-center space-x-3"
                  >
                    <span>View Our Work</span>
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

      {/* What's Included Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#A855F7' }}>What's</span>
                <span className="text-white">Included</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group relative p-8 bg-purple-900/20 border border-purple-500/30 rounded-2xl backdrop-blur-xl hover:border-purple-400/50 transition-all duration-500"
                >
                  <motion.div
                    className="text-purple-400 mb-4 group-hover:scale-125 transition-all duration-500"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                  <div className="absolute inset-0 bg-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 relative bg-purple-900/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              <span className="block mb-2" style={{ color: '#A855F7' }}>Timeline</span>
            </h2>
            <div className="text-6xl font-bold text-purple-400 mb-4">1-2 weeks</div>
            <p className="text-xl text-white/70">
              From concept to final delivery, we work efficiently to meet your deadlines.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#A855F7' }}>Design</span>
                <span className="text-white">Packages</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Choose the perfect logo design package for your brand and budget.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <ScrollReveal key={pkg.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  className={`relative p-8 bg-purple-900/20 border rounded-2xl backdrop-blur-xl transition-all duration-500 ${
                    pkg.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/20'
                      : 'border-purple-500/30 hover:border-purple-400/50'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-purple-400 mb-2">{pkg.price}</div>
                    <p className="text-white/60">{pkg.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-purple-600 hover:bg-purple-700 text-white'
                        : 'border-2 border-purple-500/50 text-purple-400 hover:bg-purple-600 hover:text-white'
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

      {/* Testimonials Section */}
      <section className="py-24 relative bg-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#A855F7' }}>Client</span>
                <span className="text-white">Success Stories</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "TechStart Inc.",
                content: "The logo design perfectly captured our brand essence. Professional service and outstanding results!",
                rating: 5
              },
              {
                name: "Michael Chen",
                company: "Growth Co.",
                content: "Creative designs that exceeded our expectations. The team was professional and delivered on time.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                company: "Creative Solutions",
                content: "Amazing logo design service! They understood our vision and created something truly unique.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <ScrollReveal key={testimonial.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative p-8 bg-purple-900/30 border border-purple-500/40 rounded-2xl"
                >
                  <Quote className="w-8 h-8 text-purple-400 mb-4" />
                  <p className="text-white/80 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-white/60 text-sm">{testimonial.company}</div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              <span className="block mb-2" style={{ color: '#A855F7' }}>Ready to Create</span>
              <span className="text-white">Your Perfect Logo?</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Let's discuss your logo design needs and create something amazing together.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-purple-600/25"
              >
                <span>Get Started</span>
                <ArrowLeft className="w-6 h-6 rotate-180" />
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default LogoDesign;
