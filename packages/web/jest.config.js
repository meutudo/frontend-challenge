const { name } = require('./package.json')

module.exports = {
    displayName: name,
    name,
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^.+.(png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+(css|styl|less|sass|scss)$': 'identity-obj-proxy'
    }
}
