/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors:{
        "primary": "#d27335",
        "secondary": "#000000",
        "success": "#6DD400",
        "warning": "#D39F00",
        "danger": "#E02020",
        "black": "#000000",
        "black8": "#00000014",
        "black12": "#0000001f",
        "black24": "#0000003d",
        "black38": "#00000061",
        "black54": "#0000008a",
        "black70": "#000000b3",
        "black87": "#000000de",
        "white": "#FFFFFF",
        "white24": "#ffffff3d",
        "white87": "#ffffffde",
        "gray": "#757575",
        "gray12": "#ffffff1f",
        "gray42": "#F2F2F2",
        "gray45": "#F5F5F5",
        "gray50": "#FAFAFA",
        "purple": "#BFB7FF",
        "text": "#fff",
        "dark": "#000",
        "golden": "#FFCA0E",
        "transparent": "#0000",
        "body-background": "#ffffff"
      }
    },
    fontFamily: {
      body: "var(--font-body)",
      heading: "var(--font-heading)",
      }
    },
    plugins: [],
  }


