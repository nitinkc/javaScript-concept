function buildFunctions() {
 
    var arr = [];
    
    //Putting 3 functions inside an array
    for (var i = 0; i < 3; i++) {
        arr.push(
            function() {//creating the function, not invoking
                console.log(i);   
            }
        )
        
    }
    
    return arr;
}

var fs = buildFunctions();

fs[0]();//invlking the function fom the array
fs[1]();
fs[2]();

function buildFunctions2() {
 
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);   
                }
            }(i))//calling with a variable
        )
        
    }
    
    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();