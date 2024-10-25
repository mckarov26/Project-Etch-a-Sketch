const container = document.getElementById("container");
const gridSize = document.getElementById("gridSize");
const blackGrid = document.getElementById("blackGrid");










const createGrid = (size) => {

    container.innerHTML = "";
    
    for (let i = 0; i < size * size; i++) {
           
        const divCell = document.createElement("div");
        divCell.classList.add("cell");
        container.appendChild(divCell);



        divCell.addEventListener("mouseover", () => {
            divCell.style.backgroundColor = "black";
            
        })

        divCell.addEventListener("mouseleave", () => {
            divCell.style.backgroundColor = "lightgrey"
            divCell.style.transition ="background-color 3s"
        })

        }
       
    
}   

gridSize.addEventListener("click", () => {
    let squaresPerSide = prompt("Choose 1-100 for the number of squares per side for the new grid:");
    squaresPerSide = parseInt(squaresPerSide);
    document.documentElement.style.setProperty("--size", squaresPerSide)

    if (!isNaN(squaresPerSide) && squaresPerSide >= 1 && squaresPerSide <= 100) {
        createGrid(squaresPerSide);
    } else {
        alert("Please enter a valid NUMBER between 1 and 100");

    }
})










