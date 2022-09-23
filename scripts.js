// Create variables for DOM elements
const container = document.querySelector('.sketch-container');
const btnSize = document.querySelector('.size-selector');

// Creates a num by num square of divs inside the container
function createDivs(num) {
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            const sketchDiv = document.createElement('div');
            sketchDiv.style.gridRow = `${i} / ${i + 1}`;
            sketchDiv.style.gridColumn = `${j} / ${j + 1}`;
            
            // Add colour to div when mousing over
            sketchDiv.addEventListener('mouseover', function () {
                sketchDiv.style.background = `${randomRGB()}`;
            });

            container.appendChild(sketchDiv);
        }
    }
}

// Removes all divs in the container
function removeDivs() {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
}

// Prompts for size of container when button is clicked
btnSize.addEventListener('click', function() {
    let gridSize = prompt('Enter grid size (maximum of 100): ');
    if (+gridSize < 1 || +gridSize > 100 || isNaN(+gridSize)) {
        alert('Invalid selection!');
        return;
    }
    
    removeDivs();
    createDivs(gridSize);
});

function randomRGB() {
    return `rgb(${Math.floor(Math.random() * 255)}, 
        ${Math.floor(Math.random() * 255)}, 
        ${Math.floor(Math.random() * 255)})`;
}