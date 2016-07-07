<?php
    header("content-type:text/html;charset=utf8");//设置编码格式
    date_default_timezone_set('Asia/Shanghai');
    $arr=$_POST;//获取POST进来的数据
    $id=(int)$arr['news_id'];//读取ID值
    require_once 'init.php';//连接数据库
	$time=date("y-m-d H:i:s");//获取当前时间
    $sql="update news set news_sort = '$arr[news_sort]',news_type = '$arr[news_type]',news_title = '$arr[news_title]',news_img = '$arr[news_img]',news_content = '$arr[news_content]',news_from = '$arr[news_from]' ,news_date = '$time'where news_id = '$id'";
    $re=mysqli_query($con, $sql);//执行sql语句
    if($re){
        echo "<script type='text/javascript'>alert('修改成功');window.location.href='admin.php';</script>";//修改成功返回管理主页
    }else{
        echo "<script type='text/javascript'>alert('修改失败');history.back(-1)</script>";
    }
    mysqli_close($con);//关闭数据库
?>