import React from 'react';
import { Globe, Link, MessageSquare, Fingerprint } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-grotesk font-bold gradient-text text-lg">Adhiban R</span>
          <p className="text-xs text-onSurfaceVariant mt-1">
            Python Developer
          </p>
        </div>

        <div className="flex items-center gap-3">
          {[Globe, Link, MessageSquare, Fingerprint].map((Icon, i) => (
            <a key={i} href="#"
              className="w-8 h-8 glass-sm rounded-full flex items-center justify-center text-onSurfaceVariant hover:text-white transition-all duration-200 hover:scale-110">
              <Icon size={14} />
            </a>
          ))}
        </div>

        <p className="text-xs text-onSurfaceVariant">
          © 2024 Adhiban R. Crafted with React & Three.js
        </p>
      </div>
    </footer>
  );
}
