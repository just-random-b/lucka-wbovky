// pods.js
function initializePods() {
    const yellowSquares = [];
    const baseTop = parseInt(redSquare.style.top);
    const baseLeft = parseInt(redSquare.style.left);
    const gridSize = 25;
    const squareSize = 20;

    // Directions for attaching pods to the base
    const directions = ['top', 'right', 'bottom'];

    // Generate three pods attached to the base
    for (let i = 0; i < 3; i++) {
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
        }

        const pod = createSquare(`yellow${i + 1}`, 'yellowSquare', 'yellow', top, left);
        yellowSquares.push(pod);
    }

    // Generate one pod at a random position not attached to the base
    let podNotAttached = true;
    while (podNotAttached) {
        const top = Math.floor(Math.random() * gridSize) * squareSize;
        const left = Math.floor(Math.random() * gridSize) * squareSize;

        if (!yellowSquares.some(square => parseInt(square.style.top) === top && parseInt(square.style.left) === left) &&
            (top !== baseTop || left !== baseLeft)) {
            const pod = createSquare('yellow4', 'yellowSquare', 'yellow', top, left);
            yellowSquares.push(pod);
            podNotAttached = false;
        }
    }

    return yellowSquares;
}



function getBlockingSquare(top, left) {
    function getBlockingSquare(top, left) {
        for (const yellowSquare of yellowSquares) {
            const squareTop = parseInt(yellowSquare.style.top);
            const squareLeft = parseInt(yellowSquare.style.left);
            if (squareTop === top && squareLeft === left) {
                return yellowSquare;
            }
        }
        return null; // No blocking square found
    }
}

function canMove(square, direction) {
// pods.js
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
        const isBlocked = isPositionOccupied(newTop, newLeft, square);
        if (isBlocked) {
            // If the path is blocked, attempt to move the blocking square
            const blockingSquare = getBlockingSquare(newTop, newLeft);
            if (blockingSquare) {
                moveSquare(blockingSquare, direction);
                return true; // Allow movement after attempting to move the blocking square
            }
        } else {
            return true; // Path is clear, allow movement
        }
    }

    return false; // Movement not allowed
}

}

