// JavaScript code for selecting and moving yellow squares

// Function to select the yellow square based on dropdown menu selection
function selectSquare() {
    var selectedSquare = document.getElementById("squareSelector").value;
    var square = document.getElementById(selectedSquare);

    // Remove yellow color from all squares
    var squares = document.getElementsByClassName("square");
    for (var i = 0; i < squares.length; i++) {
        squares[i].classList.remove("yellow-square");
    }

    // Add yellow color to the selected square
    square.classList.add("yellow-square");
}

// Function to move the selected yellow square
function moveSquare(direction) {
    var selectedSquare = document.getElementById("squareSelector").value;
    var currentPosition = selectedSquare.split("square")[1].split("-");
    var currentRow = parseInt(currentPosition[0]);
    var currentColumn = parseInt(currentPosition[1]);

    var newRow, newColumn;
    switch (direction) {
        case "up":
            newRow = currentRow - 1;
            newColumn = currentColumn;
            break;
        case "down":
            newRow = currentRow + 1;
            newColumn = currentColumn;
            break;
        case "left":
            newRow = currentRow;
            newColumn = currentColumn - 1;
            break;
        case "right":
            newRow = currentRow;
            newColumn = currentColumn + 1;
            break;
        default:
            return; // Exit function for invalid direction
    }

    if (newRow >= 1 && newRow <= 25 && newColumn >= 1 && newColumn <= 25) {
        var newSquareId = "square" + newRow + "-" + newColumn;
        var newSquare = document.getElementById(newSquareId);
        newSquare.classList.add("yellow-square");
        document.getElementById("squareSelector").value = newSquareId;
    }
}
