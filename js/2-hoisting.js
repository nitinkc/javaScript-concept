b();/* Since the function already exist in memory (creation phase) thus it can access the function!!*/

console.log(a); // Undefined
/*undefined, as the variable during creation phase gets the memory with vaue undefined. It is during
execution that value gets assigned. It gives an error (ReferenceError- not defined) if you do not declare the varaible. If you declare the variable anywhere, you can access after thje declaration nornally or before declaration you will get undefined*/

var a = 'Hello World!';

// This functions gets memory at the creation phase. Thus it can be called from any where during executionm phase
function b() {
    console.log('Called b!');
}