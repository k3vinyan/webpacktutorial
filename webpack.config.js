const path = require("path");

module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
            "style=loader",
            "css-loader"
        ]
      },
      {
        test: /\.jpeg$/,
        use: [
          {
            {loader: "url-loader", options: {
                limit: 1000
              }
            }
          }
        ]
      }
    ]
  }
}
