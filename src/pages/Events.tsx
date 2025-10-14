import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Clock,
  Star,
  TrendingUp,
  Filter,
  Search,
  Plus,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { ScrollReveal, FloatingElement } from '../components/ui/ScrollAnimations';

const Events = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'calendar'>('grid');

  const filters = [
    { id: 'all', name: 'All Events', count: 12 },
    { id: 'upcoming', name: 'Upcoming', count: 5 },
    { id: 'workshops', name: 'Workshops', count: 4 },
    { id: 'webinars', name: 'Webinars', count: 3 },
    { id: 'networking', name: 'Networking', count: 2 },
    { id: 'launches', name: 'Product Launches', count: 1 }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "AI & Web Development Workshop 2024",
      date: "Dec 28, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "TechHub Kanpur",
      type: "Workshop",
      category: "Technology",
      description: "Master the latest AI tools and techniques for modern web development. Learn to build intelligent applications with cutting-edge technologies.",
      attendees: 45,
      capacity: 60,
      price: "₹2,500",
      featured: true,
      image: "🚀"
    },
    {
      id: 2,
      title: "Digital Marketing Summit",
      date: "Jan 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Grand Ballroom, Hotel Radisson Blu Kanpur",
      type: "Conference",
      category: "Marketing",
      description: "Join industry leaders and marketing experts as they share insights on the future of digital marketing and growth strategies.",
      attendees: 120,
      capacity: 200,
      price: "₹5,000",
      featured: true,
      image: "📈"
    },
    {
      id: 3,
      title: "React Masterclass: Advanced Patterns",
      date: "Jan 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Virtual Event",
      type: "Webinar",
      category: "Development",
      description: "Deep dive into advanced React patterns, performance optimization, and modern development practices.",
      attendees: 200,
      capacity: 500,
      price: "₹1,500",
      featured: false,
      image: "⚛️"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Startup Pitch Night",
      date: "Nov 20, 2024",
      location: "Co-working Space, Mall Road Kanpur",
      type: "Networking",
      category: "Business",
      description: "Monthly networking event where startups pitch their ideas to investors and industry professionals.",
      attendees: 85,
      image: "💡"
    },
    {
      id: 5,
      title: "Design Systems Conference 2024",
      date: "Oct 15, 2024",
      location: "IIT Kanpur Auditorium",
      type: "Conference",
      category: "Design",
      description: "Annual conference focusing on modern design systems, accessibility, and user experience design.",
      attendees: 300,
      image: "🎨"
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
                className="inline-flex items-center px-6 py-3 bg-catalyst-red/10 border border-catalyst-red/30 rounded-full mb-8 backdrop-blur-sm"
              >
                <Calendar className="w-5 h-5 text-catalyst-red mr-3" />
                <span className="text-sm font-semibold text-catalyst-red">Catalyst Crew Events</span>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                <span className="block mb-2" style={{ color: '#D71B1B' }}>Events</span>
                <span className="text-white">& Experiences</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
                Join our community of innovators, creators, and industry leaders at exclusive events,
                workshops, and networking opportunities designed to inspire and connect.
              </p>
            </ScrollReveal>

            {/* Search and Filter Bar */}
            <ScrollReveal>
              <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:border-catalyst-red/50 focus:outline-none focus:ring-2 focus:ring-catalyst-red/20 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>

                <div className="flex gap-2">
                  <select className="px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white focus:border-catalyst-red/50 focus:outline-none transition-all duration-300 backdrop-blur-sm">
                    <option value="all">All Categories</option>
                    <option value="workshops">Workshops</option>
                    <option value="webinars">Webinars</option>
                    <option value="networking">Networking</option>
                    <option value="conferences">Conferences</option>
                  </select>

                  <button className="px-6 py-4 bg-catalyst-red text-white rounded-2xl font-semibold hover:bg-red-600 transition-colors duration-200 flex items-center">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* View Toggle */}
          <ScrollReveal>
            <div className="flex justify-center mb-12">
              <div className="flex bg-white/5 border border-white/20 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-catalyst-red text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Grid View
                </button>
                <button
                  onClick={() => setViewMode('calendar')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    viewMode === 'calendar'
                      ? 'bg-catalyst-red text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Calendar View
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Upcoming Events */}
          <div className="mb-16">
            <ScrollReveal>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-catalyst-red mr-3" />
                  <h2 className="text-3xl font-bold text-white">Upcoming Events</h2>
                </div>

                <div className="flex space-x-2">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setSelectedFilter(filter.id)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                        selectedFilter === filter.id
                          ? 'bg-catalyst-red text-white'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {filter.name} ({filter.count})
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <div className={`grid gap-8 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {upcomingEvents.map((event, index) => (
                <ScrollReveal key={event.id} direction="up" delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`group relative bg-white/5 border border-white/20 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-catalyst-red/30 transition-all duration-300 ${
                      event.featured ? 'ring-2 ring-catalyst-red/50' : ''
                    }`}
                  >
                    {event.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 bg-catalyst-red text-white rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    )}

                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-catalyst-red/20 text-catalyst-red rounded-full text-sm font-medium">
                          {event.type}
                        </span>
                        <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">
                          {event.category}
                        </span>
                      </div>

                      <div className="text-6xl mb-4">{event.image}</div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-catalyst-red transition-colors duration-300">
                        {event.title}
                      </h3>

                      <p className="text-white/70 mb-6 leading-relaxed line-clamp-3">
                        {event.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-white/80">
                          <Calendar className="w-4 h-4 mr-2 text-catalyst-red" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-sm text-white/80">
                          <Clock className="w-4 h-4 mr-2 text-catalyst-red" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-white/80">
                          <MapPin className="w-4 h-4 mr-2 text-catalyst-red" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-sm text-white/80">
                          <Users className="w-4 h-4 mr-2 text-catalyst-red" />
                          {event.attendees}/{event.capacity} attendees
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-catalyst-red">
                          {event.price}
                        </div>

                        <div className="flex space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="p-2 bg-white/10 rounded-lg text-white/80 hover:text-white transition-colors duration-200"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.button>

                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 bg-catalyst-red text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-catalyst-red/25 transition-all duration-300"
                          >
                            Register Now
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Past Events */}
          <div>
            <ScrollReveal>
              <div className="flex items-center mb-8">
                <TrendingUp className="w-6 h-6 text-catalyst-red mr-3" />
                <h2 className="text-3xl font-bold text-white">Past Events</h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <ScrollReveal key={event.id} direction="up" delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative bg-white/5 border border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-catalyst-red/30 transition-all duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-catalyst-red/20 text-catalyst-red rounded-full text-sm font-medium">
                          {event.type}
                        </span>
                        <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">
                          {event.category}
                        </span>
                      </div>

                      <div className="text-4xl mb-4">{event.image}</div>

                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-catalyst-red transition-colors duration-300">
                        {event.title}
                      </h3>

                      <p className="text-white/70 mb-4 leading-relaxed line-clamp-2">
                        {event.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-white/60">
                          <Calendar className="w-4 h-4 mr-2" />
                          {event.date}
                        </div>

                        <div className="flex items-center text-sm text-white/60">
                          <Users className="w-4 h-4 mr-2" />
                          {event.attendees} attendees
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <ScrollReveal className="text-center mt-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 bg-catalyst-red text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-catalyst-red/25 hover:shadow-catalyst-red/40 transition-all duration-300"
              >
                <Plus className="w-5 h-5" />
                <span>Suggest an Event</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Events;
