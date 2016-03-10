/* ECMA Script 6 is bringing default thing*/
function greet(name) {
    // This will coerce undefined and null; to false giving other as the result
    name = name || 'Nitin';
    
    console.log('Hello ' + name);    
}

greet('Tony');//oparameter passed thus name = tony
greet();// name is set to undefined at the time of creation phase, this it remain undefined.