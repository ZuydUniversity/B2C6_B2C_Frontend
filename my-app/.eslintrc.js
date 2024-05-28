module.exports = {
  env: {
    browser: true, // Enable browser global variables like `window` and `document`
    es2021: true,  // Enable all ECMAScript 2021 globals and syntax
    node: true,    // Enable Node.js global variables and Node.js scoping
  },
  extends: [
    'eslint:recommended', // Use recommended ESLint rules
    'plugin:react/recommended', // Use recommended rules for React
    'plugin:@typescript-eslint/recommended', // Use recommended rules from @typescript-eslint/eslint-plugin
  ],
  parser: '@typescript-eslint/parser', // Specify the parser for TypeScript
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Enable parsing of JSX
    },
    ecmaVersion: 12, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: [
    'react', // Enables React-specific linting rules
    '@typescript-eslint', // Enables TypeScript-specific linting rules
  ],
  rules: {
    // Place to specify custom ESLint rules.
    // e.g. "semi": ["error", "always"],
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the version of React to use
    },
  },
};
