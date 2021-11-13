<?php

// database commection
include './conn.php';

// accesing all input fields

$category = $_POST['category'];
$name = $_POST['fname'];
$flname = $_POST['flname'];

$full_name = $name." ".$flname;

$fmail = $_POST['fmail'];
$fnum = $_POST['fnum'];

$fadd = $_POST['fadd'];
$fcountry = $_POST['fcountry'];
$fcity = $_POST['fcity'];
$state = $_POST['state'];
$fzip = $_POST['fzip'];

$full_add = $fadd." ".$fcity." ".$state." " .$fcountry." ".$fzip;

$fmsg = $_POST['fcmnt'];

$save_data = "INSERT INTO `inquiry` ( `category`, `full_name`, `f_mail`, `f_number`, `f_add`, `f_msg`) VALUES ( '$category', '$full_name', '$fmail', '$fnum', '$full_add', '$fmsg')";


if(!empty($category) && !empty($name) && !empty($flname) && !empty($fmail) && !empty($fnum) && !empty($fadd) && !empty($fcountry) && !empty($fcity) && !empty($fzip) && !empty($fmsg)){
    if(mysqli_query($conn, $save_data)){
        echo"./submitted.php";
        header("Location: ../Pages/submitted.html");
    }
    else{
        // header("Location: ../Pages/inquire.html");
    }
}

mysqli_close(($conn));

?>