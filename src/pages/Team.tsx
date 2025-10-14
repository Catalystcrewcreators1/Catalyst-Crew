import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Users,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  Award,
  Star,
  Rocket,
  Target,
  TrendingUp,
  Globe,
  Facebook,
  Github
} from 'lucide-react';
import { ScrollReveal, FloatingElement } from '../components/ui/ScrollAnimations';

const Team = () => {
  const teamMembers = [
    {
      name: "Arpit Bajpai",
      role: "Founder & CEO",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/arpit.png?updatedAt=1755974380813",
      description: "Visionary leader with 10+ years in tech innovation and digital transformation. Passionate about building the future of web experiences.",
      email: "arpit.bajpai@catalystcrew.com",
      phone: "+91 98765 43210",
      social: {
        linkedin: "https://www.linkedin.com/in/arpit-bajpai-6780aa220/",
        github: "https://github.com/arpit0381",
        instagram: "https://www.instagram.com/arpitexplores/"
      },
      skills: ["Strategic Planning", "Business Development", "Team Leadership", "Innovation"],
      achievements: ["Built 200+ websites", "Led 50+ projects", "10+ years experience"]
    },
    {
      name: "Ashwin Jauhary",
      role: "Managing Director",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/ashwin.png?updatedAt=1755974380714",
      description: "Technical expert and strategic thinker. Leads our development team with a focus on cutting-edge technologies and best practices.",
      email: "ashwin.jauhary@catalystcrew.com",
      phone: "+91 98765 43211",
      social: {
        linkedin: "http://www.linkedin.com/in/Ashwin-Jauhary",
        github: "https://github.com/Ashwinjauhary",
        instagram: "https://www.instagram.com/just_ashwin9?igsh=aWt0ZjhnZGRhazlm"
      },
      skills: ["Project Management", "Technical Architecture", "Team Management", "Client Relations"],
      achievements: ["Delivered 150+ projects", "Managed 30+ developers", "5+ years leadership"]
    },
    {
      name: "Anurag Tiwari",
      role: "Creative Designer",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/anurag.png?updatedAt=1755974380561",
      description: "Creative designer with expertise in visual design and user experience. Brings innovative design solutions to every project.",
      email: "anurag.tiwari@catalystcrew.com",
      phone: "+91 98765 43217",
      social: {
        linkedin: "http://www.linkedin.com/in/anurag-tiwari0770",
        github: "https://github.com/anuragtiwari-7",
        instagram: "https://www.instagram.com/panditanuragtiwari__07?igsh=bWw5d2hqcmF6OHBz&utm_source=qr"
      },
      skills: ["UI/UX Design", "Graphic Design", "Brand Identity", "Creative Strategy"],
      achievements: ["Designed 100+ interfaces", "Award-winning designs", "6+ years experience"]
    },
    {
      name: "Sanskriti Gupta",
      role: "Creative Head",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/sanskriti_pic-removebg-preview.png?updatedAt=1758098706275",
      description: "Award-winning designer with global recognition. Leads our creative vision and ensures exceptional user experiences across all projects.",
      email: "sanskriti.gupta@catalystcrew.com",
      phone: "+91 98765 43218",
      social: {
        linkedin: "https://www.linkedin.com/in/sanskriti-gupta-a15978324",
        instagram: "https://www.linkedin.com/in/sanskriti-gupta-a15978324"
      },
      skills: ["UI/UX Design", "Brand Strategy", "Creative Direction", "Design Systems"],
      achievements: ["500+ designs created", "Award-winning portfolio", "8+ years experience"]
    },
    {
      name: "Atharva Sharma",
      role: "Technical Head",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/atharva.png?updatedAt=1755974380765",
      description: "Full-stack development expert specializing in modern web technologies. Ensures technical excellence and innovation in every project.",
      email: "atharva.sharma@catalystcrew.com",
      phone: "+91 98765 43219",
      social: {
        linkedin: "http://www.linkedin.com/in/atharvasharma2431560",
        github: "https://github.com/atharva-dev1",
        instagram: "https://www.instagram.com/mr_sharmaji88/profilecard/?igsh=bzlzbHgxaHZ2eDYz"
      },
      skills: ["Full-Stack Development", "System Architecture", "Performance Optimization", "Cloud Technologies"],
      achievements: ["Built 100+ applications", "Led technical teams", "7+ years development"]
    },
    {
      name: "Twinkle Pal",
      role: "Social Media Manager",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/twinkle%20png.png?updatedAt=1758099509007",
      description: "Digital marketing specialist with expertise in social media strategy and content creation. Builds our online presence and community engagement.",
      email: "twinkle.pal@catalystcrew.com",
      phone: "+91 98765 43220",
      social: {
        linkedin: "https://www.linkedin.com/in/twinkle-pal-55a774324",
        instagram: "https://www.linkedin.com/in/twinkle-pal-55a774324"
      },
      skills: ["Social Media Strategy", "Content Creation", "Community Management", "Digital Marketing"],
      achievements: ["10K+ followers grown", "500+ campaigns managed", "4+ years marketing"]
    },
    {
      name: "Aviral Mishra",
      role: "Engagement Manager",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/aviral.png?updatedAt=1755974380465",
      description: "Client relationship specialist focused on ensuring exceptional service delivery and customer satisfaction across all projects.",
      email: "aviral.mishra@catalystcrew.com",
      phone: "+91 98765 43221",
      social: {
        linkedin: "https://www.linkedin.com/in/aviral-mishra-93484430b/",
        github: "https://github.com/Aviral-Mishra18",
        instagram: "https://www.instagram.com/_its_aviral_mishra/"
      },
      skills: ["Client Relations", "Project Coordination", "Quality Assurance", "Communication"],
      achievements: ["100+ clients served", "99% satisfaction rate", "3+ years service"]
    }
  ];

  const companyStats = [
    { number: 200, suffix: "+", label: "Projects Completed" },
    { number: 50, suffix: "+", label: "Happy Clients" },
    { number: 15, suffix: "+", label: "Awards Won" },
    { number: 5, suffix: "+", label: "Years Experience" }
  ];

  const teamValues = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies to deliver exceptional results that set new industry standards."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Spirit",
      description: "We believe in the power of teamwork and diverse perspectives, fostering an environment where every voice matters."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Client Success",
      description: "Your success is our priority. We build lasting partnerships based on trust, transparency, and measurable results."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence Always",
      description: "We maintain the highest standards in everything we do, from code quality to customer service and project delivery."
    }
  ];

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
                <Users className="w-5 h-5 text-catalyst-red mr-3" />
                <span className="text-sm font-semibold text-catalyst-red">Meet Our Team</span>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#D71B1B' }}>Meet The</span>
                <span className="text-white">Crew</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
                The talented individuals behind Catalyst Crew's success. Our diverse team brings together
                expertise in design, development, marketing, and business strategy to deliver exceptional results.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="block" style={{ color: '#D71B1B' }}>Our Impact</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Numbers that reflect our commitment to excellence and client success.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
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

      {/* Team Members */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="block" style={{ color: '#D71B1B' }}>Leadership Team</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                The passionate leaders driving Catalyst Crew's vision and success.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -10 }}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-catalyst-red/30 transition-all duration-500 hover:shadow-2xl hover:shadow-catalyst-red/10"
                >
                  <div className="p-6 md:p-8">
                    {/* Profile Header */}
                    <div className="flex items-center mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border-2 border-white/20 group-hover:border-catalyst-red/40 transition-all duration-300 mr-4 md:mr-6 flex-shrink-0"
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-catalyst-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-catalyst-red transition-colors duration-300 truncate">{member.name}</h3>
                        <p className="text-catalyst-red font-medium mb-2 md:mb-3 text-sm md:text-base">{member.role}</p>
                        <p className="text-white/70 text-xs md:text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300 line-clamp-2">{member.description}</p>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center text-sm md:text-base">
                        <Star className="w-4 h-4 mr-2 text-catalyst-red" />
                        Key Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.1 }}
                            className="px-2 md:px-3 py-1 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full text-xs text-white/80 hover:border-catalyst-red/30 transition-all duration-300"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center text-sm md:text-base">
                        <Award className="w-4 h-4 mr-2 text-catalyst-red" />
                        Achievements
                      </h4>
                      <ul className="space-y-1 md:space-y-2">
                        {member.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            whileHover={{ x: 5 }}
                            className="flex items-center text-white/70 text-xs md:text-sm group/item"
                          >
                            <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-catalyst-red rounded-full mr-2 md:mr-3 flex-shrink-0 group-hover/item:bg-catalyst-red/80 transition-colors duration-300" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="mb-6 pt-4 md:pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between text-xs md:text-sm">
                        <a href={`mailto:${member.email}`} className="flex items-center text-white/60 hover:text-catalyst-red transition-colors duration-200">
                          <Mail className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                          {member.email}
                        </a>
                        <a href={`tel:${member.phone}`} className="flex items-center text-white/60 hover:text-catalyst-red transition-colors duration-200">
                          <Phone className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                          Call
                        </a>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-2 md:space-x-3">
                      <motion.a
                        href={member.social.linkedin}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-2 bg-gradient-to-r from-white/10 to-white/5 rounded-lg text-white/60 hover:text-white hover:bg-gradient-to-r hover:from-white/15 hover:to-white/10 transition-all duration-300 border border-white/20 hover:border-catalyst-red/30"
                      >
                        <Linkedin className="w-3 h-3 md:w-4 md:h-4" />
                      </motion.a>
                      {member.social.twitter && (
                        <motion.a
                          href={member.social.twitter}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="p-2 bg-gradient-to-r from-white/10 to-white/5 rounded-lg text-white/60 hover:text-white hover:bg-gradient-to-r hover:from-white/15 hover:to-white/10 transition-all duration-300 border border-white/20 hover:border-catalyst-red/30"
                        >
                          <Twitter className="w-3 h-3 md:w-4 md:h-4" />
                        </motion.a>
                      )}
                      {member.social.github && (
                        <motion.a
                          href={member.social.github}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="p-2 bg-gradient-to-r from-white/10 to-white/5 rounded-lg text-white/60 hover:text-white hover:bg-gradient-to-r hover:from-white/15 hover:to-white/10 transition-all duration-300 border border-white/20 hover:border-catalyst-red/30"
                        >
                          <Github className="w-3 h-3 md:w-4 md:h-4" />
                        </motion.a>
                      )}
                      <motion.a
                        href={member.social.instagram}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-2 bg-gradient-to-r from-white/10 to-white/5 rounded-lg text-white/60 hover:text-white hover:bg-gradient-to-r hover:from-white/15 hover:to-white/10 transition-all duration-300 border border-white/20 hover:border-catalyst-red/30"
                      >
                        <Instagram className="w-3 h-3 md:w-4 md:h-4" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="block" style={{ color: '#D71B1B' }}>What Drives Us</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                The values that shape our culture and guide every decision we make.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group p-8 bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-3xl backdrop-blur-sm hover:border-catalyst-red/30 transition-all duration-500 hover:shadow-2xl hover:shadow-catalyst-red/10"
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
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-catalyst-red transition-colors duration-300">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors duration-300">{value.description}</p>
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
            <div className="text-center bg-gradient-to-br from-catalyst-red/10 to-orange-500/10 border border-catalyst-red/30 rounded-3xl p-12 backdrop-blur-sm hover:border-catalyst-red/50 transition-all duration-500 hover:shadow-2xl hover:shadow-catalyst-red/10">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Join Our
                <span className="block mt-2" style={{ color: '#D71B1B' }}>Growing Team</span>
              </h2>

              <p className="text-xl text-white/80 mb-12 group-hover:text-white/90 transition-colors duration-300">
                Be part of a creative team that's shaping the future of digital innovation.
                Work on exciting projects and grow your career with us.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/careers"
                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-catalyst-red to-red-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-catalyst-red/25 hover:shadow-catalyst-red/40 transition-all duration-300"
                  >
                    <Users className="w-5 h-5" />
                    <span>View Open Positions</span>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-3 px-10 py-5 border-2 border-catalyst-red/50 text-catalyst-red hover:bg-catalyst-red hover:text-white rounded-2xl font-bold text-lg transition-all duration-300 backdrop-blur-sm"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Send Your Resume</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center" style={{ color: '#ffffff' }}>
                <Globe className="w-6 h-6 mr-2 text-catalyst-red" />
                Follow Our Journey
              </h3>

              <p className="text-white/80 mb-6 text-sm" style={{ color: '#f1f5f9' }}>
                Stay connected with our latest projects, team updates, and behind-the-scenes content across our social platforms.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="https://www.instagram.com/catalystcrewcreators/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="font-semibold">Instagram</span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/company/catalystcrewcreators/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-semibold">LinkedIn</span>
                </motion.a>

                <motion.a
                  href="https://x.com/CrewCatalyst5?t=x_hwj4ozl5KJQ5f3hszrqA&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-3 bg-black text-white rounded-xl border border-white/20 hover:bg-gray-900 transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                  <span className="font-semibold">Twitter</span>
                </motion.a>

                <motion.a
                  href="https://www.facebook.com/people/Catalyst-Crew"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="font-semibold">Facebook</span>
                </motion.a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Team;
