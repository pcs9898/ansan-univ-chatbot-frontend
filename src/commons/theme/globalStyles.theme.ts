export const globalStyles = {
  global: {
    "*": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      borderRadius: "16px",
      "-webkit-tap-highlight-color": "transparent",
      "@media (hover: hover)": {
        "*": {
          "&:hover": {
            opacity: 1,
          },
        },
      },
    },
    "html, body": {
      height: "100dvh", // 전체 높이를 설정
      margin: 0,
      padding: 0,
    },
    body: {
      overflow: "hidden",
    },
  },
};
