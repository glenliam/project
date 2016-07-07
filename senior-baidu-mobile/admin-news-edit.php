<!DOCTYPE html>
<html lang="en">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
		<title>Bootstrap后台管理系统-修改新闻页</title>
		<link rel="stylesheet" href="css/bootstrap.css" />
		<link rel="stylesheet" href="css/main.css" />
		<link rel="stylesheet" href="css/font-awesome.min.css">
		<!--[if lt IE 9]>
      	<script src="js/html5.js"></script>
    		<![endif]-->
	</head>

	<body>
		<div id="wrapper">
			<nav class="navbar-default navbar-static-side" role="navigation">
				<div class="sidebar-collapse">
					<ul class="nav" id="side-menu">
						<!--左栏右上角的管理员登录信息区域-->
						<li class="nav-header">
							<div class="dropdown profile-element"> <span>
                            <img alt="image" class="img-circle" src="img/avatar.png" />
                             </span>
								<a data-toggle="dropdown" class="dropdown-toggle" href="#">
									<span class="clear"> <span class="block m-t-xs"> <strong class="font-bold">李某</strong>
                             </span> <span>管理员 <b class="caret"></b></span> </span>
								</a>
								<!--左栏右上角的管理员的下拉菜单-->
								<ul class="dropdown-menu">
									<li><a href="#">修改头像</a>
									</li>
									<li><a href="#">个人资料</a>
									</li>
									<li class="divider"></li>
									<li><a href="#">安全退出</a>
									</li>
								</ul>
							</div>
						</li>

						<!--左栏的菜单栏目区域-->
						<!--菜单1-->
						<li>
							<a href="admin.php"><i class="fa fa-th-large"></i> <span class="nav-label">后台首页</span> <span class="fa arrow"></span></a>
						</li>
						<!--菜单2-->
						<li>
							<a href="#"><i class="fa fa-comments"></i> <span class="nav-label">新闻管理</span><span class="fa arrow"></span></a>
							<ul class="nav nav-second-level">
								<li><a href="admin-news.html">添加新闻</a>
								</li>
								<li><a href="admin.php">管理已发布新闻</a>
								</li>
							</ul>
						</li>
					</ul>

				</div>
			</nav>

			<!--右侧内容区域-->
			<div id="page-wrapper" class="gray-bg">
				<div class="row">
					<nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
						<a class="navbar-minimalize minimalize-styl-2 btn btn-success " href="#"><i class="fa fa-bars"></i> </a>
					</nav>
				</div>
				<div class="row wrapper white-bg">
					<div class="col-lg-12">
						<h2>手机新闻-Bootstrap后台管理系统-修改新闻页</h2>
						<ol class="breadcrumb">
							<li>
								<a href="admin.html">主页</a>
							</li>
							<li>
								<a href="admin.php" target="_self">新闻管理</a>
							</li>
							<li>
								<strong>修改新闻</strong>
							</li>
						</ol>
					</div>
				</div>
				<!--人员信息表格内容-->
				<div class="wrapper wrapper-content">
					<div class="row">
						<div class="col-lg-12">
							<div class="ibox float-e-margins">
								<div class="ibox-title">
									<h5>修改新闻</h5>
								</div>
								<?php 
								            $id=(int)$_GET['id'];//获取要修改新闻的编号
								            require_once 'init.php';//连接数据库
								            $sql="select * from news where news_id = '$id'";//查询这条新闻
								            $re=mysqli_query($con, $sql);//执行sql语句
								            $arr=mysqli_fetch_assoc($re);//检索所有新闻
								            mysqli_close($con);//关闭数据库
								?>	
								<div class="ibox-content">
									<!--修改新闻信息表单-->
									<form name="news" method="post" action="articleUpdate.php">
										<input type="hidden" name="news_id" value="<?php echo $arr['news_id']?>"/><br/>
										<div class="form-group">
											<div class="input-group">
												<div class="input-group-addon">新闻栏目</div>
												<select name="news_sort" class="form-control">
													<option value="<?php echo $arr['news_sort'];?>"><?php echo $arr['news_sort'];?></option>
									            	<option value="news1">news1</option>
									            	<option value="news2">news2</option>
									            	<option value="news3">news3</option>
									            	<option value="news4">news4</option>
							            		</select>
											</div>
										</div>
										<div class="form-group">
											<div class="input-group">
												<div class="input-group-addon">新闻类别</div>
												<select name="news_type" class="form-control">
   													<option value="<?php echo $arr['news_type'];?>"><?php echo $arr['news_type'];?></option>
									            	<option value="slide">slide</option>
									            	<option value="hot">hot</option>
									            	<option value="newslist">newslist</option>
							            		</select>
											</div>
										</div>
										<div class="form-group">
											<div class="input-group">
													<div class="input-group-addon">新闻标题</div>
													<input type="text" name="news_title" class="form-control" value="<?php echo $arr['news_title'];?>">
											</div>
										</div>
										<div class="form-group">
											<div class="input-group">
													<div class="input-group-addon">新闻图片</div>
													<input type="text" name="news_img" class="form-control" value="<?php echo $arr['news_img'];?>">
											</div>
										</div>
										<div class="form-group">
											<div class="input-group">
													<div class="input-group-addon">新闻内容</div>
													<textarea rows=5 name="news_content" class="form-control"><?php echo $arr['news_content'];?></textarea>
											</div>
										</div>
										<div class="form-group">
											<div class="input-group">
													<div class="input-group-addon">新闻来源</div>
													<input type="text" name="news_from" class="form-control" value="<?php echo $arr['news_from'];?>">
											</div>
										</div>
										<input type="submit" class="btn btn-success btn-lg" value="修 改 文 章"/>
										<a href="admin.php" class="btn btn-primary">管理已发布新闻</a>
								</div>
								</div>
							</div>

						</div>

					</div>
					<div class="footer">
						<strong>Bootstrap后台管理系统</strong> &copy; 2016
					</div>
				</div>
			</div>

			<!-- JS文件 -->
			<script src="js/jquery-1.12.1.min.js"></script>
			<!-- Bootstrap JS文件 -->
			<script src="js/bootstrap.min.js"></script>
			<!--当浏览器宽度小于768px的时候，隐藏左侧栏目-->
			<script src="js/hplus.js"></script>
			<!--metisMenu左侧菜单JS-->
			<script src="js/metisMenu/jquery.metisMenu.js"></script>
	</body>

</html>