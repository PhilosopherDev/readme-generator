const path = require('path')

module.exports = (_env, argv) => {
  const isProd = argv.mode === 'production'
  const isDev = !isProd

  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    externals:{
        fs: "commonjs fs",
        path: "commonjs path"
    },
    resolve: {
        extensions: ['.js', '.ts', '.json']
    },
    mode: 'development',
    devtool: isDev && 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                exclude: /node_modules/,
                use: ['ts-loader']
            }
        ]
    }
  }
}