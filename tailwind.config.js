/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-custom-bg-class': "url('https://e3.365dm.com/22/02/2048x1152/skynews-rogue-wave_5673312.jpg')",
      },
    },
  },
  plugins: [],
}
