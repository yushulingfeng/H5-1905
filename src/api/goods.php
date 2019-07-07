<?php
    include __DIR__ . '/./connect.php';
    $gid = $_GET["gid"] ? $_GET["gid"] : "";
    if($gid==""){
        $message = array(
            "status" => false,
            "message" => "商品id不能为空",
        );
        echo json_encode($message,true);
        die;
    }
    if($gid=="*"){
        $sql = "select * from goods";
    }
    if($gid!="*"){
        $sql = "select * from goods where gid='$gid'";
    }
    $result = $mysql->query($sql);
    $data = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data,true);
    $result->free();
    $mysql->close();