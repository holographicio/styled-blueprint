const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const path = require('path');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader', // creates style nodes from JS strings
      },
      {
        loader: 'css-loader', // translates CSS into CommonJS
      },
      {
        loader: 'sass-loader', // compiles Sass to CSS
      },
    ],
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: ['babel-loader?cacheDirectory'],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
