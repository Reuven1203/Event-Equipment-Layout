/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      colors: {
        blue: {
            light: '#3B82F6',
        },
          white: {
                DEFAULT: '#FFFFFF',
          },
          black: {
                DEFAULT: '#000000',
          }
      },
    extend: {
        boxShadow: {
            'custom-1': '0px 0px 9.15px 0px #2E4AA6',
            'custom-2': '0px 0px 18.3px 0px #2E4AA6',
            'custom-3': '0px 0px 64.05px 0px #2E4AA6',
        },
      keyframes: {
        expand: {
           '0%' : {height: '245px'},
              '100%' : {height: '275px'},
        },
        shrink: {
              '0%' : {height: '275px'},
                '100%' : {height: '240px'},
        },
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
