-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Apr 15, 2016 at 01:21 AM
-- Server version: 5.5.42
-- PHP Version: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `baidunews2`
--

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `news_id` int(11) NOT NULL,
  `news_sort` varchar(20) CHARACTER SET utf8 NOT NULL,
  `news_type` varchar(20) CHARACTER SET utf8 NOT NULL,
  `news_title` varchar(100) CHARACTER SET utf8 NOT NULL,
  `news_img` text CHARACTER SET utf8 NOT NULL,
  `news_content` text CHARACTER SET utf8 NOT NULL,
  `news_from` varchar(20) CHARACTER SET utf8 NOT NULL,
  `news_date` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`news_id`, `news_sort`, `news_type`, `news_title`, `news_img`, `news_content`, `news_from`, `news_date`) VALUES
(10, 'navfam', 'hot', '习近平 全球人物榜', '', '习近平 全球人物榜', '', '2015-10-15'),
(12, 'navLocal', 'slide', '标题111', '/img/l5.jpg', '杨秀珠未获政治庇护', '', '2015-10-22'),
(13, 'navLocal', 'hot', '标题111222', '', '京都碰瓷系假消息', '', '2015-10-29'),
(16, 'navRec', 'hot', '标题2', '/img/r3.jpg', '美国反恐英雄遇刺d', '作者d', '2015-10-28'),
(17, 'navRec', 'hot', '标题', '/img/r3.jpg', '美舰拟两周内进南海2', '作者', '2015-10-28'),
(18, 'navRec', 'hot', '标题', '/img/r2.jpg', '日本为老人碰瓷道歉', '作者', '2015-10-28'),
(20, 'navRec', 'newslist', '湖南岳阳原副市长被公诉 被指"一天一瓶茅台"', '/img/r2.jpg', '', '凤凰头条', '2015-10-29'),
(21, 'navRec', 'newslist', 'IMF总裁拉加德：中国经济并非“前景黯淡”', '/img/r3.jpg', '', '新浪新闻', '2015-10-29'),
(22, 'navLocal', 'hot', '标题111223', '', '昆凌产后瘦身内幕', '', '2015-10-22'),
(23, 'navfam', 'hot', '屠呦呦旧居卖1.5亿', '', '屠呦呦旧居卖1.5亿', '', '2015-10-29'),
(24, 'navfam', 'hot', '标题', '', '滴滴获专车牌照', '', '2015-10-29'),
(25, 'navRec', 'newslist', '曝巴萨冬窗天价挖罗伊斯 锋线追拉维奇', '/img/r4.jpg', '', '凤凰新闻', '2015-10-28'),
(26, 'navRec', 'slide', '袁隆平：请别再向超级稻泼脏水 锋线追拉维奇', '/img/r5.jpg', '', '凤凰新闻', '2015-10-28'),
(27, 'navRec', 'newslist', '日方就“碰瓷乌龙”向大妈致歉', '/img/r6.jpg', '', '凤凰新闻', '2015-10-28'),
(28, 'navRec', 'newslist', '蔡国庆自曝母亲因文革患上精神疾病', '/img/r7.jpg', 'd', '凤凰新闻', '2015-10-28'),
(29, 'navRec', 'newslist', '董子健与张艾嘉忘年吻 眼神孤独感迷人', '/img/r8.jpg', '', '凤凰新闻', '2015-10-28'),
(30, 'navRec', 'newslist', '美联储会议纪要:9月暂不加息', '/img/r9.jpg', '', '凤凰新闻', '2015-10-28'),
(31, 'navfam', 'newslist', '马云3首张油画拍出3300万', '/img/s1.jpg', '摘要《桃花源》是马云与中国艺术家曾梵志携手', '凤凰新闻', '2015-10-28'),
(32, 'navfam', 'newslist', '英超新赛季下课首人！保级队宣布欧洲名帅辞职', '/img/s2.jpg', '', '新浪要闻', '2015-10-28'),
(33, 'navfam', 'newslist', '意大利启动大众排放造假调查', '/img/s3.jpg', '理由是这家公司涉嫌误导购买柴油车的意大利消费者。', '新浪要闻', '2015-10-28'),
(34, 'navfam', 'slide', '龙卷风突袭顺德 致3死近80伤', '/img/s4.jpg', '', '新浪要闻', '2015-10-28'),
(35, 'navfam', 'newslist', '习主席访美开辟中美人文交流新天地', '/img/s5.jpg', '', '新浪要闻', '2015-10-28'),
(36, 'navfam', 'newslist', '预计2015年赴泰的中国高端游客约38万人次', '/img/s6.jpg', '', '腾讯要闻', '2015-10-28'),
(37, 'navfam', 'newslist', '中美在全球治理领域的共识', '/img/s7.jpg', '中美在完善全球经济治理格局方面具有广泛的战略共识。', '专题', '2015-10-28'),
(39, 'navfam', 'newslist', '深圳楼市金九失色：一手住宅成交套数环比下降32%', '/img/s9.jpg', '', '凤凰头条', '2015-10-28'),
(40, 'navLocal', 'hot', '标题111444', '', '杨子黄圣依秀恩爱', '', '2015-10-29'),
(41, 'navLocal', 'hot', '看“象”吞“象”时 一把手如何话事？', '/img/l1.jpg', '', '凤凰头条', '2015-10-28'),
(42, 'navLocal', 'slide', '家乐福启动入华20年来最大规模变革', '/img/l2.jpg', '', '凤凰头条', '2015-10-28'),
(43, 'navLocal', 'newslist', 'uber成立“雾博”，滴滴拿到牌照，然后呢？', '/img/l3.jpg', '', '腾讯新闻', '2015-10-28'),
(44, 'navLocal', 'hot', '美团大众点评合并：明争结束 暗斗开始', '/img/l4.jpg', '', '腾讯新闻', '2015-10-28'),
(45, 'navLocal', 'newslist', '闭环式教育是未来，但互联网首先要回归连接本质', '/img/l5.jpg', '', '腾讯新闻', '2015-10-28'),
(47, 'navLocal', 'newslist', '投资者认为“资本寒冬”是啥？不是没钱，是没好项目', '/img/l7.jpg', '', '网易新闻', '2015-10-28'),
(74, 'navImg', 'newslist', '标题111', '/img/p1.jpg', '俄罗斯密集空袭IS', '111', '2015-10-28'),
(75, 'navImg', 'newslist', '标题111', '/img/p2.jpg', '台湾举行抗战阅兵', '2222', '2015-10-28'),
(76, 'navImg', 'newslist', '标题2222', '/img/p3.jpg', '台抹阅兵战机日国旗', '333', '2015-10-28'),
(77, 'navImg', 'newslist', '标题444', '/img/p4.jpg', '女兵扛4公斤枪训练', '444', '2015-10-28'),
(78, 'navImg', 'newslist', '陈柏霖 还是那个痴情的大仁哥	', '/img/p1.jpg', '', '', '2015-10-28'),
(79, 'navImg', 'slide', '阿扎尔向新浪公布手机私照	', '/img/p2.jpg', '', '', '2015-10-28'),
(80, 'navImg', 'newslist', '吕良伟夫妇外出喝茶 妻子撒娇紧搂丈夫	', '/img/p3.jpg', '', '', '2015-10-28'),
(81, 'navImg', 'newslist', '快船深圳训练遭围堵 小乔丹大笑	', '/img/p4.jpg', 'ddd', '', '2015-10-28'),
(82, 'navImg', '新闻', '黄晓明兄弟团抢亲被捆 baby男闺蜜扮女装', '/img/p5.jpg', '', '', '2015-10-28'),
(95, 'navRec', 'newslist', '标题测试1', '/img/r5.jpg', '内容1', '作者1', '2016-04-14'),
(96, 'navRec', 'newslist', '标题测试2', '/img/r6.jpg', '内23', '作者2', '2016-04-14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`news_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=102;