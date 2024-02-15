module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue: { A400_01: "#1f79ff", A400: "#2079ff" },
        deep_orange: { 200: "#fca19b", A100: "#ee9972" },
        light_blue: {
          A700_19: "#0096eb19",
          A700: "#0a84ff",
          A700_26: "#0a84ff26",
          "500_19": "#04a4ff19",
        },
        blue_gray: {
          100: "#d2d5da",
          500: "#696f8c",
          700: "#495e57",
          800: "#344053",
          900: "#333333",
          "100_01": "#cfd4dc",
          "500_01": "#667084",
          "900_01": "#051b44",
          "700_01": "#4b5563",
        },
        red: { 500: "#f04437" },
        gray: {
          200: "#edefee",
          300: "#d8dae5",
          400: "#afafaf",
          900: "#1e1e1e",
          "900_0c": "#1018280c",
          "900_01": "#0f1728",
        },
        black: { 900: "#000000" },
        deep_purple: { A200: "#9747ff" },
        amber: { 500: "#f4ce14" },
        white: { A700_f2: "#fffffff2", A700: "#ffffff" },
      },
      boxShadow: { bs: "0px 1px  2px 0px #1018280c" },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#0096eb19,#04a4ff19)",
      },
      fontFamily: {
        karla: "Karla",
        markazitext: "Markazi Text",
        roboto: "Roboto",
        abel: "Abel",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
