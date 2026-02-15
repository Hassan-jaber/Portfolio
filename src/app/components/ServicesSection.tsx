import { motion } from 'motion/react';
import { Layout, Wand2, Zap, Smartphone } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Layout,
      title: 'UI Architecture',
      description: 'Crafting scalable, maintainable component systems with modern frameworks and design patterns.',
      capabilities: ['Component Design', 'State Management', 'Code Architecture'],
    },
    {
      icon: Wand2,
      title: 'Advanced Web Animations',
      description: 'Creating smooth, performant animations that enhance user experience and engagement.',
      capabilities: ['Motion Design', 'CSS Animations', 'Interactive UI'],
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Maximizing speed and efficiency through code splitting, lazy loading, and best practices.',
      capabilities: ['Load Time Optimization', 'Bundle Size Reduction', 'Core Web Vitals'],
    },
    {
      icon: Smartphone,
      title: 'Flutter Development',
      description: 'Building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
      capabilities: ['Cross-platform Apps', 'Native Performance', 'Custom Widgets'],
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Section Header */}
      <motion.div
        className="max-w-6xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 mb-6">
          <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-violet-400 text-sm font-medium" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            SYSTEM CAPABILITIES
          </span>
        </div>
        
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl mb-4"
          style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 800 }}
        >
          <span className="bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">
            Services & Expertise
          </span>
        </h2>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-8 backdrop-blur-xl bg-slate-900/30 rounded-2xl border border-violet-400/20 hover:border-violet-400/50 transition-all overflow-hidden"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            whileHover={{ 
              y: -8,
              boxShadow: '0 0 40px rgba(139, 92, 246, 0.4)',
            }}
          >
            {/* Glassmorphism Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-400/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }} />
            </div>

            <div className="relative">
              {/* Icon Container */}
              <motion.div 
                className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-400/30"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="w-8 h-8 text-violet-400" />
              </motion.div>

              {/* Title */}
              <h3 
                className="text-2xl mb-4 text-white group-hover:text-violet-400 transition-colors"
                style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 700 }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p 
                className="text-slate-300 mb-6 leading-relaxed"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {service.description}
              </p>

              {/* Capabilities */}
              <div className="space-y-2">
                {service.capabilities.map((capability, capIndex) => (
                  <motion.div
                    key={capIndex}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + capIndex * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400"
                      style={{ boxShadow: '0 0 8px rgba(139, 92, 246, 0.8)' }}
                    />
                    <span 
                      className="text-sm text-slate-400"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {capability}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Animated Progress Bar */}
              <motion.div
                className="mt-6 h-1 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                style={{
                  transformOrigin: 'left',
                  boxShadow: '0 0 10px rgba(139, 92, 246, 0.6)',
                }}
              />
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-violet-400/20 group-hover:border-violet-400/60 rounded-tl-2xl transition-all" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-violet-400/20 group-hover:border-violet-400/60 rounded-br-2xl transition-all" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
