import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Users,
  Target,
  Award,
  Star,
  Heart,
  Zap,
  Globe,
  Rocket,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { ScrollReveal, FloatingElement } from '../components/ui/ScrollAnimations';

const About = () => {
  const stats = [
    { number: 2024, label: 'Founded', icon: Rocket },
    { number: 7, label: 'Team Members', icon: Users },
    { number: 20, label: 'Projects Completed', icon: Award },
    { number: 15, label: 'Happy Clients', icon: Star }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies to deliver exceptional results."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Client Focused",
      description: "Your success is our priority. We build lasting partnerships based on trust and results."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Excellence Always",
      description: "We maintain the highest standards in everything we do, from code to customer service."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "Our solutions reach across borders, making a difference in businesses worldwide."
    }
  ];

  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern frameworks for optimal performance.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "E-Commerce",
      description: "Online stores that convert visitors into loyal customers.",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Web Applications",
      description: "Powerful web apps that solve complex business challenges.",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const team = [
    {
      name: "Arpit Bajpai",
      role: "Founder & CEO",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/arpit.png?updatedAt=1755974380813",
      bio: "Visionary leader driving innovation and growth"
    },
    {
      name: "Ashwin Jauhary",
      role: "Managing Director",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/ashwin.png?updatedAt=1755974380714",
      bio: "Technical expert ensuring project excellence"
    },
    {
      name: "Anurag Tiwari",
      role: "Creative Designer",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/anurag.png?updatedAt=1755974380561",
      bio: "Creative designer with expertise in visual design and user experience"
    },
    {
      name: "Sanskriti Gupta",
      role: "Creative Head",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/sanskriti_pic-removebg-preview.png?updatedAt=1758098706275",
      bio: "Award-winning designer leading creative vision"
    },
    {
      name: "Atharva Sharma",
      role: "Technical Head",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/atharva.png?updatedAt=1755974380765",
      bio: "Full-stack development specialist"
    },
    {
      name: "Twinkle Pal",
      role: "Social Media Manager",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/twinkle%20png.png?updatedAt=1758099509007",
      bio: "Digital marketing and community expert"
    },
    {
      name: "Aviral Mishra",
      role: "Engagement Manager",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/aviral.png?updatedAt=1755974380465",
      bio: "Client relations and project coordination"
    }
  ];

  const testimonials = [
    {
      name: "Deepanshu Bajpai",
      role: "Owner & CEO",
      company: "Sulax Solar",
      content: "Catalyst Crew transformed our vision into a stunning digital presence. Their creativity and technical skills helped us communicate our brand effortlessly.",
      image: "👨‍💼"
    },
    {
      name: "Krishna",
      role: "Owner & CEO",
      company: "Posterewa",
      content: "From concept to final design, Catalyst Crew delivered beyond expectations. Their attention to detail made our posters truly stand out.",
      image: "👨‍🎨"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-catalyst-dark via-black to-catalyst-red/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-catalyst-red/5 to-transparent" />
      {[...Array(6)].map((_, i) => (
        <FloatingElement key={i} intensity={20} speed={4 + i}>
          <div className={`absolute w-3 h-3 rounded-full opacity-40 ${
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
                className="inline-flex items-center px-4 py-2 bg-catalyst-red/10 border border-catalyst-red/30 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-catalyst-red mr-2" />
                <span className="text-sm text-catalyst-red font-medium">About Us</span>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#D71B1B' }}>Our Story</span>
                <span className="text-white">Innovation & Excellence</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
                We are a collective of passionate web developers, designers, and digital strategists dedicated to creating exceptional online experiences.
              </p>
            </ScrollReveal>
          </div>

          {/* Stats Section */}
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="relative w-24 h-24 bg-gradient-to-br from-catalyst-red/20 to-catalyst-red/5 rounded-3xl flex items-center justify-center border border-catalyst-red/20 group-hover:border-catalyst-red/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-catalyst-red/20 group-hover:scale-110">
                      <stat.icon className="h-12 w-12 text-catalyst-red group-hover:scale-110 transition-transform duration-300" />
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-catalyst-red/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-catalyst-red mb-3">
                    {stat.number}{stat.number === 2024 ? '' : '+'}
                  </div>
                  <div className="text-white/80 font-medium text-lg">{stat.label}</div>
                  {/* Decorative line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-catalyst-red to-transparent mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-catalyst-red/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="block" style={{ color: '#D71B1B' }}>Who We Are</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-4 md:space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                    Catalyst Crew is a collective of passionate web developers, designers, and digital strategists dedicated to creating exceptional online experiences. Founded in 2024, we've grown from a small team of enthusiasts to a full-service web development agency.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="text-white/70 leading-relaxed">
                    Our approach combines technical expertise with creative vision to deliver websites that not only look stunning but perform exceptionally. We believe in the power of collaboration and work closely with our clients to understand their unique needs and goals.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <p className="text-white/70 leading-relaxed">
                    What sets us apart is our commitment to staying ahead of the curve. We're constantly exploring new technologies and techniques to ensure our clients get the most innovative solutions available.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/team"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-catalyst-red to-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-catalyst-red/25 transition-all duration-300 w-full sm:w-auto justify-center"
                    >
                      <Users className="w-5 h-5" />
                      <span>Meet The Team</span>
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href="https://online.fliphtml5.com/Catalyst_Crew/rwae/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 md:px-8 py-3 md:py-4 border-2 border-catalyst-red/50 text-catalyst-red hover:bg-catalyst-red hover:text-white rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm w-full sm:w-auto justify-center"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Our Brochure</span>
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Our Brand</h3>

                  {/* Company Logo Section */}
                  <div className="flex justify-center mb-6 md:mb-8">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-catalyst-red/20 to-catalyst-red/5 rounded-3xl border border-white/20 flex items-center justify-center"
                    >
                      <img
                        src="https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/catalyst%20crew%20logo.jpg?updatedAt=1758447247413"
                        alt="Catalyst Crew Logo"
                        className="w-16 h-16 md:w-24 md:h-24 object-contain"
                      />
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-catalyst-red/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  </div>

                  <p className="text-white/70 text-center leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                    Our logo represents the fusion of creativity and technology, symbolizing our commitment to innovative solutions and exceptional results.
                  </p>

                  <div className="space-y-3 md:space-y-4">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="group flex items-center space-x-3 md:space-x-4 p-4 md:p-6 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl hover:bg-gradient-to-r hover:from-white/15 hover:to-white/10 border border-white/20 hover:border-catalyst-red/30 transition-all duration-500 hover:shadow-lg hover:shadow-catalyst-red/10"
                      >
                        <motion.div
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                          className="text-catalyst-red group-hover:scale-110 transition-transform duration-300 text-lg md:text-xl"
                        >
                          {service.icon}
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold group-hover:text-catalyst-red transition-colors duration-300 text-sm md:text-base">{service.title}</h4>
                          <p className="text-white/70 text-xs md:text-sm group-hover:text-white/80 transition-colors duration-300">{service.description}</p>
                        </div>
                        {/* Hover indicator */}
                        <motion.div
                          initial={{ x: -10, opacity: 0 }}
                          whileHover={{ x: 0, opacity: 1 }}
                          className="w-1.5 h-1.5 md:w-2 md:h-2 bg-catalyst-red rounded-full"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-catalyst-red/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="block" style={{ color: '#D71B1B' }}>Our Values</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group p-8 bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-3xl backdrop-blur-sm hover:border-catalyst-red/30 transition-all duration-300"
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-catalyst-red/20 to-catalyst-red/5 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-catalyst-red/20 transition-all duration-500"
                    whileHover={{ rotate: [0, -15, 15, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-catalyst-red group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-catalyst-red/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="block" style={{ color: '#D71B1B' }}>Meet The Crew</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                The talented individuals behind our success, bringing creativity, expertise, and passion to every project.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-3xl">
                    <div className="aspect-square bg-gradient-to-br from-catalyst-red/20 to-catalyst-red/5 border border-white/20 rounded-3xl backdrop-blur-sm group-hover:border-catalyst-red/30 transition-all duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="w-20 h-20 border-2 border-catalyst-red/30 rounded-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 object-cover rounded-full border-2 border-white/20"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-3xl"
                    >
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-catalyst-red font-medium mb-3">{member.role}</p>
                        <p className="text-white/80 text-sm">{member.bio}</p>
                      </div>
                    </motion.div>
                  </div>

                  <div className="mt-6 text-center">
                    <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-catalyst-red font-medium">{member.role}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/team"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-catalyst-red hover:bg-catalyst-red/90 text-white rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-catalyst-red/25 backdrop-blur-sm"
              >
                <Users className="w-5 h-5" />
                <span>Know About Team</span>
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="block" style={{ color: '#D71B1B' }}>Client Testimonials</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 backdrop-blur-sm hover:border-catalyst-red/30 transition-all duration-500 hover:shadow-2xl hover:shadow-catalyst-red/10"
                >
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

                  <p className="text-white/80 leading-relaxed italic group-hover:text-white/90 transition-colors duration-300">
                    "{testimonial.content}"
                  </p>

                  {/* Decorative quote mark */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4 text-catalyst-red/20 text-6xl font-serif"
                  >
                    "
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/testimonials"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-catalyst-red/50 text-catalyst-red hover:bg-catalyst-red hover:text-white rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                <span>View All Testimonials</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="block" style={{ color: '#D71B1B' }}>Our Projects</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Explore our portfolio of successful projects and see how we've helped businesses transform their digital presence.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Sulax Solar", type: "Website", icon: "☀️", url: "https://sulaxsolar.com/" },
              { name: "Catalyst Crew Inventory", type: "Web App", icon: "📊", url: "#" },
              { name: "Premium Portfolio", type: "Portfolio", icon: "🎨", url: "https://ashwin-portolio-react.vercel.app/" },
              { name: "Our Website", type: "Company Site", icon: "🚀", url: "https://catalyst-crew-alpha.vercel.app/" }
            ].map((project, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-sm hover:border-catalyst-red/30 transition-all duration-500 hover:shadow-2xl hover:shadow-catalyst-red/10 cursor-pointer"
                  onClick={() => project.url !== "#" && window.open(project.url, '_blank')}
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  >
                    {project.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-catalyst-red transition-colors duration-300">{project.name}</h3>
                  <p className="text-catalyst-red text-sm font-medium group-hover:text-catalyst-red/90 transition-colors duration-300">{project.type}</p>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-catalyst-red/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Progress indicator */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="absolute bottom-4 right-4 w-8 h-8 border-2 border-catalyst-red/30 rounded-full flex items-center justify-center"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-2 h-2 border border-catalyst-red border-t-transparent rounded-full"
                    />
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/portfolio"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-catalyst-red/50 text-catalyst-red hover:bg-catalyst-red hover:text-white rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                <span>View All Projects</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;