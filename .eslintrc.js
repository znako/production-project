module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["standard-with-typescript", "plugin:react/recommended", "plugin:i18next/recommended"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "i18next"],
    rules: {
        "@typescript-eslint/indent": [2, 4],
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/naming-convention": "off",
        "i18next/no-literal-string": ['error', {markupOnly: true}]
    },
    ignorePatterns: ['.eslintrc.js'],
};
