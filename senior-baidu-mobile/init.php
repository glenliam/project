<?php
 //创建数据库并连接
$mysql_db_hostname = "localhost";
$mysql_db_user = "root";
$mysql_db_password = "";
$mysql_db_database = "baidunews";
$con = mysqli_connect($mysql_db_hostname, $mysql_db_user, $mysql_db_password, $mysql_db_database);
//设置交互字符集
mysqli_query($con, "SET NAMES utf8");
//连接失败提示报错
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}  
?>