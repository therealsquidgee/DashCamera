<?php

    require "dbConnect.php";
    
    echo "hello world";
    $ip_address = $_SERVER['REMOTE_ADDR'];
    $auto_record = $_POST['autoRecord'];
    $auto_detect = $_POST['autoDetect'];
    $auto_forget = $_POST['autoForget'];
    $email_address = $_POST['emailAddress'];
    $timer_count = $_POST['soon'];
    $scroll_percentage = $_POST['scrollPercent'];
    $video_count = $_POST['video'];


//    $_POST['name']
var_dump($_POST);
    
    $query = "INSERT INTO userdb (ip_address,auto_record,auto_detect,auto_forget,email_address,timer_count,scroll_percentage,video_count)values (?,?,?,?,?,?,?,?)";
    $result = sqlsrv_query($conn, $query);
    if( $result === false ) {
        die(var_dump(sqlsrv_errors()));
    }
    var_dump($conn);
    
    echo $query;

    //$stmt->bind_param("siiisidi", $ip_address,$auto_record,$auto_detect,$auto_forget,$email_address,$timer_count,$scroll_percentage,$video_count);
    

    //executes some statement somewhere
    //$stmt->execute();

    



    


    //$stmt->close();
    sqlsrv_close($conn);
    echo "finished";
?>


