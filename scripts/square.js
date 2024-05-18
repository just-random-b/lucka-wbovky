import { redSquare, yellowSquares } from './pods.js';

export function moveSquare(square, direction) {
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

function getBlockingSquare(top, left) {
    for (const yellowSquare of yellowSquares) {
        const squareTop = parseInt(yellowSquare.style.top);
        const squareLeft = parseInt(yellowSquare.style.left);
        if (squareTop === top && squareLeft === left) {
            return yellowSquare;
        }
    }
    return null;
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
        const isBlocked = isPositionOccupied(newTop, newLeft);
        if (isBlocked) {
            const blockingSquare = getBlockingSquare(newTop, newLeft);
            if (blockingSquare) {
                moveSquare(blockingSquare, direction);
                return true;
            }
        } else {
            return true;
        }
    }

    return false;
}

export function isPositionOccupied(top, left) {
    for (const yellowSquare of yellowSquares) {
        const squareTop = parseInt(yellowSquare.style.top);
        const squareLeft = parseInt(yellowSquare.style.left);
        if (squareTop === top && squareLeft === left) {
            return true;
        }
    }

    const redTop = parseInt(redSquare.style.top);
    const redLeft = parseInt(redSquare.style.left);
    if (redTop === top && redLeft === left) {
        return true;
    }

    return false;
}
