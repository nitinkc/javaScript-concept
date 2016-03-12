// Function Constructor : Creating an object via new
function Person(firstname, lastname) {
 
    console.log(this);// EMPTY OBJECT
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}

//use of new keyword sets the 'this' to an empty object

// creates an empty object new invokes the function
var john = new Person('John', 'Doe');//constructor
//creates a new object
console.log(john);

//If accidently forgot to create a new function
var jane = new Person('Jane', 'Doe');
console.log(jane);