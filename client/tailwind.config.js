/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexGrow: {
        2:'2',
        3:'3',
        4:'4'
      },
    },
  },
  plugins: [
    function({addUtilities}){
      const newutils = {
        '.commonParent':{
          "@apply w-screen h-screen":'',
        },
      };
      addUtilities(newutils)
    }],
}