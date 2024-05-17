// square.js

// Import yellowSquares and redSquare
import { yellowSquares, redSquare } from './pods.js';

export function isPositionOccupied(top, left) {
    // Check if the position is occupied by any yellow square
    for (const yellowSquare of yellowSquares) {
        const squareTop = parseInt(yellowSquare.style.top);
        const squareLeft = parseInt(yellowSquare.style.left);
        if (squareTop === top && squareLeft === left) {
            return true;
        }
    }

    // Check if the position is occupied by the red square
    const redTop = parseInt(redSquare.style.top);
    const redLeft = parseInt(redSquare.style.left);
    if (redTop === top && redLeft === left) {
        return true;
    }

    // If neither yellow nor red square occupies the position, it's not occupied
    return false;
}

function canMove(square, direction) {
    const currentTop = parseInt(square.style.top);
    const currentLeft = parseInt(square.style.left);
    const step = 20;
    let newTop = currentTop;
    let newLeft = currentLeft;

    switch (direction) {
        case 'up':
            newTop -= step;
            break;
        case 'down':
            newTop += step;
            break;
        case 'left':
            newLeft -= step;
            break;
        case 'right':
            newLeft += step;
            break;
    }

    const gridSize = 500;
    if (newTop >= 0 && newTop < gridSize && newLeft >= 0 && newLeft < gridSize) {
        // Check if the new position is occupied
        const isBlocked = isPositionOccupied(newTop, newLeft);
        if (!isBlocked) {
            // If the path is not blocked, allow movement
            return true;
        } else {
            // If the path is blocked, return false to prevent movement
            return false;
        }
    }

    return false; // Movement not allowed
}