/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1158px",
    },
    fontFamily: {
      "poppins-regular": ["Poppins-Regular", "sans-serif"],
      "poppins-medium": ["Poppins-Medium", "sans-serif"],
      "poppins-semibold": ["Poppins-SemiBold", "sans-serif"],
    },
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    ({ addComponents }) => {
      const paddingX = "16px";
      const paddingXLg = "15px";
      addComponents({
        body: {
          // fontFamily: "font-poppins-regular",
          backgroundColor: "#24252A",
          color: "#edf0f1",
        },
      });
      addComponents({
        ".container": {
          minWidth: "320px",
          maxWidth: "390px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: paddingX,
          paddingRight: paddingX,
          "@screen md": {
            paddingLeft: paddingX,
            paddingRight: paddingX,
            maxWidth: "768px",
          },
          "@screen lg": {
            paddingLeft: paddingXLg,
            paddingRight: paddingXLg,
            maxWidth: "1158px",
          },
        },
      });
      addComponents({
        ".nav-link": {
          position: "relative",
          padding: "6px",
          borderRadius: "18px",
          transition: "background-color 0.3s",
          "&:hover": {
            backgroundColor: "#3b3941",
          },
          "&.active": {
            backgroundColor: "#4e4e69",
          },
        },
      });
      addComponents({
        ".link": {
          position: "relative",
          "&::after": {
            content: "''",
            position: "absolute",
            left: "0",
            bottom: "0",
            width: "100%",
            height: "2px",
            backgroundColor: "#4278c8",
            transition: "transform 0.7s",
            transformOrigin: "right",
            transform: "scaleX(0)",
          },
          "&:hover::after": {
            transform: "scaleX(1)",
            transformOrigin: "left",
          },
        },
      });
    },
  ],
};
