<?php

    $userphone = isset($_POST['userpbone']) ? $_POST['userpbone']:'';
    $pwd = isset($_POST['pwd']) ? $_POST['pwd']:'';

    include 'conn.php';

    $sql = "SELECT * FROM admin WHERE userphone='$userphone'";

    $res = $conn->query($sql);

    if($res->num_rows) {
        //真：存在，不给注册
        echo 'no';
    }else {
        $sql1 = "INSERT INTO admin(userphone,password) VALUES('$userphone','$pwd')";
        $res1 = $conn->query($sql1);
        echo 'yes';
        
    }

    //关闭数据库
    $res->close();
    $res1->close();
    $conn->close();





?>