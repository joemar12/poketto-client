const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
module.exports = (env) => {
  return merge(common(env), {
    mode: "production",
  });
};
