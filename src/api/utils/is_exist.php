<?php
    // 判断用户名和手机号是否已存在
    header('Content-Type:application/json; charset=utf-8');
    function is_exist($key,$value){
        if(!$value){
            $message = array(
                "status"  => false,
                "message"  => ($key=="username" ? "用户名" : "手机号") . "不能为空"
            );
            echo json_encode($message,true);
            die;
        }else{
            include __DIR__ . '/../connect.php';
            $sql = "select uid from user where $key='$value'";
            $result = $mysql->query($sql);
            $count = $result->num_rows;
            if($count>0){
                $message = array(
                    "status"  => false,
                    "message"  => ($key=="username" ? "用户名" : "手机号") . "已存在"
                );
                echo json_encode($message,true);
                $result->free();
                $mysql->close();
                die;
            }
        }  
    }