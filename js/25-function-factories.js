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
var greetEnglish = makeGreeting('en');//one execution context
var greetSpanish = makeGreeting('es');//another execution context

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');