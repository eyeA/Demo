/**
 * 路由逻辑
 */
// 引入公共函数
var common    = require('./common.js');
// 引入野狗
var wilddog   = require('wilddog');
// 引入处理文件模块
var multipart = require('connect-multiparty'),
	fs        = require('fs'),
	path      = require('path'),
	session   = require('express-session'),
	markdown  = require('markdown').markdown;

module.exports = function(app) {
	/***** url链接跳转******/
	// 首页
	app.get('/', function(req, res) {
		res.render('pages/fe/index',{});
	});
	// 前端
	app.get('/fe/', function(req, res) {
		res.render('pages/fe/index', {});
	});
	app.get('/fe/:id', function(req, res) {
		res.render('pages/detail/articleDetail', {});
	});
	// 后端
	app.get('/server/', function(req, res) {
		res.render('pages/server/server', {});
	});
	app.get('/server/:id', function(req, res) {
		res.render('pages/detail/articleDetail', {});
	});
	// 杂谈
	app.get('/other/', function(req, res) {
		res.render('pages/other/other', {});
	});
	app.get('/other/:id', function(req, res) {
		res.render('pages/detail/articleDetail', {});
	});
	// cms
	app.get('/cms/', function(req, res) {
		res.render('pages/cms/addArticle', {})
	});
	app.get('/cms/addArticle/', function(req, res) {
		res.render('pages/cms/addArticle', {})
	});
	app.get('/cms/articleList/', function(req, res) {
		res.render('pages/cms/articleList', {})
	});
	app.get('/cms/addImage/', function(req, res) {
		res.render('pages/cms/addImage', {})
	});
	app.get('/cms/imageList/', function(req, res) {
		res.render('pages/cms/imageList', {})
	});
	// cms登录
	app.get('/cms/login/', function(req, res) {
		res.render('pages/cms/login', {})
	})
	/**********end***********/

	/*********接口url**********/
	app.get('/api/feList/', function(req, res) {
		var ref = new wilddog("https://dojay.wilddogio.com/");
		var pageNum = req.param('pageNum'),
			pageSize = Number(req.param('pageSize'));
		ref.child('fe').on('value', function(datasnapshot, error) {
			var data = common.each(datasnapshot.val()).reverse().slice(pageSize*(pageNum-1), Number(pageSize*(pageNum-1)+pageSize) );
			var totalNum = common.each(datasnapshot.val()).length;
			if(error == null) {
				res.json({
					code: "0000",
					msg: "成功",
					totalNum: totalNum,
					from: "fe",
					data: data
				});
			}else{
				res.json({
					code: "0001",
					msg: "失败"
				});
			}
		})
	});
	app.get('/api/serverList/', function(req, res) {
		var ref = new wilddog("https://dojay.wilddogio.com/");
		var pageNum = req.param('pageNum'),
			pageSize = Number(req.param('pageSize'));
		ref.child('server').on('value', function(datasnapshot, error) {
			var data = common.each(datasnapshot.val()).slice(pageSize*(pageNum-1), Number(pageSize*(pageNum-1)+pageSize) );
			var totalNum = common.each(datasnapshot.val()).length;
			if(error == null) {
				res.json({
					code: "0000",
					msg: "成功",
					totalNum: totalNum,
					from: "server",
					data: data
				});
			}else{
				res.json({
					code: "0001",
					msg: "失败"
				});
			}
		})
	});
	app.get('/api/otherList/', function(req, res) {
		var ref = new wilddog("https://dojay.wilddogio.com/");
		var pageNum = req.param('pageNum'),
			pageSize = Number(req.param('pageSize'));
		ref.child('other').on('value', function(datasnapshot, error) {
			var data = common.each(datasnapshot.val()).slice(pageSize*(pageNum-1), Number(pageSize*(pageNum-1)+pageSize) );
			var totalNum = common.each(datasnapshot.val()).length;
			if(error == null) {
				res.json({
					code: "0000",
					msg: "成功",
					totalNum: totalNum,
					from: "other",
					data: data
				});
			}else{
				res.json({
					code: "0001",
					msg: "失败"
				});
			}
		})
	});
	// 获取文章详情
	app.get('/api/detail/', function(req, res) {
		var ref = new wilddog("https://dojay.wilddogio.com/");
		var uid = req.param('uid'),
			from = req.param('uid');
		ref.child('fe').orderByChild('enTitle').equalTo(uid).on('value', function(datasnapshot, error) {
			if(error == null) {
				if(common.each(datasnapshot.val()).length > 0) {
					res.json({
						code: "0000",
						msg: "请求成功",
						data: common.each(datasnapshot.val())
					});
				}else{
					res.json({
						code: "0001",
						msg: "失败"
					});
				}
			}else{
				res.json({
					code: "0001",
					msg: "失败"
				});
			}
		})
	});
	// cms登录
	app.post('/api/cms/login/', function(req, res) {
		var ref = new wilddog("https://dojay.wilddogio.com/");
		ref.authWithPassword({
			email: req.param('name') || req.session.name,
			password: req.param('password') || req.session.password
		},function(err, data) {
			if(err == null) {
				req.session.name = req.param('name');
				res.json({
					code: 0000,
					msg: "登录成功"
				})
			}else{
				res.json({
					code: 0001,
					msg: "登录失败"
				})
			}
		})
	});
	// cms登出
	app.post('/api/cms/logout/', function(req, res) {
		req.session.name = null;
		res.json({
			code: 0000,
			msg: "登录成功"
		})
	});
	// cms注册
	app.post('/api/cms/regist/', function(req, res) {
		var ref = new wilddog("https://dojay.wilddogio.com/");
		ref.createUser({
			email: req.param('name'),
			password: req.param('password')
		},function(err, data) {
			if(err == null) {
				res.json({
					code: 0000,
					msg: "注册成功"
				})
			}else{
				res.json({
					code: 0001,
					msg: "注册失败"
				})
			}
		})
	})
	// 添加文章
	app.post('/api/cms/addArticle/', function(req, res) {
		var ref        = new wilddog("https://dojay.wilddogio.com/");
		var title      = req.param("title"),
			briefTitle = req.param("briefTitle"),
			content    = req.param('content'),
			imgUrl     = req.param('imgUrl'),
			belong     = req.param('belong'),
			enTitle    = req.param('enTitle'),
			date       = common.getTime();
		if(title && briefTitle && content && imgUrl) {
			res.json({
				code: "0000",
				msg: "成功"
			});
			switch(belong) {
				case 'fe':
					ref.child('fe').push({
						"title": title,
						"briefTitle": briefTitle,
						"content": content,
						"imgUrl": imgUrl,
						"enTitle": enTitle,
						"date": date
					});
					break;
				case 'server':
					ref.child('server').push({
						"title": title,
						"briefTitle": briefTitle,
						"content": content,
						"imgUrl": imgUrl,
						"enTitle": enTitle,
						"date": date
					})
					break;
				case 'other':
					ref.child('other').push({
						"title": title,
						"briefTitle": briefTitle,
						"content": content,
						"imgUrl": imgUrl,
						"enTitle": enTitle,
						"date": date
					})
					break;
			}
		}else{
			res.json({
				code: "0001",
				msg: "失败"
			});
		}
	});
	// 上传图片
	app.post('/api/img/', multipart(), function(req, res) {
		var ref = new wilddog("https://dojay.wilddogio.com/"),
			filename = req.files.files.originalFilename || path.basename(req.files.files.path),
			targetPath = path.resolve(path.dirname(__filename), '..', 'images') + '/' + filename;
	  	fs.createReadStream(req.files.files.path).pipe(fs.createWriteStream(targetPath));
	  	res.json({
	  		code: 0000,
	  		msg: "成功",
	  		data: {
	  			url: 'http://' + req.headers.host + '/images/' + filename
	  		}
	  	});
	});
	// 单独上传图片
	app.post('/api/addImage/', multipart(), function(req, res) {
		var ref = new wilddog("https://dojay.wilddogio.com/"),
			filename = req.files.files.originalFilename || path.basename(req.files.files.path),
			targetPath = path.resolve(path.dirname(__filename), '..', 'images') + '/' + filename;
	  	fs.createReadStream(req.files.files.path).pipe(fs.createWriteStream(targetPath));
	  	res.json({
	  		code: 0000,
	  		msg: "成功",
	  		data: {
	  			url: 'http://' + req.headers.host + '/images/' + filename
	  		}
	  	});
	  	ref.child('images').push({
			"imagesUrl": 'http://' + req.headers.host + '/images/' + filename
		});
	})
	// 读取图片列表
	app.get('/api/imageList/', function(req, res) {
		var ref = new wilddog("https://dojay.wilddogio.com/");
	  	ref.child('images').on('value', function(datasnapshot, error) {
			var data = common.each(datasnapshot.val());
			if(error == null) {
				res.json({
					code: "0000",
					msg: "成功",
					data: data
				});
			}else{
				res.json({
					code: "0001",
					msg: "失败"
				});
			}
		})
	})
	// 检查是否登录
	app.post('/api/checkLogin/', function(req, res) {
		if(req.session.name) {
			res.json({
				code: "0000",
				msg: "登录",
				data:{
					name: req.session.name
				}
			})
		}else{
			res.json({
				code: "0001",
				msg: "未登录"
			})
		}
	})
}