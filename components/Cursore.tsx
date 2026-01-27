import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Cursore fluido che non appesantisce il browser.
 * Usa useMotionValue per aggiornamenti diretti del DOM.
 */
const Cursore: React.FC = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const gestisciMovimento = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', gestisciMovimento);
    return () => window.removeEventListener('mousemove', gestisciMovimento);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-teal-500 rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
      style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
    />
  );
};

export default Cursore;