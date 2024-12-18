import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "esbuild-jest",
  },
  setupFilesAfterEnv: ["jest-styled-components", "<rootDir>/src/setupTests.ts"],
};

export default createJestConfig(config);
