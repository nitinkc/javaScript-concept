/* JSON is not javascript. its LIKE javascropt objects*/
var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

// converting javascript object into JSON object
console.log(JSON.stringify(objectLiteral));

// JSON needs quotes for the key in key-value pair
// Converting the json into javascript object.
// JSON is more strict, needs qoutes, dont have function etc
var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');

console.log(jsonValue);