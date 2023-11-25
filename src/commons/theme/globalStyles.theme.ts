export const globalStyles = {
  global: {
    "*": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      borderRadius: "16px",
      "-webkit-tap-highlight-color": "transparent",
      "@media (hover: none)": {
        "*": {
          "&:hover": {
            opacity: 0,
          },
        },
      },
    },
    "html, body": {
      height: "100dvh",
      margin: 0,
      padding: 0,
    },
    body: {
      overflow: "hidden",
    },
  },
};
