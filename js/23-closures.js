//function returning a function
function greet(whattosay) {
    // using function ecpression
   return function(name) { //acceps name as parameter
       console.log(whattosay + ' ' + name);
   }

}

var sayHi = greet('Hi');// Returns a function
console.log(sayHi);// prints a function
//the fubnction goes out of execution but the memory for the variables remains
sayHi('Tony');//Now invoking the inner function from the returned function
