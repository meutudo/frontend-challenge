const { alias, configPaths } = require('react-app-rewire-alias')
const { override } = require('customize-cra')

module.exports = override(
  alias({
    ...configPaths('tsconfig.base.json'),
  }),
  config => {
    // Let Babel compile outside of src/.
    const tsRule = config.module.rules[1].oneOf[2]
    tsRule.include = undefined
    tsRule.exclude = /node_modules/

    return config
  },
)
