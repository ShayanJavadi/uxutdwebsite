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
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
}
