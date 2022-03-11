module.exports = {
  preset: 'jest-puppeteer',
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['<rootDir>/test/**/*.+(ts|js)'],
  setupFilesAfterEnv: ['./test/jest-setup.ts'],
  modulePathIgnorePatterns: ['jest-setup.ts'],
};
