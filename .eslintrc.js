const setupBaseConfig = require('./configuration/.eslintrc.js');

module.exports = setupBaseConfig({
  tsConfig: "tsconfig.dev.json",
  tsconfigRootDir: ".",
  rules: {
    'import/no-unresolved': [2, { ignore: ['^config$'] }],
  },
  overrides: [
    {
      "files": ["./**/webpack.**.js"],
      "rules": {
        "import/no-extraneous-dependencies": 0,
        "@typescript-eslint/no-var-requires": 0
      }
    },
    {
      "files": ["./lang/**/**.js"],
      "rules": {
        "import/no-extraneous-dependencies": 0,
        "@typescript-eslint/no-var-requires": 0
      }
    },
    {
      "files": ["./lang/**/**.ts"],
      "rules": {
        "import/no-extraneous-dependencies": 0
      }
    }
  ],
});
