import { createSquare } from './createSquare.js';

let redSquare;
let yellowSquares = [];

function initializePods() {
    yellowSquares = [];
    const gridSize = 25;
    const squareSize = 20;
    const gridContainer = document.getElementById('gridContainer');

    const baseTop = Math.floor(Math.random() * gridSize) * squareSize;
    const baseLeft = Math.floor(Math.random() * gridSize) * squareSize;
    redSquare = createSquare('redSquare', 'baseSquare', 'red', baseTop, baseLeft, gridContainer);

    const directions = ['top', 'right', 'bottom', 'left'];

    for (let i = 0; i < 4; i++) {
        let top = baseTop;
        let left = baseLeft;

        switch (directions[i]) {
            case 'top':
                top -= squareSize;
                break;
            case 'right':
                left += squareSize;
                break;
            case 'bottom':
                top += squareSize;
                break;
            case 'left':
                left -= squareSize;
                break;
        }

        const pod = createSquare(`yellow${i + 1}`, 'yellowSquare', 'yellow', top, left, gridContainer);
        yellowSquares.push(pod);
    }
}

initializePods();

export { redSquare, yellowSquares };
