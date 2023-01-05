import type { Config } from 'jest';

const jestConfig: Config = {
  extensionsToTreatAsEsm: [".ts"],
  coverageProvider: 'v8',
  setupFiles: ['dotenv/config'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
};

export default jestConfig;
