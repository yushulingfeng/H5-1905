<?php
    $mysql = new mysqli(
        "localhost",
        "root",
        "",
        "business",
        "3306"
       );
    // 判断是否连接成功
    if(mysqli_connect_error()){
        echo "fail";
        die;
    }
?>