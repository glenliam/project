<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
		<title>Bootstrap后台管理系统主页</title>
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
						<h2>Bootstrap后台管理系统主页</h2>
						<ol class="breadcrumb">
							<li>
								<a href="index.html">主页</a>
							</li>
							<li>
								<a href="admin.php" target="_self">新闻管理</a>
							</li>
							<li>
								<strong>管理已发布新闻</strong>
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
									<h5>新闻列表</h5>
								</div>
								<div class="ibox-content">
									<!--所有新闻查询出的列表-->
									<table class="table table-hover table-striped">
										<thead>
											<tr>
												<th>文章编号</th>
												<th>栏目</th>
												<th>类别</th>
												<th>标题</th>
												<th>内容</th>
												<th>来源</th>
												<th>发布时间</th>
												<th>操作</th>
											</tr>
										</thead>
										<tbody>
											<?php
									            require_once 'init.php';
									            //查询表中所有数据
									            $sql="select * from news";
									            $re=mysqli_query($con, $sql);//执行sql语句
									            while($arr=mysqli_fetch_assoc($re)){
									        ?>
											<tr>
											<!--依次为：编号、栏目、类别、标题、内容、来源、日期-->
												<td><?php echo $arr['news_id'];?></td>
												<td><?php echo $arr['news_sort'];?></td>
												<td><?php echo $arr['news_type'];?></td>
												<td><?php echo $arr['news_title'];?></td>
												<td><?php echo $arr['news_content'];?></td>
												<td><?php echo $arr['news_from'];?></td>
												<td><?php echo $arr['news_date'];?></td>
												<td>
													<a href="admin-news-edit.php?id=<?php echo $arr['news_id']?>" class="btn btn-info" style="margin-bottom: 8px;">修改</a>
													<!--删除按钮增加JS确定框-->
                        							<a href="articleDelete.php?id=<?php echo $arr['news_id']?>" class="btn btn-danger" onclick="if(confirm('确定删除?')==false)return false;">删除</a>
												</td>
											</tr>
											<?php 
									                }
									            mysqli_close($con);//关闭数据库
									        ?>
										</tbody>
									</table>

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