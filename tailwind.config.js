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
        'bg-custom': "url('https://img.freepik.com/premium-photo/beautiful-sunset-sky-with-pastel-pink-purple-colors-sunset-whit-clouds_692702-3718.jpg')",
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
  screens: {
    'mb': '374px',
    'tb': '640px',
    'lt': '1024px',
    'dt': '1280px',
  },
}
