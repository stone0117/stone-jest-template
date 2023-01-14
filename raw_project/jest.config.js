module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  ///
  globals           : {
    OS_ID: 1001,
  },
  roots             : [],
  testMatch         : [
    '<rootDir>/__tests__/**/*.test.js',
    '<rootDir>/__tests__/**/*.spec.js',
    '<rootDir>/tests/**/*.spec.js',
  ],
  setupFiles        : ['<rootDir>/jest.env.js'],
  verbose           : true,
  setupFilesAfterEnv: ['<rootDir>/jest.console.js'],
}
