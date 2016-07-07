/*
 * 数据库操作模块
 * 数据库用户名和密码定义的是：root / root
 * 数据库名字是：baidunews2
*/

var express = require('express');
var orm = require('orm');
var moment = require('moment');

//服务器设置
var dbusername = "root";
var dbpassword = "root";
var dbname = "baidunews2";

//导入到路由
module.exports = function(router) {

	//数据库设置	
	router.use(orm.express("mysql://" + dbusername + ":" + dbpassword + "@localhost/" + dbname, {
		define: function(db, models, next) {
			models.news = db.define("news", {
				news_id: {
					type: 'serial',
					key: true
				},
				news_sort: String,
				news_type: String,
				news_title: String,
				news_img: String,
				news_content: String,
				news_from: String,
				news_date: String
			});
			next();
		}
	}));

	//数据库操作
	var dbs = {
		//获取分类信息
		getUserBySort: function(req, res, next) {
			req.models.news.find({
				news_sort: req.query.name
			}, function(err, news) {
				if (err) throw err;
				res.locals.news = news;
				next();
			});
		},
		//获取新闻列表信息
		getUserByNews: function(req, res, next) {
			req.models.news.find({
				news_sort: req.query.name,
				news_type: 'newslist'
			}, function(err, news) {
				if (err) throw err;
				res.locals.news = news;
				next();
			});
		},
		//获取幻灯新闻信息
		getUserByImg: function(req, res, next) {
			req.models.news.find({
				news_sort: req.query.name,
				news_type: 'slide'
			}, function(err, news) {
				if (err) throw err;
				res.locals.news = news;
				next();
			});
		},
		//获取热点滚播文字信息
		getUserBySpan: function(req, res, next) {
			req.models.news.find({
				news_sort: req.query.name,
				news_type: 'hot'
			}, function(err, news) {
				if (err) throw err;
				res.locals.news = news;
				next();
			});
		},
		//获取编号对应的新闻
		getUserById: function(req, res, next) {
			req.models.news.find({
				news_id: req.body.name
			}, function(err, news) {
				if (err) throw err;
				res.locals.news = news;
				next();
			});
		},
		//增加新闻
		getInsert: function(req, res, next) {
			var insert_times = moment().format('YYYY-MM-DD');
			req.models.news.create({
				news_sort: req.body.news_sort,
				news_type: req.body.news_type,
				news_title: req.body.news_title,
				news_from: req.body.news_from,
				news_img: req.body.news_img,
				news_content: req.body.news_content,
				news_date: insert_times
			}, function(err, news) {
				if (err) throw err;
				res.locals.news = "增加新闻成功";
				next();
			});
		},
		//修改新闻
		getUpdata: function(req, res, next) {
			req.models.news.get(req.body.news_id, function(err, news) {
				news.save({
					news_title: req.body.news_title,
					news_img: req.body.news_img,
					news_sort: req.body.news_sort,
					news_date: req.body.news_date,
					news_content: req.body.news_content,
					news_type: req.body.news_type,
					news_from: req.body.news_from
				}, function(err) {
					if (err) throw err;
					res.locals.news = "修改新闻成功";
					next();
				});
			});
		},
		//删除新闻
		getDelete: function(req, res, next) {
			req.models.news.get(req.body.name, function(err, news) {
				news.remove(function(err) {
					if (err) throw err;
					res.locals.news = "删除新闻成功";
					next();
				});
			});
		}
	}
	return dbs;
}