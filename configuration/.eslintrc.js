function setupEslint({
  tsConfig,
  tsconfigRootDir,
  rules = {},
  overrides = [],
}) {
  return {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'airbnb',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
      project: tsConfig,
      tsconfigRootDir: tsconfigRootDir,
    },
    plugins: [
      'react',
      '@typescript-eslint',
      'jsx-a11y',
      'import',
      'react-hooks',
      'formatjs',
    ],
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'no-multiple-empty-lines': ['error', { max: 2 }],
      '@typescript-eslint/no-unused-vars': ['error'],
      'react/prop-types': 0,
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'import/extensions': [2, {
        ts: 'never',
        tsx: 'never',
        json: 'always',
      }],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'formatjs/enforce-description': ['error', 'literal'],
      'formatjs/enforce-default-message': ['error', 'literal'],
      'formatjs/no-id': 'error',
      ...rules,
    },
    overrides,
  };
}

module.exports = setupEslint;
