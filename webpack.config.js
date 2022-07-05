// require path from node 
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode : "development",
    // start folder of the app 
    entry :{
        main : path.resolve(__dirname, "src/app.ts"),
    },
    // result of the app 
    output : {
        path : path.resolve(__dirname, "dist"),
        filename : "[name][contenthash].js",
        clean : true,
    },
    // loaders 
    module : {
        rules : [
            {
                test : /\.(css|scss)$/,
                use : [
                "style-loader",
                "css-loader",
                "sass-loader"
                ]
            },
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf|jpg|jpeg|png)$/,
                type: 'asset/inline'
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    // server render;
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        watchFiles : ["src/**/*"],
        compress: true,
        port: 3000,
        open :true,
      },
    // plugins 
    plugins : [
        new HtmlWebpackPlugin({
            filename : "index.html",
            clean : true,
            title : "Webpack",
            template : path.resolve(__dirname, "src/index.html"),
        })
    ]
}