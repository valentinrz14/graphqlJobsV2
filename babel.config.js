module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@core': './src/core',
          '@global-styles': './src/global-styles',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@dashboard': './src/dashboard',
        },
      },
    ],
    'jest-hoist',
  ],
};
