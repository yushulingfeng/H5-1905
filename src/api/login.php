<?php
    // 用户登录
    include __DIR__ . '/./connect.php';
    $username = $_POST["username"] ? $_POST["username"] : '';
    $mobile = $_POST["mobile"] ? $_POST["mobile"] : '';
    $pswd = $_POST["password"] ? $_POST["password"] : '';
    $pswd = md5($pswd);
    $sql = "select uid from user where username='$username' and pswd='$pswd'";
    $result = $mysql->query($sql);
    if($result->num_rows>0){
        $users = $result->fetch_all(MYSQLI_ASSOC);
        $message = array(
            "status" => true,
            "message" => "登录成功",
            "data" => array(
                "uid" => $users[0]["uid"]
            )
        );
        echo json_encode($message,true);
        $result->free();
        $mysql->close(); 
        die;
    }
    $sql = "select * from user where mobile='$mobile' and pswd='$pswd'";
    $result = $mysql->query($sql);
    if($result->num_rows>0){
        $message = array(
            "status" => true,
            "message" => "登录成功",
        );
        echo json_encode($message,true);
        $result->free();
        $mysql->close(); 
        die;
    }
    $message = array(
        "status" => true,
        "message" => "登录失败",
    );
    echo json_encode($message,true);
?>