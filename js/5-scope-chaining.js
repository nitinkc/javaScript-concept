function a() {
    function b() {
        console.log(myVar);//goes into its parent (a), since there is no value defined, it will go further up and checks global context. If it not there in GC, then it will give result as undefined/Reference error
    }
    
	b();
}

var myVar;
a();