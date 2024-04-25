module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        headerTop: '#252B42',
        white: '#FFFFFF',
        title: '#252B42',
        softText: '#737373',
        click: '#23A6F0',
      },
    },
  },
  plugins: [],
  css: {
    swiper: {
      width: '100%',
      height: '100%',
    },
    'swiper-slide': {
      textAlign: 'center',
      fontSize: '18px',
      background: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
};
