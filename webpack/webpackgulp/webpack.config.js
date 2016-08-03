module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "build.js",
    path: __dirname
  },
  module: {
    loaders: [
      //.css 文件使用 style-loader 和 css-loader 来处理
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      // segmentfault上的加入下面这个{  }==缺少jsx的loader并且继续安装响应的依赖 npm install --save-dev babel-core babel-loader babel-preset-react babel-preset-es2015
      {
          test: /\.(js|jsx)$/,
          loader: 'babel?presets[]=react&presets[]=es2015',
          exclude: /(node_modules)/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: []
};