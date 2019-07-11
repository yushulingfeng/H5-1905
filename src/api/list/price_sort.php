<?php

    include 'conn.php';

    $sql = "SELECT * FROM `data` ORDER BY `cur` ASC";

    $res = $conn->query($sql);

    // print_r($res);
    $content = $res->fetch_all(MYSQLI_ASSOC);

    // echo 'echo';

    echo json_encode($content,JSON_UNESCAPED_UNICODE);

?>