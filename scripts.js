// Select the grid container
const container = document.querySelector('.sketch-container');

function createDivs(num) {
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            const sketchDiv = document.createElement('div');
            sketchDiv.style.gridRow = `${i} / ${i + 1}`;
            sketchDiv.style.gridColumn = `${j} / ${j + 1}`;
            
            // Add colour to div when mousing over
            sketchDiv.addEventListener('mouseover', function () {
                sketchDiv.classList.add('hover-colour');
            });

            container.appendChild(sketchDiv);
        }
    }
}