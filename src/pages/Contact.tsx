import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Star,
  Globe,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  ExternalLink
} from 'lucide-react';
import { ScrollReveal, FloatingElement } from '../components/ui/ScrollAnimations';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      const response = await fetch('https://formspree.io/f/xqalqwpe', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          budget: '',
          message: ''
        });
      } else {
        setSubmitMessage('There was an error sending your message. Please try again or contact us directly.');
      }
    } catch {
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "catalystcrewcreators@gmail.com",
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+91-9235823255",
      description: "Mon-Fri from 9am to 6pm IST"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "Kanpur, Uttar Pradesh",
      description: "Come say hello at our office"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      description: "Weekend support available for urgent projects"
    }
  ];

  const teamMembers = [
    {
      name: "Arpit Bajpai",
      role: "Founder & CEO",
      email: "arpit.bajpai@catalystcrew.com",
      phone: "+91 98765 43210",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/arpit.png?updatedAt=1755974380813",
      description: "Visionary leader driving innovation and growth"
    },
    {
      name: "Ashwin Jauhary",
      role: "Managing Director",
      email: "ashwin.jauhary@catalystcrew.com",
      phone: "+91 98765 43211",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/ashwin.png?updatedAt=1755974380714",
      description: "Technical expert ensuring project excellence"
    },
    {
      name: "Anurag Tiwari",
      role: "Creative Designer",
      email: "anurag.tiwari@catalystcrew.com",
      phone: "+91 98765 43217",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/anurag.png?updatedAt=1755974380561",
      description: "Creative designer with expertise in visual design and user experience"
    },
    {
      name: "Sanskriti Gupta",
      role: "Creative Head",
      email: "sanskriti.gupta@catalystcrew.com",
      phone: "+91 98765 43218",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/sanskriti_pic-removebg-preview.png?updatedAt=1758098706275",
      description: "Award-winning designer leading creative vision"
    },
    {
      name: "Atharva Sharma",
      role: "Technical Head",
      email: "atharva.sharma@catalystcrew.com",
      phone: "+91 98765 43219",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/atharva.png?updatedAt=1755974380765",
      description: "Full-stack development specialist"
    },
    {
      name: "Twinkle Pal",
      role: "Social Media Manager",
      email: "twinkle.pal@catalystcrew.com",
      phone: "+91 98765 43220",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/twinkle%20png.png?updatedAt=1758099509007",
      description: "Digital marketing and community expert"
    },
    {
      name: "Aviral Mishra",
      role: "Engagement Manager",
      email: "aviral.mishra@catalystcrew.com",
      phone: "+91 98765 43221",
      image: "https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/aviral.png?updatedAt=1755974380465",
      description: "Client relations and project coordination"
    }
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'Brand Identity',
    'E-commerce Solutions',
    'Consulting',
    'Other'
  ];

  const budgetRanges = [
    'Under ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹5,00,000',
    '₹5,00,000 - ₹10,00,000',
    'Above ₹10,00,000',
    'Let\'s discuss'
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

      {/* Custom styles for dropdown options */}
      <style>{`
        select {
          background-color: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          z-index: 10;
        }
        select option {
          background-color: #1f2937; /* Dark background to match form */
          color: #ffffff; /* White text for contrast */
          padding: 8px;
          z-index: 11;
        }
        select:focus option {
          background-color: #374151; /* Slightly lighter on focus */
        }
      `}</style>

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
                <MessageSquare className="w-5 h-5 text-catalyst-red mr-3" />
                <span className="text-sm font-semibold text-catalyst-red">Get In Touch</span>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#D71B1B' }}>Let's Start</span>
                <span className="text-white">a Conversation</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
                Ready to transform your digital presence? Get in touch with our team of experts.
                We're here to help you bring your vision to life with innovative solutions and creative excellence.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 backdrop-blur-sm">
                  <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                    <Send className="w-8 h-8 mr-3 text-catalyst-red" />
                    Send us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-semibold mb-2" style={{ color: '#ffffff' }}>Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                          style={{ color: '#ffffff' }}
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-white font-semibold mb-2" style={{ color: '#ffffff' }}>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                          style={{ color: '#ffffff' }}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-semibold mb-2" style={{ color: '#ffffff' }}>Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                          style={{ color: '#ffffff' }}
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label className="block text-white font-semibold mb-2" style={{ color: '#ffffff' }}>Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                          style={{ color: '#ffffff' }}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-semibold mb-2" style={{ color: '#ffffff' }}>Service Interested In</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                          style={{ color: '#ffffff' }}
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-white font-semibold mb-2" style={{ color: '#ffffff' }}>Project Budget</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                          style={{ color: '#ffffff' }}
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((budget) => (
                            <option key={budget} value={budget}>{budget}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2" style={{ color: '#ffffff' }}>Project Details</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300 resize-none"
                        style={{ color: '#ffffff' }}
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                      className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300 ${
                        isSubmitting
                          ? 'bg-gray-600 cursor-not-allowed'
                          : 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:shadow-lg hover:shadow-red-600/25'
                      }`}
                      style={isSubmitting ? {} : { background: 'linear-gradient(135deg, #D71B1B 0%, #dc2626 100%)' }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    {submitMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mt-4 p-4 rounded-xl text-center font-medium ${
                          submitMessage.includes('Thank you')
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-red-500/20 text-red-400 border border-red-500/30'
                        }`}
                      >
                        {submitMessage}
                      </motion.div>
                    )}

                    <p className="text-white/60 text-sm text-center mt-4" style={{ color: '#9ca3af' }}>
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Information */}
              <ScrollReveal>
                <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center" style={{ color: '#ffffff' }}>
                    <Mail className="w-5 h-5 mr-2 text-red-600" style={{ color: '#D71B1B' }} />
                    Get In Touch
                  </h3>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="text-red-600 mt-1" style={{ color: '#D71B1B' }}>
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-sm mb-1" style={{ color: '#ffffff' }}>{info.title}</h4>
                          <p className="text-white/80 text-sm font-medium" style={{ color: '#f1f5f9' }}>{info.details}</p>
                          <p className="text-white/60 text-xs" style={{ color: '#94a3b8' }}>{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Team Members */}
              <ScrollReveal>
                <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center" style={{ color: '#ffffff' }}>
                    <Users className="w-5 h-5 mr-2 text-red-600" style={{ color: '#D71B1B' }} />
                    Meet Our Team
                  </h3>

                  <div className="space-y-4">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-12 h-12 object-cover rounded-full border border-white/20"
                        />
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-sm" style={{ color: '#ffffff' }}>{member.name}</h4>
                          <p className="text-red-600 text-xs" style={{ color: '#D71B1B' }}>{member.role}</p>
                          <div className="flex items-center space-x-3 mt-2">
                            <a href={`mailto:${member.email}`} className="text-white/60 hover:text-red-600 text-xs flex items-center" style={{ color: '#94a3b8' }}>
                              <Mail className="w-3 h-3 mr-1" />
                              Email
                            </a>
                            <a href={`tel:${member.phone}`} className="text-white/60 hover:text-red-600 text-xs flex items-center" style={{ color: '#94a3b8' }}>
                              <Phone className="w-3 h-3 mr-1" />
                              Call
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Social Links */}
              <ScrollReveal>
                <div className="bg-gradient-to-br from-catalyst-red/10 to-orange-500/10 border border-catalyst-red/30 rounded-3xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center" style={{ color: '#ffffff' }}>
                    <Globe className="w-5 h-5 mr-2 text-red-600" style={{ color: '#D71B1B' }} />
                    Follow Us
                  </h3>

                  <p className="text-white/80 mb-6 text-sm" style={{ color: '#f1f5f9' }}>
                    Stay connected with our latest projects, insights, and behind-the-scenes content.
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <a href="https://www.instagram.com/catalystcrewcreators/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors duration-200" style={{ color: '#ffffff' }}>
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/company/catalystcrewcreators/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors duration-200" style={{ color: '#ffffff' }}>
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://x.com/CrewCatalyst5?t=x_hwj4ozl5KJQ5f3hszrqA&s=09" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors duration-200" style={{ color: '#ffffff' }}>
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="https://www.facebook.com/people/Catalyst-Crew" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors duration-200" style={{ color: '#ffffff' }}>
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Quick Actions */}
              <ScrollReveal>
                <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center" style={{ color: '#ffffff' }}>
                    <Star className="w-5 h-5 mr-2 text-red-600" style={{ color: '#D71B1B' }} />
                    Quick Actions
                  </h3>

                  <div className="space-y-3">
                    <Link
                      to="/portfolio"
                      className="flex items-center justify-between p-3 bg-white/5 rounded-xl text-white hover:bg-white/10 transition-colors duration-200"
                      style={{ color: '#ffffff' }}
                    >
                      <span className="text-sm">View Our Work</span>
                      <ExternalLink className="w-4 h-4" />
                    </Link>

                    <Link
                      to="/services"
                      className="flex items-center justify-between p-3 bg-white/5 rounded-xl text-white hover:bg-white/10 transition-colors duration-200"
                      style={{ color: '#ffffff' }}
                    >
                      <span className="text-sm">Explore Services</span>
                      <ExternalLink className="w-4 h-4" />
                    </Link>

                    <Link
                      to="/careers"
                      className="flex items-center justify-between p-3 bg-white/5 rounded-xl text-white hover:bg-white/10 transition-colors duration-200"
                      style={{ color: '#ffffff' }}
                    >
                      <span className="text-sm">Join Our Team</span>
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
