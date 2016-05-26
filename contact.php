<html>
    <body>
    
        <?php 
            require __DIR__ . '/vendor/autoload.php';
            
            ini_set("display_errors", "On");
        
            echo 'Welcome '. $_POST['name']. ' with email: '. $_POST['email'];
            
            /*
            * Standard single-node URI format: 
            * mongodb://[username:password@]host:port/[database]
            */
            $uri =  "mongodb://dashcamuser:dashcam123@ds063124.mlab.com:63124/throwdownattire";
            $client = new MongoClient($uri);
            $db = $client->selectDB("throwdownattire");
            
            /*
            * Navigate to the DashCamera collection.
            */
            $dashcam = $db->DashCamera;
            
            // Find the test document I added.
            $test = $dashcam->findOne(array('_id' => new MongoId('5746c01c51de0e9c1500002a')));
            
            // Incremeent its value by one and return the new value.
            $newTest = $dashcam->findAndModify(
                array('_id' => new MongoId('5746c01c51de0e9c1500002a')), // Find query.
                array("test" => $test["test"] += 1), // Set new value.
                null, // Some other parameter we don't need to worry about.
                array("new" => true) // Return the updated value.
            );
            echo $newTest["test"]; // Print the new value.
        ?>
    
    </body>
</html>