import { motion } from 'motion/react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 mb-6">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-400 text-sm font-medium" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            INITIALIZE CONNECTION
          </span>
        </div>
        
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl mb-4"
          style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 800 }}
        >
          <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Contact Terminal
          </span>
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form - Terminal Style */}
        <motion.div
          className="lg:col-span-2 relative p-8 backdrop-blur-xl bg-slate-900/40 rounded-2xl border border-cyan-400/30 overflow-hidden"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-cyan-400/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span 
              className="ml-4 text-cyan-400 text-sm"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              contact_interface.tsx
            </span>
          </div>

          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label 
                className="block text-cyan-400 text-sm mb-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                &gt; Enter Name:
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-400/30 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                style={{ 
                  fontFamily: 'Space Grotesk, sans-serif',
                  boxShadow: focusedField === 'name' ? '0 0 20px rgba(0, 200, 255, 0.3)' : 'none',
                }}
                placeholder="Your name..."
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            {/* Email Input */}
            <div>
              <label 
                className="block text-cyan-400 text-sm mb-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                &gt; Enter Email:
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-400/30 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                style={{ 
                  fontFamily: 'Space Grotesk, sans-serif',
                  boxShadow: focusedField === 'email' ? '0 0 20px rgba(0, 200, 255, 0.3)' : 'none',
                }}
                placeholder="your.email@example.com"
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            {/* Message Input */}
            <div>
              <label 
                className="block text-cyan-400 text-sm mb-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                &gt; Enter Message:
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-400/30 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                style={{ 
                  fontFamily: 'Space Grotesk, sans-serif',
                  boxShadow: focusedField === 'message' ? '0 0 20px rgba(0, 200, 255, 0.3)' : 'none',
                }}
                placeholder="Type your message here..."
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-semibold flex items-center justify-center gap-3 transition-all"
              style={{
                boxShadow: '0 0 30px rgba(0, 200, 255, 0.5)',
                fontFamily: 'Orbitron, sans-serif',
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 0 50px rgba(0, 200, 255, 0.8)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              Send Transmission
            </motion.button>
          </form>

          {/* Corner Decorations */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-cyan-400/30 rounded-bl-2xl" />
        </motion.div>

        {/* Contact Info Sidebar */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Contact Details */}
          <div className="p-6 backdrop-blur-xl bg-slate-900/30 rounded-2xl border border-cyan-400/20">
            <h3 
              className="text-xl mb-6 text-white"
              style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 700 }}
            >
              Direct Channels
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-400/30">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Email
                  </div>
                  <div className="text-sm text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    hassan@example.com
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-400/30">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Location
                  </div>
                  <div className="text-sm text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Available Globally
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="p-6 backdrop-blur-xl bg-slate-900/30 rounded-2xl border border-cyan-400/20">
            <h3 
              className="text-xl mb-6 text-white"
              style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 700 }}
            >
              Social Networks
            </h3>

            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-950/50 border border-cyan-400/20 hover:border-cyan-400/50 transition-all group"
                  whileHover={{ 
                    x: 5,
                    boxShadow: '0 0 20px rgba(0, 200, 255, 0.3)',
                  }}
                >
                  <social.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  <span 
                    className="text-sm text-slate-300 group-hover:text-white transition-colors"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Status Indicator */}
          <div className="p-6 backdrop-blur-xl bg-slate-900/30 rounded-2xl border border-green-400/30">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-3 h-3 rounded-full bg-green-400"
                style={{ boxShadow: '0 0 15px rgba(74, 222, 128, 0.8)' }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <div>
                <div className="text-sm text-green-400" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 600 }}>
                  Available for Projects
                </div>
                <div className="text-xs text-slate-400" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Response time: &lt; 24 hours
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="max-w-6xl mx-auto mt-16 pt-8 border-t border-cyan-400/20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p 
          className="text-slate-400"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          © 2026 Hassan Jaber. Designed & Developed with precision.
        </p>
      </motion.div>
    </section>
  );
}
