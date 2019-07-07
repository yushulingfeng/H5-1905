<?php
    include __DIR__ . '/./connect.php';
    $handle = $_POST['handle'] ? $_POST['handle'] : '';
    $uid = $_POST['uid'] ? $_POST['uid'] : '';
    // 添加订单
    if($handle=='insert'){
        $sql = "select * from user";
        $result = $mysql->query($sql);
        $count = $result->num_rows;
        $count++;
        $count = md5($count);
        $goods = $_POST['goods'] ? $_POST['goods'] : '';
        $sql = "insert into orders values('$count','$uid','$goods')";
        $mysql->query($sql);
        if($mysql->affected_rows==1){
            $message = array(
                "status" => true,
                "message" => "订单添加成功",
            );
            echo json_encode($message,true);
            $mysql->close();
        }
    }
    // 查询订单
    if($handle=='select'){
        $sql = "select * from orders where uid='$uid'";
        $result = $mysql->query($sql);
        $data = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($data,true);
        $result->free();
        $mysql->close();
    }