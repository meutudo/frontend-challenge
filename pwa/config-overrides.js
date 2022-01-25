const path = require('path')
const { alias, configPaths } = require('react-app-rewire-alias')
const { override, addBabelPreset } = require('customize-cra')

module.exports = override(
  addBabelPreset('@emotion/babel-preset-css-prop'),
  alias({
    ...configPaths('tsconfig.base.json'),
    react: path.resolve('./node_modules/react'),
  }),
)
