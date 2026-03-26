import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'projects', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto"
    >
      <div className={`glass-nav px-6 py-3 flex items-center gap-8 transition-all duration-300 ${scrolled ? 'shadow-glow-violet' : ''}`}>
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNav(e, '#home')} className="font-grotesk font-bold text-sm gradient-text mr-2">
          AR.
        </a>

        {/* Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className={`relative px-3 py-1.5 text-sm font-inter font-medium rounded-full transition-all duration-300 ease-snappy ${
                activeSection === link.href.replace('#', '')
                  ? 'text-white'
                  : 'text-onSurfaceVariant hover:text-white'
              }`}
            >
              {activeSection === link.href.replace('#', '') && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => handleNav(e, '#contact')}
          className="btn-primary text-white text-xs py-2 px-5"
        >
          Hire Me ✦
        </a>
      </div>
    </motion.nav>
  );
}
