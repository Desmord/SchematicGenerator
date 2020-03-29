const Path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = {
    entry: {
        app: `./Dev/JS/main.js`
    },
    output: {
        path: Path.resolve(__dirname, `build/`),
        filename: `main.js`
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: `babel-loader`
                }
            },
            {
                test: /\.(gif|png|jpg)$/i,
                use: [
                    `file-loader`,
                    {
                        loader: `image-webpack-loader`,
                        options: {
                            bypassOnDebug: true,
                            disable: true
                        }
                    }
                ]
            }, {
                test: /\.css$/,
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader" }
                ]
              }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: `./Dev/Html/index.html`
        })
    ]
}