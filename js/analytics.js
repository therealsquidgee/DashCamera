$(document).ready(function(){
   /* $.getJSON("http://jsonip.com/?callback=?", function (data) {
        console.log(data);
        alert(data.ip);
    }); */
    
    // Value for what percent the user has scrolled through website
    var emailAddress = '';
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
            case 'email': 
                getEmail();
                break;
            default:
                alert('Invalid click');
        }
    });
    
    function setClick(clickArea){
        clickArea = true;
        //post(clickArea);
        console.log(clickArea);
    }

    function getEmail(){
        emailAddress = $("#userEmail").val();
        //post("emailAddress", emailAddress);
    }
    
    // Tracks scroll movement
    $(document).scroll(function(){

        var scrollTop = $(this).scrollTop();
        var windowHeight =  $(window).height();
        
        // Sets the furthest percent of website completion
        if(scrollPercent < (scrollTop+windowHeight)/scrollHeight){
            scrollPercent = (scrollTop+windowHeight)/scrollHeight;
            post("scroll_percentage", scrollPercent);
        }
    });
    
    function post(dataKey, value){
        var data = 
        {
            dataKey: value
        };
        
        $.ajax({
            type: 'POST',
            async: true,
            url: 'analytics.php',
            data: JSON.stringify(data)
        });
    }
});

   