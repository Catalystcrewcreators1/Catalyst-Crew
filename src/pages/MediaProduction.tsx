import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Camera,
  Video,
  Music,
  Image,
  Film,
  CheckCircle,
} from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollAnimations';

const MediaProduction = () => {
  const features = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Production",
      description: "Professional video content from concept to final delivery"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      description: "High-quality photography for products, events, and branding"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Audio Production",
      description: "Professional sound design, music composition, and voice-over"
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Motion Graphics",
      description: "Animated graphics and visual effects for enhanced storytelling"
    }
  ];

  const services = [
    {
      title: "Commercial Videos",
      description: "Engaging promotional videos that drive conversions and brand awareness",
      features: ["Script writing", "Professional filming", "Post-production", "Motion graphics"]
    },
    {
      title: "Product Photography",
      description: "High-quality product images that showcase your offerings beautifully",
      features: ["Studio setup", "Lighting expertise", "Image editing", "Multiple angles"]
    },
    {
      title: "Event Coverage",
      description: "Complete event documentation from planning to final deliverables",
      features: ["Live streaming", "Multi-camera setup", "Highlight reels", "Raw footage"]
    },
    {
      title: "Brand Stories",
      description: "Compelling brand narratives that connect with your audience emotionally",
      features: ["Story development", "Visual storytelling", "Music selection", "Voice-over"]
    }
  ];

  const packages = [
    {
      name: "Essential",
      price: "₹50,000",
      description: "Perfect for small projects and startups",
      features: [
        "1-minute promotional video",
        "Basic photography session",
        "Standard editing",
        "2 revisions included",
        "Delivery in 2 weeks"
      ]
    },
    {
      name: "Professional",
      price: "₹1,50,000",
      description: "Complete media solution for growing businesses",
      features: [
        "3-minute promotional video",
        "Full photography package",
        "Advanced editing & effects",
        "Original music composition",
        "5 revisions included",
        "Delivery in 3 weeks"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "₹3,50,000",
      description: "Full-scale media production for large campaigns",
      features: [
        "5-minute premium video",
        "Complete photography suite",
        "Professional voice-over",
        "Custom animations",
        "Unlimited revisions",
        "Priority delivery"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20">
        <div className="absolute inset-0 bg-green-900" />
        <div className="absolute inset-0 bg-green-900/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-8"
              >
                <Film className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-sm text-green-400 font-medium">Media & Production</span>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
                <span className="block mb-2" style={{ color: '#10B981' }}>Immersive</span>
                <span className="text-white">Media Experiences</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Create captivating visual stories that engage your audience and elevate your brand.
                From concept to screen, we bring your vision to life.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="group relative px-10 py-5 bg-green-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-green-600/25 hover:shadow-green-600/40 transition-all duration-500 flex items-center space-x-3 overflow-hidden"
                  >
                    <span className="relative z-10">Start Your Media Project</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/portfolio"
                    className="px-10 py-5 border-2 border-green-500/50 text-green-400 hover:bg-green-600 hover:text-white rounded-2xl font-bold text-lg transition-all duration-500 flex items-center space-x-3"
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
                <span className="block mb-2" style={{ color: '#10B981' }}>Production</span>
                <span className="text-white">Capabilities</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                From pre-production planning to post-production perfection, we handle every aspect of media creation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group relative p-8 bg-green-900/20 border border-green-500/30 rounded-2xl backdrop-blur-xl hover:border-green-400/50 transition-all duration-500"
                >
                  <motion.div
                    className="text-green-400 mb-4 group-hover:scale-125 transition-all duration-500"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative bg-gradient-to-br from-green-900/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#10B981' }}>Our Media</span>
                <span className="text-white">Services</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Comprehensive media production services tailored to your specific needs and goals.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="relative p-8 bg-green-900/30 border border-green-500/40 rounded-2xl"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/70 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
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
                <span className="block mb-2" style={{ color: '#10B981' }}>Production</span>
                <span className="text-white">Workflow</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Pre-Production",
                description: "Concept development, script writing, and detailed planning"
              },
              {
                step: "02",
                title: "Production",
                description: "Professional filming, photography, and content creation"
              },
              {
                step: "03",
                title: "Post-Production",
                description: "Editing, color grading, sound design, and final touches"
              },
              {
                step: "04",
                title: "Delivery",
                description: "Final deliverables in multiple formats and ongoing support"
              }
            ].map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative p-8 bg-green-900/30 border border-green-500/40 rounded-2xl"
                >
                  <div className="text-6xl font-bold text-green-400 mb-4">{item.step}</div>
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
                <span className="block mb-2" style={{ color: '#10B981' }}>Production</span>
                <span className="text-white">Packages</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Choose the perfect media production package for your project scope and budget.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <ScrollReveal key={pkg.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  className={`relative p-8 bg-green-900/20 border rounded-2xl backdrop-blur-xl transition-all duration-500 ${
                    pkg.popular
                      ? 'border-green-400 shadow-2xl shadow-green-500/20'
                      : 'border-green-500/30 hover:border-green-400/50'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-green-400 mb-2">{pkg.price}</div>
                    <p className="text-white/60">{pkg.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'border-2 border-green-500/50 text-green-400 hover:bg-green-600 hover:text-white'
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
      <section className="py-24 relative bg-gradient-to-br from-green-900/10 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              <span className="block mb-2" style={{ color: '#10B981' }}>Ready to Create</span>
              <span className="text-white">Amazing Content?</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Let's discuss your media production needs and create compelling visual stories together.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-green-600/25"
              >
                <span>Start Your Media Project</span>
                <ArrowLeft className="w-6 h-6 rotate-180" />
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default MediaProduction;
