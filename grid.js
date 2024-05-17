// grid.js
function initializeGrid() {
    const gridContainer = document.getElementById('gridContainer');
    const gridSize = 25;
    const squareSize = 20;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.top = `${i * squareSize}px`;
            square.style.left = `${j * squareSize}px`;
            gridContainer.appendChild(square);
        }
    }
}

initializeGrid();
