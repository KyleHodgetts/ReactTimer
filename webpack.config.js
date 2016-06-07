const webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Clock: 'app/components/Clock.jsx',
      Controls: 'app/components/Controls.jsx',
      Countdown: 'app/components/pages/Countdown.jsx',
      CountdownForm: 'app/components/CountdownForm.jsx',
      Timer: 'app/components/pages/Timer.jsx',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
     new webpack.optimize.UglifyJsPlugin({
         compress: {
             warnings: false,
         },
         output: {
             comments: false,
         }
     }),
     new webpack.ProvidePlugin({
       // For requiring jQuery module
       '$': 'jquery',
       'jQuery': 'jquery'
     })
 ]
};
