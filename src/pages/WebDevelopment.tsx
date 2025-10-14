import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Code,
  Smartphone,
  Globe,
  Database,
  Cloud,
  CheckCircle,
} from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollAnimations';

const WebDevelopment = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Custom Web Development",
      description: "Tailored web solutions built with modern frameworks and technologies"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Solutions",
      description: "Robust server-side architecture and API development"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Integration",
      description: "Scalable cloud solutions and DevOps implementation"
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "React Native", category: "Mobile" },
    { name: "Flutter", category: "Mobile" },
    { name: "AWS", category: "Cloud" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "TypeScript", category: "Language" }
  ];

  const packages = [
    {
      name: "MVP Development",
      price: "₹2,50,000",
      description: "Launch your idea with a minimum viable product",
      features: [
        "Core feature development",
        "Basic UI/UX design",
        "Database setup",
        "API development",
        "3 months support",
        "Deployment included"
      ]
    },
    {
      name: "Full-Stack Solution",
      price: "₹7,50,000",
      description: "Complete web application with all features",
      features: [
        "Custom design & branding",
        "Full-stack development",
        "Advanced integrations",
        "Performance optimization",
        "6 months support",
        "Analytics & monitoring"
      ],
      popular: true
    },
    {
      name: "Enterprise Platform",
      price: "₹15,00,000",
      description: "Scalable platform for large organizations",
      features: [
        "Multi-tenant architecture",
        "Advanced security",
        "Custom integrations",
        "24/7 monitoring",
        "12 months support",
        "Dedicated team"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20">
        <div className="absolute inset-0 bg-blue-900" />
        <div className="absolute inset-0 bg-blue-900/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-8"
              >
                <Code className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm text-blue-400 font-medium">Web & App Development</span>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
                <span className="block mb-2" style={{ color: '#3B82F6' }}>Cutting-Edge</span>
                <span className="text-white">Digital Solutions</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Build powerful web applications and mobile apps with our expert development team.
                We turn your ideas into scalable, user-friendly digital experiences.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="group relative px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-500 flex items-center space-x-3 overflow-hidden"
                  >
                    <span className="relative z-10">Start Your Project</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/portfolio"
                    className="px-10 py-5 border-2 border-blue-500/50 text-blue-400 hover:bg-blue-600 hover:text-white rounded-2xl font-bold text-lg transition-all duration-500 flex items-center space-x-3"
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
                <span className="block mb-2" style={{ color: '#3B82F6' }}>Development</span>
                <span className="text-white">Expertise</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                From concept to deployment, we deliver robust, scalable, and innovative digital solutions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group relative p-8 bg-blue-900/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl hover:border-blue-400/50 transition-all duration-500"
                >
                  <motion.div
                    className="text-blue-400 mb-4 group-hover:scale-125 transition-all duration-500"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 relative bg-gradient-to-br from-blue-900/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#3B82F6' }}>Technology</span>
                <span className="text-white">Stack</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We work with cutting-edge technologies to deliver modern, scalable solutions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <ScrollReveal key={tech.name} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="group relative p-6 bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/40 rounded-xl text-center"
                >
                  <div className="text-blue-400 font-semibold text-lg mb-2">{tech.name}</div>
                  <div className="text-white/60 text-sm">{tech.category}</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                <span className="block mb-2" style={{ color: '#3B82F6' }}>Development</span>
                <span className="text-white">Process</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Planning & Analysis",
                description: "Requirements gathering, technical specifications, and project planning"
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description: "UI/UX design, wireframing, and interactive prototyping"
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Agile development, continuous integration, and rigorous testing"
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Production deployment, monitoring, and ongoing maintenance"
              }
            ].map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative p-8 bg-blue-900/30 border border-blue-500/40 rounded-2xl"
                >
                  <div className="text-6xl font-bold text-blue-400 mb-4">{item.step}</div>
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
                <span className="block mb-2" style={{ color: '#3B82F6' }}>Development</span>
                <span className="text-white">Packages</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Choose the perfect development package for your project requirements.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <ScrollReveal key={pkg.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  className={`relative p-8 bg-blue-900/20 border rounded-2xl backdrop-blur-xl transition-all duration-500 ${
                    pkg.popular
                      ? 'border-blue-400 shadow-2xl shadow-blue-500/20'
                      : 'border-blue-500/30 hover:border-blue-400/50'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-blue-400 mb-2">{pkg.price}</div>
                    <p className="text-white/60">{pkg.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'border-2 border-blue-500/50 text-blue-400 hover:bg-blue-600 hover:text-white'
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
      <section className="py-24 relative bg-gradient-to-br from-blue-900/10 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              <span className="block mb-2" style={{ color: '#3B82F6' }}>Ready to Build</span>
              <span className="text-white">Something Amazing?</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Let's discuss your development needs and bring your vision to life with cutting-edge technology.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-blue-600/25"
              >
                <span>Start Your Development Project</span>
                <ArrowLeft className="w-6 h-6 rotate-180" />
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
