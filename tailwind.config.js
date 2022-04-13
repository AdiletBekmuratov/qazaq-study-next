module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'mx-sz': '1750px'
      }, 
			colors: {
				'dark-blue': 'rgb(33,147,176)',
				'light-blue': 'rgb(109,213,237)',
        'light-blue-2': 'rgba(103, 208, 232, 0.25)',
        'custom-yellow': '#FFD11A',
			}
		},
  },
  plugins: [],
}
