greet();

hoisting = "Variable Hoisting";
console.log(hoisting)

function greet() {
    console.log("Function Hoisting");
};

var hoisting;

/* output will be:- 
Variable Hoisting;
Hello, This is an example of Hoisting
*/
