var person = {
    name: "Dheeraj",
    greet: function () {
        console.log("Hi ", this.name);
    }
}

var student = {
    name : "Sushant"
}

var greeting = person.greet.bind(student);

// greeting = function () {
//     console.log("Hi ", this.name);
    
// }

 person.greet.call(student);


