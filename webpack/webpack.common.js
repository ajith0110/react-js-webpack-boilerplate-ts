const path =require('path');
const HtmlWebpackPlugin =require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();
const swcrc= require('../swc.config.json')


module.exports=smp.wrap({
    entry:path.resolve(__dirname,'..','./src/index.tsx'),
    resolve:{
        extensions:['.tsx','.ts','.js']
    },

    module:{
        rules:[{
            test:/\.(ts|js)x?$/,
            exclude:/node_modules/,
            use:[
                {
                    loader:'swc-loader',
                    options:swcrc
                }
            ]
            // use:[
            //     {
            //         loader:'babel-loader'
            //     }
            // ]
        },{
            test:/\.(sass|css|scss)$/,
            use:['style-loader',{
                loader:'esbuild-loader',
                options:{
                    loader:"css",
                    minify:true
                }

            },'css-loader']
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)/,
            type: 'asset/resource'
          },{
            test: /\.(png|svg|jpg|jpeg|gif)/,
            type: 'asset/inline'
          }]
    },
    output:{
    path:path.resolve(__dirname,'..','./build'),
    filename:'bundle.js'
    },
  
    plugins:[new HtmlWebpackPlugin({
        template:path.resolve(__dirname,'..','./src/index.html')
    })]
})