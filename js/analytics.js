$(document).ready(function(){
   /* $.getJSON("http://jsonip.com/?callback=?", function (data) {
        console.log(data);
        alert(data.ip);
    }); */
    
    // Value for what percent the user has scrolled through website
   
    var scrollPercent = 0;
    // Website height
    var scrollHeight = $(document).height() + 48;

    // Analytics targets
    var video = false;
    var soon = false;
    var autoRecord = false;
    var autoDetect = false;
    var autoForget = false;
    
    // tracks click events on key analytics targets
    $('.analytics').click(function(){
    
        var id = $(this).attr('id');
        console.log(id);     
        switch (id) { 
            case 'video': 
                setClick(video);
                break;
            case 'sooner': 
                setClick(soon);
                break;
            case 'autoRecord': 
                setClick(autoRecord);
                break;		
            case 'autoDetect': 
                setClick(autoDetect);
                break;
            case 'autoForget': 
                setClick(autoForget);
                break;
            default:
                alert('Invalid click');
        }
    });
    
    function setClick(clickArea){
        clickArea = true;
        console.log(clickArea);
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
    
     $.ajax({
            type: 'POST',
            async: false,
            url: '/infsfinal/dashcamera/analytics.php',
            data: {scrollPercent: scrollPercent, video: video, soon: soon, autoRecord: autoRecord, autoDetect: autoDetect, autoForget: autoForget }
        });
    // Uploads all of the stored analytics to the database
    $( window ).unload(function() {
        
        console.log("unloading...");
       

    });
      
    
});

   