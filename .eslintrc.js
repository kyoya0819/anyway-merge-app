/** @type {import('eslint-config-next')*/
module.exports = {
  extends: ["next", "next/core-web-vitals", "prettier"],
  plugins: ["unused-imports"],
  rules: {
    "@next/next/no-img-element": "off",
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "unused-imports/no-unused-imports": "error",
  },
};
