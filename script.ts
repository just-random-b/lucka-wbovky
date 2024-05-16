document.addEventListener("DOMContentLoaded", function() {
    // Get red square element
    const redSquare = document.getElementById('redSquare') as HTMLElement;
    const gridContainer = document.getElementById('gridContainer') as HTMLElement;

    // Get yellow squares
    const yellowSquares = document.querySelectorAll('.yellowSquare');

    // Function to check if the target position is occupied
    function isPositionOccupied(targetTop: number, targetLeft: number, currentSquare: HTMLElement) {
        // Loop through yellow squares
        for (let i = 0; i < yellowSquares.length; i++) {
            // Skip checking against the current square
            if (yellowSquares[i] !== currentSquare) {
                const squarePosition = yellowSquares[i].getBoundingClientRect();
                const top = squarePosition.top;
                const left = squarePosition.left;
                const right = left + squarePosition.width;
                const bottom = top + squarePosition.height;

                // Check if the target position overlaps with any other square
                if (targetTop < bottom && targetBottom > top && targetLeft < right && targetRight > left) {
                    return true; // Position is occupied
                }
            }
        }

        // Check against red square
        const redSquarePosition = redSquare.getBoundingClientRect();
        const redTop = redSquarePosition.top;
        const redLeft = redSquarePosition.left;
        const redRight = redLeft + redSquarePosition.width;
        const redBottom = redTop + redSquarePosition.height;

        // Check if the target position overlaps with the red square
        if (targetTop < redBottom && targetBottom > redTop && targetLeft < redRight && targetRight > redLeft) {
            return true; // Position is occupied
        }

        return false; // Position is not occupied
    }

    // Function to move the square based on selected option
    function moveSquare(square: HTMLElement, direction: string) {
        const currentPosition = window.getComputedStyle(square);
        let top = parseInt(currentPosition.top);
        let left = parseInt(currentPosition.left);
        const squareSize = 20; // Size of one grid cell

        switch (direction) {
            case 'up':
                if (top > 0 && !isPositionOccupied(top - squareSize, left, square)) {
                    top -= squareSize; // Move up by one grid cell
                }
                break;
            case 'down':
                if (top < gridContainer.clientHeight - squareSize && !isPositionOccupied(top + squareSize, left, square)) {
                    top += squareSize; // Move down by one grid cell
                }
                break;
            case 'left':
                if (left > 0 && !isPositionOccupied(top, left - squareSize, square)) {
                    left -= squareSize; // Move left by one grid cell
                }
                break;
            case 'right':
                if (left < gridContainer.clientWidth - squareSize && !isPositionOccupied(top, left + squareSize, square)) {
                    left += squareSize; // Move right by one grid cell
                }
                break;
        }

        square.style.top = top + 'px';
        square.style.left = left + 'px';
    }

    // Event listeners for arrow button clicks
    document.querySelectorAll('.arrow-button').forEach(function(button) {
        button.addEventListener('click', function() {
            const direction = this.getAttribute('data-direction') as string;
            const selectedOption = (document.getElementById('dropdown') as HTMLSelectElement).value;
            let square: HTMLElement;

            if (selectedOption === 'red') {
                square = redSquare;
            } else {
                const index = parseInt(selectedOption.slice(-1)) - 1;
                square = document.querySelectorAll('.yellowSquare')[index] as HTMLElement;
            }

            moveSquare(square, direction);
        });
    });

    // Event listener for arrow key presses
    document.addEventListener('keydown', function(event) {
        let direction: string | undefined;

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
                return; // Exit this function for other keys
        }

        if (direction) {
            const selectedOption = (document.getElementById('dropdown') as HTMLSelectElement).value;
            let square: HTMLElement;

            if (selectedOption === 'red') {
                square = redSquare;
            } else {
                const index = parseInt(selectedOption.slice(-1)) - 1;
                square = document.querySelectorAll('.yellowSquare')[index] as HTMLElement;
            }

            moveSquare(square, direction);
        }
    });
});
