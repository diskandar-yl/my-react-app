module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Segoe UI, Inter, -apple-system, sans-serif",
      },
      colors: {
        // Instagram Dark Mode Colors
        "light-content": "#B3B3B3",
        "dark-heading": "#F1F1F1",
        "dark-content": "#8A8A8A",
        "light-heading": "#F1F1F1",
        "dark-mode": "#0A0A0A",
        "dark-card": "#121212",
        "insta-border": "#262626",
        "insta-text": "#E4E4E4",
        "insta-text-secondary": "#A8A8A8",
        "insta-gradient-pink": "#FF006E",
        "insta-gradient-purple": "#8B5CF6",
        "insta-gradient-blue": "#3B82F6",
      },
    },
  },
  plugins: [],
};
