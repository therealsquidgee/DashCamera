<?php
	

	//$mysqli = new mysqli("localhost","root","","dashcam");

    //if ($mysqli->connect_error) {
      //  die('Could not connect: ' . $conn->connect_error);
    //}

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

   
	if ($result) {
		$total = $result->num_rows;
		printf("%d Total Vistors.", $total);
		printf("<br />");
		$result->close();


	}




	$result = $mysqli->query("SELECT AVG(scroll_percentage) as scrol_percentge FROM user");

	$row = mysqli_fetch_all($result);
	
	printf("Average Scrolling Percentage is %.2f%% ", $row[0][0]*100);
	printf("<br />");

	$result->close();





	$result = $mysqli->query("SELECT * FROM user where auto_record=1");
	$totalRecord = $result->num_rows;
	$recordPercent = $totalRecord / $total *100;
	printf("%.2f%% Percent of users click on the Auto Record Feature", $recordPercent);
	$result->close();


    $mysqli->close();
?>