module.exports = {
    coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/build/'],
    projects: ['<rootDir>/packages/*/jest.config.js'],
    testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/build/']
}
