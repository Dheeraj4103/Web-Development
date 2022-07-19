function objectproto(value) {
    this.value = value;
}

var example = new objectproto("I am an object");
//console.log(example.constructor.toString());

//console.log(objectproto.prototype);

objectproto.prototype.name = "I am a constructor";

//console.log(example.constructor.prototype)

console.log(objectproto.prototype);