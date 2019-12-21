const path = require("path");

module.exports = {
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "public/scripts")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        publicPath: "/scripts/",
        port: 9090
    },
    devtool: "source-map"
};
