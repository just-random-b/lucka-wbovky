import { moveSquare } from './square.js';
import { redSquare, yellowSquares } from './pods.js';

document.addEventListener('DOMContentLoaded', () => {
    const arrowButtons = document.querySelectorAll('.arrow-button');

    arrowButtons.forEach(button => {
        button.addEventListener('click', () => {
            const direction = button.dataset.direction;
            moveSquare(redSquare, direction);
        });
    });
});
