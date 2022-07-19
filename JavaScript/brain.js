
// Event Listner in JavaScript
let maincont = document.querySelector(".container");
let strn = document.createTextNode("Water")
let cont = document.querySelector("#btn1");

cont.onclick = function () {
    document.getElementById("intro").innerHTML = "Hello Dheeraj";
    setTimeout(maincont.appendChild(strn), 1000);
};
let cont1 = document.querySelector("#btn2");
cont1.onclick = function () {
    document.getElementById("intro").innerHTML = "Hello World";
};

// Arrow functions
let summ = (a, b) => {
    return a + b;
}
