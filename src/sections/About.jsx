import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Link, MessageSquare, Download, Code2, Server, Box, Palette } from 'lucide-react';

const skills = [
  {
    icon: Code2, label: 'Core Languages',
    desc: 'Python, Java, Javascript, Embedded C',
    color: '#06B6D4',
  },
  {
    icon: Server, label: 'AI & Machine Learning',
    desc: 'TensorFlow, Keras, OpenCV',
    color: '#7C3AED',
  },
  {
    icon: Box, label: 'Embedded Tech',
    desc: 'Raspberry Pi, Jetson Nano, Arduino',
    color: '#F97316',
  },
  {
    icon: Palette, label: 'Tools & DBs',
    desc: 'MySQL, MQTT, Grafana, GIT',
    color: '#EC4899',
  },
];

const techSkills = [
  { name: 'Python & AI/ML', level: 95, color: '#06B6D4' },
  { name: 'Embedded Systems & IoT', level: 90, color: '#7C3AED' },
  { name: 'JavaScript, Java, C', level: 85, color: '#F97316' },
  { name: 'Tools (Git, Grafana, etc.)', level: 80, color: '#EC4899' },
];

function ProgressBar({ name, level, color, index }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setAnimated(true);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-inter font-medium text-onSurface">{name}</span>
        <span className="text-xs font-inter font-semibold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
          initial={{ width: 0 }}
          animate={{ width: animated ? `${level}%` : 0 }}
          transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

function HexPhoto() {
  return (
    <div className="relative flex justify-center items-center mb-8">
      <div className="relative">
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full opacity-30 blur-2xl animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, #7C3AED, #06B6D4)' }} />
        {/* Photo frame */}
        <div
          className="relative w-52 h-52 rounded-full overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
            padding: '3px',
          }}
        >
          <div
            className="w-full h-full rounded-full flex items-center justify-center"
            style={{ background: '#1B1B20' }}
          >
            {/* Avatar placeholder */}
            <div className="w-full h-full rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #7C3AED20, #06B6D420)' }}>
              <div className="text-7xl select-none">👨‍💻</div>
            </div>
          </div>
        </div>
        {/* Orbiting badge */}
        <div className="absolute -bottom-2 -right-2 glass px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-inter text-emerald-400 font-medium">Open to Work</span>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const socials = [
    { icon: Globe, href: '#', color: '#E4E1E8' },
    { icon: Link, href: '#', color: '#06B6D4' },
    { icon: MessageSquare, href: '#', color: '#7C3AED' },
  ];

  return (
    <section id="about" className="relative py-32 px-6" style={{ background: '#1B1B20' }}>
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06B6D4, transparent)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="section-tag bg-secondary/10 text-secondary border border-secondary/20 mb-4">
            ✦ About Me
          </span>
          <h2 className="font-grotesk font-bold text-4xl md:text-5xl mt-4">
            The Developer{' '}
            <span className="gradient-text">Behind the Code</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Photo + Socials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center"
          >
            <HexPhoto />

            {/* Social links */}
            <div className="flex items-center gap-3 mb-6">
              {socials.map(({ icon: Icon, href, color }) => (
                <a
                  key={href + color}
                  href={href}
                  className="w-10 h-10 glass-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ '--hover-color': color }}
                >
                  <Icon size={18} style={{ color }} />
                </a>
              ))}
            </div>

            <button className="btn-primary text-white flex items-center gap-2 text-sm">
              <Download size={15} /> Download Resume
            </button>
          </motion.div>

          {/* Right — Bio + Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Bio */}
            <p className="text-onSurfaceVariant leading-relaxed mb-8 text-base">
              I'm <span className="text-white font-medium">Adhiban R</span>, a <span className="text-primary font-medium">Python Developer</span> currently completing my Bachelor of Engineering in Computer Science at The American College, Madurai.
              I work as a Python Developer Intern at QUANTANICS, designing IoT-enabled autonomous vehicles and developing efficient data-loss mitigation scripts.
              My goal is to leverage my technical expertise to contribute to meaningful innovations within the tech industry.
            </p>

            {/* What I Do */}
            <h3 className="font-grotesk font-semibold text-lg text-white mb-4">What I Do</h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {skills.map(({ icon: Icon, label, desc, color }) => (
                <div key={label} className="skill-card group">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <h4 className="font-grotesk font-semibold text-sm text-white mb-1">{label}</h4>
                  <p className="text-xs text-onSurfaceVariant leading-snug">{desc}</p>
                </div>
              ))}
            </div>

            {/* Progress bars */}
            <h3 className="font-grotesk font-semibold text-lg text-white mb-4">Proficiency</h3>
            {techSkills.map((skill, i) => (
              <ProgressBar key={skill.name} {...skill} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
