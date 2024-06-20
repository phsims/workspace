/* eslint-disable */
export default {
  displayName: 'PlanMyPlate',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!next-auth).+',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/plan-my-plate',
  setupFilesAfterEnv: ['../../setupTests.ts']
};
