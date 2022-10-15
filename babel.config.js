module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.json'
          ],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@assets': './src/assets'
          }
        }
      ]
    ]
  };
};
