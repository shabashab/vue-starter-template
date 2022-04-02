module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
  ],
  plugins: ["@typescript-eslint"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  rules: {
    quotes: "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "vue/multi-word-component-names": ["error"],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2]
  },
};
