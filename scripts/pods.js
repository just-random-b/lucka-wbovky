// pods.js
import { createSquare } from './createSquare.js'; // Import the createSquare function

function initializePods() {
    const yellowSquares = [];
    const gridSize = 25;
    const squareSize = 20;
    const gridContainer = document.getElementById('gridContainer');

    // Calculate center position of the grid
    const centerTop = Math.floor(gridSize / 2) * squareSize;
    const centerLeft = Math.floor(gridSize / 2) * squareSize;

    // Generate the base square at the center position
    const base = createSquare('redSquare', 'baseSquare', 'red', centerTop, centerLeft, gridContainer);

    // Generate four pods attached to the base in different directions
    const directions = ['top', 'right', 'bottom', 'left'];
    for (let i = 0; i < 4; i++) {
        let top = centerTop;
        let left = centerLeft;

        // Calculate positions based on direction
        switch (directions[i]) {
            case 'top':
                top -= squareSize * 2;
                break;
            case 'right':
                left += squareSize * 2;
                break;
            case 'bottom':
                top += squareSize * 2;
                break;
            case 'left':
                left -= squareSize * 2;
                break;
        }

        // Create and append pod square
        const pod = createSquare(`yellow${i + 1}`, 'yellowSquare', 'yellow', top, left, gridContainer);
        yellowSquares.push(pod);
    }

    return { base, yellowSquares };
}

export { initializePods };


export { initializePods }; // Export the initializePods function
