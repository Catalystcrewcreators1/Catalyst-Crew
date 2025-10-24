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
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black" />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/30 via-transparent to-red-600/20" />

        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(215, 27, 27, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(215, 27, 27, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Radial gradients for depth */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/5 rounded-full blur-3xl" />
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large geometric shapes */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 left-10 w-40 h-40 border-2 border-red-500/20 rounded-full"
        />

        <motion.div
          animate={{
            y: [-30, 30, -30],
            rotate: [0, 180, 360],
            x: [0, 20, 0]
          }}
          transition={{
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-red-500/15 to-red-600/10 rounded-lg rotate-45 border border-red-400/20"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.8, 0.2],
            rotate: [0, 360]
          }}
          transition={{
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 15, repeat: Infinity, ease: "linear" }
          }}
          className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-red-400/30 rounded-full"
        />

        {/* Enhanced floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-40, 40, -40],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0.1, 0.9, 0.1],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className={`absolute rounded-full ${
              i % 4 === 0 ? 'bg-red-400' :
              i % 4 === 1 ? 'bg-red-500' :
              i % 4 === 2 ? 'bg-red-300' : 'bg-red-600'
            }`}
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + i * 8}%`,
              width: `${4 + i % 3}px`,
              height: `${4 + i % 3}px`,
            }}
          />
        ))}

        {/* Additional decorative elements */}
        <motion.div
          animate={{
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/3 right-1/4 w-16 h-16 border border-red-400/20 rounded-lg"
        />

        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-red-500/10 rounded-full"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/"
                className="inline-flex items-center space-x-2 text-white/60 hover:text-white mb-8 transition-all duration-300 hover:scale-105"
              >
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowLeft className="h-4 w-4" />
                </motion.div>
                <span>Back to Home</span>
              </Link>
            </motion.div>
          </ScrollReveal>

          <div className="text-center mb-16">
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-red-500/20 via-red-600/15 to-red-500/20 border-2 border-red-500/40 rounded-full mb-10 backdrop-blur-xl shadow-2xl shadow-red-500/20 hover:shadow-red-500/30 transition-all duration-500"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-full blur-xl" />

                <div className="relative flex items-center">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <DollarSign className="w-7 h-7 text-red-400 mr-4" />
                  </motion.div>
                  <span className="text-xl font-bold text-red-400 tracking-wide">Explore Our Pricing</span>
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-3 w-2 h-2 bg-red-400 rounded-full"
                  />
                </div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <h1 className="text-6xl md:text-8xl font-heading font-black leading-tight mb-4">
                  <span className="block mb-3 relative">
                    <span style={{ color: '#D71B1B' }} className="drop-shadow-2xl">
                      Premium Digital
                    </span>
                    {/* Text shadow effect */}
                    <div className="absolute inset-0 opacity-20 blur-sm -z-10" style={{ color: '#D71B1B' }}>
                      Premium Digital
                    </div>
                  </span>
                  <span className="text-white drop-shadow-xl">Solutions</span>
                </h1>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-5xl mx-auto mb-16"
              >
                <p className="text-2xl md:text-3xl text-white/90 leading-relaxed font-medium">
                  Transparent Plans. Maximum Value. <span className="font-bold" style={{ color: '#D71B1B' }}>Exceptional Results.</span>
                </p>

                {/* Decorative line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  className="h-1 rounded-full mt-8 mx-auto max-w-md" style={{ backgroundColor: '#D71B1B' }}
                />
              </motion.div>
            </ScrollReveal>

            {/* Enhanced Category Filter */}
            <ScrollReveal>
              <div className="flex flex-wrap justify-center gap-6 mb-16">
                {categories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{
                      scale: 1.08,
                      y: -8,
                      boxShadow: "0 15px 35px rgba(215, 27, 27, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 overflow-hidden ${
                      selectedCategory === category.id
                        ? 'text-white shadow-2xl border-2'
                        : 'text-white/80 hover:text-white hover:bg-red-500/15 border-2 hover:border-red-400/60 backdrop-blur-sm bg-red-900/10'
                    }`}
                    style={{
                      backgroundColor: selectedCategory === category.id ? '#D71B1B' : undefined,
                      borderColor: '#D71B1B'
                    }}
                  >
                    {/* Button background effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#D71B1B' }} />

                    <motion.div
                      className="relative z-10"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {category.icon}
                    </motion.div>
                    <span className="relative z-10">{category.name}</span>

                    {/* Popular indicator for selected */}
                    {selectedCategory === category.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D71B1B' }}
                      >
                        <span className="text-white text-xs">✓</span>
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-12">
            {getCurrentPlans().map((service, serviceIndex) => (
              <ScrollReveal key={serviceIndex} delay={serviceIndex * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.01, y: -5 }}
                  className="relative group"
                >
                  {/* Attractive service container */}
                  <div className="relative p-10 border rounded-3xl backdrop-blur-xl transition-all duration-500 shadow-xl" style={{ background: 'linear-gradient(135deg, rgba(215, 27, 27, 0.1), rgba(215, 27, 27, 0.05))', borderColor: '#D71B1B' }}>

                    {/* Service header with better styling */}
                    <div className="flex items-center justify-between mb-10">
                      <div className="flex items-center space-x-5">
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 10 }}
                          className="relative"
                        >
                          <div className="absolute inset-0 rounded-2xl blur-xl" style={{ backgroundColor: '#D71B1B' }} />
                          <div className="relative text-4xl p-3 rounded-2xl shadow-lg" style={{ background: `linear-gradient(135deg, ${'#D71B1B'}, ${'#D71B1B'})` }}>
                            {service.icon}
                          </div>
                        </motion.div>
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="font-medium" style={{ color: '#D71B1B' }}>Professional {service.name.toLowerCase()} solutions</p>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced pricing grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                      {service.plans.map((plan, planIndex) => (
                        <motion.div
                          key={planIndex}
                          whileHover={{ scale: 1.05, y: -8 }}
                          className="relative group/plan"
                        >
                          {/* Attractive plan card */}
                          <div className={`relative p-8 rounded-2xl border-2 backdrop-blur-sm transition-all duration-500 ${
                            plan.popular
                              ? 'border shadow-2xl'
                              : 'border hover:shadow-xl'
                          }`}
                          style={{
                            background: plan.popular
                              ? 'linear-gradient(135deg, rgba(215, 27, 27, 0.15), rgba(215, 27, 27, 0.1))'
                              : 'linear-gradient(135deg, rgba(215, 27, 27, 0.08), rgba(215, 27, 27, 0.03))',
                            borderColor: '#D71B1B'
                          }}>

                            {/* Popular badge */}
                            {plan.popular && (
                              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <span className="px-4 py-2 rounded-full text-sm font-bold shadow-lg" style={{ backgroundColor: '#D71B1B', color: 'white' }}>
                                  ⭐ Most Popular
                                </span>
                              </div>
                            )}

                            {/* Plan content */}
                            <div className="text-center mb-6">
                              <h4 className="text-2xl font-bold text-white mb-3">{plan.name}</h4>
                              <div className="text-3xl font-bold mb-2" style={{ color: '#D71B1B' }}>
                                {plan.price}
                              </div>
                            </div>

                            {/* Enhanced features list */}
                            <ul className="space-y-3 mb-8">
                              {plan.features.map((feature, featureIndex) => (
                                <motion.li
                                  key={featureIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: featureIndex * 0.1 }}
                                  className="flex items-center text-white/80 text-sm"
                                >
                                  <Check className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#D71B1B' }} />
                                  {feature}
                                </motion.li>
                              ))}
                            </ul>

                            {/* Attractive button */}
                            <motion.button
                              whileHover={{
                                scale: 1.05,
                                boxShadow: plan.popular
                                  ? '0 15px 35px rgba(215, 27, 27, 0.4)'
                                  : '0 10px 25px rgba(215, 27, 27, 0.3)'
                              }}
                              whileTap={{ scale: 0.95 }}
                              className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                                plan.popular
                                  ? 'text-white shadow-lg'
                                  : 'text-red-400 border hover:text-white hover:border-red-400'
                              }`}
                              style={{
                                backgroundColor: plan.popular ? '#D71B1B' : 'rgba(215, 27, 27, 0.2)',
                                borderColor: plan.popular ? '#D71B1B' : '#D71B1B'
                              }}
                            >
                              Get Quote
                            </motion.button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Call to Action */}
          <ScrollReveal className="text-center mt-24">
            <div className="relative border-2 rounded-3xl p-12 backdrop-blur-xl shadow-2xl transition-all duration-500" style={{ background: 'linear-gradient(135deg, rgba(215, 27, 27, 0.15), rgba(215, 27, 27, 0.1))', borderColor: '#D71B1B' }}>
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  <span style={{ color: '#D71B1B' }}>Ready to Get</span>
                  <span className="text-white"> Started?</span>
                </h3>
                <p className="text-white/80 mb-10 text-xl max-w-3xl mx-auto leading-relaxed">
                  Let's discuss your project and find the perfect solution for your needs.
                </p>

                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-10">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-3 text-white/90 px-6 py-3 rounded-xl border transition-all duration-300" style={{ backgroundColor: 'rgba(215, 27, 27, 0.2)', borderColor: '#D71B1B' }}
                  >
                    <span className="text-lg">📞</span>
                    <span className="font-bold">+91 92358 23255</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-3 text-white/90 px-6 py-3 rounded-xl border transition-all duration-300" style={{ backgroundColor: 'rgba(215, 27, 27, 0.2)', borderColor: '#D71B1B' }}
                  >
                    <span className="text-lg">✉️</span>
                    <span className="font-bold">catalystcrewcreators@gmail.com</span>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-3 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300" style={{ backgroundColor: '#D71B1B' }}
                  >
                    <span>🚀 Contact Us</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span style={{ color: '#D71B1B' }}>Additional</span>
                  <span className="text-white"> Services</span>
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
                features: ["Regular Updates", "Security Monitoring", "Performance Optimization", "24/7 Support"]
              },
              {
                title: "SEO Services",
                price: "₹7,999/month",
                icon: <TrendingUp className="w-8 h-8" />,
                features: ["Keyword Research", "Content Optimization", "Link Building", "Monthly Reports"]
              },
              {
                title: "Content Management",
                price: "₹4,999/month",
                icon: <Award className="w-8 h-8" />,
                features: ["Content Updates", "Blog Management", "Social Media", "Analytics Reports"]
              }
            ].map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -8 }}
                  className="relative border rounded-2xl p-8 backdrop-blur-xl transition-all duration-500 text-center shadow-xl" style={{ background: 'linear-gradient(135deg, rgba(215, 27, 27, 0.08), rgba(215, 27, 27, 0.03))', borderColor: '#D71B1B' }}
                >
                  <motion.div
                    className="mb-6 flex justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    style={{ color: '#D71B1B' }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <div className="text-3xl font-bold mb-6" style={{ color: '#D71B1B' }}>{service.price}</div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="text-white/70 text-sm flex items-center justify-center"
                      >
                        <Check className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: '#D71B1B' }} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 rounded-xl font-semibold transition-all duration-300 border" style={{ backgroundColor: 'rgba(215, 27, 27, 0.2)', color: '#D71B1B', borderColor: '#D71B1B' }}
                  >
                    Get Started
                  </motion.button>
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
