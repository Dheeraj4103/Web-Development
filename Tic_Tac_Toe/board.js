let lastvalue = 0;
let isformsubmit = false;
let gameover = false;
const playbutton = document.getElementById('play-with-friend');
function Player( symbol) {
    let name = "Player1";
    this.symbol = symbol;
    let status = false;
    
    return { name, symbol, status };
}

let game_ui = (() => {
    const declare = document.getElementById('show-info');
    let div1 = document.getElementById('player1');
    let div2 = document.getElementById('player2');

    let showPlayer = (player, div) => {
        const showname = document.createElement('h3');
        showname.innerHTML = player.name;
        const showsymbol = document.createElement('h1');
        showsymbol.innerHTML = (player.symbol === 0 ? 'O' : 'X');
        div.append(showname);
        div.append(showsymbol);
    };
    let showinfo = (info) => {
        
        declare.innerHTML = info;
        game_ui.div1.style.display = 'none';
        game_ui.div2.style.display = 'none';
        declare.style.display = block;
        gameover = true;
    }
    
    return { showinfo, showPlayer, declare, div1, div2 };
})();
const form = document.getElementById('form');
const player1 = Player(0);
const player2 = Player(1);



playbutton.onclick = () => {
    form.style.display = "block";
    playbutton.style.display = 'none';
};
const formsubmit = document.getElementById('submit');
formsubmit.onclick = () => {
    player1.name = form.elements[0].value;
    player2.name = form.elements[1].value;
    form.style.display = 'none';
    
    game_ui.showPlayer(player1, game_ui.div1);
    game_ui.div1.style.display = 'block';
    game_ui.showPlayer(player2, game_ui.div2);
    game_ui.div2.style.display = 'block';
    isformsubmit = true;
}
//console.log(player1, player2);

const reset = document.getElementById('reset');
reset.onclick = () => {
    location.reload();
}

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
    var setValue = function (i, j, blockid) {
        if (Board[i][j] === -1) {
            Board[i][j] = lastvalue;
            blockid.innerHTML = (lastvalue === 0 ? '0' : 'X');
            elementBoard(Board);
            let player = (lastvalue === 0 ? player1 : player2);
            checkwin(lastvalue, player);
            lastvalue = lastvalue ^ 1;
            return true;
        }
        else {
            game_ui.showinfo("This block in not empty !!");
            return false;
        }
    };
    var checkwin = (value, player) => {
        const symbol = player.symbol;
        let isempty = false;
        for (var row = 0; row < 3; row++) {
            let cntrow = 0, cntcol = 0;
            for (var col = 0; col < 3; col++) {
                if (Board[row][col] === symbol) {
                    cntrow++;
                }
                if (Board[col][row] === symbol) {
                    cntcol++;
                }
                if (Board[row][col] === -1 || Board[col][row] === -1) {
                    isempty = true;
                }
            }
            if (cntrow === 3 || cntcol === 3) {
                player.status = true;
                game_ui.showinfo(`${player.name} won !!!`);
            }
        }
        let cntdiagonal = 0;
        cntdiagonal += (Board[0][0] === symbol ? 1 : 0);
        cntdiagonal += (Board[1][1] === symbol ? 1 : 0);
        cntdiagonal += (Board[2][2] === symbol ? 1 : 0);
        if (cntdiagonal === 3) {
            game_ui.showinfo(`${player.name} won !!!`);
        }
        cntdiagonal = 0;
        cntdiagonal += (Board[0][2] === symbol ? 1 : 0);
        cntdiagonal += (Board[1][1] === symbol ? 1 : 0);
        cntdiagonal += (Board[2][0] === symbol ? 1 : 0);
        if (cntdiagonal === 3) {
            game_ui.showinfo(`${player.name} won !!!`);
        }
        if (!isempty) {
            game_ui.showinfo("Match Tied !!!!");
        }
    };
    
    return { setValue };
})();




var block = document.getElementsByClassName('block');


function clickdiv(blockid) {
    if (isformsubmit && !gameover) {
        let id = blockid.id;
        let i = id.charAt(2) - '0';
        let j = id.charAt(3) - '0';
        gameBoard.setValue(i, j, blockid);
    }
    else if (!isformsubmit) {
        playbutton.style.display = 'none';
        game_ui.showinfo("First Enter Player Names.");
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
}

block[0].onclick = () => { clickdiv(block[0]) };
block[1].onclick = () => { clickdiv(block[1]) };
block[2].onclick = () => { clickdiv(block[2]) };
block[3].onclick = () => { clickdiv(block[3]) };
block[4].onclick = () => { clickdiv(block[4]) };
block[5].onclick = () => { clickdiv(block[5]) };
block[6].onclick = () => { clickdiv(block[6]) };
block[7].onclick = () => { clickdiv(block[7]) };
block[8].onclick = () => { clickdiv(block[8]) };










