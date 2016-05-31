<?php
	

	require 'dbConnect.php';
	
	$queryString = "select distinct ip_address from user";
	$query = sqlsrv_query($conn, $queryString);
   
   $rowCount = sqlsrv_num_rows($query);
   
	echo $rowCount;




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