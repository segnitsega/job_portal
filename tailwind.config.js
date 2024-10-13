/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['poppins', 'sans-serif']
      },
      colors:{
        primary: '#6300B3',
        secondary: '#6200b37a',
        firstColor: '#C599E5',
        secondColor: '#C599E5',
        thirdColor: '#E2CCF2',
        fourthCOlor: '#hsla(275, 30%, 92%, 0.836)',
        setted: '#EFE2F8',
        footer: '#B781DF',
        icons: '#B781DF'
      }
    },
  },
  plugins: [],
}

