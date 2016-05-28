$(document).ready(function(){
    
    // Sets navigation bar to auto hide on scroll down
    $("nav.navbar-fixed-top").autoHidingNavbar('setDisableAutohide', true);
    addActive($('nav.navbar-fixed-top li:eq(0)'));
    
    var startFade = $('.marketing').offset().top - 200;
    var endFade = $('.marketing').offset().top - 100;
    var targetReached = false;
    
    // Value for what percent the user has scrolled through website
    var scrollPercent = 0;
    // Website height
    var scrollHeight = $(document).height() + 48;


    
    // Smooth scroll to target location
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);
        
        
        if(target){
            targetReached = false;
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top +1
            }, 900, 'swing', function () {
                window.location.hash = target;
                targetReached = true;
            }); 
        }
        
	});
    
   
    
    $(document).scroll(function(){
   
        var scrollTop = $(this).scrollTop();
    
        //changes active menu item based on scroll position
        if(scrollTop >= ($('.contact').offset().top - $('nav.navbar-fixed-top').height())){
                removeActives();
                addActive($('nav.navbar-fixed-top li:eq(6)'));
        } 
        else if(scrollTop >= ($('.coming').offset().top - $('nav.navbar-fixed-top').height())){
                removeActives();
                addActive($('nav.navbar-fixed-top li:eq(5)'));
        } 
        else if(scrollTop >= ($('.marketing').offset().top - $('nav.navbar-fixed-top').height())){
                removeActives();
                addActive($('nav.navbar-fixed-top li:eq(1)'));
        } 
        else {
                removeActives();
                addActive($('nav.navbar-fixed-top li:eq(0)'));
        }
        
    
        var currentFade = $(this).scrollTop() - startFade; 
        var fadePerc = currentFade/(endFade-startFade);
        
        // Dynamically changes the fade gradient of the menu bar based on scroll position
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
    
    // Shows the naviagtion bar
    function showNavigation(){
        if(($("nav.navbar-fixed-top").autoHidingNavbar('isVisible')) == false){
            $("nav.navbar-fixed-top").autoHidingNavbar('setDisableAutohide', true);
            $("nav.navbar-fixed-top").autoHidingNavbar('show');
        }
    }
    
    // Hides the navigation bar
    function hideNavigation(){
        if (($("nav.navbar-fixed-top").autoHidingNavbar('isVisible')) == true){
            $("nav.navbar-fixed-top").autoHidingNavbar('setDisableAutohide', false); 
        }
    } 
    
    // Detects menu click and calls addActive function
    $('nav.navbar-fixed-top li').click(function(){
        addActive(this);
    });
    
    // Changes active menu item
    function addActive(item){
        $(item).addClass('active');
    }
    
    // Removes all current active menu items
    function removeActives(){
         $('nav.navbar-fixed-top li').removeClass('active');
    }
    
                                   
});