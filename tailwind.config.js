/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        expand: {
           '0%' : {height: '300px'},
              '100%' : {height: '350px'},
        },
        shrink: {
              '0%' : {height: '350px'},
                '100%' : {height: '300px'},
        }
      }
    },
    animation: {
        expand: 'expand 0.2s forwards',
        shrink: 'shrink 0.2s forwards'
    }
  },
  plugins: [],
}
