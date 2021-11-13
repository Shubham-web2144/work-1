<?php

include "./conn.php";


$f_name = mysqli_real_escape_string($conn, $_REQUEST['fname']);
$f_phone = mysqli_real_escape_string($conn, $_REQUEST['fnum']);
$f_mail = mysqli_real_escape_string($conn, $_REQUEST['fmail']);
$f_msg = mysqli_real_escape_string($conn, $_REQUEST['fmsg']);


$insert_query = "INSERT INTO `website_contact` (`name`, `Mobile`, `email`, `Message`) VALUES ( '$f_name', '$f_phone', '$f_mail', '$f_msg')";

if (!empty($f_name) && !empty($f_phone) && !empty($f_mail) && !empty($f_msg)) {
    if (mysqli_query($conn, $insert_query)) {
        echo "Thank You for giving feedback us";
        $recevier = '';
        $sub = "From: $f_name<$f_mail>";
        $body = "This is only form test";

        if (mail($recevier, $sub, $body)) {
            echo "msg sent";
        } else {
            echo "msg not sent";
        }
        header("Location: ../Pages/contactus.html");
    } else {
        echo "Error in " . mysqli_error($conn);
    }
} else {
    echo "enter valid details";
}







mysqli_close($conn);


?>

<!--  -->