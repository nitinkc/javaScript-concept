// Creating a new object
var person = new Object();

//Adding properties in the object
person["firstname"] = "Tony";
person["lastname"] = "Alicea";

var firstNameProperty = "firstname";

console.log(person);
//Accessing the propert using the value on the Object KEY
console.log(person[firstNameProperty]);

//Accessing the object property using dot
console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);