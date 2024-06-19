// global variable declarations
var score = 0, pacLoc = 0, fruitLoc = 0, ghostLoc = -1;
var board = [];
var player = "😀", ghost = "👻";
var ateGhost = true, gameEnded = false;

// function for creating and initializing game board
function createGame(n) {
    board = new Array(n);
    board.fill("◦");

    // initialize Pacman in middle
    pacLoc = Math.floor(n / 2);
    board[pacLoc] = player;

    // randomize fruit on board
    fruitLoc = fruitSpawnLocation(n, pacLoc);
    board[fruitLoc] = "🍒";

    // set HTML for board
    document.getElementById("board").innerHTML = board.join(" ");
    document.getElementById("score").innerHTML = score;
}

// returns a random available index for spawning fruit
function fruitSpawnLocation(length, pacLoc) {
    var num = Math.floor(Math.random() * length);
    return (num === pacLoc) ? num + 1 : num;
}

// moves pacman in a direction via left/right keys
function movePac(direction) {
    // set last position to empty
    board[pacLoc] = "&nbsp;";

    // handle left/right presses
    if (direction == 'right') {
        pacLoc = (pacLoc + 1) % (board.length);
        checkLocation(pacLoc);
    } else if (direction == 'left') {
        pacLoc = (pacLoc - 1);
        pacLoc = pacLoc < 0 ? board.length - 1 : pacLoc;
        checkLocation(pacLoc);
    }

    // check for pellets, fill board if none exist
    if (!board.includes("◦")) {
        board = board.toString().replaceAll("&nbsp;", "◦").split(",");
        fruitLoc = fruitSpawnLocation(board.length, pacLoc);
        board[fruitLoc] = "🍒";
        document.getElementById("board").innerHTML = board.join(" ");
    }
}

// checks the location that pacman has moved to and changes variables accordingly
function checkLocation(loc) {
    if (board[loc] != " ") {
        if (board[loc] == "◦") {
            // increment score for pellets
            score += 1;
            document.getElementById("score").innerHTML = score;
        }
        else if (board[loc] == "🍒") {
            // turn ghost to scared if fruit is eaten
            ghost = "😱"
            board[ghostLoc] = ghost;
            document.getElementById("board").innerHTML = board.join(" ");
        }
        else if (board[loc] == "😱") {
            // increment score by 5 if ghost is eaten, respawn ghost after 2 seconds
            document.getElementById("board").innerHTML = board.join(" ");
            score += 5;
            document.getElementById("score").innerHTML = score;
            ateGhost = true;
            setTimeout(spawnGhost, 2000);
        }
        else if (board[loc] == "👻") {
            // end game if ghost is hit
            endGame();
        }
    }

    // update player location
    board[pacLoc] = player;
    document.getElementById("board").innerHTML = board.join(" ");
}

// spawn ghost on opposite side of Pacman
function spawnGhost() {
    if (ateGhost) {
        ghost = "👻";
        ateGhost = false;
        if (pacLoc > board.length / 2) {
            ghostLoc = 0;
        } else {
            ghostLoc = board.length - 1;
        }

        board[ghostLoc] = ghost;
        document.getElementById("board").innerHTML = board.join(" ");

        setTimeout(moveGhost, 1000);
    }
}

// move ghost towards Pacman if normal, move away from Pacman if scared
function moveGhost() {

    if (gameEnded) return;

    if (ghost == "👻" && !ateGhost) {
        if (pacLoc < ghostLoc) {
            board[ghostLoc] = "◦";
            ghostLoc -= 1;
        } else if (pacLoc > ghostLoc) {
            board[ghostLoc] = "◦";
            ghostLoc += 1;
        }
    } else if (ghost == "😱") {
        if (pacLoc < ghostLoc) {
            board[ghostLoc] = "◦";
            ghostLoc = ghostLoc < board.length - 1 ? (ghostLoc + 1) : ghostLoc;
        } else if (pacLoc > ghostLoc) {
            board[ghostLoc] = "◦";
            ghostLoc = ghostLoc == 0 ? ghostLoc : ghostLoc - 1;
        }
    }
    board[ghostLoc] = ghost;
    document.getElementById("board").innerHTML = board.join(" ");

    if (ghostLoc == pacLoc) {
        if (ghost == "👻") {
            checkLocation(pacLoc);
        } else if (ghost == "😱") {
            document.getElementById("board").innerHTML = board.join(" ");
            score += 5;
            document.getElementById("score").innerHTML = score;
            ateGhost = true;
            setTimeout(spawnGhost, 2000);
        }
        return;
    }

    // move ghost every 1 second
    setTimeout(() => {
        if (!gameEnded && !ateGhost) {
            moveGhost();
        }
    }, 1000);
}

// ends game by setting flag, changing player icon, updating HTML
function endGame() {
    gameEnded = true;
    player = "💀";
    board[pacLoc] = player;
    document.getElementById("board").innerHTML = board.join(" ");
    document.getElementById("score").innerHTML = "Game Over - Final Score: " + score;
    return;
}

// detect key presses
document.onkeyup = function (e) {
    if (!gameEnded && player != "💀") {
        switch (e.key) {
            case "ArrowLeft":
                movePac('left');
                break;
            case "ArrowRight":
                movePac('right');
                break;
        }
    }
};

// create board and spawn ghost after 2 seconds
createGame(10);
setTimeout(spawnGhost, 2000);