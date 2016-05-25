$(document).ready(function(){
    var targetReached = false;
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);
        
        
        if(target){
            console.log("disable");
            targetReached = false;
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top +1
            }, 900, 'swing', function () {
                window.location.hash = target;
                console.log("enable");
                targetReached = true;
            }); 
        }
        
         
	});
    
   
    
    $("nav.navbar-fixed-top").autoHidingNavbar('setDisableAutohide', true);
    addActive($('nav.navbar-fixed-top li:eq(0)'));
    
    var startFade = $('.marketing').offset().top - 200;
    var endFade = $('.marketing').offset().top - 100;
    
    $(document).scroll(function(){
   
        if($(this).scrollTop() >= ($('.contact').offset().top - $('nav.navbar-fixed-top').height())){
                removeActives();
                addActive($('nav.navbar-fixed-top li:eq(6)'));
        } 
        else if($(this).scrollTop() >= ($('.coming').offset().top - $('nav.navbar-fixed-top').height())){
                removeActives();
                addActive($('nav.navbar-fixed-top li:eq(5)'));
        } 
        else if($(this).scrollTop() >= ($('.marketing').offset().top - $('nav.navbar-fixed-top').height())){
                removeActives();
                addActive($('nav.navbar-fixed-top li:eq(1)'));
        } 
        else {
                removeActives();
                addActive($('nav.navbar-fixed-top li:eq(0)'));
        }
        
    
        var currentFade = $(this).scrollTop() - startFade; 
        var fadePerc = currentFade/(endFade-startFade);
        
        
        if(($(this).scrollTop() < endFade) && ($(this).scrollTop() > startFade))
        {
            $('.navbar').css('background', 'linear-gradient(rgba(0,0,0,' + (0.5 + fadePerc/2) +'), rgba(0,0,0,'+ fadePerc +')'); $('.navbar').css('background', '-webkit-linear-gradient(rgba(0,0,0,' + (0.5 + fadePerc/2) +'), rgba(0,0,0,'+ fadePerc +')'); $('.navbar').css('background', '-o-linear-gradient(rgba(0,0,0,' + (0.5 + fadePerc/2) +'), rgba(0,0,0,'+ fadePerc +')'); $('.navbar').css('background', '-moz-linear-gradient(rgba(0,0,0,' + (0.5 + fadePerc/2) +'), rgba(0,0,0,'+ fadePerc +')');
            
        } else if ($(this).scrollTop() > endFade)
        {
            $('.navbar').css('background', 'black');
        } else 
        {
            $('.navbar').css('background', 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,0)');
        }
        
        
        if($(this).scrollTop() > 300+ $('#home').height() && targetReached == true){
            hideNavigation();         
        } else {
            showNavigation();
        } 
    });
    
    
    function showNavigation(){
        if(($("nav.navbar-fixed-top").autoHidingNavbar('isVisible')) == false){
            $("nav.navbar-fixed-top").autoHidingNavbar('setDisableAutohide', true);
            $("nav.navbar-fixed-top").autoHidingNavbar('show');
            console.log('show navigation');
        }
    }
    
    function hideNavigation(){
        if (($("nav.navbar-fixed-top").autoHidingNavbar('isVisible')) == true){
            $("nav.navbar-fixed-top").autoHidingNavbar('setDisableAutohide', false); 
            console.log('show navigation');
        }
    } 
    
    
    $('nav.navbar-fixed-top li').click(function(){
        addActive(this);
    });
    
    function addActive(item){
        $(item).addClass('active');
    }
    function removeActives(){
         $('nav.navbar-fixed-top li').removeClass('active');
    }
    
                                   
});