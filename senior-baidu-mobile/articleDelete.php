<?php
    header("content-type:text/html;charset=utf8");//设置编码格式
    require_once 'init.php';//连接数据库
    $id=(int)$_GET['id'];//获取要删除新闻的编号
    $sql="delete from news where news_id = '$id'";//删除这条新闻
    $re=mysqli_query($con, $sql);//执行sql语句
    if($re){
        echo "<script type='text/javascript'>alert('删除成功');window.location.href='admin.php';</script>";//删除完毕后返回到后台首页
    }else{
        echo "<script type='text/javascript'>alert('删除失败');history.back(-1)</script>";
    }
	mysqli_close($con);//关闭数据库   
?>	