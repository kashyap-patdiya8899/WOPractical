module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ["module-resolver", {
      "root": ["./src"],
      "extensions": ['.ts', '.tsx', '.js', '.jsx', '.json'], // Include all possible file types
      "alias": {
        '@WOPractical': './src',
      }
    }],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
