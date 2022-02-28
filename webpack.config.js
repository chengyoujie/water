var path = require("path");
var HtmlwebpackPlugin = require("html-webpack-plugin")
var CircularDependencyPlugin = require("circular-dependency-plugin");
var webpack = require("webpack")

var RootPath = path.resolve(__dirname);
var AppPath = path.join(RootPath, "src/Main.ts")
var BuildPath = path.join(RootPath, "build")
module.exports = {
    mode: "development",//production  development
    entry: {
        app: AppPath,
    },
    output: {
        path: BuildPath,
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: [
              /node_modules/,
            ]
        }, 
        {
            test:/\.(txt|vert|frag)$/,
            use:"raw-loader"
        },
        {
            test:/\.css$/,
            use:['style-loader', 'css-loader']
        },
        {
            test:/\.(png|jpg)$/,
            
            use:[{
                loader:'file-loader',
                options:{
                    name:"img/[name].[hash:8].[ext]"
                },
            }]
            
        }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".vert", ".frag", ".txt", ".jpg", ".png"]
    },
    devServer: {
        open:true,
        port: 8979,
        liveReload: true,
        static: {
            directory: BuildPath
        }
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: "./index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CircularDependencyPlugin({
            exclude:/node_modules/,
            include:/src/,
            failOnError:true,
            allowAsyncCycles:false,
            cwd:process.cwd(),

        })
    ]
}