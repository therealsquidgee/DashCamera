var countDown = function(endDate, elements, heading){
    var _second = 1000,
        _minute = _second * 60,
        _hour = _minute * 60,
        _day = _hour * 24,
        _month = _day * 31,
        
        endDate = new Date(endDate),
        timer,
        countDown = true;
        
        calculate = function(){
                
                //checks if endDate was given in a valid format
                if(isNaN(endDate)){
                    console.log("Invlaid Date Time");
                    return;
                }
                
                //compares current date/time with endDate
                var current = new Date(),
                    remaining = endDate.getTime() - current.getTime(),
                    data;

                // checks if there is any time left on timer
                if(remaining <= 0){
                    console.log("timer is finished!");
                    clearInterval(timer);
                    //clearTimer();
                    changeTitle();
                    countDown = false;
                    countUp();
                } 
                else {
                    if(!timer){
                        timer = setInterval(calculate, _second);
                    }

                    //calculates remaining time into m/d/h/m/s
                    data = {
                        'months': Math.floor(remaining / _month),
                        'days': Math.floor((remaining % _month) / _day),
                        'hours': Math.floor((remaining % _day) / _hour),
                        'minutes': Math.floor((remaining % _hour) / _minute),
                        'seconds': Math.floor((remaining % _minute) / _second)
                    }
                   
                    updateCounter(elements, data);

                    
                }
        
        };
    
    
        // Changes the title above the counter  
        changeTitle = function(){
            document.getElementById(heading).innerHTML = "Timer is over";
        }
        
        // Decreases timer for every like on facebook!
        decreaseTime = function(){
            
        }
        
        
        calculate(); 
    
}

var updateCounter = function(elements, data){
    if(elements.length > 0){
        for(x in elements){
            var x = elements[x];
            data[x] = (('00' + data[x]).slice(-2));
            
                  
            document.getElementById(x).innerHTML = data[x];
            
            
        }
    }
}


var countUp = function(){
    var _second = 1000,
        _minute = _second * 60,
        _hour = _minute * 60,
        _day = _hour * 24,
        _month = _day * 31,
        totalTime = 0,
        timer;
    //Done every second
    calculate = function() {
        if(!timer){
            timer = setInterval(calculate, _second);
            
        }
        totalTime ++;
       // console.log("counting up, total time: " + totalTime + " timer: " + timer);
    }
    
    //Add to counter 
    addToCounter = function(time){
        
    }
    
    calculate();
    
}