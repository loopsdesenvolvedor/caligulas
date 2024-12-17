import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

// Add custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Transformação para TypeScript (caso use)
    "^.+\\.(js|jsx)$": "esbuild-jest", // Transformação para JavaScript com esbuild (alternativa ao Babel)
  },
  setupFilesAfterEnv: ["jest-styled-components"], // Adiciona a configuração do jest-styled-components
};

export default createJestConfig(config);
