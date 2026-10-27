import globals from "globals";

export default [
  {
    ignores: [
      "node_modules/**",
      "qa-output/**",
      ".sites-runtime/**",
      "dist/vendor/**",
    ],
  },
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
    rules: { "no-undef": "error" },
  },
];
