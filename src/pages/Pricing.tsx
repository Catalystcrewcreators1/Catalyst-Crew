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
import { ScrollReveal, FloatingElement } from '../components/ui/ScrollAnimations';

interface Plan {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

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
    <div className="min-h-screen bg-gradient-to-br from-catalyst-dark via-black to-catalyst-red/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-catalyst-red/10 to-transparent" />
      {[...Array(12)].map((_, i) => (
        <FloatingElement key={i} intensity={20} speed={4 + i}>
          <div className={`absolute w-3 h-3 rounded-full opacity-40 ${
            i % 3 === 0 ? 'bg-catalyst-red' : i % 3 === 1 ? 'bg-blue-500' : 'bg-green-400'
          }`} style={{
            left: `${10 + (i * 8)}%`,
            top: `${15 + (i * 10)}%`
          }} />
        </FloatingElement>
      ))}

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
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
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-catalyst-red/20 to-orange-500/20 border-2 border-catalyst-red/40 rounded-full mb-8 backdrop-blur-sm shadow-lg shadow-catalyst-red/20"
              >
                <DollarSign className="w-6 h-6 text-catalyst-red mr-3 animate-pulse" />
                <span className="text-lg font-semibold text-catalyst-red">Explore Pricing</span>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#D71B1B' }}>🚀 Premium Digital</span>
                <span className="text-white">Solutions</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
                Transparent Plans. Maximum Value. Exceptional Results.
              </p>
            </ScrollReveal>

            {/* Category Filter */}
            <ScrollReveal>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-catalyst-red text-white shadow-lg shadow-catalyst-red/25'
                        : 'text-white/80 hover:text-white hover:bg-white/5 border border-white/20'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-12">
            {getCurrentPlans().map((service, serviceIndex) => (
              <ScrollReveal key={serviceIndex} direction="up" delay={serviceIndex * 0.1}>
                <div className="bg-gradient-to-br from-white/15 to-white/8 border border-white/30 rounded-3xl p-10 backdrop-blur-sm shadow-2xl hover:shadow-catalyst-red/20 transition-all duration-500">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <div className="text-5xl animate-bounce">{service.icon}</div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">{service.name}</h3>
                        <p className="text-white/70">Professional {service.name.toLowerCase()} solutions</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {service.plans.map((plan, planIndex) => (
                      <motion.div
                        key={planIndex}
                        whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
                        className={`relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500 ${
                          plan.popular
                            ? 'bg-gradient-to-br from-catalyst-red/20 to-orange-500/20 border-catalyst-red/50 shadow-2xl shadow-catalyst-red/20'
                            : 'bg-gradient-to-br from-white/10 to-white/5 border-white/30 hover:border-catalyst-red/40 hover:shadow-lg hover:shadow-catalyst-red/10'
                        }`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="px-4 py-1 bg-catalyst-red text-white rounded-full text-sm font-semibold">
                              Most Popular
                            </span>
                          </div>
                        )}

                        <div className="text-center mb-6">
                          <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                          <div className="text-3xl font-bold text-catalyst-red mb-4">{plan.price}</div>
                        </div>

                        <ul className="space-y-3 mb-8">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-white/80 text-sm">
                              <Check className="w-4 h-4 text-catalyst-red mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <motion.button
                          whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(215, 27, 27, 0.3)" }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                            plan.popular
                              ? 'bg-gradient-to-r from-catalyst-red to-orange-500 text-white shadow-lg hover:shadow-catalyst-red/30'
                              : 'bg-gradient-to-r from-white/20 to-white/10 text-white border border-white/30 hover:border-catalyst-red/50 hover:bg-catalyst-red/10 hover:text-catalyst-red'
                          }`}
                        >
                          Get Quote
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Call to Action */}
          <ScrollReveal className="text-center mt-16">
            <div className="bg-gradient-to-br from-catalyst-red/15 to-orange-500/15 border-2 border-catalyst-red/40 rounded-3xl p-12 backdrop-blur-sm shadow-2xl">
              <h3 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-white/80 mb-8 text-xl">
                Let's discuss your project and find the perfect solution for your needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 text-white/80">
                  <span>+91 92358 23255</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <span>catalystcrewcreators@gmail.com</span>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-catalyst-red to-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-catalyst-red/25 hover:shadow-catalyst-red/40 transition-all duration-300"
                  >
                    <span>Contact Us</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  <span style={{ color: '#D71B1B' }}>Choose Your Perfect Plan</span>
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
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-sm hover:border-catalyst-red/30 transition-all duration-300 text-center"
                >
                  <div className="text-catalyst-red mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <div className="text-2xl font-bold text-catalyst-red mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-white/70 text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-catalyst-red/10 text-catalyst-red rounded-xl font-semibold hover:bg-catalyst-red hover:text-white transition-all duration-300 border border-catalyst-red/30"
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
