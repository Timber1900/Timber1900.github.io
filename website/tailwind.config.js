module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        'pancake': '1fr auto 1fr'
      },
      width: {
        'full-minus-padding': 'calc(100% - 6em)'
      },
      minHeight: {
        'card': '14em'
      },
      textColor: {
        'discord': '#23272A',
        'github': '#000000',
        'youtube': '#FF0000',
        'steam': '#151D38',
        'twitch': '#9147FF'
      }
    },
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
      display: ['group-hover']

    }
  },
  plugins: []
}
