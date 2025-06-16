//comment
export function createSquare(id, className, backgroundColor, top, left, gridContainer) {
    const square = document.createElement('div');
    square.id = id;
    square.classList.add(className);
    square.style.backgroundColor = backgroundColor;
    square.style.top = `${top}px`;
    square.style.left = `${left}px`;
    square.style.width = '20px'; // Ensure the width and height are explicitly set
    square.style.height = '20px'; // Ensure the width and height are explicitly set
    square.style.position = 'absolute'; // Ensure the position is absolute
    gridContainer.appendChild(square);
    return square;
}
