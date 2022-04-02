import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";
import typography from "windicss/plugin/typography";

export default defineConfig({
  darkMode: "class",
  attributify: {
    prefix: "w:"
  },
  theme: {
    extend: {
      colors: {
        grey: colors.gray,
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
        secondary: ["Open Sans", "sans-serif"]
      },
    },
  },
  plugins: [typography],
});
