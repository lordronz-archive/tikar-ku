module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      'vgreen': '#23bb86',
      'vblack': '#0b132a',
      'vwhite': '#fff',
      'vyellow': '#ffce31',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
