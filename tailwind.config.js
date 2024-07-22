module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1e1e1e',
        secondary: '#333',
        accent: '#e0e0e0',
      },
      fontSize: {
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
