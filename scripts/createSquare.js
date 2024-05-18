export function createSquare(id, className, backgroundColor, top, left, gridContainer) {
    const square = document.createElement('div');
    square.id = id;
    square.classList.add(className);
    square.style.backgroundColor = backgroundColor;
    square.style.top = `${top}px`;
    square.style.left = `${left}px`;
    gridContainer.appendChild(square);
    return square;
}
