var path = require('path');

module.exports = {
    mode: 'development',
    entry:"./src/index.js",
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename:"bundle.js"
    },
    resolve:{
        extensions:['','.js','.jsx','.json']
    },
    module:{
        rules:[
                { test: /\.js$|jsx/, exclude: /node_modules/, loader:'babel-loader' },                
            ]
    },
    devtool:"source-map",
    devServer:{
        static: './dist',
    }
    
};
