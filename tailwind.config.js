/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'StackSans': ['"Stack Sans Text"', 'sans-serif'],
        'Roboto': ["Roboto", 'sans-serif']
      },
      colors:{ 
        'blue-news': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        }
      },
      spacing: {
        custome: "105px"
      },
      padding: {
        "padding-custome": "15px"
      },
      margin: {
        "margin-custome": "25px"
      },
      width: {
        'custome-width' : '300px'
      },
    },
  },
  plugins: [],
};