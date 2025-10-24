import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  ArrowLeft,
  Star,
  DollarSign,
  Award,
  Palette,
  Bot,
  Globe,
  Check,
  TrendingUp,
  Zap
} from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollAnimations';

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: <Star className="w-5 h-5" /> },
    { id: 'design', name: 'Design Services', icon: <Palette className="w-5 h-5" /> },
    { id: 'automation', name: 'Automation', icon: <Bot className="w-5 h-5" /> },
    { id: 'development', name: 'Development', icon: <Globe className="w-5 h-5" /> },
    { id: 'maintenance', name: 'Maintenance', icon: <Zap className="w-5 h-5" /> }
  ];

  const pricingPlans = {
    all: [
      {
        name: "Posters",
        icon: "📄",
        plans: [
          { name: "Basic", price: "₹499", features: ["1 Design", "3 Revisions", "High Resolution", "Print Ready"] },
          { name: "Medium(with QR)", price: "₹499", features: ["1 Design", "3 Revisions", "High Resolution", "Print Ready", "QR Code Integration"] },
          { name: "Premium", price: "₹549", features: ["1 Design", "5 Revisions", "High Resolution", "Print Ready", "QR Code Integration", "Social Media Kit"] }
        ]
      },
      {
        name: "Banners",
        icon: "🏷️",
        plans: [
          { name: "Basic", price: "₹449", features: ["1 Design", "2 Revisions", "Multiple Sizes"] },
          { name: "Medium", price: "₹499", features: ["1 Design", "3 Revisions", "Multiple Sizes", "Source Files"] },
          { name: "Premium", price: "₹549", features: ["1 Design", "5 Revisions", "Multiple Sizes", "Source Files", "Mockup Presentation"] }
        ]
      },
      {
        name: "Business & Visiting Cards",
        icon: "💼",
        plans: [
          { name: "Basic", price: "₹149", features: ["100 Cards", "Standard Paper", "1 Design"] },
          { name: "Medium", price: "₹199", features: ["200 Cards", "Premium Paper", "1 Design", "Free Delivery"] },
          { name: "Premium", price: "₹249", features: ["300 Cards", "Luxury Paper", "2 Designs", "Free Delivery", "Box Packaging"] }
        ]
      },
      {
        name: "Menu & Food Posters",
        icon: "🍽️",
        plans: [
          { name: "Basic", price: "₹599", features: ["1 Design", "3 Revisions", "High Resolution", "Print Ready"] },
          { name: "Medium", price: "₹649", features: ["1 Design", "3 Revisions", "High Resolution", "Print Ready", "Custom Layout"] },
          { name: "Premium", price: "₹699", features: ["1 Design", "5 Revisions", "High Resolution", "Print Ready", "Custom Layout", "Multiple Sizes"] }
        ]
      },
      {
        name: "CV / Resume Designs",
        icon: "📋",
        plans: [
          { name: "Basic", price: "₹249", features: ["1 Design", "2 Revisions", "PDF Format"] },
          { name: "Medium", price: "₹299", features: ["1 Design", "3 Revisions", "PDF Format", "Multiple Templates"] },
          { name: "Premium", price: "₹349", features: ["1 Design", "5 Revisions", "PDF Format", "Multiple Templates", "Cover Letter"] }
        ]
      },
      {
        name: "Automation Services",
        icon: "🤖",
        plans: [
          { name: "Chatbots - Basic", price: "₹999", features: ["Basic Responses", "Single Platform", "Setup Support"] },
          { name: "Chatbots - Medium", price: "₹1,699", features: ["Advanced Logic", "Multi-Platform", "24/7 Support", "Analytics"] },
          { name: "Chatbots - Premium", price: "₹2,199", features: ["AI-Powered", "All Platforms", "Advanced Analytics", "Custom Integration"], popular: true },
          { name: "Website Bots - Basic", price: "₹999", features: ["Basic Automation", "Single Website", "Setup Support"] },
          { name: "Website Bots - Medium", price: "₹1,699", features: ["Advanced Automation", "Multi-Website", "24/7 Support", "Analytics"] },
          { name: "Website Bots - Premium", price: "₹2,199", features: ["AI-Powered", "Unlimited Websites", "Advanced Analytics", "Custom Integration"] },
          { name: "Email Automation - Basic", price: "₹499", features: ["Basic Sequences", "1000 Emails/Month", "Templates"] },
          { name: "Email Automation - Medium", price: "₹649", features: ["Advanced Sequences", "5000 Emails/Month", "Custom Templates", "Analytics"] },
          { name: "Email Automation - Premium", price: "₹849", features: ["Unlimited Sequences", "Unlimited Emails", "Custom Templates", "Advanced Analytics", "A/B Testing"] },
          { name: "Telegram Bots - Basic", price: "₹349", features: ["Basic Bot", "Single Channel", "Setup Support"] },
          { name: "Telegram Bots - Medium", price: "₹449", features: ["Advanced Bot", "Multi-Channel", "24/7 Support", "Analytics"] },
          { name: "Telegram Bots - Premium", price: "₹649", features: ["AI-Powered", "Unlimited Channels", "Advanced Analytics", "Custom Integration"] }
        ]
      },
      {
        name: "Website Development",
        icon: "🌐",
        plans: [
          { name: "Professional Website - Basic", price: "₹2,599", features: ["5 Pages", "Responsive Design", "Basic SEO", "Contact Form"] },
          { name: "Professional Website - Medium", price: "₹3,999", features: ["10 Pages", "Advanced SEO", "CMS Integration", "Analytics", "1 Year Support"] },
          { name: "Professional Website - Premium", price: "₹7,999", features: ["Unlimited Pages", "E-commerce Ready", "Advanced SEO", "Analytics", "2 Years Support", "Performance Optimization"], popular: true },
          { name: "E-Commerce Website - Basic", price: "₹9,999", features: ["Basic Store", "Payment Gateway", "Inventory Management", "Mobile Optimized"] },
          { name: "E-Commerce Website - Medium", price: "₹14,999", features: ["Advanced Store", "Multiple Gateways", "Advanced Inventory", "SEO Optimized", "Analytics"] },
          { name: "E-Commerce Website - Premium", price: "₹19,999", features: ["Custom E-commerce", "Multi-vendor Support", "Advanced Analytics", "Mobile App Ready", "24/7 Support"] },
          { name: "Web Apps - Basic", price: "₹24,999", features: ["Basic Web App", "Database Integration", "User Authentication", "Basic Analytics"] },
          { name: "Web Apps - Medium", price: "₹28,999", features: ["Advanced Web App", "Advanced Database", "User Management", "Advanced Analytics", "API Integration"] },
          { name: "Web Apps - Premium", price: "₹31,999", features: ["Custom Web App", "Advanced Features", "Complete User Management", "Advanced Analytics", "Third-party Integrations", "1 Year Support"] },
          { name: "Portfolio Website - Basic", price: "₹499", features: ["5 Pages", "Responsive Design", "Basic SEO", "Contact Form"] },
          { name: "Portfolio Website - Medium", price: "₹699", features: ["10 Pages", "Advanced SEO", "CMS Integration", "Analytics"] },
          { name: "Portfolio Website - Premium", price: "₹999", features: ["Unlimited Pages", "E-commerce Ready", "Advanced SEO", "Analytics", "Blog Integration"] }
        ]
      },
      {
        name: "Website Maintenance (Monthly)",
        icon: "🛠️",
        plans: [
          { name: "Basic", price: "₹2,599", features: ["Regular Updates", "Security Monitoring", "Performance Check", "Monthly Report"] },
          { name: "Medium", price: "₹7,999", features: ["Regular Updates", "Security Monitoring", "Performance Optimization", "Weekly Backups", "Priority Support", "Monthly Report"] },
          { name: "Premium", price: "₹17,999", features: ["Regular Updates", "Advanced Security", "Performance Optimization", "Daily Backups", "24/7 Support", "Monthly Report", "Content Updates"], popular: true }
        ]
      }
    ]
  };

  const getCurrentPlans = () => {
    if (selectedCategory === 'all') {
      return Object.values(pricingPlans).flat();
    }
    return pricingPlans[selectedCategory as keyof typeof pricingPlans] || [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 via-transparent to-red-500/10" />

      {/* Enhanced Floating Elements */}
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
        {[...Array(8)].map((_, i) => (
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-white/60 hover:text-white mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </ScrollReveal>

          <div className="text-center mb-16">
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/30 rounded-full mb-8 backdrop-blur-sm shadow-lg"
              >
                <DollarSign className="w-6 h-6 text-red-400 mr-3 animate-pulse" />
                <span className="text-lg font-semibold text-red-400">Explore Pricing</span>
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
                  <span className="block mb-2" style={{ color: '#D71B1B' }}>
                    Premium Digital
                  </span>
                  <span className="text-white">Solutions</span>
                </h1>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-4xl mx-auto mb-12"
              >
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                  Transparent Plans. Maximum Value. Exceptional Results.
                </p>
              </motion.div>
            </ScrollReveal>

            {/* Category Filter */}
            <ScrollReveal>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/25'
                        : 'text-white/80 hover:text-white hover:bg-red-500/10 border border-red-500/30 hover:border-red-400/50 backdrop-blur-sm'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </motion.button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-12">
            {getCurrentPlans().map((service, serviceIndex) => (
              <ScrollReveal key={serviceIndex} delay={serviceIndex * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative p-10 bg-gradient-to-br from-red-900/20 via-red-900/10 to-red-900/5 border border-red-500/30 rounded-3xl backdrop-blur-xl hover:border-red-400/50 transition-all duration-500 shadow-2xl hover:shadow-red-500/20"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <div className="text-5xl animate-bounce">{service.icon}</div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-red-400 font-medium">Professional {service.name.toLowerCase()} solutions</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {service.plans.map((plan, planIndex) => (
                      <motion.div
                        key={planIndex}
                        whileHover={{ scale: 1.05, y: -8, rotateY: 2 }}
                        className={`relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500 ${
                          plan.popular
                            ? 'bg-gradient-to-br from-red-600/20 to-red-700/20 border-red-400/60 shadow-2xl shadow-red-500/25'
                            : 'bg-gradient-to-br from-red-900/15 to-red-900/5 border-red-500/30 hover:border-red-400/50 hover:shadow-lg hover:shadow-red-500/10'
                        }`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <span className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full text-sm font-bold shadow-lg">
                              ⭐ Most Popular
                            </span>
                          </div>
                        )}

                        <div className="text-center mb-6">
                          <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
                          <div className="text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-4">{plan.price}</div>
                        </div>

                        <ul className="space-y-3 mb-8">
                          {plan.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: featureIndex * 0.1 }}
                              className="flex items-center text-white/80 text-sm"
                            >
                              <Check className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>

                        <motion.button
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 30px rgba(215, 27, 27, 0.4)",
                            background: plan.popular
                              ? "linear-gradient(135deg, #dc2626, #ef4444)"
                              : "linear-gradient(135deg, rgba(215, 27, 27, 0.8), rgba(239, 68, 68, 0.6))"
                          }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                            plan.popular
                              ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                              : 'bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-400 border border-red-500/50 hover:text-white hover:border-red-400'
                          }`}
                        >
                          Get Quote
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Call to Action */}
          <ScrollReveal className="text-center mt-20">
            <div className="relative bg-gradient-to-br from-red-900/20 via-red-800/15 to-red-900/10 border-2 border-red-500/40 rounded-3xl p-12 backdrop-blur-xl shadow-2xl hover:shadow-red-500/20 transition-all duration-500 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-red-500/5" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-400/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-bold mb-4">
                  <span style={{ color: '#D71B1B' }}>Ready to Get</span>
                  <span className="text-white"> Started?</span>
                </h3>
                <p className="text-white/80 mb-8 text-xl max-w-2xl mx-auto">
                  Let's discuss your project and find the perfect solution for your needs.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 text-white/80 bg-red-900/20 px-4 py-2 rounded-full border border-red-500/30"
                  >
                    <span className="font-semibold">📞 +91 92358 23255</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 text-white/80 bg-red-900/20 px-4 py-2 rounded-full border border-red-500/30"
                  >
                    <span className="font-semibold">✉️ catalystcrewcreators@gmail.com</span>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/contact"
                      className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-red-600/25 hover:shadow-red-600/40 transition-all duration-300"
                    >
                      <span>Contact Us</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 relative bg-gradient-to-br from-red-900/5 via-transparent to-red-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                  <span className="block mb-2" style={{ color: '#D71B1B' }}>Additional</span>
                  <span className="text-white">Services</span>
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Transparent pricing for all your digital needs
                </p>
              </div>
            </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Website Maintenance",
                price: "₹2,599/month",
                icon: <Zap className="w-8 h-8" />,
                features: ["Regular Updates", "Security Monitoring", "Performance Optimization", "24/7 Support"],
                gradient: "from-red-500/20 to-red-600/20"
              },
              {
                title: "SEO Services",
                price: "₹7,999/month",
                icon: <TrendingUp className="w-8 h-8" />,
                features: ["Keyword Research", "Content Optimization", "Link Building", "Monthly Reports"],
                gradient: "from-red-400/20 to-red-500/20"
              },
              {
                title: "Content Management",
                price: "₹4,999/month",
                icon: <Award className="w-8 h-8" />,
                features: ["Content Updates", "Blog Management", "Social Media", "Analytics Reports"],
                gradient: "from-red-600/20 to-red-700/20"
              }
            ].map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -8 }}
                  className={`relative bg-gradient-to-br ${service.gradient} border border-red-500/30 rounded-3xl p-8 backdrop-blur-xl hover:border-red-400/50 transition-all duration-500 text-center shadow-lg hover:shadow-red-500/20 overflow-hidden`}
                >
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-600/5 via-transparent to-red-500/5" />

                  <div className="relative z-10">
                    <motion.div
                      className="text-red-400 mb-6 flex justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <div className="text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-6">{service.price}</div>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="text-white/70 text-sm flex items-center justify-center"
                        >
                          <Check className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        background: "linear-gradient(135deg, rgba(215, 27, 27, 0.8), rgba(239, 68, 68, 0.9))"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-4 bg-red-500/20 text-red-400 rounded-xl font-semibold hover:text-white transition-all duration-300 border border-red-500/50 hover:border-red-400 backdrop-blur-sm"
                    >
                      Get Started
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

export default Pricing;
