<?php
    header('Content-type:text/html;charset=utf-8');//防止中文乱码
    include 'conn.php';
    $sql = "SELECT * FROM `data`";
    $res = $conn->query($sql);
    $goods = array();
    while($rows = $res->fetch_array()){
        array_push($goods,$rows);
    }

    echo json_encode($goods,JSON_UNESCAPED_UNICODE);

?>