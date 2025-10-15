import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Star,
  Quote,
  Award,
  TrendingUp,
  MessageCircle
} from 'lucide-react';
import { ScrollReveal, FloatingElement } from '../components/ui/ScrollAnimations';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Deepanshu Bajpai",
      role: "Owner & CEO",
      company: "Sulax Solar",
      image: "👨‍💼",
      content: "Catalyst Crew transformed our vision into a stunning digital presence. Their creativity and technical skills helped us communicate our brand effortlessly. The website they built has significantly increased our customer engagement and business inquiries.",
      rating: 5,
      service: "Web Development",
      project: "Company Website & Branding",
      date: "March 2024",
      featured: true
    },
    {
      id: 2,
      name: "Krishna",
      role: "Owner & CEO",
      company: "Posterewa",
      image: "👨‍🎨",
      content: "From concept to final design, Catalyst Crew delivered beyond expectations. Their attention to detail made our posters truly stand out. The quality of work and professional approach exceeded our expectations completely.",
      rating: 5,
      service: "Graphic Design",
      project: "Poster Design Collection",
      date: "February 2024",
      featured: true
    },
    {
      id: 3,
      name: "Suryansh",
      role: "B.Tech Student",
      company: "Portfolio Client",
      image: "👨‍🎓",
      content: "They turned my simple portfolio idea into a professional showcase that perfectly reflects my skills and personality. The website looks amazing and has helped me stand out in my job applications.",
      rating: 5,
      service: "Portfolio Development",
      project: "Personal Portfolio Website",
      date: "January 2024",
      featured: false
    },
    {
      id: 4,
      name: "Twinkle Pal",
      role: "BBA Student",
      company: "Portfolio Client",
      image: "👩‍🎓",
      content: "Catalyst Crew created an impressive portfolio that helped me stand out in my BBA program. Their design perfectly captured my professional aspirations and the quality exceeded my expectations.",
      rating: 5,
      service: "Portfolio Design",
      project: "Student Portfolio",
      date: "December 2023",
      featured: false
    },
    {
      id: 5,
      name: "Ravi Sharma",
      role: "Marketing Manager",
      company: "TechStart Solutions",
      image: "👨‍💼",
      content: "The digital marketing campaign by Catalyst Crew increased our online visibility by 300%. Their strategic approach and creative execution delivered measurable results that exceeded our ROI expectations.",
      rating: 5,
      service: "Digital Marketing",
      project: "Marketing Campaign",
      date: "November 2023",
      featured: true
    },
    {
      id: 6,
      name: "Priya Mehta",
      role: "E-commerce Owner",
      company: "Fashion Boutique",
      image: "👩‍💼",
      content: "Our online store transformation by Catalyst Crew resulted in a 150% increase in sales. The user experience improvements and modern design have made our customers love shopping with us.",
      rating: 5,
      service: "E-commerce Development",
      project: "Online Store Redesign",
      date: "October 2023",
      featured: false
    }
  ];

  const stats = [
    { number: 15, suffix: "+", label: "Happy Clients" },
    { number: 98, suffix: "%", label: "Client Satisfaction" },
    { number: 20, suffix: "+", label: "Projects Completed" },
    { number: 4.9, suffix: "/5", label: "Average Rating" }
  ];

  const categories = [
    { name: "All Testimonials", count: testimonials.length },
    { name: "Web Development", count: testimonials.filter(t => t.service === "Web Development").length },
    { name: "Design", count: testimonials.filter(t => t.service.includes("Design") || t.service.includes("Portfolio")).length },
    { name: "Marketing", count: testimonials.filter(t => t.service === "Digital Marketing").length },
    { name: "E-commerce", count: testimonials.filter(t => t.service === "E-commerce Development").length }
  ];

  const featuredTestimonials = testimonials.filter(t => t.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-catalyst-dark via-black to-catalyst-red/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-catalyst-red/5 to-transparent" />
      {[...Array(8)].map((_, i) => (
        <FloatingElement key={i} intensity={15} speed={3 + i}>
          <div className={`absolute w-2 h-2 rounded-full opacity-30 ${
            i % 2 === 0 ? 'bg-catalyst-red' : 'bg-white'
          }`} style={{
            left: `${10 + (i * 12)}%`,
            top: `${20 + (i * 8)}%`
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
                <MessageCircle className="w-5 h-5 text-catalyst-red mr-3" />
                <span className="text-sm font-semibold text-catalyst-red">Client Testimonials</span>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#D71B1B' }}>What Our</span>
                <span className="text-white">Clients Say</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
                Don't just take our word for it. Read what our satisfied clients have to say about
                their experience working with Catalyst Crew and the results they've achieved.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="block" style={{ color: '#D71B1B' }}>Our Success Numbers</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Real results from real clients. Our track record speaks for itself.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <div className="text-center group relative">
                  <div className="flex justify-center mb-6">
                    <div className="relative w-24 h-24 bg-gradient-to-br from-catalyst-red/20 to-catalyst-red/5 rounded-3xl flex items-center justify-center border border-catalyst-red/20 group-hover:border-catalyst-red/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-catalyst-red/20 group-hover:scale-110">
                      <TrendingUp className="h-12 w-12 text-catalyst-red group-hover:scale-110 transition-transform duration-300" />
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-catalyst-red/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-catalyst-red mb-3">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-white/80 font-medium text-lg">{stat.label}</div>
                  {/* Decorative line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-catalyst-red to-transparent mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="block" style={{ color: '#D71B1B' }}>Featured Stories</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Hear from our most valued clients about their transformative experiences.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} direction="up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 backdrop-blur-sm hover:border-catalyst-red/30 transition-all duration-500 hover:shadow-2xl hover:shadow-catalyst-red/10"
                >
                  <div className="absolute top-6 right-6 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-catalyst-red to-red-600 text-white rounded-full text-sm font-semibold flex items-center shadow-lg shadow-catalyst-red/25">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  </div>

                  <div className="flex items-center mb-6">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="text-5xl mr-4 group-hover:scale-110 transition-transform duration-300"
                    >
                      {testimonial.image}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-catalyst-red transition-colors duration-300">{testimonial.name}</h3>
                      <p className="text-catalyst-red font-medium">{testimonial.role}</p>
                      <p className="text-white/60 text-sm group-hover:text-white/70 transition-colors duration-300">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-catalyst-red/30 group-hover:text-catalyst-red/50 transition-colors duration-300" />
                    <p className="text-white/80 leading-relaxed mb-6 pl-6 group-hover:text-white/90 transition-colors duration-300">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <div className="text-sm text-white/60 group-hover:text-white/70 transition-colors duration-300">
                      {testimonial.service} • {testimonial.date}
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-catalyst-red/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="block" style={{ color: '#D71B1B' }}>All Testimonials</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Every client story matters to us. Read through our complete collection of testimonials.
              </p>
            </div>
          </ScrollReveal>

          {/* Category Filter */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="px-6 py-3 rounded-xl font-medium transition-all duration-200 text-white/80 hover:text-white hover:bg-white/5 border border-white/20"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} direction="up" delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-sm hover:border-catalyst-red/30 transition-all duration-500 hover:shadow-2xl hover:shadow-catalyst-red/10"
                >
                  <div className="flex items-center mb-4">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="text-4xl mr-3 group-hover:scale-110 transition-transform duration-300"
                    >
                      {testimonial.image}
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-catalyst-red transition-colors duration-300">{testimonial.name}</h3>
                      <p className="text-catalyst-red text-sm">{testimonial.role}</p>
                      <p className="text-white/60 text-xs group-hover:text-white/70 transition-colors duration-300">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="relative mb-4">
                    <Quote className="absolute -top-1 -left-1 w-6 h-6 text-catalyst-red/30 group-hover:text-catalyst-red/50 transition-colors duration-300" />
                    <p className="text-white/70 text-sm leading-relaxed pl-5 line-clamp-4 group-hover:text-white/80 transition-colors duration-300">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <div className="text-xs text-white/60 group-hover:text-white/70 transition-colors duration-300">
                      {testimonial.service}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-white/60 group-hover:text-white/70 transition-colors duration-300">
                      <span>{testimonial.project}</span>
                      <span>{testimonial.date}</span>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-catalyst-red/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center bg-gradient-to-br from-catalyst-red/10 to-orange-500/10 border border-catalyst-red/30 rounded-3xl p-12 backdrop-blur-sm">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Ready to Join
                <span className="block mt-2" style={{ color: '#D71B1B' }}>Our Success Stories?</span>
              </h2>

              <p className="text-xl text-white/80 mb-12">
                Start your project with Catalyst Crew and become our next success story.
                Let's create something amazing together.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-catalyst-red to-red-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-catalyst-red/25 hover:shadow-catalyst-red/40 transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Start Your Project</span>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center space-x-3 px-10 py-5 border-2 border-catalyst-red/50 text-catalyst-red hover:bg-catalyst-red hover:text-white rounded-2xl font-bold text-lg transition-all duration-300 backdrop-blur-sm"
                  >
                    <Award className="w-5 h-5" />
                    <span>View Our Work</span>
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

export default Testimonials;
