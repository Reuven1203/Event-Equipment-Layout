/** @type {import('tailwindcss').Config} */
const packageSelectorCard = {
    unexpandedCardHeight: '210px',
    expandedCardHeight: '280px',
}
module.exports = {
  content: [
      "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        expand: {
               '0%' : {height: packageSelectorCard.unexpandedCardHeight},
              '100%' : {height: packageSelectorCard.expandedCardHeight},
        },
        shrink: {
              '0%' : {height: packageSelectorCard.expandedCardHeight},
                '100%' : {height: packageSelectorCard.unexpandedCardHeight},
        },
          pulse: {
            
          }
        // showForm: {
        //     '0%' : {
        //         height: '10px',
        //     },
        //     '100%' : {
        //         height: '350px',
        //         // width: '100%',
        //     },
        // },
        // hideForm: {
        //     '0%' : {
        //         height: '350px',
        //         // width: '100%',
        //     },
        //     '100%' : {
        //         height: '55px',
        //         // width: '350px',
        //     },
        // }
      }
    },
    animation: {
        expand: 'expand 0.2s forwards',
        shrink: 'shrink 0.2s forwards',
        showForm: 'showForm 0.2s forwards',
        hideForm: 'hideForm 0.2s forwards',
    }
  },
  plugins: [],
}
