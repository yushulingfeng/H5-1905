<?php

    $gid = isset($_POST['gid']) ? $_POST['gid'] : '';

    include 'conn.php';

    $sql = "SELECT * FROM `data` WHERE gid=$gid";

    $res = $conn->query($sql);

    $content = $res->fetch_all(MYSQLI_ASSOC);

    echo json_encode($content,JSON_UNESCAPED_UNICODE);





?>