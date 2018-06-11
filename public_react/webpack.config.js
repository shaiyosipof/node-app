var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var local_machine = "127.0.0.1";

module.exports = function (env) {
    if (env && env.local != undefined) local_machine = env.local;
    return {
        devtool: "cheap-module-source-map",
        devServer: {
            historyApiFallback: true,
            publicPath: "/",
            public: local_machine + ":8080",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
            }
        },
        entry: {
            main: ['babel-polyfill', path.join(__dirname, 'src/main.js')]
        },
        output: {
            path: path.resolve(__dirname, "build"),
            publicPath: 'http://' + local_machine + ':8080/',
            filename: "[name].js",
            chunkFilename: "[name].js"
        },
        //resolve these types of extensions
        resolve: {
            modules: ['node_modules', 'src'],
            extensions: ['.js', '.jsx']
        },

        //modules to load
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015', 'stage-0'],
                        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                    }
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
                },
                {
                    test: /\.(jpe?g|png|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {limit: 1000}
                        },
                        'image-webpack-loader'
                    ]
                }
            ]
        },
        //extract common code to different files
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                //filename: '[name].js',
                minChunks: ({resource}) => (
                    resource && resource.indexOf('node_modules') >= 0 && resource.match(/\.js$/)
                )
            }),
            new webpack.optimize.ModuleConcatenationPlugin(),
            //template for creating html file that will update on each module export
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                filename: 'index.html',
                inject: false
            }),

            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': `"dev"`
                }
            })
        ]
    }
};
