//Object litearl syntax
var person = { 
    firstname: 'Tony', 
    lastname: 'Alicea',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY'
    }
};

function greet(person) {
    console.log('Hi ' + person.firstname);
}

//greet(Tony);//Uncaught ReferenceError
greet(person);

//Calling a function with object literal
greet({ 
    firstname: 'Mary', 
    lastname: 'Doe' 
});

person.address2 = {
    street: '333 Second St.'
}

