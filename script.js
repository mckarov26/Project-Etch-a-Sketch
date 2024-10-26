const container = document.getElementById("container"); 
const gridSize = document.getElementById("gridSize");
const gridColor = document.getElementById("gridColor");
const gridBlack = document.getElementById("gridBlack");
const gridReset = document.getElementById("gridReset");
const size = document.getElementById("size");

// This function will return random color
const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256); // random value from 0-255 for red;
    const g = Math.floor(Math.random() * 256); // random value from 0-255 for green;
    const b = Math.floor(Math.random() * 256); // random value from 0-255 for blue;
    return  `rgb(${r}, ${g}, ${b})`; // return rgb color as a string;
}



// This function will return black color
const getBlackColor = () => {

    return "rgb(0, 0, 0)";
}


// this function will return as a description on webpage of what size it is.

const sizeDescription = (squaresPerSide) => {
    size.textContent = `${squaresPerSide} x ${squaresPerSide} Grid `;
}





// This function is for creating the size and will show inside the container. 
const createGrid = (size) => {

    container.innerHTML = "";

    
    
    for (let i = 0; i < size * size; i++) {
           
        const divCell = document.createElement("div");
        divCell.classList.add("cell");
        container.appendChild(divCell);

       
        }
       
    
}   
// This is for asking user how many number of squares per side for the new grid from 1-100
gridSize.addEventListener("click", () => {
    let squaresPerSide = prompt("Choose 1-100 for the number of squares per side for the new grid:");
    squaresPerSide = parseInt(squaresPerSide);

    document.documentElement.style.setProperty("--size", squaresPerSide)

    if (!isNaN(squaresPerSide) && squaresPerSide >= 1 && squaresPerSide <= 100) {
        createGrid(squaresPerSide);
        sizeDescription(squaresPerSide);
    } else {
        alert("Please enter a valid NUMBER between 1 and 100");

    }
})

// This is to add colors on grid when hover
gridColor.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell")

    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = getRandomColor();
        })
    })      
       
   

})

// This is to add black color on grid when hover
gridBlack.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");

    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = getBlackColor();
        } )
    })
})


//This is to reset the color to it default color

gridReset.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.backgroundColor = "lightgrey";
    })
})










