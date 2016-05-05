$(document).ready(function(){
    
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);
        
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top -100
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    }); 
	});
    
    /*
    var currentScroll = $(".nav").offset().top;
    var startChange = $("#marker").offset().top;
    $(document).scroll(function(){
        
        if($(this).scrollTop() > startChange){
            console.log("am scrolling");
            $(".nav").css({
                
            });
        }
    })*/
    
      

    // Test nav bar 
    $(document).scroll(function(){
        if($(this).scrollTop() > 300){
           //$("li").css("backgroundColor", "red");
        }
    })
    
                                   
});