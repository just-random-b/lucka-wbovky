document.addEventListener("DOMContentLoaded", function () {
    const redSquare = document.getElementById('redSquare');
    const yellowSquares = document.querySelectorAll('.yellowSquare');
    const gridContainer = document.getElementById('gridContainer');

    let selectedSquare = redSquare;

    // Center the red square and yellow squares in the middle of the grid
    function initializeSquares() {
        const gridSize = 25;
        const centerPosition = Math.floor(gridSize / 2) * 20;

        redSquare.style.top = `${centerPosition}px`;
        redSquare.style.left = `${centerPosition}px`;

        yellowSquares[0].style.top = `${centerPosition - 20}px`;
        yellowSquares[0].style.left = `${centerPosition}px`;

        yellowSquares[1].style.top = `${centerPosition}px`;
        yellowSquares[1].style.left = `${centerPosition + 20}px`;

        yellowSquares[2].style.top = `${centerPosition + 20}px`;
        yellowSquares[2].style.left = `${centerPosition}px`;

        yellowSquares[3].style.top = `${centerPosition}px`;
        yellowSquares[3].style.left = `${centerPosition - 20}px`;
    }

    initializeSquares();

    function isPositionOccupied(top, left, except) {
        for (let i = 0; i < yellowSquares.length; i++) {
            if (yellowSquares[i] !== except) {
                const squareTop = parseInt(yellowSquares[i].style.top);
                const squareLeft = parseInt(yellowSquares[i].style.left);
                if (squareTop === top && squareLeft === left) {
                    return true;
                }
            }
        }

        if (except !== redSquare) {
            const redTop = parseInt(redSquare.style.top);
            const redLeft = parseInt(redSquare.style.left);
            if (redTop === top && redLeft === left) {
                return true;
            }
        }

        return false;
    }

    function moveSquare(square, direction) {
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
        if (newTop >= 0 && newTop < gridSize && newLeft >= 0 && newLeft < gridSize &&
            !isPositionOccupied(newTop, newLeft, square)) {
            square.style.top = `${newTop}px`;
            square.style.left = `${newLeft}px`;
        }
    }

    document.querySelectorAll('.arrow-button').forEach(button => {
        button.addEventListener('click', function () {
            const direction = this.getAttribute('data-direction');
            moveSquare(selectedSquare, direction);
        });
    });

    document.getElementById('dropdown').addEventListener('change', function () {
        const value = this.value;
        if (value === 'red') {
            selectedSquare = redSquare;
        } else {
            const index = parseInt(value.replace('yellow', '')) - 1;
            selectedSquare = yellowSquares[index];
        }
    });

    document.addEventListener('keydown', function (event) {
        let direction;

        switch (event.key) {
            case 'ArrowUp':
                direction = 'up';
                break;
            case 'ArrowDown':
                direction = 'down';
                break;
            case 'ArrowLeft':
                direction = 'left';
                break;
            case 'ArrowRight':
                direction = 'right';
                break;
            default:
                return;
        }

        if (direction) {
            moveSquare(selectedSquare, direction);
        }
    });
});
