const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: path.resolve('./'),
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.tsx',
            '.android.ts',
            '.ios.tsx',
            '.ios.ts',
          ],
          alias: {
            assets: './src/assets',
            components: './src/components',
            hooks: './src/hooks',
            utils: './src/utils',
            views: './src/views',
            types: './src/types',
            state: './src/state',
            hoc: './src/hoc',
            externals: './src/externals',
          },
        },
      ],
    ],
  };
};
