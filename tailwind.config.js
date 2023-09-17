/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkgray: "#a0a0a0",
        black: "#000",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0)",
        },
        silver: {
          "100": "#c3c3c3",
          "200": "#b6b6b6",
        },
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f3f3f3",
        },
        darkslategray: "#414141",
        gray: {
          "100": "rgba(0, 0, 0, 0.66)",
          "200": "rgba(0, 0, 0, 0.7)",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      sm: "14px",
      xl: "20px",
      xs: "12px",
      "7xl": "26px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
