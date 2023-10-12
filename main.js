const container = document.querySelector('.container');

function createGrid(size) {
    for (i = 0; i < (size * size); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item";
    }
}

createGrid (16);