export const globalStyles = {
  global: {
    "*": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      borderRadius: "16px",
      WebkitTapHighlightColor: "transparent",
      _hover: {
        bg: ["initial", "initial", "green.500", "red.500"],
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
