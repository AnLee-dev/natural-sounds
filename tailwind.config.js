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
        'bg-custom-dask': "url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk61915746-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=525cd495ac0927a11bd5013dcb5e4042')",
        'icon': "url('https://asoftmurmur.com/ea27c333ccfa1e38c8c1420700b99afa.png')",
      },
    },
    backgroundPosition: {
      'rain': '-500px -500px',
      'rain-white': '0px -300px',
      'thunder': '-600px -500px',
      'thunder-white': '-400px -200px',
      'wave': '-100px -600px',
      'wave-white': '0px -400px',
      'wind': '-300px -600px',
      'wind-white': '-200px -400px',
      'fire': '-200px -500px',
      'fire-white': '-300px 0px',
      'birds': '-400px -1100px',
      'birds-white': '-300px -1100px',
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
  darkMode: 'class',
}
