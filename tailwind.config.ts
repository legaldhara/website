import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
       fontFamily: {
        urbanist: ['ui-sans-serif', 'system-ui', 'sans-serif'],
        },

      colors: {
        'deep-blue': '#111111',
        'brand-orange': '#BC9139',
        'brand-orange3': '#BC9139',
        'brand-orange2': '#E7E2D8',
        'light-orange': '#F7F5F0',
        'rang': '#FFFFFF',
        'dark-blue': '#252525',
        ink: '#111111',
        charcoal: '#252525',
        gold: '#BC9139',
        paper: '#F7F5F0',
        'main-text': '#151515',
        'secondary-text': '#747474',
        'ledger-border': '#E7E2D8',
        blue: {
          50: '#F7F5F0',
          100: '#E7E2D8',
          200: '#E7E2D8',
          300: '#BC9139',
          400: '#BC9139',
          500: '#BC9139',
          600: '#252525',
          700: '#252525',
          800: '#111111',
          900: '#111111',
          950: '#111111',
        },
        orange: {
          50: '#F7F5F0',
          100: '#E7E2D8',
          200: '#E7E2D8',
          300: '#BC9139',
          400: '#BC9139',
          500: '#BC9139',
          600: '#BC9139',
          700: '#252525',
          800: '#111111',
          900: '#111111',
        },
        yellow: {
          50: '#F7F5F0',
          100: '#E7E2D8',
          200: '#E7E2D8',
          300: '#BC9139',
          400: '#BC9139',
          500: '#BC9139',
          600: '#BC9139',
          700: '#252525',
          800: '#111111',
          900: '#111111',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },

      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fade-in': {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-in': {
          from: {
            transform: 'translateX(-100%)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // scroll half, because we're repeating
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
        'scroll': 'scroll 20s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
