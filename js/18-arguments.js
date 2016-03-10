// in ES6 I can do:  function greet(firstname, ...other)
// and 'other' will be an array that contains the rest of the arguments


function greet(firstname, lastname, language) {
 
    //if undefined, set 'en' as default
    language = language || 'en';
    
    //JS Engine provides the arguments variable; gives an Array LIKE object
    if (arguments.length === 0) {
        console.log('Missing parameters!');
        console.log('-------------');
        return;
    }
    
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);//like this, argument is available
    console.log('arg 0: ' + arguments[0]);
    console.log('-------------');
    
}

greet();//skip all parameter
greet('John');// skip a part of the parameter
greet('John', 'Doe');
greet('John', 'Doe', 'es');