import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#111111',
          light: '#333333',
          muted: '#666666',
          faint: '#999999',
        },
        wine: {
          DEFAULT: '#8B2252',
          light: '#A63366',
          dark: '#6B1A3F',
        },
        cream: {
          DEFAULT: '#FAFAF7',
          dark: '#F0F0EB',
        },
      },
      fontFamily: {
        editorial: ['"DM Serif Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
