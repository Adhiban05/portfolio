import React, { Suspense, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Briefcase, Clock, Users } from 'lucide-react';
import HeroOrb from '../components/three/HeroOrb';

const stats = [
  { icon: Briefcase, label: 'Projects', value: '10+' },
  { icon: Clock, label: 'Years Exp.', value: '1+' },
  { icon: Users, label: 'HackerRank', value: '5-Star' },
];

function AnimatedCounter({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const num = parseInt(target);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const duration = 1500;
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          setCount(Math.floor(progress * num));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num]);
  return <span ref={ref}>{count}{target.includes('+') ? '+' : ''}</span>;
}

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06B6D4, transparent)' }} />

      {/* Perspective grid */}
      <div className="perspective-grid" />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center w-full">

        {/* Left — Content */}
        <div className="lg:pr-8">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-inter font-semibold bg-secondary/10 text-secondary border border-secondary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Available for work ✦
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-grotesk font-bold text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight mb-4"
          >
            Hi, I'm{' '}
            <span className="gradient-text block">Adhiban R</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-onSurfaceVariant font-grotesk mb-4"
          >
            Python Developer | AI & ML Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-base text-onSurfaceVariant/70 leading-relaxed max-w-lg mb-8"
          >
            Seeking a challenging role in Python Development with a keen focus on Artificial Intelligence. 
            Committed to lifelong learning and creating meaningful innovations.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-12 flex-wrap"
          >
            <button
              onClick={() => handleScroll('projects')}
              className="btn-primary text-white flex items-center gap-2"
            >
              View Projects <ArrowRight size={16} />
            </button>
            <button className="btn-ghost flex items-center gap-2">
              <Download size={16} /> Download CV
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4"
          >
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass-sm px-5 py-4 flex items-center gap-3 flex-1 min-w-0">
                <Icon size={18} className="text-primary shrink-0" />
                <div className="min-w-0">
                  <div className="font-grotesk font-bold text-xl text-white leading-none">
                    <AnimatedCounter target={value} />
                  </div>
                  <div className="text-xs text-onSurfaceVariant mt-0.5 truncate">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Three.js Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-[500px] lg:h-[600px] relative"
        >
          {/* Glow behind canvas */}
          <div className="absolute inset-0 rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle at center, #7C3AED 0%, #06B6D4 50%, transparent 70%)' }} />
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-32 h-32 rounded-full animate-pulse-glow" style={{ background: 'radial-gradient(circle, #7C3AED, #06B6D4)' }} />
            </div>
          }>
            <HeroOrb />
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-onSurfaceVariant/50 tracking-widest uppercase font-inter">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
