module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      textIndent: { // defaults to {}
        '1': '0.5rem',
        '2': '1.0rem',
      },
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
      },
      transitionTimingFunction: {
        back: "cubic-bezier(0.18, 0.89, 0.32, 1.28)"
      }
    },
  },
  variants: {
  },
  plugins: [
    require('tailwindcss-interaction-variants'),
    require('tailwindcss-typography')()
  ]
}
