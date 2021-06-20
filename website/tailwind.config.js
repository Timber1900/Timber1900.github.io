module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        'pancake': '1fr auto 1fr'
      },
      width: {
        'full-minus-padding': 'calc(100% - 6em)',
        'full-minus-padding-small': 'calc(100% - 2em)',
        'half': '50%'
      },
      maxWidth: {
        'full-minus-padding': 'calc(100% - 6em)',
        'full-minus-padding-small': 'calc(100% - 2em)'
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
      },
      transitionProperty: {
        'width': 'width',
        'fill': 'fill'
      },
      screens: {
        'custombp': {'raw': '(min-height: 34em)'}
      },
      inset: {
        'full-plus': 'calc(100% + .5rem)'
      }
    },
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
      display: ['group-hover'],
      width: ['group-hover'],
      backgroundColor: ['active'],
      opacity: ['group-active']
    }
  },
  plugins: [
    require('tailwindcss-interaction-variants'),
  ]
}
