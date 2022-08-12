const ReactRefeshWebpackPlugin =require('@pmmmwh/react-refresh-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const {ESBuildMinifyPlugin} = require('esbuild-loader')
module.exports={
    mode:'production',
    devtool:'source-map', 
    optimization: {
        minimizer: [new ESBuildMinifyPlugin({
          target:'es2015'
        })],
      },
    plugins:[
    new ReactRefeshWebpackPlugin()
    ]
}