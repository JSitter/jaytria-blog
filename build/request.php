<?php
    $data = file_get_contents("https://blog.jaytria.com/wp-json/wp/v2/posts");
    header('Content-Type: application/json; charset=utf-8');
    echo $data;
?>