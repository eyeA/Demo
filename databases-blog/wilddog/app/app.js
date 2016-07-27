var express      = require('express'),  //引入express
  path         = require('path'),  //引入path，处理文件路径
  favicon      = require('serve-favicon'),  //这个是处理网页icon的
  cookieParser = require('cookie-parser'),  // 处理cookie
  bodyParser   = require('body-parser'),   // 解析数据
  session      = require('express-session'); //处理session

var routes = require('./routes/routes');   // 路由文件

// 实例化一个express
var app = express();

// 设置端口
app.set('port', process.env.PORT || 3000);

// 设置视图引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(__dirname + '/build/imgs/favicon.ico'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  secret: 'secret',
  cookie:{
    maxAge: 1000*60*30
  },
  resave: true,
  saveUninitialized: true
}));
app.use(function(req, res, next) {
  res.locals.name = req.session.name;
  next();
})

// 设置静态文件
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/build', express.static(path.join(__dirname, 'build')));

routes(app);

app.listen(app.get('port'), function() {
  console.log('端口是 ' + app.get('port'));
})

