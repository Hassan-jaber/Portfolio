import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Neural Dashboard',
      description: 'Advanced AI analytics platform with real-time data visualization and predictive insights.',
      image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwd2ViJTIwZGFzaGJvYXJkJTIwZGFya3xlbnwxfHx8fDE3NzEwNDk5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['React', 'TypeScript', 'D3.js'],
    },
    {
      title: 'Quantum Mobile App',
      description: 'Cross-platform mobile application built with Flutter featuring quantum-inspired UI design.',
      image: 'https://images.unsplash.com/photo-1713857297379-6fc26e70f581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxMDQ5OTYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['Flutter', 'Dart', 'Firebase'],
    },
    {
      title: 'Nexus AI Interface',
      description: 'Immersive web experience showcasing neural network visualizations and machine learning concepts.',
      image: 'https://images.unsplash.com/photo-1738082956220-a1f20a8632ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMG5ldXJhbCUyMG5ldHdvcmslMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MDk5MjI1NXww&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['React', 'Three.js', 'WebGL'],
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 mb-6">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-400 text-sm font-medium" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            AI SYSTEM PANELS
          </span>
        </div>
        
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl mb-4"
          style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 800 }}
        >
          <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative backdrop-blur-xl bg-slate-900/30 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/60 transition-all overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ 
              y: -10,
              boxShadow: '0 0 50px rgba(0, 200, 255, 0.5)',
            }}
          >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Glowing Border on Hover */}
              <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/50 transition-all duration-300" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 
                className="text-2xl mb-3 text-white group-hover:text-cyan-400 transition-colors"
                style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 700 }}
              >
                {project.title}
              </h3>

              <p 
                className="text-slate-300 mb-4 leading-relaxed"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs bg-cyan-500/10 border border-cyan-400/30 rounded-full text-cyan-400"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <motion.button
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-semibold flex items-center justify-center gap-2 transition-all"
                  style={{
                    boxShadow: '0 0 20px rgba(0, 200, 255, 0.3)',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(0, 200, 255, 0.6)',
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </motion.button>

                <motion.button
                  className="px-4 py-3 border border-cyan-400/50 rounded-lg text-cyan-400 hover:bg-cyan-400/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-400/20 group-hover:border-cyan-400/60 rounded-tr-2xl transition-all" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyan-400/20 group-hover:border-cyan-400/60 rounded-bl-2xl transition-all" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
