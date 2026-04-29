import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ExternalLink, Layers, Brain, BarChart3 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: '3D Galaxy Explorer',
    desc: 'An immersive WebGL-powered space exploration app with real-time 3D nebula rendering and interactive star systems.',
    tags: ['React', 'Three.js', 'WebGL', 'GLSL'],
    icon: Layers,
    color: '#7C3AED',
    gradient: 'from-violet-900/60 via-violet-800/40 to-transparent',
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'AI Design Studio',
    desc: 'A generative AI-powered design interface that transforms natural language prompts into stunning UI mockups.',
    tags: ['Next.js', 'Python', 'OpenAI', 'Figma API'],
    icon: Brain,
    color: '#06B6D4',
    gradient: 'from-cyan-900/60 via-cyan-800/40 to-transparent',
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'Crypto Dashboard',
    desc: 'A real-time cryptocurrency analytics platform with dynamic D3.js visualizations and WebSocket market data feeds.',
    tags: ['React', 'D3.js', 'Node.js', 'WebSocket'],
    icon: BarChart3,
    color: '#EC4899',
    gradient: 'from-pink-900/60 via-pink-800/40 to-transparent',
    github: '#',
    live: '#',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function ProjectCard({ project }) {
  const Icon = project.icon;
  return (
    <motion.div
      variants={cardVariants}
      className="card-project group"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden" style={{ background: `linear-gradient(135deg, ${project.color}20, #131318)` }}>
        <div className={`absolute inset-0 bg-gradient-to-b ${project.gradient}`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{ background: `${project.color}20`, border: `1px solid ${project.color}30` }}
          >
            <Icon size={36} style={{ color: project.color }} />
          </div>
        </div>
        {/* Decorative dots */}
        <div className="absolute top-4 right-4 grid grid-cols-3 gap-1 opacity-30">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full" style={{ backgroundColor: project.color }} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-grotesk font-bold text-lg text-white mb-2 group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-onSurfaceVariant leading-relaxed mb-4">{project.desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-inter font-medium"
              style={{
                background: `${project.color}15`,
                color: project.color,
                border: `1px solid ${project.color}25`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            className="flex items-center gap-2 glass-sm px-4 py-2 text-xs text-onSurfaceVariant hover:text-white transition-all duration-200 hover:border-white/20"
          >
            <Globe size={14} /> GitHub
          </a>
          <a
            href={project.live}
            className="flex items-center gap-2 text-xs font-medium transition-all duration-200 hover:opacity-80"
            style={{ color: project.color }}
          >
            Live Demo <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="section-tag bg-primary/10 text-primary border border-primary/20 mb-4">
            ✦ My Work
          </span>
          <h2 className="font-grotesk font-bold text-4xl md:text-5xl mt-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-onSurfaceVariant mt-4 max-w-xl mx-auto">
            A selection of my most impactful work — crafted with precision and passion.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <button className="btn-primary text-white px-8 py-3.5">
            View All Projects →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
