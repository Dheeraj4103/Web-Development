// Single Responsibility principle

// let's say we have to calculate area of a square


const square = (function () {
    const side = 10;
    const area = () => { return side * side };
    return area
})();

// we created a different function outside the square closure 
// so that we don't need to change square unneccessarly for output
const logMessage = (message) => {
    console.log(message);
};
logMessage(square())
// output will be:- 100