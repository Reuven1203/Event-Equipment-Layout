/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        expand: {
           '0%' : {height: '245px'},
              '100%' : {height: '275px'},
        },
        shrink: {
              '0%' : {height: '275px'},
                '100%' : {height: '240px'},
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
