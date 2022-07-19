var object = {
    property: "value",
    otherProperties: 77,
    "anonymous": "Don't know"
};

console.log(object.property);

var val = 'property';
console.log(object.val);

console.log(object[val]);

console.log(object.anonymous);

console.log(object["anonymous"]);