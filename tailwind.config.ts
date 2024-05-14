/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1158px",
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
          paddingInline: "4px",
          paddingBlock: "6px",
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
    },
  ],
};
