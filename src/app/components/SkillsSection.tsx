import { motion } from 'motion/react';

export function SkillsSection() {
  const skills = [
    { name: 'HTML', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-amber-500' },
    { name: 'React', level: 90, color: 'from-cyan-500 to-blue-600' },
    { name: 'Flutter', level: 85, color: 'from-blue-400 to-cyan-400' },
    { name: 'Git', level: 88, color: 'from-red-500 to-orange-500' },
    { name: 'Responsive Design', level: 92, color: 'from-violet-500 to-purple-500' },
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 mb-6">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-blue-400 text-sm font-medium" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            HOLOGRAPHIC MODULES
          </span>
        </div>
        
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl mb-4"
          style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 800 }}
        >
          <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Core Technologies
          </span>
        </h2>
      </motion.div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="group relative p-6 backdrop-blur-xl bg-slate-900/30 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              y: -8,
              boxShadow: '0 0 40px rgba(0, 200, 255, 0.4)',
            }}
          >
            {/* Glassmorphism Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-violet-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative">
              {/* Skill Name */}
              <h3 
                className="text-xl mb-4 text-white"
                style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 700 }}
              >
                {skill.name}
              </h3>

              {/* Circular Progress Indicator */}
              <div className="relative flex items-center justify-center mb-4">
                <svg className="w-32 h-32 transform -rotate-90">
                  {/* Background Circle */}
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="rgba(100, 116, 139, 0.2)"
                    strokeWidth="8"
                    fill="none"
                  />
                  
                  {/* Progress Circle */}
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="url(#gradient-{index})"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: `0 ${2 * Math.PI * 56}` }}
                    whileInView={{ 
                      strokeDasharray: `${(skill.level / 100) * 2 * Math.PI * 56} ${2 * Math.PI * 56}` 
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.3 }}
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(0, 200, 255, 0.8))',
                    }}
                  />
                  
                  {/* Gradient Definition */}
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={skill.color.includes('orange') ? '#f97316' : skill.color.includes('yellow') ? '#eab308' : skill.color.includes('violet') ? '#8b5cf6' : skill.color.includes('red') && !skill.color.includes('orange') ? '#ef4444' : '#06b6d4'} />
                      <stop offset="100%" stopColor={skill.color.includes('cyan') ? '#06b6d4' : skill.color.includes('blue') ? '#3b82f6' : skill.color.includes('purple') ? '#a855f7' : skill.color.includes('amber') ? '#f59e0b' : '#f97316'} />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Percentage Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span 
                    className="text-3xl text-white"
                    style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 800 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  >
                    {skill.level}
                    <span className="text-cyan-400 text-xl">%</span>
                  </motion.span>
                </div>
              </div>

              {/* Status Text */}
              <div className="text-center text-sm text-slate-400" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <span className="text-cyan-400">◆</span> Proficiency Level
              </div>
            </div>

            {/* Corner Decoration */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-cyan-400/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
