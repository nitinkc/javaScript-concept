//Expression : a unit of code that returns in a value eg 1+2; or a === 3

//Available ahead of time due to creation phase,
greet();

//Function statement, doesn't retun a value until it is executed. it is hoisted
function greet() {
    console.log('hi');   
}

// Not in the execution context
//uncaought type error : not a function
// undefined int he memory
// anonymousGreet();

//Function Expression, anonymous
//Not hoisted
var anonymousGreet = function() {
    console.log('hi anonymous greet');   
}

//Invocable using the variable
// This is hopw a function expression runs
anonymousGreet();


function log(a) {// a is function expression
   a();    
}

//passing function object to log function
//function expression as its first class function
//functional programming
log(function() {
    console.log('hi from anony. function expression');   
});


