import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Privacy Policy & Terms of Service | Catalyst Crew';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-24">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white">Privacy</span>{' '}
          <span className="text-red-600">Policy</span>
        </motion.h1>
        <p className="text-xl text-red-400 max-w-3xl mx-auto">
          Last updated: July 31, 2025
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20 max-w-5xl">
        {/* Privacy Policy Section */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-red-500">🔒 Privacy Policy</h2>
            
            <div className="space-y-8">
              <div className="policy-section">
                <h3 className="text-xl font-semibold mb-3 text-white">1. Information We Collect</h3>
                <p className="text-red-400">We may collect the following categories of information:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-red-400">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and any details you voluntarily share via forms, sign-ups, or communications.</li>
                  <li><strong>Technical & Usage Data:</strong> IP address, browser type, device details, operating system, referral source, and website interactions collected via cookies and analytics tools.</li>
                  <li><strong>Project/Service Data:</strong> Information you provide related to collaboration, business proposals, or project requirements.</li>
                </ul>
              </div>

              <div className="policy-section">
                <h3 className="text-xl font-semibold mb-3 text-white">2. How We Use Your Information</h3>
                <p className="text-red-400">We use your information to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-red-400">
                  <li>Respond to your inquiries and provide requested services.</li>
                  <li>Send newsletters, updates, and promotional offers (only with your consent).</li>
                  <li>Improve website performance, content relevance, and overall user experience.</li>
                  <li>Analyze traffic patterns and usage trends to optimize our services.</li>
                  <li>Ensure website security, fraud prevention, and compliance with applicable laws.</li>
                </ul>
              </div>

              <div className="policy-section">
                <h3 className="text-xl font-semibold mb-3 text-white">3. Data Security</h3>
                <p className="text-red-400">We implement appropriate security measures including:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-red-400">
                  <li>SSL Encryption for secure data transmission</li>
                  <li>Secure hosting environments with regular security updates</li>
                  <li>Restricted access to personal information</li>
                  <li>Regular security audits and monitoring</li>
                </ul>
              </div>

              <div className="policy-section">
                <h3 className="text-xl font-semibold mb-3 text-white">4. Your Rights</h3>
                <p className="text-red-400">You have the right to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-red-400">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction or deletion of your information</li>
                  <li>Withdraw consent for marketing communications</li>
                  <li>Lodge a complaint with a data protection authority</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Terms of Service Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-red-500">📃 Terms of Service</h2>
            
            <div className="space-y-8">
              <div className="policy-section">
                <h3 className="text-xl font-semibold mb-3 text-white">1. Acceptance of Terms</h3>
                <p className="text-gray-300">By accessing and using our website, you accept and agree to be bound by these Terms of Service.</p>
              </div>

              <div className="policy-section">
                <h3 className="text-xl font-semibold mb-3 text-white">2. Intellectual Property</h3>
                <p className="text-gray-300">All content on this website, including text, graphics, logos, and images, is the property of Catalyst Crew and protected by intellectual property laws.</p>
              </div>

              <div className="policy-section">
                <h3 className="text-xl font-semibold mb-3 text-white">3. User Responsibilities</h3>
                <p className="text-gray-300">You agree not to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-300">
                  <li>Use the website for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the website's functionality</li>
                  <li>Submit false or misleading information</li>
                </ul>
              </div>

              <div className="policy-section">
                <h3 className="text-xl font-semibold mb-3 text-white">4. Limitation of Liability</h3>
                <p className="text-gray-300">Catalyst Crew shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of this website.</p>
              </div>

              <div className="policy-section">
                <h3 className="text-xl font-semibold mb-3 text-white">5. Governing Law</h3>
                <p className="text-gray-300">These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Have Questions?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a 
              href="mailto:catalystcrewcreators@gmail.com" 
              className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full transition-colors"
            >
              <Mail size={20} />
              catalystcrewcreators@gmail.com
            </a>
            <a 
              href="tel:+919235823255" 
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
            >
              <Phone size={20} />
              +91 92358 23255
            </a>
          </div>
          <p className="mt-8 text-gray-400">
            <Link to="/" className="text-red-500 hover:underline">← Back to Home</Link>
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
