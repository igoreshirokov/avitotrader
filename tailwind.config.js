module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'fromleft': {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        'fromleft': 'fromleft .3s ease-in-out both',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
