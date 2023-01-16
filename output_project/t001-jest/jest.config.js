module.exports = {
  verbose: true,
  preset : '@vue/cli-plugin-unit-jest',
  ///
  globals           : {
    OS_ID: 1001,
  },
  testMatch         : [
    // '**/tests/unit/**/*.spec.[jt]s?(x)',
    // '**/__tests__/*.[jt]s?(x)',
    '<rootDir>/tests/unit/**/*.spec.[jt]s?(x)',
    '<rootDir>/__tests__/*.[jt]s?(x)',
  ],
  setupFiles        : ['<rootDir>/jest.env.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.console.js'],
}
