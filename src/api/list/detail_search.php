<?php

    $val = isset($_POST['val']) ? $_POST['val'] : '';

    include 'conn.php';

    $sql = "SELECT * FROM `data` WHERE title LIKE '%$val%'";

    $res = $conn->query($sql);

    // print_r($res);
    $content = $res->fetch_all(MYSQLI_ASSOC);

    // echo 'echo';

    echo json_encode($content,JSON_UNESCAPED_UNICODE);

?>