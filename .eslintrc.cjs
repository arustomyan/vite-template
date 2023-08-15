module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:eslint-plugin-import/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: true,
      },
    ],
    "import/no-unresolved": "off",
    "import/no-absolute-path": "off",
    "no-shadow": "off",
    "react/self-closing-comp": "off",
    "prettier/prettier": "error",
  },
  overrides: [
    {
      files: ["*.tsx"],
      rules: {
        "react/jsx-filename-extension": "off",
      },
    },
  ],
};
