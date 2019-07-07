<?php
    // 用户注册
    header('Content-Type:application/json; charset=utf-8');
    include __DIR__ . '/./connect.php';
    include __DIR__ . '/./utils/is_exist.php';
    $username = $_POST["username"] ? $_POST["username"] : '';
    $mobile = $_POST["mobile"] ? $_POST["mobile"] : '';
    $pswd = $_POST["password"] ? $_POST["password"] : '';
    is_exist("username",$username);
    is_exist("mobile",$mobile);
    // 注册用户
    $sql = "select * from user";
    $result = $mysql->query($sql);
    $count = $result->num_rows;
    $count++;
    $count = md5($count);
    $pswd = md5($pswd);
    $sql = "insert into user values('$count','$username','$mobile','$pswd')";
    $mysql->query($sql);
    if($mysql->affected_rows==1){
        $message = array(
            "status" => true,
            "message" => "注册成功",
            "data" => array(
                "uid" => $count
            )
        );
        echo json_encode($message,true);
        $mysql->close();
    }else{
        $message = array(
            "status" => false,
            "message" => "注册失败"
        );
        echo json_encode($message,true);
        $mysql->close();
    };
?>