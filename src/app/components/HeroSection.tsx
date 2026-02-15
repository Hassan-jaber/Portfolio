import { motion } from 'motion/react';
import { ChevronRight, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* AI Core Sphere - Off-center, Reduced Intensity */}
      <div className="absolute top-1/3 right-1/4 hidden lg:flex items-center justify-center">
        <motion.div
          className="relative"
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Core Sphere - Reduced opacity and glow */}
          <div 
            className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-500/25 via-cyan-400/20 to-violet-500/25 blur-3xl"
            style={{ opacity: 0.65 }}
          />
          
          {/* Inner Core - More subtle */}
          <motion.div
            className="absolute inset-0 m-auto w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/60 to-cyan-300/60"
            style={{
              boxShadow: '0 0 40px rgba(0, 200, 255, 0.4), 0 0 80px rgba(0, 200, 255, 0.2)',
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Neural Network Lines - Reduced quantity and opacity */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-40 h-0.5 bg-gradient-to-r from-cyan-400/30 to-transparent origin-left"
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 90}deg)`,
              }}
              animate={{
                scaleX: [0.6, 1, 0.6],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* AI Sentinel - Simplified and more subtle */}
      <motion.div
        className="absolute left-12 md:left-20 top-1/2 -translate-y-1/2 hidden xl:block opacity-60"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <div className="relative">
          {/* Sentinel Body - More transparent */}
          <div className="w-32 h-44 bg-gradient-to-b from-slate-700/30 to-slate-900/30 backdrop-blur-sm rounded-lg border border-cyan-400/20 relative overflow-hidden">
            {/* Visor */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-6 bg-gradient-to-r from-blue-500/70 to-cyan-400/70 rounded-full"
              style={{
                boxShadow: '0 0 15px rgba(0, 200, 255, 0.5)',
              }}
            />
            
            {/* Energy Line */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-cyan-400/60 to-transparent" />
            
            {/* Chest Core */}
            <motion.div
              className="absolute top-24 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-cyan-400/70"
              style={{
                boxShadow: '0 0 15px rgba(0, 200, 255, 0.6)',
              }}
              animate={{
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* Floating Animation */}
          <motion.div
            className="absolute inset-0"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Mobile Profile Image - Only visible on small screens */}
        <motion.div
          className="lg:hidden mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-violet-400/30 rounded-full blur-xl" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMHRlY2h8ZW58MXx8fHwxNzcxMDQ5OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Hassan Jaber"
              className="relative w-32 h-32 object-cover rounded-full border-2 border-cyan-400/50"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Professional Label */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span 
              className="text-cyan-400 text-xs md:text-sm tracking-[0.3em] uppercase"
              style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 500 }}
            >
              Front-End Engineer
            </span>
          </motion.div>

          {/* Mobile Name - Only visible on small screens */}
          <h3 
            className="lg:hidden text-2xl mb-3 text-white"
            style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 700 }}
          >
            mohammed Jaber
          </h3>

          {/* Status Badge - Cleaner design */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 mb-10">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              System Online
            </span>
          </div>

          {/* Main Headline - Enhanced hierarchy, reduced glow */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 tracking-tight leading-[1.1]"
            style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 800 }}
          >
            <span className="block mb-2 bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
              Architect of
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Intelligent Interfaces.
            </span>
          </h1>

          {/* Subheadline - Improved spacing */}
          <p 
            className="text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Front-End Developer specializing in high-performance, modern web systems
            and immersive UI experiences.
          </p>

          {/* CTA Buttons - Enhanced size and contrast */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="group w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-white font-semibold flex items-center justify-center gap-3 transition-all"
              style={{
                boxShadow: '0 0 40px rgba(0, 200, 255, 0.6), 0 4px 20px rgba(0, 0, 0, 0.3)',
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.05rem',
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 60px rgba(0, 200, 255, 0.9), 0 6px 30px rgba(0, 0, 0, 0.4)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              Access Projects
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              className="w-full sm:w-auto px-10 py-5 border-2 border-cyan-400/40 rounded-xl text-cyan-300 font-semibold backdrop-blur-sm hover:bg-cyan-400/5 hover:border-cyan-400/60 transition-all"
              style={{ 
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.05rem',
              }}
              whileHover={{ 
                scale: 1.05,
              }}
              whileTap={{ scale: 0.98 }}
            >
              Initialize Contact
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Identity Panel - Desktop only, cleaner design */}
      <motion.div
        className="absolute right-12 md:right-20 top-1/2 -translate-y-1/2 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="relative w-64 p-5 backdrop-blur-xl bg-slate-900/20 rounded-2xl border border-cyan-400/25 overflow-hidden">
          {/* Subtle Glassmorphism */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/3 to-violet-400/3" />
          
          <div className="relative">
            <div className="text-cyan-400 text-[10px] tracking-[0.25em] mb-3 uppercase opacity-80"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              System Architect
            </div>
            
            {/* Photo Container - Cleaner */}
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/15 to-violet-400/15 rounded-xl blur-lg" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMHRlY2h8ZW58MXx8fHwxNzcxMDQ5OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hassan Jaber"
                className="relative w-full h-56 object-cover rounded-xl border border-cyan-400/40"
              />
            </div>

            <h3 
              className="text-xl text-white mb-2"
              style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 700 }}
            >
              Hassan Jaber
            </h3>
            
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"
                style={{ boxShadow: '0 0 8px rgba(74, 222, 128, 0.7)' }}
              />
              <span style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Status: Active
              </span>
            </div>

            {/* Minimal Corner Decoration */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-cyan-400/20 rounded-tr-2xl" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}