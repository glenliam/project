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
		<script type="text/javascript" src="js/conmmon.js"></script>
	</head>

	<body>

		<div data-role="page">
			<!--页面头部-->
			<div data-role="header">
				<div class="baidu-header"></div>
				<!--导航栏-->
				<div data-role="navbar" class="baidu-nav">
					<ul>
						<li><a href="index.php?sort=news1">推荐</a></li>
						<li><a href="index.php?sort=news2">百家</a></li>
						<li><a href="index.php?sort=news3">本地</a></li>
						<li><a href="index.php?sort=news4">娱乐</a></li>
					</ul>
				</div>
			</div>
			<!-- 页面头部结束 -->
			
			<!--主体部分-->
			<?php
	            require_once 'init.php';//连接数据库
	            $id=(int)$_GET['id'];//获取新闻的编号
        	?>
			<div role="main">
				<div data-role="content">
					
				<?php
					$sql="select * from news where news_id = $id";//查询指定ID的新闻内容
					$re=mysqli_query($con, $sql);//执行sql语句
	            	while($arra=mysqli_fetch_assoc($re)){
				?>

				<p>
					<?php echo $arra['news_content'];?>"
				</p>
					
				</div>
				<?php
				}
				?>
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