/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: { max: '576px' },
      sm: { min: '577px', max: '768px' },
      md: { min: '769px', max: '992px' },
      lg: { min: '993px', max: '1200px' },
      xl: { min: '1201px' },
      mobile_sreen: {max: '992px'}

    },
    colors: {
      'white': '#ffffff',
      'green': '#1B5B31',
      'section2': '#F5F0EC'
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          margin: 'auto',
          '@screen xs': {
            maxWidth: '100%',
          },
          '@screen sm': {
            maxWidth: '576px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '992px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
        },
        
        '.width-xs': {
          margin: 'auto',
          width: '576px'
        }
      }
      
      
      )
    }
  ]
}