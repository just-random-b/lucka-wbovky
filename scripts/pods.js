function initializePods() {
    const yellowSquares = [];
    const gridSize = 25;
    const squareSize = 20;
    const gridContainer = document.getElementById('gridContainer');

    // Generate the base square at a random position
    const baseTop = Math.floor(Math.random() * gridSize) * squareSize;
    const baseLeft = Math.floor(Math.random() * gridSize) * squareSize;
    console.log("Base top:", baseTop, "Base left:", baseLeft);
    const base = createSquare('redSquare', 'baseSquare', 'red', baseTop, baseLeft, gridContainer);

    // Directions for attaching pods to the base
    const directions = ['top', 'right', 'bottom', 'left'];

    // Generate four pods attached to the base
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

        console.log("Pod", i + 1, "top:", top, "left:", left); // Add logging here
        const pod = createSquare(`yellow${i + 1}`, 'yellowSquare', 'yellow', top, left, gridContainer);
        yellowSquares.push(pod);
    }

    return { base, yellowSquares };
}

export { initializePods, base };

