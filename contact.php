<html>
    <body>
    
        <?php 
            require __DIR__ . '/vendor/autoload.php';
        
            echo 'Welcome '. $_POST['name']. ' with email: '. $_POST['email'];
        ?>
    
    </body>
</html>