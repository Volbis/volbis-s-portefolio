/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: { 
      colors: {
        // Motion.dev inspired palette
        'motion': {
          'dark': '#0A0A0B',
          'darker': '#050505',
          'gray': {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#E5E5E5',
            300: '#D4D4D4',
            400: '#A3A3A3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
            950: '#0A0A0A'
          },
          'blue': {
            50: '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
            300: '#93C5FD',
            400: '#60A5FA',
            500: '#3B82F6',
            600: '#2563EB',
            700: '#1D4ED8',
            800: '#1E40AF',
            900: '#1E3A8A'
          },
          'purple': {
            50: '#FAF5FF',
            100: '#F3E8FF',
            200: '#E9D5FF',
            300: '#D8B4FE',
            400: '#C084FC',
            500: '#A855F7',
            600: '#9333EA',
            700: '#7C3AED',
            800: '#6B21A8',
            900: '#581C87'
          }
        },
        // Dark mode colors (refined)
        dark: {
          'text': '#F5F5F5',
          'text-secondary': '#A3A3A3',
          'background': '#0A0A0B',
          'background-secondary': '#171717',
          'primary': '#60A5FA',
          'secondary': '#737373',
          'accent': '#C084FC',
          'border': '#262626',
        }
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
        pacifico: ['Pacifico', 'cursive'],
        eagle: ['Eagle Lake', 'cursive'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-motion': 'linear-gradient(135deg, #60A5FA 0%, #C084FC 50%, #60A5FA 100%)',
        'gradient-motion-subtle': 'linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(192, 132, 252, 0.1) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
      },
      blur: {
        xs: '2px',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

