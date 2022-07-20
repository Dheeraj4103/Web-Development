var arr = [1, 2, 3, 4];

function addone(x) {
    return x + 1;
}

// for (var i = 0; i < arr.length; i++){
//     arr[i] = addone(arr[i]);
// }

arr = arr.map(addone);
console.log(arr)

var even = arr.filter((x) => {
    console.log(this);
    if (x % 2 === 0) {
        return x;
    }

});

console.log(even)


