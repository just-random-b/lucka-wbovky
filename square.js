// squares.js
const gridContainer = document.getElementById('gridContainer');
const redSquare = createSquare('redSquare', 'redSquare', 'red', 200, 200);
const yellowSquares = initializePods();

function createSquare(id, className, backgroundColor, top, left) {
    const square = document.createElement('div');
    square.id = id;
    square.classList.add(className);
    square.style.backgroundColor = backgroundColor;
    square.style.top = `${top}px`;
    square.style.left = `${left}px`;
    gridContainer.appendChild(square);
    return square;
}

function moveSquare(square, direction) {
// squares.js
function moveSquare(square, direction) {
    if (canMove(square, direction)) {
        const currentTop = parseInt(square.style.top);
        const currentLeft = parseInt(square.style.left);
        const step = 20;

        switch (direction) {
            case 'up':
                square.style.top = `${currentTop - step}px`;
                break;
            case 'down':
                square.style.top = `${currentTop + step}px`;
                break;
            case 'left':
                square.style.left = `${currentLeft - step}px`;
                break;
            case 'right':
                square.style.left = `${currentLeft + step}px`;
                break;
        }

        if (square === redSquare) {
            const adjacentSquares = [
                [currentTop - step, currentLeft],
                [currentTop + step, currentLeft],
                [currentTop, currentLeft - step],
                [currentTop, currentLeft + step]
            ];

            for (const yellowSquare of yellowSquares) {
                const squareTop = parseInt(yellowSquare.style.top);
                const squareLeft = parseInt(yellowSquare.style.left);

                for (const [adjTop, adjLeft] of adjacentSquares) {
                    if (squareTop === adjTop && squareLeft === adjLeft) {
                        moveSquare(yellowSquare, direction);
                    }
                }
            }
        }
    }
}

}
