// function statement
function greet(name) {
    console.log('Invoking ' + name);   
}
greet('Function statement');//invocation of a function in memory

// using a function expression
var greetFunc = function(name) {
    console.log('Invoking ' + name);
};
greetFunc('Function statement');//invoking a function expression using the variable with an argument

// using an Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {
    
    return 'Invoking ' + name;
    
}('IIFE');//invoking on the fly

console.log(greeting);//give the retun of the IIFE

//greeting();//ERROR as the greeting contains STRING

"I am a String";//VALID
{name : 'name'}; //VALID

//To trick syntax parser
//()();//VALID
(function(){});//VALID
// IIFE
var firstname = 'John';

// STYLE 1 : invoking inside parenthesis 
/* 1. ()
   2. (function(){...}());
   3. (function(argument){...}(argument));
*/
(function(name) {
    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);
    
}(firstname)); // Invoking IIFE

// STYLE 2 : invoking outside parenthesis 
/* 1. ()()
   2. (function(){...})();
   3. (function(argument){...})(argument);
*/
(function nitin(){//without argument
    console.log("This is no argument function")
})();


(function(name) {//with argument
    var greeting = 'LAST: Hello';
    console.log(greeting + ' ' + name);
    
})("Nitin"); // Invoking IIFE
