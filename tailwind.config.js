module.exports = {
  content: ["./index.html", "./contact/**/*.html", "./request-a-quote/**/*.html", "./about/**/*.html", "./case-studies/**/*.html", "./case-studies/easy-filter/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-color": "#2D2D2D",
        "secondary-color": "#AAAAAA",
        "tertiary-color": "#222222",
        "quaternary-color": "#EEEEEE",
        "quinary-color": "#333333",
        "senary-color": "#F4F4F4",
        "septenary-color": "#1A1A1A",
        //other-colors
        "green-primary-color": "#73C851",
        "blue-primary-color": "#4689f2",
      },
      fontFamily: {
        "ny-medium": "NewYorkExtraLarge_Medium, serif",
        "metro-regular": "Metropolis_Regular, sans-serif",
        "metro-extralight": "Metropolis_ExtraLight, sans-serif",
        "metro-semibold": "Metropolis_SemiBold, sans-serif",
      },
      height: {
        525: "525px",
        425: "425px",
        380: "380px",
        340: "340px",
        320: "320px",
        250: "250px",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        beat: "beat 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
        beat: {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.125)" },
        },
      },
      screens: {
        lg: { min: "900px" },
        xl: { min: "1100px" },
        "2xl": { min: "1280px" },
        "3xl": { min: "1520px" },
        "4xl": { min: "1920px" },
      },
    },
    container: {
      center: true,
      screens: {
        lg: "900px",
        xl: "1100px",
        "2xl": "1280px",
        "3xl": "1520px",
        "4xl": "1920px",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [],
};
