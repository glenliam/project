/*
 * 路由模块
 * 后台页面和新闻主页
*/

var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var bodyParser = require('body-parser');
var dbs = require('../dbs/dbs.js')(router);//设置操作数据库的模块

// 设置路由
var csrfProtection = csrf({ cookie: true });
var parseForm = bodyParser.urlencoded({ extended: false });

/* 页面路径设置 */
router.get('/',csrfProtection, function(req, res, next) {
  res.render('admin', { csrfToken: req.csrfToken() });
});

router.get('/newsindex', function(req, res, next) {
  res.render('newsindex');
});

//获取所有栏目的分类信息
router.get('/database',dbs.getUserBySort,function(req,res){
	res.send(res.locals.news);
});
//获取新闻
router.get('/datanews',dbs.getUserByNews,function(req,res){
	res.send(res.locals.news);
});
//获取图片
router.get('/dataimg',dbs.getUserByImg,function(req,res){
	res.send(res.locals.news);
});
//获取文字
router.get('/dataspan',dbs.getUserBySpan,function(req,res){
	res.send(res.locals.news);
});
//获取某个编号的新闻
router.post('/find', dbs.getUserById,function(req,res){
	res.send(res.locals.news);
});
// 增加新闻
router.post('/insert',parseForm, csrfProtection,dbs.getInsert,function(req,res){
	res.send(res.locals.news);
});
//修改新闻
router.post('/update',parseForm, csrfProtection,dbs.getUpdata,function(req,res){
	res.json(res.locals.news);
});
// 删除新闻
router.post('/delete',dbs.getDelete,function(req,res){
	res.json(res.locals.news);
});

module.exports = router;