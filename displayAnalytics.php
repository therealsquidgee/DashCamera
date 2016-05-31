<?php
	

	require 'dbConnect.php';
	
	$queryString = "select * from userdb";
	$rowNumQuery = sqlsrv_query($conn, $queryString, array(), array( "Scrollable" => 'static' ));
   
   	$rowCount = sqlsrv_num_rows($rowNumQuery);
   
	printf("Number of distinct IP Addresses: %d <br/>", $rowCount);

	
	$queryString = "SELECT AVG(scroll_percentage) FROM userdb";
	$scrollQuery = sqlsrv_query($conn, $queryString);
	if($scrollQuery === false ) {
        die(var_dump(sqlsrv_errors()));
    }
	
	// Fetch results.
	if(sqlsrv_fetch($scrollQuery) === false) {
		die(print_r( sqlsrv_errors(), true));
	}
	
	$scrollPercent = sqlsrv_get_field($scrollQuery, 0);
	
	printf("Average scroll percentage: %.2f%% <br/>", ($scrollPercent * 100));
	
	getBoolPercent($conn, "auto_record", "Auto Record", $rowCount);
	getBoolPercent($conn, "auto_detect", "Auto Detect", $rowCount);
	getBoolPercent($conn, "auto_forget", "Auto Forget", $rowCount);
	getBoolPercent($conn, "timer_count", "Timer Count", $rowCount);
	getBoolPercent($conn, "video_count", "Video Count", $rowCount);

	
	//printf("Average Scrolling Percentage is %.2f%% ", $row[0][0]*100);
	//printf("<br />");
	
	sqlsrv_close($conn);
	
	function getBoolPercent($conn, $param, $paramName, $rowCount){
		$queryString = "SELECT * FROM userdb where " . $param . "=1";
		$paramQuery = sqlsrv_query($conn, $queryString, array(), array( "Scrollable" => 'static' ));
	
		$paramCount = sqlsrv_num_rows($paramQuery);
	
		$paramPercent = $paramCount / $rowCount *100;
		printf("%.2f%% percent of users click on the " . $paramName . " Feature <br/>", $paramPercent);

	}
?>