<?php
 try  
        {  
            $serverName = "tcp:fsjk8c2g5g.database.windows.net,1433";  
            $connectionOptions = array("Database"=>"dashcamera",  
                "Uid"=>"dashuser", "PWD"=>"Dashpass1");  
            $conn = sqlsrv_connect($serverName, $connectionOptions);  
            if($conn == false) {
                die(val_dump(sqlsrv_errors()));  
            }
        }  
catch(Exception $e)  
        {  
            echo("Error!");  
        }
?>