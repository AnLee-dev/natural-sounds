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
        'icon': "url('https://asoftmurmur.com/ea27c333ccfa1e38c8c1420700b99afa.png')",
      },
    },
    backgroundPosition: {
      'rain': '-501px -500px',
      'thunder': '-602px -502px',
      'wave': '-102px -600px',
      'wind': '-302px -600px',
      'fire': '-202px -500px',
      'birds': '-400px -1100px',
    }
  },
  plugins: [],
  important: true,
}
