module.exports = {
  "extends": "eslint-config-egg",
  rules: {
    indent: ['warn', 2],
    semi: [2, 'nerver'],
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  }
}