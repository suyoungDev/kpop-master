const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@P/(.*)$': '<rootDir>/pages/$1',
    '^@C/(.*)$': '<rootDir>/containers/$1',
    '^@F/(.*)$': '<rootDir>/foundations/$1',
    '^@config/(.*)$': '<rootDir>/config/$1',
    '^@TS/(.*)$': '<rootDir>/types/$1',
    '^@fn/(.*)$': '<rootDir>/functions/$1',
    '^@hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@styles/(.*)$': '<rootDir>/styles/$1',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
