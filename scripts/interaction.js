// interaction.js

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
        case 'ArrowUp': direction = 'up'; break;
        case 'ArrowDown': direction = 'down'; break;
        case 'ArrowLeft': direction = 'left'; break;
        case 'ArrowRight': direction = 'right'; break;
        default: return;
    }

    if (direction) {
        moveSquare(selectedSquare, direction);
    }
});
