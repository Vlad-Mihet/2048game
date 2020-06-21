var gameCells = document.getElementsByClassName('col-3');

// Function that adds after every game-pad press the '2' piece inside a random game cell if the cell is currently empty

function generateNumberInRandomCell () {
    let randomCell = Math.floor(Math.random() * 15);
    if (gameCells[randomCell].innerText != "") {
        randomCell = Math.floor(Math.random() * 15);
    }
    let span = document.createElement('span');
    span.innerText = '2';
    span.classList.add('game-piece');
    gameCells[randomCell].appendChild(span);
}

// Check every round if there is any cell still empty 

function runRandomCellGeneration () {
    let anyEmpty = false;
    for (let i = 0; i < 16; i++) {
        if (gameCells[i].innerText == "") {
            anyEmpty = true;
            break;
        }
    }
    return anyEmpty;
}