import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Users,
  Calendar,
  MessageSquare,
  CheckCircle,
  Quote,
  Star,
  BarChart3,
  Share2,
} from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollAnimations';

const SocialMediaManaging = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Content Calendar Planning",
      description: "Strategic content scheduling for maximum engagement"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Post Creation & Scheduling",
      description: "Compelling content creation and automated posting"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Audience Engagement",
      description: "Community management and interaction strategies"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description: "Performance tracking and growth insights"
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "₹20,000",
      description: "Essential social media management",
      features: [
        "3 Social Platforms",
        "12 Posts per month",
        "Basic Analytics",
        "Community Management",
        "Monthly Reporting",
        "3 months minimum"
      ]
    },
    {
      name: "Professional",
      price: "₹40,000",
      description: "Complete social media management",
      features: [
        "5 Social Platforms",
        "20 Posts per month",
        "Advanced Analytics",
        "Content Calendar",
        "Audience Engagement",
        "Weekly Reporting",
        "Growth Strategies"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹80,000",
      description: "Full-scale social media transformation",
      features: [
        "All Major Platforms",
        "Unlimited Posts",
        "Custom Analytics Dashboard",
        "Crisis Management",
        "Influencer Partnerships",
        "Real-time Monitoring",
        "Monthly Strategy Sessions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/10 via-transparent to-red-500/5" />

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Geometric shapes */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-20 left-10 w-32 h-32 border border-red-500/20 rounded-full"
          />

          <motion.div
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
            }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 15, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-40 right-20 w-24 h-24 bg-red-500/10 rounded-lg rotate-45"
          />

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-32 left-1/4 w-16 h-16 border border-red-400/30 rounded-full"
          />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [-30, 30, -30],
                x: [0, Math.sin(i) * 20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              className="absolute w-2 h-2 bg-red-400 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/30 rounded-full mb-8 backdrop-blur-sm shadow-lg"
              >
                <Share2 className="w-5 h-5 text-red-400 mr-3" />
                <span className="text-sm font-semibold text-red-400">Social Media</span>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                  <span className="block mb-2 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                    Engage Your
                  </span>
                  <span className="text-white">Audience</span>
                </h1>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-3xl mx-auto mb-12"
              >
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                  Professional social media management services to build your brand presence,
                  engage audiences, and drive growth across platforms.
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="group relative px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-red-600/25 hover:shadow-red-600/40 transition-all duration-500 flex items-center space-x-3 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Get Started</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/portfolio"
                    className="px-10 py-5 border-2 border-red-500/50 text-red-400 hover:bg-red-600 hover:text-white rounded-2xl font-bold text-lg transition-all duration-500 flex items-center space-x-3 backdrop-blur-sm"
                  >
                    <span>View Our Work</span>
                  </Link>
                </motion.div>
              </motion.div>
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
                <span className="block mb-2" style={{ color: '#D71B1B' }}>What's</span>
                <span className="text-white">Included</span>
              </h2>
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
                  <div className="absolute inset-0 bg-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 relative bg-red-900/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              <span className="block mb-2" style={{ color: '#D71B1B' }}>Timeline</span>
            </h2>
            <div className="text-6xl font-bold text-red-400 mb-4">Ongoing</div>
            <p className="text-xl text-white/70">
              Continuous management and optimization of your social media presence.
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
                <span className="block mb-2" style={{ color: '#D71B1B' }}>Management</span>
                <span className="text-white">Packages</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Choose the perfect social media management package for your business.
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

      {/* Testimonials Section */}
      <section className="py-24 relative bg-red-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#D71B1B' }}>Client</span>
                <span className="text-white">Success Stories</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "TechStart Inc.",
                content: "The social media management team transformed our online presence. Engagement increased by 300%!",
                rating: 5
              },
              {
                name: "Michael Chen",
                company: "Growth Co.",
                content: "Outstanding social media service! They created a comprehensive strategy that delivered real results.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                company: "Creative Solutions",
                content: "Amazing social media management! Our follower growth and engagement have never been better.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <ScrollReveal key={testimonial.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative p-8 bg-red-900/30 border border-red-500/40 rounded-2xl"
                >
                  <Quote className="w-8 h-8 text-red-400 mb-4" />
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
              <span className="block mb-2" style={{ color: '#D71B1B' }}>Ready to Grow</span>
              <span className="text-white">Your Social Media?</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Let's discuss your social media goals and create an engaging strategy for your audience.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-red-600/25"
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

export default SocialMediaManaging;
