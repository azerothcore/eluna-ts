import type { Config } from "@jest/types";
import { defaults } from "jest-config";

// Sync object
const config: Config.ConfigGlobals = {
  collectCoverage: true,
  coverageDirectory: "docs/typedoc/coverage",
  projects: [{
    ...defaults,
    displayName: "eluna-ts-lib",
    rootDir: "deps/eluna-ts-lib",
    testEnvironment: "node",
    preset: "ts-jest",
    moduleFileExtensions: [...defaults.moduleFileExtensions, "ts"], // add typescript to the default options
    transform: {
      "^.+\\.(t|j)s$": "ts-jest",
    },
    transformIgnorePatterns: [
      "node_modules/(?!@azerothcore)",
    ],
    // coverageThreshold: {
    //   "global": {
    //     "branches": 100,
    //     "functions": 100,
    //     "lines": 100,
    //     "statements": 100,
    //   },
    // },
  }],
};
export default config;
