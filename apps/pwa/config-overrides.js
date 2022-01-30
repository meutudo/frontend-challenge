const path = require('path')
const { alias, configPaths } = require('react-app-rewire-alias')
const { override } = require('customize-cra')

module.exports = override(
  alias({
    ...configPaths('tsconfig.base.json'),
  }),
)
