module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ["jest"],
  rules: { "jest/valid-expect-in-promise": "error" },
};
