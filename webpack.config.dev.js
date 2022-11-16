const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
module.exports = (env) => {
  return merge(common(env), {
    mode: "development",
    output: {
      publicPath: "/",
    },
    devServer: {
      port: "3000",
      static: [
        {
          publicPath: "/",
          directory: path.join(__dirname, "dist"),
        },
        {
          publicPath: "/",
          directory: "./src/assets",
        },
      ],
      compress: true,
      historyApiFallback: true,
      open: true,
      hot: true,
      liveReload: true,
    },
  });
};
