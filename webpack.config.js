var path=require('path');
module.exports={
  entry: './src/js/app.js',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename:'bundle.js',
    publicPath:'/dist'

  },
  module: {
    rules:[
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
         test: /\.less$/,
         use: [{
               loader: "style-loader" // creates style nodes from JS strings
           }, {
               loader: "css-loader" // translates CSS into CommonJS
           }, {
               loader: "less-loader" // compiles Less to CSS
           }]

      }
    ]

  }
};
