function closure() {
    const example = "This is closure";
    let dispclosure = () => { return example };
    return dispclosure; // closure function
}

const value = "This is closure";

console.log(value);
// output will be: - 
// This is closure

//console.log(value);

// output will be: -
// This is closure

function sayHello() {
    const hello = "Hello World";
    console.log(hello);
}

// console.log(hello);

// output will be:- 
// ReferenceError: hello is not defined




