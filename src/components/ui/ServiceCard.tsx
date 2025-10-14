import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
  gradient: string;
  features: string[];
  index: number;
}

const ServiceCard = ({ icon, title, description, path, gradient, features, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -20,
        scale: 1.02,
        rotateY: 5
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative h-full"
    >
      <Link to={path} className="block h-full">
        <div className={`
          relative overflow-hidden rounded-3xl p-8 h-full
          bg-gradient-to-br ${gradient}
          border border-white/20 backdrop-blur-xl shadow-2xl
          transition-all duration-700 ease-out
          hover:shadow-[0_25px_50px_-12px_rgba(215,27,27,0.4)]
          before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-white/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
          after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/20 after:to-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500
        `}>

          {/* Animated background glow */}
          <motion.div
            className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-75 transition-opacity duration-700 blur-xl"
            style={{
              background: `linear-gradient(135deg, ${gradient.includes('purple') ? '#9333ea' : gradient.includes('blue') ? '#3b82f6' : gradient.includes('green') ? '#10b981' : gradient.includes('orange') ? '#f97316' : '#ef4444'}40, transparent)`,
            }}
          />

          {/* Sparkle effects */}
          <motion.div
            animate={isHovered ? {
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
              opacity: [0.5, 1, 0.5]
            } : {}}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
            className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Sparkles className="w-6 h-6 text-catalyst-red" />
          </motion.div>

          {/* Floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              animate={isHovered ?
                {
                  y: [-10, -40, -10],
                  x: [0, 15 * (i - 2), 0],
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1.2, 0.5]
                } : {}
              }
              transition={{
                duration: 2.5,
                repeat: isHovered ? Infinity : 0,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
              className="absolute w-2 h-2 bg-catalyst-red rounded-full opacity-0 pointer-events-none z-0"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 12}%`
              }}
            />
          ))}

          {/* Icon with 3D effect */}
          <motion.div
            className="relative mb-8"
            whileHover={{
              rotateY: 15,
              rotateX: 15,
              z: 50
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              animate={isHovered ? {
                scale: [1, 1.2, 1.1],
                rotate: [0, -5, 5, 0]
              } : {}}
              transition={{ duration: 0.8 }}
              className="text-7xl filter drop-shadow-2xl transform-gpu relative z-10"
            >
              {icon}
            </motion.div>

            {/* Icon glow effect */}
            <motion.div
              animate={isHovered ? { opacity: 0.6, scale: 1.2 } : { opacity: 0, scale: 1 }}
              className="absolute inset-0 text-7xl text-catalyst-red/30 blur-sm"
            >
              {icon}
            </motion.div>

            {/* Orbiting elements */}
            <motion.div
              animate={isHovered ? { rotate: 360 } : {}}
              transition={{ duration: 3, repeat: isHovered ? Infinity : 0, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 border border-catalyst-red/30 rounded-full absolute animate-pulse" />
              <motion.div
                animate={isHovered ? { rotate: -360 } : {}}
                transition={{ duration: 2, repeat: isHovered ? Infinity : 0, ease: "linear" }}
                className="absolute w-2 h-2 bg-catalyst-red rounded-full"
                style={{ top: '-8px' }}
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="relative z-10">
            <motion.h3
              animate={isHovered ? { x: [0, 8, 0] } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-4 text-white group-hover:text-catalyst-red transition-colors duration-300"
            >
              {title}
            </motion.h3>

            <p className="text-white/80 mb-6 leading-relaxed text-sm">
              {description}
            </p>

            {/* Features list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6 space-y-2"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: -20, opacity: 0 }}
                  animate={isHovered ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="flex items-center text-xs text-white/70"
                >
                  <div className="w-1 h-1 bg-catalyst-red rounded-full mr-2" />
                  {feature}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              animate={isHovered ? { x: 15 } : { x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center text-catalyst-red font-semibold group/btn">
                <span>Explore Service</span>
                <motion.div
                  animate={isHovered ? { x: [0, 8, 0] } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover/btn:scale-110" />
                </motion.div>
              </div>

              {/* Progress indicator */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isHovered ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3 }}
                className="w-8 h-8 border-2 border-catalyst-red/30 rounded-full flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-2 h-2 border border-catalyst-red border-t-transparent rounded-full"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Animated border */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isHovered ? {
              scale: 1,
              opacity: 1,
              borderColor: ['#ef4444', '#ef4444', '#eab308', '#ef4444']
            } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 rounded-3xl border-2 border-catalyst-red/50 pointer-events-none"
            style={{
              background: 'linear-gradient(45deg, transparent, rgba(239, 68, 68, 0.1), transparent)',
              backgroundSize: '200% 200%',
            }}
          />

          {/* Shimmer effect */}
          <motion.div
            animate={isHovered ? { x: ['-100%', '100%'] } : {}}
            transition={{ duration: 1, repeat: isHovered ? Infinity : 0, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
