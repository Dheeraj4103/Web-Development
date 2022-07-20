var one = (callback) => {
    console.log("This is one");
    callback();
}

var two = () => {
    console.log("This is two");

}

var three = () => {
    console.log("This is three");
}

one(three);


