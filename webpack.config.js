const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // This rule matches .js files
        exclude: /node_modules/, // Exclude files in the node_modules directory
        use: {
          loader: "babel-loader", // Use Babel to transpile JavaScript
          options: {
            presets: ["@babel/preset-env"], // Use the @babel/preset-env preset
          },
        },
      },
      // You can add more rules for handling CSS, images, etc.
    ],
  },
  // ...
};
