import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Globe, Link, MessageSquare, Fingerprint, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    color: '#06B6D4',
    title: 'rajeshadhiban2005@gmail.com',
    sub: 'Send me an email',
  },
  {
    icon: MapPin,
    color: '#7C3AED',
    title: 'Madurai, India',
    sub: 'Available for remote work',
  },
  {
    icon: Clock,
    color: '#10B981',
    title: '+91 9025563756',
    sub: 'Quick response',
    pulse: true,
  },
];

const socials = [
  { icon: Globe, href: 'https://github.com/Adhiban05', label: 'GitHub' },
  { icon: Link, href: '#', label: 'Connect' },
  { icon: MessageSquare, href: '#', label: 'Message' },
  { icon: Fingerprint, href: '#', label: 'Portfolio' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] rounded-full opacity-7 blur-3xl pointer-events-none"
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
          <span className="section-tag bg-secondary/10 text-secondary border border-secondary/20 mb-4">
            ✦ Get In Touch
          </span>
          <h2 className="font-grotesk font-bold text-4xl md:text-5xl mt-4">
            Let's Build{' '}
            <span className="gradient-text">Something Amazing</span>
          </h2>
          <p className="text-onSurfaceVariant mt-4 max-w-xl mx-auto">
            Have a project in mind? Let's connect and create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left — Contact Info (2/5) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Info cards */}
            {contactInfo.map(({ icon: Icon, color, title, sub, pulse }) => (
              <div key={title} className="contact-info-card">
                <div className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center"
                  style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
                  {pulse ? (
                    <span className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: color }} />
                  ) : (
                    <Icon size={18} style={{ color }} />
                  )}
                </div>
                <div>
                  <p className="text-sm font-grotesk font-semibold text-white">{title}</p>
                  <p className="text-xs text-onSurfaceVariant mt-0.5">{sub}</p>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="mt-2">
              <p className="text-xs font-inter font-semibold text-onSurfaceVariant uppercase tracking-widest mb-4">
                Find me online
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 glass-sm rounded-full flex items-center justify-center text-onSurfaceVariant hover:text-white hover:border-white/25 transition-all duration-300 hover:scale-110"
                    style={{ '--hover-shadow': '0 0 20px rgba(124,58,237,0.3)' }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* 3D decoration */}
            <div className="mt-4 hidden lg:flex items-center justify-center h-32 relative opacity-60">
              <div className="w-24 h-24 rounded-full animate-float"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED40, #06B6D440)',
                  boxShadow: '0 0 40px rgba(124,58,237,0.3)',
                  border: '1px solid rgba(124,58,237,0.3)',
                }} />
            </div>
          </motion.div>

          {/* Right — Form (3/5) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-xs text-onSurfaceVariant font-inter mb-1.5 block">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Adhiban R"
                    className="input-glass"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs text-onSurfaceVariant font-inter mb-1.5 block">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    className="input-glass"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-xs text-onSurfaceVariant font-inter mb-1.5 block">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Project Collaboration"
                  className="input-glass"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
              </div>

              <div className="mb-6">
                <label className="text-xs text-onSurfaceVariant font-inter mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="input-glass resize-none"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <motion.button
                type="submit"
                className="btn-primary w-full text-white flex items-center justify-center gap-2 py-4"
                whileTap={{ scale: 0.98 }}
              >
                {sent ? '✓ Message Sent!' : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs text-secondary mt-4 cursor-pointer hover:underline">
                Or schedule a call on Calendly ↗
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
