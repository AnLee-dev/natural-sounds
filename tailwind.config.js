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
        'my-custom-bg-class': "url('https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/359352897_1400158840559577_997087678695520469_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-D8mltaTPCgAX-I69Go&_nc_ht=scontent.fhan18-1.fna&oh=00_AfAY_puO03TCIFNlMAo9dgeF9qdiDYhLfYPlN37xamSGHg&oe=64BAB222')",
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
