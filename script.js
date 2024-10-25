const container = document.getElementById("container");



//const size = prompt("Choose 1-50"); // number of squares per row or column.
const size = 16;


document.documentElement.style.setProperty("--size", size)
const createGrid = (size) => {
    
    for (let i = 0; i < size * size; i++) {
           
        const divCell = document.createElement("div");
        divCell.classList.add("cell");
        container.appendChild(divCell);



        divCell.addEventListener("mouseover", () => {
            divCell.style.backgroundColor = "red";
            
        })

        divCell.addEventListener("mouseleave", () => {
            divCell.style.backgroundColor = "lightgrey"
            divCell.style.transition ="background-color 3s"
        })

        }
       
    
}   

document.getElementById("gridSize")


createGrid(size);   