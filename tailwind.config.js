/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily :{
        'heebo': "'Heebo', 'sans-serif'",
        'edu': "'Edu SA Beginner', 'cursive'",
      }
      
    },
  },
  plugins: [require("daisyui")],
}

