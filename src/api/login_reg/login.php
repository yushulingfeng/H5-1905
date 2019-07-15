<?php

    $user_phone = isset($_POST['user_phone']) ? $_POST['user_phone']:'';
    $pwd = isset($_POST['pwd']) ? $_POST['pwd']:'';

    include 'conn.php';

    $sql = "SELECT * FROM admin WHERE userphone='$user_phone'";
    $sql2 = "SELECT * FROM admin WHERE password='$pwd'";

    $res = $conn->query($sql);
    $res2 = $conn->query($sql2);


    if($res->num_rows && $res2->num_rows) {
        //真：存在，确认登录
        echo 'no';
    }else {
        echo 'yes';
    }

    //关闭数据库
    $res->close();
    $conn->close();


?>