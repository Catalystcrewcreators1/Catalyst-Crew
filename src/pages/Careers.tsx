import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  ArrowLeft,
  Users,
  Target,
  Zap,
  Globe,
  Heart,
  MapPin,
  Clock,
  Search,
  Briefcase,
  Award,
  Coffee,
  Rocket,
  ChevronRight,
  CheckCircle,
  Mail,
  Phone,
  Building2
} from 'lucide-react';
import { ScrollReveal, FloatingElement } from '../components/ui/ScrollAnimations';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 8 },
    { id: 'development', name: 'Development', count: 3 },
    { id: 'design', name: 'Design', count: 2 },
    { id: 'marketing', name: 'Marketing', count: 2 },
    { id: 'management', name: 'Management', count: 1 }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior React Developer",
      department: "Development",
      location: "Kanpur, Uttar Pradesh",
      type: "Part Time",
      experience: "Fresher or More",
      description: "Join our development team to build cutting-edge web applications using React, Next.js, and modern web technologies.",
      requirements: [
        "Strong experience with React and TypeScript",
        "Knowledge of Next.js and modern web frameworks",
        "Experience with state management (Redux, Zustand)",
        "Understanding of web performance optimization",
        "Familiarity with testing frameworks (Jest, Cypress)"
      ],
      benefits: ["Freely to Work", "Flexible Hours", "Experience Gain", "Knowledge Building", "Real-time Projects", "Team Communication"],
      posted: "2 days ago",
      featured: true
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "Kanpur, Uttar Pradesh",
      type: "Part Time",
      experience: "Fresher or More",
      description: "Create stunning user experiences and design systems for our digital products and client projects.",
      requirements: [
        "Proficiency in Figma, Sketch, or Adobe XD",
        "Strong portfolio showcasing UI/UX work",
        "Understanding of design systems and components",
        "Knowledge of user research methodologies",
        "Experience with prototyping tools"
      ],
      benefits: ["Freely to Work", "Flexible Hours", "Experience Gain", "Knowledge Building", "Real-time Projects", "Team Communication"],
      posted: "1 week ago",
      featured: true
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Kanpur, Uttar Pradesh",
      type: "Part Time",
      experience: "Fresher or More",
      description: "Drive our digital marketing campaigns and help grow our online presence across multiple platforms.",
      requirements: [
        "Experience with Google Ads, Facebook Ads",
        "SEO and content marketing knowledge",
        "Social media marketing expertise",
        "Analytics tools proficiency (Google Analytics)",
        "Campaign optimization experience"
      ],
      benefits: ["Freely to Work", "Flexible Hours", "Experience Gain", "Knowledge Building", "Real-time Projects", "Team Communication"],
      posted: "3 days ago",
      featured: false
    },
    {
      id: 4,
      title: "Full Stack Developer",
      department: "Development",
      location: "Kanpur, Uttar Pradesh",
      type: "Part Time",
      experience: "Fresher or More",
      description: "Build end-to-end web applications using modern technologies and best practices.",
      requirements: [
        "Experience with Node.js and React",
        "Database knowledge (MongoDB, PostgreSQL)",
        "API development and integration",
        "Cloud services experience (AWS, Vercel)",
        "Agile development methodologies"
      ],
      benefits: ["Freely to Work", "Flexible Hours", "Experience Gain", "Knowledge Building", "Real-time Projects", "Team Communication"],
      posted: "5 days ago",
      featured: false
    }
  ];

  const companyValues = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies to deliver exceptional results."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "We believe in the power of diverse perspectives and collaborative problem-solving."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Client Success",
      description: "Your success is our priority. We build lasting partnerships based on trust and results."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "We invest in our team's growth through training, conferences, and knowledge sharing."
    }
  ];

  const benefits = [
    { icon: <Heart className="w-6 h-6" />, title: "Health Insurance", description: "Comprehensive medical coverage for you and your family" },
    { icon: <Clock className="w-6 h-6" />, title: "Flexible Hours", description: "Work-life balance with flexible scheduling options" },
    { icon: <Coffee className="w-6 h-6" />, title: "Free Snacks", description: "Unlimited coffee, snacks, and team lunches" },
    { icon: <Globe className="w-6 h-6" />, title: "Remote Work", description: "Work from anywhere with our remote-friendly policy" },
    { icon: <Award className="w-6 h-6" />, title: "Learning Budget", description: "Annual budget for courses, books, and conferences" }
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
                className="inline-flex items-center px-6 py-3 bg-catalyst-red/10 border border-catalyst-red/30 rounded-full mb-8 backdrop-blur-sm"
              >
                <Briefcase className="w-5 h-5 text-catalyst-red mr-3" />
                <span className="text-sm font-semibold text-catalyst-red">Join Our Team</span>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#D71B1B' }}>Join</span>
                <span className="text-white">Our Mission</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
                Be part of a creative team that's shaping the future of digital innovation.
                Work on exciting projects, collaborate with talented professionals, and grow your career with us.
              </p>
            </ScrollReveal>

            {/* Search Bar */}
            <ScrollReveal>
              <div className="max-w-2xl mx-auto relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search job positions..."
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:border-catalyst-red/50 focus:outline-none focus:ring-2 focus:ring-catalyst-red/20 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Job Listings */}
            <div className="lg:col-span-3">
              {/* Department Filter */}
              <ScrollReveal>
                <div className="flex flex-wrap gap-4 mb-12 justify-center">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setSelectedDepartment(dept.id)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center ${
                        selectedDepartment === dept.id
                          ? 'bg-catalyst-red text-white shadow-lg shadow-catalyst-red/25'
                          : 'text-white/80 hover:text-white hover:bg-white/5 border border-white/20'
                      }`}
                    >
                      {dept.name} ({dept.count})
                    </button>
                  ))}
                </div>
              </ScrollReveal>

              {/* Job Cards */}
              <div className="space-y-8">
                {jobOpenings.map((job, index) => (
                  <ScrollReveal key={job.id} direction="up" delay={index * 0.1}>
                    <motion.div
                      whileHover={{ scale: 1.01, y: -5 }}
                      className={`relative bg-white/5 border border-white/20 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-catalyst-red/30 transition-all duration-300 ${
                        job.featured ? 'ring-2 ring-catalyst-red/50' : ''
                      }`}
                    >
                      {job.featured && (
                        <div className="absolute top-6 right-6 z-10">
                          <span className="px-3 py-1 bg-catalyst-red text-white rounded-full text-sm font-semibold flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            Featured
                          </span>
                        </div>
                      )}

                      <div className="p-8">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-3">
                              <span className="px-3 py-1 bg-catalyst-red/20 text-catalyst-red rounded-full text-sm font-medium">
                                {job.department}
                              </span>
                              <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">
                                {job.type}
                              </span>
                              <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">
                                {job.experience}
                              </span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-catalyst-red transition-colors duration-300">
                              {job.title}
                            </h3>

                            <p className="text-white/70 mb-4 leading-relaxed">
                              {job.description}
                            </p>
                          </div>

                          <div className="lg:text-right lg:ml-8">
                            <div className="text-sm text-white/60">
                              {job.location}
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                              <CheckCircle className="w-5 h-5 mr-2 text-catalyst-red" />
                              Requirements
                            </h4>
                            <ul className="space-y-2">
                              {job.requirements.slice(0, 3).map((req, idx) => (
                                <li key={idx} className="text-white/70 text-sm flex items-start">
                                  <span className="w-1.5 h-1.5 bg-catalyst-red rounded-full mt-2 mr-3 flex-shrink-0" />
                                  {req}
                                </li>
                              ))}
                              {job.requirements.length > 3 && (
                                <li className="text-catalyst-red text-sm font-medium">
                                  +{job.requirements.length - 3} more requirements
                                </li>
                              )}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                              <Award className="w-5 h-5 mr-2 text-catalyst-red" />
                              Benefits
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {job.benefits.map((benefit, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-white/5 border border-white/20 rounded-full text-sm text-white/80"
                                >
                                  {benefit}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-white/60">
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              Posted {job.posted}
                            </div>
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-catalyst-red text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-catalyst-red/25 transition-all duration-300 flex items-center"
                          >
                            <Link to="/apply" className="flex items-center">
                              Apply Now
                              <ChevronRight className="w-4 h-4 ml-2" />
                            </Link>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Company Values */}
                <ScrollReveal>
                  <div className="bg-white/5 border border-white/20 rounded-3xl p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                      <Heart className="w-5 h-5 mr-2 text-catalyst-red" />
                      Our Values
                    </h3>

                    <div className="space-y-4">
                      {companyValues.map((value, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="text-catalyst-red mt-1">
                            {value.icon}
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-sm mb-1">{value.title}</h4>
                            <p className="text-white/70 text-xs">{value.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Benefits */}
                <ScrollReveal>
                  <div className="bg-white/5 border border-white/20 rounded-3xl p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-catalyst-red" />
                      Benefits
                    </h3>

                    <div className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="text-catalyst-red mt-1">
                            {benefit.icon}
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-sm mb-1">{benefit.title}</h4>
                            <p className="text-white/70 text-xs">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Contact Info */}
                <ScrollReveal>
                  <div className="bg-catalyst-red/10 border border-catalyst-red/30 rounded-3xl p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-catalyst-red" />
                      Have Questions?
                    </h3>

                    <p className="text-white/80 mb-6 text-sm">
                      Can't find the perfect role? Send us your resume and we'll keep you in mind for future opportunities.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-white/80">
                        <Mail className="w-4 h-4 mr-2 text-catalyst-red" />
                        careers@catalystcrew.com
                      </div>
                      <div className="flex items-center text-sm text-white/80">
                        <Phone className="w-4 h-4 mr-2 text-catalyst-red" />
                        +91-9235823255
                      </div>
                      <div className="flex items-center text-sm text-white/80">
                        <Building2 className="w-4 h-4 mr-2 text-catalyst-red" />
                        Kanpur, Uttar Pradesh
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-6 py-3 bg-catalyst-red text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-catalyst-red/25 transition-all duration-300"
                    >
                      Send Resume
                    </motion.button>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
