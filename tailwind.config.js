/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* slate-400 with opacity */
        input: "var(--color-input)", /* slate-800 */
        ring: "var(--color-ring)", /* sky-500 */
        background: "var(--color-background)", /* slate-900 */
        foreground: "var(--color-foreground)", /* slate-50 */
        primary: {
          DEFAULT: "var(--color-primary)", /* sky-500 */
          foreground: "var(--color-primary-foreground)", /* slate-50 */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* slate-500 */
          foreground: "var(--color-secondary-foreground)", /* slate-50 */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-500 */
          foreground: "var(--color-destructive-foreground)", /* slate-50 */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* slate-700 */
          foreground: "var(--color-muted-foreground)", /* slate-400 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* cyan-500 */
          foreground: "var(--color-accent-foreground)", /* slate-50 */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* slate-800 */
          foreground: "var(--color-popover-foreground)", /* slate-50 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* slate-800 */
          foreground: "var(--color-card-foreground)", /* slate-50 */
        },
        success: {
          DEFAULT: "var(--color-success)", /* emerald-500 */
          foreground: "var(--color-success-foreground)", /* slate-50 */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* amber-500 */
          foreground: "var(--color-warning-foreground)", /* slate-900 */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-500 */
          foreground: "var(--color-error-foreground)", /* slate-50 */
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
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
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        "pulse-scan": "pulse-scan 2s infinite",
        "progress-fill": "progress-fill 1.5s linear",
      },
      keyframes: {
        "pulse-scan": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.5",
          },
        },
        "progress-fill": {
          "0%": {
            transform: "rotate(-90deg)",
          },
          "100%": {
            transform: "rotate(270deg)",
          },
        },
      },
      boxShadow: {
        'cyber': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        'cyber-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.4)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}