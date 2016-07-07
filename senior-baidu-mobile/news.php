<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width">
		<title>百度新闻</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!--引入jqueryMobileCSS文件-->
		<link rel="stylesheet" type="text/css" href="css/jquery.mobile-1.4.5.css" />
		<!--引入自定义CSS文件-->
		<link rel="stylesheet" type="text/css" href="css/style.css" />
		<!--引入jqueryJS-->
		<script type="text/javascript" src="js/jquery-1.12.1.min.js"></script>
		<!--引入jqueryMobileJS文件-->
		<script type="text/javascript" src="js/jquery.mobile-1.4.5.min.js"></script>
		<!--引入自定义JS文件-->
		<script type="text/javascript" src="js/common.js"></script>
	</head>

	<body>

		<div data-role="page">
			<!--页面头部-->
			<div data-role="header">
				<div class="baidu-header"></div>
				<!--导航栏-->
				<div data-role="navbar" class="baidu-nav">
					<ul>
						<li><a href="news.php?sort=news1">推荐</a></li>
						<li><a href="news.php?sort=news2">百家</a></li>
						<li><a href="news.php?sort=news3">本地</a></li>
						<li><a href="news.php?sort=news4">娱乐</a></li>
					</ul>
				</div>
			</div>
			<!-- 页面头部结束 -->
			
			<!--主体部分-->
			<?php
			require_once 'init.php';//连接数据库
			$sort = $_GET['sort'];//获取栏目名
        	?>
			<div role="main">
				<div data-role="content">
					<div class="baidu-slide">
				<?php
					$sql="select * from news where news_sort = '$sort' AND news_type = 'slide' order by news_date DESC limit 1";//查询指定栏目名的SLIDE幻灯的新闻限制1条按时间排序
					$re=mysqli_query($con, $sql);//执行sql语句
	            	while($arra=mysqli_fetch_assoc($re)){
				?>
						<img src="<?php echo $arra['news_img']; ?>" width="100%" />
						<div class="baidu-slide-title">
							<a href="show.php?id=<?php echo $arra['news_id']; ?>"><?php echo $arra['news_title']; ?></a>
						</div>
					</div>
				</div>
				<?php } ?>
				<div class="baidu-tip">
					<?php
					$sql="select * from news where news_sort = '$sort' AND news_type = 'hot' order by news_date DESC limit 1";//查询指定栏目名的热点新闻限制1条按时间排序
					$re=mysqli_query($con, $sql);//执行sql语句
	            	while($arrb=mysqli_fetch_assoc($re)){
				?>
					<div class="baidu-tip-l">
						热点
					</div>
					<div class="baidu-tip-r">
						<a href="show.php?id=<?php echo $arrb['news_id']; ?>"><?php echo $arrb['news_title']; ?></a>
					</div>
					<?php } ?>
				</div>

				<ul data-role="listview">
					<?php
						$sql="select * from news where news_sort = '$sort' AND news_type = 'newslist' order by news_date DESC";//查询指定栏目名的新闻按时间排序
						$re=mysqli_query($con, $sql);//执行sql语句
		            	while($arrc=mysqli_fetch_assoc($re)){
					?>
					<li>
						<img src="<?php echo $arrc['news_img']; ?>" width="80" height="80"/>
						<h3><?php echo $arrc['news_title']; ?></h3>
						
						<!--截取新闻的部分内容-->
						<p>
							<a href="show.php?id=<?php echo $arrc['news_id']; ?>">
							<?php echo substr($arrc['news_content'], 0, 50); ?>
							</a>
						</p>
					</li>
					<?php
					}
					?>
				</ul>
			</div>
			<!--主体部分结束-->
			<div data-role="footer">
				<h4>网页底部</h4>
			</div>
		</div>
	<?php
	mysqli_close($con);//关闭数据库
	?>
	</body>

</html>