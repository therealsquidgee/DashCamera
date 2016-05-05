
var reviews = [
    {   message: "Lorem ipsum dolor sit amet, veniam scripta fabellas eam ut, id porro similique eum, movet periculis liberavisse sed an. Fuisset explicari mei te. Graeco pertinacia ne cum. Sapientem persecuti no usu, detraxit menandri mandamus mea id.",
        selected: true,
        image: "person01.png"},
    {   message: "Soluta omnesque comprehensam ei has, temporibus dissentiet mel ea, labitur fabulas indoctum an sed. Usu dico fabellas invidunt id. Ius elit putant melius at. Rebum tacimates invenire ius in, suavitate constituto definitionem nec at. Eu has doctus urbanitas. Diceret assentior ut sea, mea velit dictas dolorem no, integre invenire no vis. Ius ex paulo voluptaria, nullam assueverit cu ius.",
        selected: false,
        image: "person02.png"},
    {   message: "Et placerat dissentiet sea. Sed homero oblique deseruisse an, dolore nostrum tincidunt id vel. Omnes latine cu cum, dissentias quaerendum mel cu. No saperet omittam definitiones sea.",
        selected: false,
        image: "person04.png"},
    {   message: "Te illud meliore adipiscing cum, ius in sint vocibus. Elit ubique vidisse sea ut, scaevola apeirian ius ad. Duis iisque inimicus vis id, mel id nostrum detraxit. Per recteque tincidunt cu. His altera sapientem ea.",
        selected: false,
        image: "person05.png"}
];


var timerAuto = 5000;
var countIndex = 0;
 



var review = new Vue({
    el: '#reviews',
    data: {
        reviews: reviews,
        review: reviews[0].message,
        timerCoolDown: timerAuto
    },
    methods: {
       selectReview: selectReview,
        autoReview: autoReview
    }
});

var currentReview = review.reviews[0];
var timer = setInterval(autoReview, review.timerCoolDown);


/* Function used to auto-select the reviews */
function autoReview(){
    
   
    countIndex ++;
    review.selectReview(countIndex, true);   
}

/* Function used to select and display the correct review */
function selectReview(index, auto){
    countIndex = index;
    
     if(countIndex < 0){
        countIndex = review.reviews.length-1;
    } else if(countIndex >= review.reviews.length){
        countIndex = 0;
    }
    

    if(review.reviews[countIndex].selected != true){
        currentReview.selected = false;
        review.review = review.reviews[countIndex].message;
        review.reviews[countIndex].selected = true;
    } else {
        console.log("this review is already selected");
    }

    currentReview = review.reviews[countIndex];
    
    //if a non auto-matic view was selected stop the auto change
    if(auto == false){
       clearInterval(timer);
    }    
}




var myElement = document.getElementById('reviews');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

// listen to events...
mc.on("swipeleft swiperight tap press", function(ev) {
    if(ev.type == 'swipeleft'){
        console.log("swipe left detected");
        selectReview(countIndex - 1, false);
    } else if(ev.type = 'swiperight'){
        console.log("swipe right detected");
        selectReview(countIndex + 1, false);
    }
});