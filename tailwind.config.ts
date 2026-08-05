import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Premium industrial palette
        brand: {
          yellow: '#FFC400', // safety / machinery yellow
          amber: '#FF9E00',
          dark: '#0B0B0D', // near-black
          steel: '#17181C', // dark gray surface
          slate: '#22242B',
          ash: '#3A3D46',
          fog: '#9AA0AB',
          mist: '#E7E9EE',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(0,0,0,0.35)',
        glow: '0 8px 40px -8px rgba(255,196,0,0.45)',
        lift: '0 20px 50px -16px rgba(0,0,0,0.55)',
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
