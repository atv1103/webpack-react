// после внесения изменений в конфиг, требуется Ctrl+Shift+P → Developer: Reload Window для подсветки

/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard-scss",
    "@stylistic/stylelint-config"
  ],
  plugins: [
    "@stylistic/stylelint-plugin"
  ],
  rules: {
    "@stylistic/indentation": 4,
    'selector-class-pattern': null
  },
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss"
    }
  ]
};
