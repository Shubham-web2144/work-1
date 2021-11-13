<?php

$host = "localhost";
$user = "root";
$pass = "";
$db_name = "web_data";

$conn = mysqli_connect($host,$user,$pass,$db_name);

if($conn){
    echo"connected";
}
else{
    echo"not connected";
}

?>