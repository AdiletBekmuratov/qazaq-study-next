module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'rgb(33,147,176)',
        'light-blue': 'rgb(109,213,237)',
        'light-blue-2': 'rgba(103, 208, 232, 0.25)',
        'custom-yellow': 'rgb(255, 209, 26)',
        'gray-area': '#E5E5E5',
        'light-quiz': 'rgb(207,225,237)'
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
