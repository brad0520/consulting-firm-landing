/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'apple': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'apple-gray': {
          100: '#f5f5f7',
          200: '#e8e8ed',
          300: '#d2d2d7',
          400: '#86868b',
          500: '#515154',
          600: '#424245',
          700: '#1d1d1f',
        },
        'apple-blue': '#0071e3',
        'apple-orange': '#f56500',
        'apple-green': '#30d158',
        'apple-purple': '#bf5af2',
        'apple-pink': '#ff2d92',
        'apple-yellow': '#ffd60a',
      },
    },
  },
  plugins: [],
}

