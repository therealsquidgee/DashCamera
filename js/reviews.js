   
$(document).ready(function(){
    //Define review objects
    var reviews = [
        {   message: "Lorem ipsum dolor sit amet, veniam scripta fabellas eam ut, id porro similique eum, movet periculis liberavisse sed an. Fuisset explicari mei te. Graeco pertinacia ne cum. Sapientem persecuti no usu, detraxit menandri mandamus mea id.",
            reviewer: "Ryan Smith",
            image: "person01.png"},
        {   message: "Soluta omnesque comprehensam ei has, temporibus dissentiet mel ea, labitur fabulas indoctum an sed. Usu dico fabellas invidunt id. Ius elit putant melius at. Rebum tacimates invenire ius in, suavitate constituto definitionem nec at. Eu has doctus urbanitas. Diceret assentior ut sea, mea velit dictas dolorem no, integre invenire no vis. Ius ex paulo voluptaria, nullam assueverit cu ius.",
            reviewer: "Ryan Smith",
            image: "person02.png"},
        {   message: "Et placerat dissentiet sea. Sed homero oblique deseruisse an, dolore nostrum tincidunt id vel. Omnes latine cu cum, dissentias quaerendum mel cu. No saperet omittam definitiones sea.",
            reviewer: "Ryan Jones",
            image: "person04.png"},
        {   message: "Te illud meliore adipiscing cum, ius in sint vocibus. Elit ubique vidisse sea ut, scaevola apeirian ius ad. Duis iisque inimicus vis id, mel id nostrum detraxit. Per recteque tincidunt cu. His altera sapientem ea.",
            reviewer: "Ryan Smith",
            image: "person05.png"}
    ];

    //standard html for image review
    var review = $('<li><a href="javascript:;"><img src="" alt=""></a></li>');
    //Timer for the automatic changing reviews
    var timerCoolDown = 5000;
    //Stores the index of the selected review
    var countIndex = 0;
    //Sets an automatic timer that calls autoReview function
    var timer = setInterval(autoReview, timerCoolDown);
    

    //Loops through each review in 'reviews' array and creates an image review
    $(reviews).each(function(index, value){
        var newReview = review.clone();
        var image = $('<img>').attr('src','images/'+value.image);
        $(newReview).find('img').attr('src','images/person_blank.png');
        $('.reviews-container').append(newReview);
    });
    
    //On click of each reviewer change call changeReview function
    $('.reviews-container li a').click(function(){
        var index = $('.reviews-container li a').index(this);
        clearInterval(timer);
        changeReview(index);
        auto = false;
        
    });
      
    //Function used to change the written review displayed
    function changeReview(index){
        
        countIndex = index;
    
        if(countIndex < 0){
            countIndex = reviews.length-1;
        } else if(countIndex >= reviews.length){
            countIndex = 0;
        }
        
        
        if(reviews[index] == currentReview){
            console.log("review is already selected");
        } else {
            var reviewText = reviews[countIndex].message;
            var reviewer = reviews[countIndex].reviewer;
            var selectedImage = reviews[countIndex].image;
            currentReview = reviews[countIndex];
            
            $('#reviews blockquote').html(reviewText).append("<cite>"+reviewer+"</cite>"); 
            
            $('.reviews-container li a img').attr('src','images/person_blank.png');
            
            $('.reviews-container li').eq(countIndex).find("img").attr('src', 'images/'+selectedImage);
        }   
    }
    
    
    /* Function used to auto-select the reviews */
    function autoReview(){     
        countIndex ++;
        changeReview(countIndex);   
    }
    
   
    //Initially sets the first review as the default review
    changeReview(countIndex);
    
    var currentReview = reviews[countIndex];
    
    //Defines the swipeable area on the webpage
    var swipeArea = document.getElementById('reviews');

    // create a simple instance
    // by default, it only adds horizontal recognizers
    var mc = new Hammer(swipeArea);

    // listen to events...
    mc.on("swipeleft swiperight tap press", function(ev) {
        if(ev.type == 'swipeleft'){
            console.log("swipe left detected");
            changeReview(countIndex - 1);
        } else if(ev.type = 'swiperight'){
            console.log("swipe right detected");
            changeReview(countIndex + 1);
        }
    });
    
});

    