有问题，找压缩包里的文件
<?php
    header("content-type:text/html;charset=utf8");//设置编码格式
	//$arr=$_POST;//获取POST进来的数据
    require_once 'init.php';//连接数据库
    $sql="SELECT * FROM `love` WHERE id=2";
    $re=mysqli_query($con, $sql);//执行sql语句
    if($re){
    	echo "<script type='text/javascript'>alert('发布成功');history.back(-1)</script>";//发布成功停留在当前页
    }else{
        echo "<script type='text/javascript'>alert('发布失败');history.back(-1)</script>";
    }
    mysqli_close($con);//关闭数据库   
 ?>