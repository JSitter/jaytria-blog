<?php
    $data = file_get_contents("https://api.jaytria.com/wp-json/wp/v2/posts");
    header('Content-Type: application/json; charset=utf-8');
    echo $data;
?>