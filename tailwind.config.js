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

        '.half-container':{
          '@screen xs': {
            width: '50%',
          },
          '@screen sm': {
            width: '288px',
          },
          '@screen md': {
            width: '384px',
          },
          '@screen lg': {
            width: '496px',
          },
          '@screen xl': {
            width: '600px',
          },
        },
        
        '.width-xs': {
          margin: 'auto',
          width: '576px'
        },
        '.right-container': {
          width: '100vw',
          marginRight: 'calc(50vw-50%)'
        },
        '.left-container': {
          marginLeft: 'calc(50vw - 50%)',
          
        },
        
        ".half-screen":{
          width: "50vw"

        },

        '.custom-h-720': {
          height: '720px'
        },

        
      }
      
      
      )
    }
  ]
}