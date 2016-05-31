// Value for what percent the user has scrolled through website
var emailAddress = '';
var scrollPercent = 0;

// Analytics targets
var video = false;
var soon = false;
var autoRecord = false;
var autoDetect = false;
var autoForget = false;

$(document).ready(function(){
   /* $.getJSON("http://jsonip.com/?callback=?", function (data) {
        console.log(data);
        alert(data.ip);
    }); */
    // Website height
    var scrollHeight = $(document).height() + 48;
    
    // tracks click events on key analytics targets
    $('.analytics').click(function(){
    
        var id = $(this).attr('id');
        console.log(id);     
        switch (id) { 
            case 'video': 
                video = true;
                break;
            case 'sooner': 
                soon = true;
                break;
            case 'autoRecord': 
                autoRecord = true;
                break;
            case 'autoDetect': 
                autoDetect = true;
                break;
            case 'autoForget': 
                autoForget = true;
                break;
            case 'email': 
                getEmail();
                break;
            default:
                alert('Invalid click');
        }
    });

    function getEmail(){
        emailAddress = $("#userEmail").val();
        $("#userEmail").val("");
        console.log(emailAddress);
    }
    
    // Tracks scroll movement
    $(document).scroll(function(){

        var scrollTop = $(this).scrollTop();
        var windowHeight =  $(window).height();
        
        // Sets the furthest percent of website completion
        if(scrollPercent < (scrollTop+windowHeight)/scrollHeight){
            scrollPercent = (scrollTop+windowHeight)/scrollHeight;
           //console.log(scrollPercent);
        }
    });
    
    

    // Uploads all of the stored analytics to the database
    window.onbeforeunload = function() {
        
        console.log(autoRecord);
        
        console.log("unloading...");
        $.ajax({
            type: 'POST',
            async: false,
            url: 'analytics.php',
            data: 
                {
                    scrollPercent: scrollPercent, 
                    video: video, 
                    soon: soon, 
                    autoRecord: autoRecord, 
                    autoDetect: autoDetect, 
                    autoForget: autoForget, 
                    emailAddress: emailAddress
                }
        });
    }
      
    
});

   