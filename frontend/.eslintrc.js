module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "react-hooks"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".jsx", ".js"],
      },
    ],
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};