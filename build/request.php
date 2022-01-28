<?php
$data = http_get("http://blog.jaytria.com/wp-json/wp/v2/posts/");
header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);
?>