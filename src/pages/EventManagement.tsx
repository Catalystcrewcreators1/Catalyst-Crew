import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Users,
  Camera,
  Music,
  CheckCircle,
} from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollAnimations';

const EventManagement = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Event Planning",
      description: "Comprehensive event planning from concept to execution"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Guest Management",
      description: "Complete guest registration, check-in, and engagement systems"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Live Streaming",
      description: "Professional live streaming setup for virtual and hybrid events"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Entertainment",
      description: "Curated entertainment and interactive experiences for attendees"
    }
  ];

  const services = [
    {
      title: "Corporate Events",
      description: "Professional corporate gatherings, conferences, and team building events",
      features: ["Venue selection", "Catering coordination", "Speaker management", "Branding & decor"]
    },
    {
      title: "Product Launches",
      description: "Memorable product launch events that create buzz and drive sales",
      features: ["Launch strategy", "Media coordination", "Demo presentations", "Press coverage"]
    },
    {
      title: "Virtual Events",
      description: "Engaging online events with interactive features and global reach",
      features: ["Platform setup", "Interactive tools", "Live streaming", "Attendee engagement"]
    },
    {
      title: "Wedding & Personal Events",
      description: "Beautiful, personalized celebrations for life's special moments",
      features: ["Theme design", "Vendor coordination", "Timeline management", "Guest experience"]
    }
  ];

  const packages = [
    {
      name: "Basic Event",
      price: "₹75,000",
      description: "Perfect for small gatherings and simple events",
      features: [
        "Event planning consultation",
        "Basic venue setup",
        "Guest list management",
        "Day-of coordination",
        "Basic documentation"
      ]
    },
    {
      name: "Professional Event",
      price: "₹2,50,000",
      description: "Complete event management for medium-sized events",
      features: [
        "Full event planning",
        "Venue & vendor coordination",
        "Professional AV setup",
        "Live streaming option",
        "Post-event report",
        "3 months planning time"
      ],
      popular: true
    },
    {
      name: "Premium Event",
      price: "₹5,00,000",
      description: "Full-service event production for large-scale events",
      features: [
        "Complete event production",
        "Premium venue & catering",
        "Professional entertainment",
        "Multi-camera live stream",
        "Custom branding",
        "Dedicated event manager"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20">
        <div className="absolute inset-0 bg-red-900" />
        <div className="absolute inset-0 bg-red-900/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-8"
              >
                <Calendar className="w-4 h-4 text-red-400 mr-2" />
                <span className="text-sm text-red-400 font-medium">Event Management</span>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
                <span className="block mb-2" style={{ color: '#EF4444' }}>Spectacular</span>
                <span className="text-white">Event Experiences</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Create unforgettable events that leave lasting impressions. From intimate gatherings
                to large-scale productions, we handle every detail with precision and creativity.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="group relative px-10 py-5 bg-red-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-red-600/25 hover:shadow-red-600/40 transition-all duration-500 flex items-center space-x-3 overflow-hidden"
                  >
                    <span className="relative z-10">Plan Your Event</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/events"
                    className="px-10 py-5 border-2 border-red-500/50 text-red-400 hover:bg-red-600 hover:text-white rounded-2xl font-bold text-lg transition-all duration-500 flex items-center space-x-3"
                  >
                    <span>View Our Events</span>
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
                <span className="block mb-2" style={{ color: '#EF4444' }}>Event</span>
                <span className="text-white">Management Services</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                From concept to execution, we provide comprehensive event management solutions for every occasion.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group relative p-8 bg-red-900/20 border border-red-500/30 rounded-2xl backdrop-blur-xl hover:border-red-400/50 transition-all duration-500"
                >
                  <motion.div
                    className="text-red-400 mb-4 group-hover:scale-125 transition-all duration-500"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative bg-gradient-to-br from-red-900/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#EF4444' }}>Types of</span>
                <span className="text-white">Events We Manage</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We specialize in creating memorable experiences across various event categories.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="relative p-8 bg-red-900/30 border border-red-500/40 rounded-2xl"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/70 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
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
                <span className="block mb-2" style={{ color: '#EF4444' }}>Event</span>
                <span className="text-white">Planning Process</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Initial meeting to understand your vision, goals, and requirements"
              },
              {
                step: "02",
                title: "Planning & Design",
                description: "Detailed event planning, vendor selection, and timeline creation"
              },
              {
                step: "03",
                title: "Coordination",
                description: "Day-of coordination and real-time problem solving"
              },
              {
                step: "04",
                title: "Execution",
                description: "Flawless event execution with attention to every detail"
              }
            ].map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative p-8 bg-red-900/30 border border-red-500/40 rounded-2xl"
                >
                  <div className="text-6xl font-bold text-red-400 mb-4">{item.step}</div>
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
                <span className="block mb-2" style={{ color: '#EF4444' }}>Event</span>
                <span className="text-white">Packages</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Choose the perfect event management package for your occasion and budget.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <ScrollReveal key={pkg.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  className={`relative p-8 bg-red-900/20 border rounded-2xl backdrop-blur-xl transition-all duration-500 ${
                    pkg.popular
                      ? 'border-red-400 shadow-2xl shadow-red-500/20'
                      : 'border-red-500/30 hover:border-red-400/50'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-red-400 mb-2">{pkg.price}</div>
                    <p className="text-white/60">{pkg.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : 'border-2 border-red-500/50 text-red-400 hover:bg-red-600 hover:text-white'
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
      <section className="py-24 relative bg-gradient-to-br from-red-900/10 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              <span className="block mb-2" style={{ color: '#EF4444' }}>Ready to Create</span>
              <span className="text-white">an Unforgettable Event?</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Let's discuss your event vision and create an experience that your guests will never forget.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-red-600/25"
              >
                <span>Start Planning Your Event</span>
                <ArrowLeft className="w-6 h-6 rotate-180" />
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default EventManagement;
