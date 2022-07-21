
let Board = new Array(3);
for (var i = 0; i < 3; i++){
    Board[i] = new Array(3);
    for (var j = 0; j < 3; j++){
        Board[i][j] = -1;
    }
};




var elementBoard = function (Board) {
    for (var i = 0; i < 3; i++) {
        console.log(Board[i][0], Board[i][1], Board[i][2]);
        //console.log();
    }
};
var gameBoard = (() => {
    const setValue = (value, i, j) => {
        Board[i][j] = value;
    };

});
//twoindex(1, 2);
//elementBoard(Board);


let lastvalue = 0;

var twoindex = function (i, j) {
    if (Board[i][j] === -1) {
        lastvalue = lastvalue ^ 1;
        Board[i][j] = lastvalue;
        elementBoard(Board);
        return true;
    }
    else {
        console.log("This block in not empty !!");
        return false;
    }
};

//twoindex(1, 2);

const prompt = require('prompt');
let gettwoidx = (err, result) => {
    if (err) { return onErr(err); }
    var i = result.i.charAt(0) - '0';
    var j = result.j.charAt(0) - '0';
    twoindex(i, j);
};
//prompt.start();
prompt.get(['i', 'j'], gettwoidx);

//prompt.start();
prompt.get(['i', 'j'], gettwoidx);

const onErr = (err) => {
    console.log(err);
    return 1;
}


