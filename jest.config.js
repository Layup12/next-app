const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testEnvironment: "jest-environment-jsdom",
    moduleNameMapper: {
        "^@components/(.*$)": "<rootDir>/components/$1",
        "^@pages/(.*$)": "<rootDir>/pages/$1",
        "^@services/(.*$)": "<rootDir>/services/$1",
        "^@mock/(.*$)": "<rootDir>/mock/$1",
    },
};

module.exports = createJestConfig(customJestConfig);
