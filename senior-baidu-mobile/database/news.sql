-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-04-06 11:30:02
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `news_id` int(12) NOT NULL AUTO_INCREMENT,
  `news_sort` varchar(20) NOT NULL,
  `news_type` varchar(20) NOT NULL,
  `news_title` varchar(100) NOT NULL,
  `news_img` text NOT NULL,
  `news_content` text NOT NULL,
  `news_from` varchar(20) NOT NULL,
  `news_date` varchar(20) NOT NULL,
  PRIMARY KEY (`news_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=40 ;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`news_id`, `news_sort`, `news_type`, `news_title`, `news_img`, `news_content`, `news_from`, `news_date`) VALUES
(1, 'news4', 'hot', '楼市退烧3', 'img/4.jpg', '大洋网报道，上海出台最严“沪九条”之后，上海已有不少业主先后调低报价。如在碧云板块，有一名置换型客户，房子刚定好，本来二手房可以慢慢卖的，结果政策出来后，原来挂牌1150万元的别墅，现在愿降价到990万元卖，而且还可以谈价格。上海有中介透露，上周末遭遇了近期最冷清的一个周末，来客量有所减少，比前几个周末减少大约40%左右。', '凤凰网23', '16-04-06 11:52:32'),
(2, 'news1', 'newslist', '把后端工厂全搞定了，做件什么样的衣服你说了算', 'img/3.jpg', '为什么BigBang的中国铁粉们因为去看演唱会的人没有用偶巴设计的应援灯就能火冒三丈？没追过星的人懂不了的。\r\n迷妹们是会有这种心理：既然有出自官方的“正牌”，你不买甚至是买冒牌，「还好意思自称粉丝吗」？！不过因为是带灯还是带发箍应援都能大吵一架的姑娘们确实让正常人难以理解，作为一个去不起演唱会，并且对YG（BigBang经纪公司）官网上的韩文感到头疼的正常粉丝，该买点什么纪念下自己喜欢偶巴的心情？\r\n我造社区里有个叫做立定的平台让小造眼前一亮。据说，这个网站上正在售卖得到YG授权的BigBang中国版周边商品。\r\nT恤、钥匙扣、浴袍，印有BigBang「正版商标」的这三样东西摆在了我眼前，好像种类还不如你在任何一家淘宝周边商品店看到的多，为什么YG会看中立定这个合作伙伴？', '百度', '16-04-06 09:22:30'),
(3, 'news1', 'newslist', '中国互联网金融正处于重大转折的十字路口', 'img/2.jpg', '2013年余额宝拔地而起，立即把中国的互联网金融推向了一个前所未有的高潮。这不仅让各种支付类互联网金融产品涌向市场，其他的互联网产品瞬间产生（如众筹市场、网贷市场等），从而使得2013年之后中国互联网金融出现爆炸式增长。中国也成了互联网金融茂盛生长最好的土壤。这不仅在于中国政府以各种方式大力支持和鼓励，而且在于人力资源优势的中国也让更多的人才涌向这个市场。在短短的一两年的时间里，中国成了互联网金融发展最快、令全世界刮目相看的市场。', '百度', '16-04-06 09:22:34'),
(4, 'news1', 'newslist', '美联储Evans：对来自中国的事件不会感到担心', 'img/1.jpg', 'Evans在回答记者提问时说：“平稳完成转型是件非常困难的事。”\r\nEvans预计美国经济状况允许美联储年内两次加息，使利率到年底时达到略低于1%的水平。\r\nEvans对加息步伐做出两种预测：“或许一次在年中，一次在年底；另一种可能是一次在夏末，一次在年底，劳动力市场数据非常重要。”', '谷歌', '16-04-06 09:22:37'),
(5, 'news1', 'slide', '大熊猫进村怕狗 村民排人墙保护', 'img/id5.jpg', '近日，深圳又开展禁摩限电运动，收缴大量电动单车、三轮车，在深圳南头立交桥下，长期堆放电动单车、摩托车、三轮车、小汽车，这里成了场面壮观的“电单车坟场”。', '腾讯图片', '16-04-06 15:29:11'),
(7, 'news1', 'newslist', '北京市摇号！！', 'img/5.jpg', '北京市摇号！！北京市摇号！！北京市摇号！！北京市摇号！！北京市摇号！！北京市摇号！！北京市摇号！！北京市摇号！！北京市摇号！！北京市摇号！！北京市摇号！！北京市摇号！！北京市摇号！！北京市摇号！！', '北京还将拥堵网站', '16-04-06 16:42:32'),
(8, 'news2', 'newslist', '栏目2的列表新闻的标题1', 'img/6.jpg', '栏目2的列表中的新闻栏目2的列表中的新闻栏目2的列表中的新闻栏目2的列表中的新闻栏目2的列表中的新闻栏目2的列表中的新闻栏目2的列表中的新闻栏目2的列表中的新闻栏目2的列表中的新闻栏目2的列表中的新闻栏目2的列表中的新闻栏目2的列表中的新闻栏目2的列表中的新闻', '原创', '16-04-06 09:22:47'),
(10, 'news2', 'hot', '新闻热点', 'img/7.jpg', '新闻热点新闻热点新闻热点新闻热点新闻热点新闻热点新闻热点新闻热点新闻热点新闻热点新闻热点新闻热点新闻热点新闻热点新闻热点', '百度', '16-04-06 09:30:23'),
(11, 'news1', 'newslist', '新闻列表的内容测试', 'img/8.jpg', '新闻内容。。。。。。。。。', '百度22', '16-04-06 11:52:42'),
(25, 'news1', 'hot', '航母赴舟山', 'img/9.jpg', '航母赴舟山新闻内容', '百度', '16-04-06 16:27:24'),
(26, 'news2', 'slide', '栏目2的幻灯标题', 'img/10.jpg', '栏目2的幻灯内容栏目2的幻灯内容栏目2的幻灯内容栏目2的幻灯内容栏目2的幻灯内容', '百度', '16-04-06 17:00:37'),
(27, 'news2', 'newslist', '栏目2新闻标题', 'img/11.jpg', '栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容', '互联网', '16-04-06 17:01:06'),
(28, 'news2', 'newslist', '栏目2新闻标题2', 'img/12.jpg', '内容2栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容', '互联网', '16-04-06 17:01:34'),
(29, 'news3', 'slide', '栏目3幻灯', 'img/13.jpg', '内容3栏目3新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容', '百度', '16-04-06 17:02:01'),
(30, 'news4', 'slide', '栏目4幻灯', 'img/14.jpg', '内容4栏目4新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容', '百度', '16-04-06 17:02:12'),
(31, 'news3', 'hot', '栏目3热点', 'img/15.jpg', '热点3栏目3新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容', '百度', '16-04-06 17:02:30'),
(32, 'news4', 'hot', '栏目4热点', 'img/16.jpg', '热点4栏目4新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容', '百度', '16-04-06 17:02:50'),
(33, 'news3', 'newslist', '栏目3新闻1', 'img/17.jpg', '热点3栏目3新闻1内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容', '百度', '16-04-06 17:03:30'),
(34, 'news3', 'newslist', '栏目3新闻2', 'img/18.jpg', '热点3栏目3新闻2内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容', '百度', '16-04-06 17:03:37'),
(35, 'news3', 'newslist', '栏目3新闻3', 'img/19.jpg', '热点3栏目3新闻3内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容', '百度', '16-04-06 17:03:44'),
(36, 'news4', 'newslist', '栏目4新闻1', 'img/20.jpg', '热点4栏目4新闻1内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容', '百度', '16-04-06 17:04:08'),
(37, 'news4', 'newslist', '栏目4新闻2', 'img/21.jpg', '热点4栏目4新闻2内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容', '百度', '16-04-06 17:04:15'),
(38, 'news4', 'newslist', '栏目4新闻3', 'img/22.jpg', '热点4栏目4新闻3内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容', '百度', '16-04-06 17:04:21'),
(39, 'news4', 'newslist', '栏目4新闻4', 'img/23.jpg', '热点4栏目4新闻4内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容栏目2新闻内容', '百度', '16-04-06 17:04:26');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;