<?php
    require 'dbConnect.php';
    
    $ip_address = $_SERVER['REMOTE_ADDR'];
    //$auto_record = $_POST['autoRecord'];
    //$auto_detect = $_POST['autoDetect'];
    //$auto_forget = $_POST['autoForget'];
    //$email_address = $_POST['emailAddress'];
    //$timer_count = $_POST['soon'];
    //$scroll_percentage = $_POST['scrollPercent'];
    //$video_count = $_POST['video'];
    $accessed = gmdate("Y-m-d H:i:s");
    
    $userId = getUserId($ip_address, $accessed, $conn);
    
    // Update session as this is likely the same session.
    if(sizeof($_POST)){
        if($userId){
            updateUser($userId, $conn);
        }
        else{
            $query = "INSERT INTO userdb (ip_address,auto_record,auto_detect,auto_forget,email_address,timer_count,scroll_percentage,video_count, accessed) values (?,null,null,null,null,null,null,null, null)";
            $params = array($ip_address);
            $result = sqlsrv_query($conn, $query, $params);
            if( $result === false ) {
                die(var_dump(sqlsrv_errors()));
            }
            
            $userId = getUserId();
            updateUser(getUserId($ip_address, $accessed, $conn), $conn);
        }
    }
    
    sqlsrv_close($conn);
    echo "finished";
    
    function updateUser($userId, $conn){
        $queryString = "update userdb
        set ". mapFieldsAndQueries() . 
        "where userid = '" . $userId . "'";
        
        echo $queryString;
        
        $result = sqlsrv_query($conn, $queryString);
        
        if( $result === false ) {
            die(var_dump(sqlsrv_errors()));
        }
    }
    
    function mapFieldsAndQueries(){
        $query = "";
        foreach($_POST as $key -> $value){
            $query = $query . ", " . $key . " = " . $value;
        }
        $query = substr($query, 1);
        return $query;
    }
    
    function getUserId($ip_address, $accessed, $conn){
        // Check if that IP has accessed the site before in the last hour.
        $idQueryString = "select userid
        from userdb
        where ip_address = '" . $ip_address . "' 
        AND datediff(year, '" . $accessed . "', getdate()) = 0
        AND datediff(month, '" . $accessed . "', getdate()) = 0
        AND datediff(day, '" . $accessed . "', getdate()) = 0
        AND datediff(hour, '" . $accessed . "', getdate()) = 0";
        
        $idQuery = sqlsrv_query($conn, $idQueryString);
        
        if( $idQuery === false ) {
            die(var_dump(sqlsrv_errors()));
        }
        
        // Fetch results.
        if(sqlsrv_fetch($idQuery) === false) {
            die( print_r( sqlsrv_errors(), true));
        }
        
        return sqlsrv_get_field($idQuery, 0);
    }
?>


