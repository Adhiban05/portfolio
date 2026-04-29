/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#131318',
        primary: '#7C3AED',
        secondary: '#06B6D4',
        surface: {
          DEFAULT: '#131318',
          low: '#1B1B20',
          high: '#2A292F',
          highest: '#35343A',
          bright: '#39393E',
        },
        onSurface: '#E4E1E8',
        onSurfaceVariant: '#CCC3D8',
        outline: '#4A4455',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #7C3AED, #06B6D4)',
        'gradient-primary-r': 'linear-gradient(135deg, #06B6D4, #7C3AED)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'counter': 'counter 2s ease-out forwards',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(6, 182, 212, 0.5)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      boxShadow: {
        'glow-violet': '0 0 40px rgba(124, 58, 237, 0.25)',
        'glow-cyan': '0 0 40px rgba(6, 182, 212, 0.25)',
        'glow-lg': '0 0 60px rgba(124, 58, 237, 0.15)',
        'card': '0 8px 32px rgba(0,0,0,0.4)',
      },
      backdropBlur: {
        xs: '4px',
      },
      transitionTimingFunction: {
        'snappy': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
