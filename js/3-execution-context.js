function a(){
    var x;
    console.log(x); // in this execution context
}

function b(){
    var x = 2;
    console.log(2); // In this execution context x = 2
    a();
}

var x = 1; // Global Execution context
console.log(x);//This x is from Global Execution context

b(); // The execution context is put on top of Global execution context (in a Stack)