module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'contact-bg':
          "url('https://s3-alpha-sig.figma.com/img/8671/5b00/02656e5e55f527a50fe8ae2bc1e70550?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KoEMevyqdirK2oWZvWq8YGNTVIbaeF8T3XZRni7pfQxbA2GZ2TQEfo87vl~qzUJ20z2EfvPJv3ANFB2A-fRy2PArAn9FAwUV22nfp2ZaivSwmZFDBllxGK7GFujGk5YEGWDbwAZ9m1rtbULp~dpgMfT428iKOb3AKfHyW2Wa9INGvMWwqskTuT8SAk-2qwBM4A-gTbKWaO-A7yyqBjHWnBbpnyTQLPOjiRwTSaGVZeOs9SQwji~cV5uKGRV1Je3Sd~vWNmn60zX3He5AzPh0mIljcgxZwdwm63MdIiPfJSxcO64b8dgqt~qYrm5Z5OTO~ZA0fuRY42b0Fxc4h0379w__')",
      },
      colors: {
        headerTop: '#252B42',
        white: '#FFFFFF',
        title: '#252B42',
        softText: '#737373',
        click: '#23A6F0',
        oldP: '#BDBDBD',
        newP: '#23856D',
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
