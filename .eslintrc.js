module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ["standard-with-typescript", "plugin:react/recommended", "plugin:i18next/recommended", "plugin:storybook/recommended", "plugin:storybook/recommended", "plugin:react-hooks/recommended"],
  overrides: [{
    env: {
      node: true
    },
    files: [".eslintrc.{js,cjs}"],
    parserOptions: {
      sourceType: "script"
    }
  }],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "i18next", "znako-plugin"],
  rules: {
    "@typescript-eslint/indent": [2, 4],
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/naming-convention": "off",
    "react/display-name": "off",
    "i18next/no-literal-string": ['error', {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'to', "justify", "align", "direction", "gap"]
    }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "znako-plugin/path-checker": "error"
  },
  ignorePatterns: ['.eslintrc.js'],
  overrides: [{
    files: ['**/src/**/*.test.{ts,tsx}'],
    rules: {
      "i18next/no-literal-string": 'off'
    }
  }]
};