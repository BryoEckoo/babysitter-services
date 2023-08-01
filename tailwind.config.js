/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      height :{
        'h': "200px"
      },
      backgroundImage: {
        'parent': "url('parent.jpg')",
      },
      fontFamily :{
        'heebo': "'Heebo', 'sans-serif'",
        'edu': "'Edu SA Beginner', 'cursive'",
        'ysa':"'Ysabeau Infant', 'sans-serif'",
        'bree':"'Patua One', 'serif'",
      }
      
    },
  },
  plugins: [require("daisyui")],
}

