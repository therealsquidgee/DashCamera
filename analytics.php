<?php
    
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

    try  
        {  
            $serverName = "tcp:fsjk8c2g5g.database.windows.net,1433";  
            $connectionOptions = array("Database"=>"dashcamera",  
                "Uid"=>"dashuser", "PWD"=>"Dashpass1");  
            $conn = sqlsrv_connect($serverName, $connectionOptions);  
            if($conn == false)  
                die(FormatErrors(sqlsrv_errors()));  
        }  
    catch(Exception $e)  
        {  
            echo("Error!");  
        }
    
    $query = "CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `ip_address` varchar(25) NOT NULL,
  `auto_record` tinyint(1) NOT NULL,
  `auto_detect` tinyint(1) NOT NULL,
  `auto_forget` tinyint(1) NOT NULL,
  `email_address` varchar(25) NOT NULL,
  `timer_count` tinyint(1) NOT NULL,
  `scroll_percentage` float NOT NULL,
  `video_count` tinyint(1) NOT NULL)";
    $result = $conn->prepare($query);
    if(!$result){
        echo "Didn't work"; // useful for debugging
    }
    var_dump($conn);
    
    echo $query;

    $stmt = $conn->prepare("INSERT INTO user (ip_address,auto_record,auto_detect,auto_forget,email_address,timer_count,scroll_percentage,video_count)values (?,?,?,?,?,?,?,?)");
    echo $stmt;

    $stmt->bind_param("siiisidi", $ip_address,$auto_record,$auto_detect,$auto_forget,$email_address,$timer_count,$scroll_percentage,$video_count);
    

    //executes some statement somewhere
    $stmt->execute();

    



    


    $stmt->close();
    $conn->close();
    echo "finished";
?>


