import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  // Optimized for GPU rendering with will-change and transform
  const blobs = [
    { color: 'bg-teal-200', x: '10%', y: '20%', scale: [1, 1.2, 1] },
    { color: 'bg-blue-200', x: '80%', y: '10%', scale: [1.2, 1, 1.2] },
    { color: 'bg-indigo-200', x: '50%', y: '80%', scale: [1, 1.3, 1] },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-50 pointer-events-none">
      {/* Static Noise Texture - Cached by browser */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* GPU Accelerated Blobs */}
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 ${blob.color}`}
          style={{
            left: blob.x,
            top: blob.y,
            willChange: 'transform', // Hardware Acceleration Hint
          }}
          animate={{
            transform: [
              `translate(0px, 0px) scale(${blob.scale[0]})`, 
              `translate(30px, -50px) scale(${blob.scale[1]})`, 
              `translate(-20px, 20px) scale(${blob.scale[2]})`, 
              `translate(0px, 0px) scale(${blob.scale[0]})`
            ],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;