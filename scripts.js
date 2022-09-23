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
                incrementOpacity(sketchDiv);
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

function incrementOpacity(div) {
    const currentColour = div.style.background;
    switch (currentColour) {
        case ('rgba(0, 0, 0, 0.1)'):
            div.style.background = 'rgba(0, 0, 0, 0.2)';
            break;
        case ('rgba(0, 0, 0, 0.2)'):
            div.style.background = 'rgba(0, 0, 0, 0.3)';
            break;
        case ('rgba(0, 0, 0, 0.3)'):
            div.style.background = 'rgba(0, 0, 0, 0.4)';
            break;
        case ('rgba(0, 0, 0, 0.4)'):
            div.style.background = 'rgba(0, 0, 0, 0.5)';
            break;
        case ('rgba(0, 0, 0, 0.5)'):                     
            div.style.background = 'rgba(0, 0, 0, 0.6)';
            break;
        case ('rgba(0, 0, 0, 0.6)'):
            div.style.background = 'rgba(0, 0, 0, 0.7)';
            break;
        case ('rgba(0, 0, 0, 0.7)'):
            div.style.background = 'rgba(0, 0, 0, 0.8)';
            break;
        case ('rgba(0, 0, 0, 0.8)'):
            div.style.background = 'rgba(0, 0, 0, 0.9)';
            break;
        case ('rgba(0, 0, 0, 0.9)'):
        case ('rgb(0, 0, 0)'):
            div.style.background = 'rgba(0, 0, 0, 1)';
            break;
        default:
            div.style.background = 'rgba(0, 0, 0, 0.1)';
            break;
    }
}