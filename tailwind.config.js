/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme:  {
    colors: {
      'dark': '#0f172a',
      'yellow': '#facc15',
      'lightyellow': '#fde047',
      'deepdark': '#020617',
      'slate': '#E2E8F0',
      'black': '#000000',
      'lightblack': '#1B1212',
      'brightyellow': '#ffef00',
      'beige': '#FFFFFF',

    },
    screens: {
      'sm': '480px',
     
      'md': '768px',
     
      'lg': '976px',
      
      'xl': '1440px',
   
      '2xl': '1536px',
    
    }
    },
    extend: {
      
  },
  plugins: [],
}