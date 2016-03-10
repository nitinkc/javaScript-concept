/* All primitives are by value adn all Objects are by reference */

// by value (primitives)
var a = 3;
var b;

b = a;//by value, two copies
a = 2;

console.log(a);
console.log(b);

// by reference (all objects (including functions))
var c = { greeting: 'hi' };
var d;

d = c;//both points to the same memory location
c.greeting = 'hello'; // mutate : to change somehting

console.log(c);
console.log(d);

// objects are by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate   
}

//mutating the object
changeGreeting(d);

console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
c = { greeting: 'howdy' };// creating a new object
console.log(c);
console.log(d);