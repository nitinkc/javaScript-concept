//Factory design pattern
//makes something for you as asked
function makeGreeting(language) {
 
    return function(firstname, lastname) {
     
        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);   
        }

        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);   
        }
        
    }
    
}

//make greeting is a factory function
var greetEnglish = makeGreeting('en');//one execution context, its Closure point is 'Hello' console.log
var greetSpanish = makeGreeting('es');//another execution context, its Closure point is 'Hola' console.log

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');