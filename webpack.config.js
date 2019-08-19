// webpack v4

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env, argv) => {
    const entry = {
        main: './assets/js/index.js'
    };

    const output = {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'app.js'
    };

    const module = {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    };

    const plugins = [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ];

    // Minify CSS if we're building for production
    if (argv.mode === 'production') {
        plugins.push(new OptimizeCssAssetsPlugin());
    }

    return { entry, output, module, plugins };
};
