import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  ArrowLeft,
  Upload,
  FileText,
  User,
  Send,
  Briefcase,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { ScrollReveal, FloatingElement } from '../components/ui/ScrollAnimations';

const Apply = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    availability: '',
    resume: null,
    coverLetter: '',
    portfolio: '',
    linkedIn: '',
    github: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('idle');

    try {
      const form = e.target as HTMLFormElement;
      const formDataToSend = new FormData(form);

      const response = await fetch('https://formspree.io/f/xnngoypb', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your application! We\'ll review it and get back to you within 3-5 business days.');
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          availability: '',
          resume: null,
          coverLetter: '',
          portfolio: '',
          linkedIn: '',
          github: '',
          message: ''
        });
        // Reset file input
        const fileInput = document.getElementById('resume') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setSubmitMessage('There was an error submitting your application. Please try again or contact us directly.');
        setSubmitStatus('error');
      }
    } catch {
      setSubmitMessage('Network error. Please check your connection and try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const positions = [
    'Senior React Developer',
    'UI/UX Designer',
    'Digital Marketing Specialist',
    'Full Stack Developer',
    'Other'
  ];

  const experienceLevels = [
    'Fresher (0 years)',
    'Junior (1-2 years)',
    'Mid-level (3-5 years)',
    'Senior (5+ years)',
    'Lead/Principal (8+ years)'
  ];

  const availabilityOptions = [
    'Immediately available',
    '2 weeks notice',
    '1 month notice',
    'Negotiable'
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

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <Link
              to="/careers"
              className="inline-flex items-center space-x-2 text-catalyst-red hover:text-white mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Careers</span>
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
                <span className="block mb-2" style={{ color: '#D71B1B' }}>Apply</span>
                <span className="text-white">Now</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
                Ready to join our creative team? Fill out the form below and let's start your journey with Catalyst Crew.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <FileText className="w-8 h-8 mr-3 text-catalyst-red" />
                Job Application Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white flex items-center mb-4">
                    <User className="w-5 h-5 mr-2 text-catalyst-red" />
                    Personal Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2" style={{ color: '#ffffff' }}>First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                        style={{ color: '#ffffff' }}
                        placeholder="Enter your first name"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2" style={{ color: '#ffffff' }}>Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                        style={{ color: '#ffffff' }}
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
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
                </div>

                {/* Position Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white flex items-center mb-4">
                    <Briefcase className="w-5 h-5 mr-2 text-catalyst-red" />
                    Position Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2" style={{ color: '#ffffff' }}>Position Applied For</label>
                      <select
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                        style={{ color: '#ffffff' }}
                      >
                        <option value="">Select a position</option>
                        {positions.map((position) => (
                          <option key={position} value={position}>{position}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2" style={{ color: '#ffffff' }}>Experience Level</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                        style={{ color: '#ffffff' }}
                      >
                        <option value="">Select experience level</option>
                        {experienceLevels.map((level) => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2" style={{ color: '#ffffff' }}>Availability</label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                      style={{ color: '#ffffff' }}
                    >
                      <option value="">Select availability</option>
                      {availabilityOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Documents */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white flex items-center mb-4">
                    <Upload className="w-5 h-5 mr-2 text-catalyst-red" />
                    Documents & Links
                  </h3>

                  <div>
                    <label className="block text-white font-semibold mb-2" style={{ color: '#ffffff' }}>Resume/CV</label>
                    <div className="relative">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-catalyst-red file:text-white hover:file:bg-red-600 transition-all duration-300"
                        style={{ color: '#ffffff' }}
                      />
                      <p className="text-white/60 text-sm mt-2">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2" style={{ color: '#ffffff' }}>Portfolio URL</label>
                      <input
                        type="url"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                        style={{ color: '#ffffff' }}
                        placeholder="https://yourportfolio.com"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2" style={{ color: '#ffffff' }}>LinkedIn Profile</label>
                      <input
                        type="url"
                        name="linkedIn"
                        value={formData.linkedIn}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                        style={{ color: '#ffffff' }}
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2" style={{ color: '#ffffff' }}>GitHub Profile (for developers)</label>
                    <input
                      type="url"
                      name="github"
                      value={formData.github}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                      style={{ color: '#ffffff' }}
                      placeholder="https://github.com/yourusername"
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white flex items-center mb-4">
                    <FileText className="w-5 h-5 mr-2 text-catalyst-red" />
                    Additional Information
                  </h3>

                  <div>
                    <label className="block text-white font-semibold mb-2" style={{ color: '#ffffff' }}>Cover Letter</label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300 resize-none"
                      style={{ color: '#ffffff' }}
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2" style={{ color: '#ffffff' }}>Additional Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300 resize-none"
                      style={{ color: '#ffffff' }}
                      placeholder="Any additional information you'd like to share..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
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
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Application
                    </>
                  )}
                </motion.button>

                {/* Submit Message */}
                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-4 rounded-xl text-center font-medium flex items-center justify-center ${
                      submitStatus === 'success'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5 mr-2" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mr-2" />
                    )}
                    {submitMessage}
                  </motion.div>
                )}

                <p className="text-white/60 text-sm text-center mt-4" style={{ color: '#9ca3af' }}>
                  By submitting this application, you agree to our privacy policy and terms of service. We'll review your application and respond within 3-5 business days.
                </p>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Apply;
