/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {

    clearMocks: true,

    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    testMatch: [ // расширения файлов для тестирования
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    moduleDirectories: [ // игнорирование node_modules
        'node_modules',
        '<rootDir>',
    ],
    modulePaths: ['node_modules', '<rootDir>/src'],
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
    testEnvironment: 'jsdom',
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    rootDir: '../../', // корневая папка для тестированя исходя из конфига файла

};
