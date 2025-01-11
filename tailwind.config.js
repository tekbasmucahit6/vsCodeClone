/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'leftBar': '#0F0F11',
        "leftBarHover": "#343a40",
        'header': '#0B0B0C',
        "headerHoverTextBg": "#202025",
        "searchBar": "#132020",
        "folderBar": "#0F0F11",
        "mainCompBg": "#141417",
      },
      colors: {
        'headerText': "#95959E",
        "mainCompBg": "#141417",
      }
    },
  },
  plugins: [],
}