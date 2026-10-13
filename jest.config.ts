
import {createDefaultPreset, type JestConfigWithTsJest} from 'ts-jest';

export const JEST_CONFIG: JestConfigWithTsJest = {
    ...createDefaultPreset({
        tsconfig: '<rootDir>/spec/tsconfig.json'
    }),
    verbose: false,
    collectCoverage: true,
    
};

export default JEST_CONFIG;
