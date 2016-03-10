/* First the Execution Stck runs, if empty, then it checks event-queue periodically, if there is an even, then it processes it by creating event's execution context.*/

// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){
        //console.log('inside while');
    }
    console.log('finished function');
}

function clickHandler() {
    console.log('click event Nitin!');   
}

// listen for the click event
// This even will run when stack is empty
document.addEventListener('click', clickHandler);

//This will execute first, because this is the part of stack execution context
waitThreeSeconds();
console.log('finished execution');