import { motion } from 'motion/react';
import { Code2, Sparkles, Rocket, Target } from 'lucide-react';

export function AboutSection() {
  const dataBlocks = [
    {
      icon: Code2,
      label: 'Core Function',
      value: 'Building cutting-edge, responsive interfaces with modern frameworks and technologies.',
    },
    {
      icon: Sparkles,
      label: 'Design Philosophy',
      value: 'Creating immersive, user-centric experiences that merge aesthetics with functionality.',
    },
    {
      icon: Rocket,
      label: 'Performance',
      value: 'Optimizing every pixel and interaction for speed, accessibility, and scalability.',
    },
    {
      icon: Target,
      label: 'Mission',
      value: 'Transforming complex ideas into elegant, intelligent digital solutions.',
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
            SYSTEM DATA
          </span>
        </div>
        
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl mb-4"
          style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 800 }}
        >
          <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            About The System
          </span>
        </h2>
      </motion.div>

      {/* Data Blocks Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {dataBlocks.map((block, index) => (
          <motion.div
            key={index}
            className="group relative p-6 backdrop-blur-xl bg-slate-900/30 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ 
              y: -5,
              boxShadow: '0 0 30px rgba(0, 200, 255, 0.3)',
            }}
          >
            {/* Glassmorphism Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-violet-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Corner Decorations */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-cyan-400/30 rounded-tr-2xl" />
            
            <div className="relative">
              {/* Icon */}
              <div className="mb-4 inline-flex p-3 rounded-lg bg-cyan-500/10 border border-cyan-400/30">
                <block.icon className="w-6 h-6 text-cyan-400" />
              </div>

              {/* Label */}
              <h3 
                className="text-cyan-400 text-sm tracking-widest mb-3 uppercase"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                {block.label}
              </h3>

              {/* Value */}
              <p 
                className="text-slate-300 leading-relaxed"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {block.value}
              </p>

              {/* Animated Border */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
