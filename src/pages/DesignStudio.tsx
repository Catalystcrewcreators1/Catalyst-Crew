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

const DesignStudio = () => {
  const features = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Identity",
      description: "Complete brand identity packages including logos, color schemes, and typography"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Custom Illustrations",
      description: "Unique illustrations and graphics tailored to your brand story"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design for web and mobile applications"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Motion Graphics",
      description: "Animated graphics and interactive elements for enhanced engagement"
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "₹25,000",
      description: "Perfect for startups and small projects",
      features: [
        "Logo Design (3 concepts)",
        "Basic Brand Guidelines",
        "High-resolution files",
        "2 revisions included",
        "Delivery in 1 week"
      ]
    },
    {
      name: "Professional",
      price: "₹75,000",
      description: "Complete design solution for growing businesses",
      features: [
        "Logo Design (5 concepts)",
        "Complete Brand Identity",
        "Business Card Design",
        "Social Media Kit",
        "5 revisions included",
        "Delivery in 2 weeks"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹1,50,000",
      description: "Full-scale design transformation for large organizations",
      features: [
        "Logo Design (Unlimited concepts)",
        "Complete Brand Identity Package",
        "Marketing Collateral Suite",
        "Website/App UI Design",
        "Unlimited revisions",
        "Priority support"
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
                <span className="text-sm text-purple-400 font-medium">Design Studio</span>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
                <span className="block mb-2" style={{ color: '#A855F7' }}>Revolutionary</span>
                <span className="text-white">Design Solutions</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Transform your brand with our AI-powered design studio. We create stunning visuals
                that capture attention, tell your story, and drive results.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="group relative px-10 py-5 bg-purple-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-purple-600/25 hover:shadow-purple-600/40 transition-all duration-500 flex items-center space-x-3 overflow-hidden"
                  >
                    <span className="relative z-10">Start Your Design Project</span>
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

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#A855F7' }}>Our Design</span>
                <span className="text-white">Capabilities</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                From concept to completion, we deliver exceptional design solutions that elevate your brand.
              </p>
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

      {/* Process Section */}
      <section className="py-24 relative bg-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#A855F7' }}>Our Creative</span>
                <span className="text-white">Process</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "We dive deep into your brand, target audience, and objectives to create a solid foundation."
              },
              {
                step: "02",
                title: "Concept & Design",
                description: "Our creative team develops multiple concepts and refines them based on your feedback."
              },
              {
                step: "03",
                title: "Delivery & Support",
                description: "Final deliverables with all necessary files and ongoing support for your design needs."
              }
            ].map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative p-8 bg-purple-900/30 border border-purple-500/40 rounded-2xl"
                >
                  <div className="text-6xl font-bold text-purple-400 mb-4">{item.step}</div>
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
                <span className="block mb-2" style={{ color: '#A855F7' }}>Design</span>
                <span className="text-white">Packages</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Choose the perfect design package for your project and budget.
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
                content: "The design team transformed our brand completely. The new logo and visual identity perfectly capture our innovative spirit.",
                rating: 5
              },
              {
                name: "Michael Chen",
                company: "Growth Co.",
                content: "Outstanding creativity and professionalism. The designs exceeded our expectations and helped boost our conversion rates.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                company: "Creative Solutions",
                content: "Working with the design studio was a game-changer for our business. Highly recommend their services!",
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
              <span className="block mb-2" style={{ color: '#A855F7' }}>Ready to Transform</span>
              <span className="text-white">Your Brand?</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Let's discuss your design needs and create something amazing together.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-purple-600/25"
              >
                <span>Start Your Design Project</span>
                <ArrowLeft className="w-6 h-6 rotate-180" />
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default DesignStudio;
