import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Target,
  Users,
  Rocket,
  Zap,
  ArrowLeft,
  CheckCircle,
  Globe,
  Star,
  TrendingUp
} from 'lucide-react';
import { ScrollReveal, FloatingElement } from '../components/ui/ScrollAnimations';

const Mission = () => {
  const missionValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Client-First Approach",
      description: "Every project starts with understanding your unique goals and challenges. We don't just build websites—we solve problems."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation-Driven",
      description: "We stay ahead of the curve by adopting the latest technologies and methodologies to deliver cutting-edge solutions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Partnership",
      description: "We work closely with you throughout the entire process, ensuring transparency and alignment with your vision."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Results-Focused",
      description: "Our success is measured by your success. We create solutions that drive growth and deliver measurable results."
    }
  ];

  const ourProcess = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into understanding your business, target audience, and goals to create a comprehensive strategy."
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Our team creates stunning designs and develops robust solutions using cutting-edge technologies and best practices."
    },
    {
      step: "03",
      title: "Testing & Launch",
      description: "Rigorous testing ensures quality, followed by smooth deployment and launch with ongoing support."
    },
    {
      step: "04",
      title: "Growth & Optimization",
      description: "We continue to monitor, optimize, and scale your digital presence for long-term success."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-catalyst-dark via-black to-catalyst-red/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-catalyst-red/5 to-transparent" />
      {[...Array(6)].map((_, i) => (
        <FloatingElement key={i} intensity={15} speed={3 + i}>
          <div className={`absolute w-2 h-2 rounded-full opacity-30 ${
            i % 2 === 0 ? 'bg-catalyst-red' : 'bg-white'
          }`} style={{
            left: `${15 + (i * 15)}%`,
            top: `${20 + (i * 12)}%`
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
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-catalyst-red/10 to-orange-500/10 border border-catalyst-red/30 rounded-full mb-8 backdrop-blur-sm"
              >
                <Target className="w-5 h-5 text-catalyst-red mr-3" />
                <span className="text-sm font-semibold text-catalyst-red">Our Mission</span>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#D71B1B' }}>Our Mission</span>
                <span className="text-white">& Vision</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
                Catalyzing digital transformation through innovative web experiences that empower businesses
                to thrive in the modern digital landscape.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-8 bg-gradient-to-br from-catalyst-red/10 to-orange-500/10 border border-catalyst-red/30 rounded-3xl backdrop-blur-sm"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="w-16 h-16 bg-catalyst-red/20 rounded-2xl flex items-center justify-center mb-6"
                  >
                    <Target className="w-8 h-8 text-catalyst-red" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-white/80 leading-relaxed text-lg mb-6">
                    To empower businesses with innovative digital solutions that drive growth, enhance user experiences,
                    and create lasting impact in the digital landscape. We believe every business deserves a
                    powerful online presence that reflects their unique value proposition.
                  </p>
                  <ul className="space-y-3">
                    {["Cutting-edge web technologies", "User-centered design approach", "Scalable and maintainable solutions"].map((item, index) => (
                      <li key={index} className="flex items-center text-white/80">
                        <CheckCircle className="w-5 h-5 text-catalyst-red mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-8 bg-gradient-to-br from-blue-500/10 to-catalyst-red/10 border border-catalyst-red/30 rounded-3xl backdrop-blur-sm"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 bg-catalyst-red/20 rounded-2xl flex items-center justify-center mb-6"
                  >
                    <Globe className="w-8 h-8 text-catalyst-red" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-white/80 leading-relaxed text-lg mb-6">
                    To be the leading force in digital transformation, setting new standards for innovation,
                    creativity, and technological excellence globally. We envision a world where every business,
                    regardless of size, has access to world-class digital experiences.
                  </p>
                  <ul className="space-y-3">
                    {["Global digital excellence", "Innovation leadership", "Inclusive digital transformation"].map((item, index) => (
                      <li key={index} className="flex items-center text-white/80">
                        <Star className="w-5 h-5 text-catalyst-red mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="block" style={{ color: '#D71B1B' }}>Our Values</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                The principles that guide everything we do and drive us to deliver exceptional results.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionValues.map((value, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group p-8 bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-3xl backdrop-blur-sm hover:border-catalyst-red/30 transition-all duration-300"
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-catalyst-red/20 to-catalyst-red/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-catalyst-red">
                      {value.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="block" style={{ color: '#D71B1B' }}>Our Process</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                A proven methodology that ensures quality, efficiency, and exceptional results every time.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Process line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-catalyst-red/50 via-catalyst-red/30 to-catalyst-red/50 transform md:-translate-x-0.5" />

            <div className="space-y-16">
              {ourProcess.map((step, index) => (
                <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                  <motion.div
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Process dot */}
                    <motion.div
                      className="absolute left-8 md:left-1/2 w-4 h-4 bg-catalyst-red rounded-full border-4 border-black transform md:-translate-x-2 z-10"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <motion.div
                        className="p-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl backdrop-blur-sm hover:border-catalyst-red/30 transition-all duration-300"
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex items-center mb-4">
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, delay: index * 0.5 }}
                            className="w-12 h-12 bg-catalyst-red/20 rounded-xl flex items-center justify-center mr-4"
                          >
                            <div className="text-catalyst-red text-2xl font-bold">{step.step}</div>
                          </motion.div>
                          <div className="text-2xl font-bold text-catalyst-red">{step.step}</div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-white/70">{step.description}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Ready to Start
                <span className="block mt-2" style={{ color: '#D71B1B' }}>Your Project?</span>
              </h2>

              <p className="text-xl text-white/80 mb-12">
                Let's discuss how we can help transform your digital presence and achieve your business goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-catalyst-red to-red-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-catalyst-red/25 hover:shadow-catalyst-red/40 transition-all duration-300"
                  >
                    <span>Start Your Project</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowLeft className="w-5 h-5 rotate-180" />
                    </motion.div>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center space-x-3 px-10 py-5 border-2 border-catalyst-red/50 text-catalyst-red hover:bg-catalyst-red hover:text-white rounded-2xl font-bold text-lg transition-all duration-300 backdrop-blur-sm"
                  >
                    <span>View Our Work</span>
                    <TrendingUp className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Mission;
