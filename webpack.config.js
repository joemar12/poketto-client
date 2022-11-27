const webpack = require("webpack");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const basePath = path.resolve(__dirname, ".env");
  const envPath = basePath + "." + env.ENVIRONMENT;

  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  const fileEnv = dotenv.config({ path: finalPath }).parsed;
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return {
    entry: {
      bundle: "./src/index.tsx",
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name][contenthash].js",
      assetModuleFilename: "assets/[name][ext]",
      clean: true,
    },
    target: "web",
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name][contenthash].css",
        chunkFilename: "[id].css",
        ignoreOrder: false,
      }),
      new HtmlWebPackPlugin({
        template: "./src/template.html",
        filename: "index.html",
        title: "Poketto",
        favicon: "./src/assets/favicon.ico",
        meta: {
          viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
          description: "A simple personal finance tracker",
          keywords:
            "tailwindcss, admin dashboard, poketto, react, personal finance",
        },
        inject: true,
      }),
      new webpack.DefinePlugin(envKeys),
      new webpack.ProvidePlugin({
        React: "react", //automatically imports react where needed
      }),
    ],
    resolve: {
      modules: [path.join(__dirname, "src"), "node_modules"],
      extensions: [".ts", ".tsx", ".js", ".json"],
      alias: {
        api: path.resolve(__dirname, "src/api"),
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader", "ts-loader"],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|ico|gif|)$/i,
          type: "asset/resource",
        },
      ],
    },
  };
};
