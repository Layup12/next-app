const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testEnvironment: "jest-environment-jsdom",
    moduleNameMapper: {
        "^@components/(.*$)": "<rootDir>/src/components/$1",
        "^@pages/(.*$)": "<rootDir>/src/pages/$1",
        "^@services/(.*$)": "<rootDir>/src/services/$1",
        "^@mock/(.*$)": "<rootDir>/src/mock/$1",
    },
};

module.exports = createJestConfig(customJestConfig);
