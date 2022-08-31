const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        Button: './src/components/Button/Button.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'core'),
        libraryTarget: 'umd',
        filename: '[name]/index.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ]
    }
};