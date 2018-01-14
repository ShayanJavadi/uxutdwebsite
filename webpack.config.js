module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "./lib/bundle.js"
  },
  watch: true,
  devServer: {
    inline: true
  },
  // Add sass-loader
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          "presets": [
            "es2015",
            "stage-0",
          ]
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader", 'postcss-loader']
      }
    ]
  },
}
