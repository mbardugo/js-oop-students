'use strict';


const container = document.getElementById('chessboard-container');

var x = 0,
    chessString = "";

do {
    if (x == 0 || x == 9) {
        chessString += createLetterString();

    } else {
        chessString += createBoardRowString(x);
    }

    x++;
} while (x < 10);


function createLetterString() {
    var lettersRow = '<div class="letters-container">',
        x = 0,
        letter;

    while (x < 10) {

        if (x === 0 || x === 9) {
            lettersRow += '<div class="index"></div>';
        } else {
            letter = String.fromCharCode(64 + x);
            lettersRow += '<div class="square">' + letter + '</div>';
        }


        x++;
    }
    lettersRow += '</div>';
    return lettersRow;
}

function createBoardRowString(i) {
    var x = 0,
        boardRow = '<div class= "board-row">',
        squareClass;

        boardRow += '<div class = "index">' + i + '</div>';
   
        while (x < 8) {
        if(i % 2 === 0){
            squareClass = ( x % 2 > 0) ? ' square-wheat' : 'square-black';
        }else{
            squareClass = (x % 2 === 0)? 'square-wheat' : 'square-black';
        }          
            boardRow += '<div class = "square ' + squareClass + '"></div>';
        x++;
    }

    boardRow += '<div class = "index">' + i + '</div>';
    boardRow += '</div>';

    return boardRow;
}

container.innerHTML = chessString;