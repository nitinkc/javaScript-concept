//Arayas: Collections of everything
var arr = [
    1, //number
    false, //boolean
    { //Object
        name: 'Tony',
        address: '111 Main St.'
    }, // function expression
    function(name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
    },
    "hello"
];

console.log(arr);
arr[3](arr[2].name);

