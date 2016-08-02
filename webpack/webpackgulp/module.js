module.exports = {
  entry: "./src/main.js",
  // entry 模块的入口文件。依赖项数组中所有的文件会按顺序打包，每个文件进行依赖的递归查找，直到所有模块都被打成包；
  output: {
    filename: "build.js", //打包后的文件名
    path: __dirname + '/assets/',  // 打包文件存放的绝对路径。
    publicPath: "/assets/"   //网站运行时的访问路径。
  },
  module: {
    loaders: [
      {test: /.css$/, loader: 'style!css'},
      {test: /.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  }
  // relolve.extensions: 自动扩展文件的后缀名，比如我们在require模块的时候，可以不用写后缀名的。
  resolve: {
extensions: ['', '.js', '.jsx'],
//模块别名定义，方便后续直接引用别名，无须多写长长的地址
alias: {
    a : 'js/assets/a.js',  // 后面直接引用 require(“a”)即可引用到模块
    b : 'js/assets/b.js',
    c : 'js/assets/c.js'
}
  },
  plugins: [commonsPlugin, new ExtractTextPlugin("[name].css")]
}