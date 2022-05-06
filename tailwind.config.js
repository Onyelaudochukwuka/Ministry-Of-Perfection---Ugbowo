module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors :{
        "color1" : "#5267DF",
        "color2" : "#FA5959",
        "color3" : "#242A45",
        "color4" : "#9194A2",
        "color5" : "#F7F7F7",
        "footer" : "rgb(151 127 189)",
        "footerHeading" : "rgb(10 10 189)",
        "footerText" : "rgb(0 0 89)",

      }
    },
    backgroundImage: {
      "img" : "url('./Resources/IMG-20220503-WA0106.jpg')"
    },
    fontFamily  : {
      "Poppins": ['"poppins",ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'],
    },
    container :{
      center : true,
      padding : "1rem",
      screen: {
        lg :  "1124px",
        xl : "1124px",
        "2xl" : "1124px",
      },
    }
  },
  plugins: [],
};
