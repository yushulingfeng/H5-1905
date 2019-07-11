<?php

    $val1 = isset($_POST['val1']) ? $_POST['val1'] : '';
    $val2 = isset($_POST['val2']) ? $_POST['val2'] : '';

    include 'conn.php';

    $sql = "SELECT * FROM `data` WHERE cur BETWEEN $val1 AND $val2";

    $res = $conn->query($sql);

    // print_r($res);
    $content = $res->fetch_all(MYSQLI_ASSOC);

    // echo 'echo';

    echo json_encode($content,JSON_UNESCAPED_UNICODE);

?>