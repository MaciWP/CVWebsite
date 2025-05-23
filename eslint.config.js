export default [
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { document: "readonly", window: "readonly" },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {},
  },
];
