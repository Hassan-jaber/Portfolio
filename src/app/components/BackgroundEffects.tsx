import { motion } from 'motion/react';

export function BackgroundEffects() {
  // Reduced particles for cleaner look
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 25 + 15,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Simplified Grid - Lower opacity */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(0, 200, 255, 0.2)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Reduced Floating Particles - Mobile hidden for performance */}
      <div className="hidden md:block">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-cyan-400"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              boxShadow: '0 0 6px rgba(0, 200, 255, 0.4)',
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Single Strong Background Focal Effect - More subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-[150px] hidden md:block" />
    </div>
  );
}
