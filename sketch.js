function buildGrid(size) {
    let container = document.querySelector(".box");
    let containerDiv = [];
    let pixelDiv = [];
    let counter = 0;
    let calculatedDim = (640 / size).toString() + "px"
    for (let i = 0; i < size; i++) {
        containerDiv.push(document.createElement("div"));
        containerDiv[i].classList.add("container");
        containerDiv[i].id = `container_${i}`;
        container.append(containerDiv[i]);
        for (let j = 0; j < size; j++) {
            pixelDiv.push(document.createElement("div"));
            pixelDiv[counter].classList.add("pixel");
            pixelDiv[counter].style.width = calculatedDim;
            pixelDiv[counter].style.height = calculatedDim;
            document.querySelector(`#container_${i}`).append(pixelDiv[counter]);
            counter++
        }
    }
    let pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseout", () => {
        pixel.classList.add("active");
    });
});

};
buildGrid(16);
document.getElementById("button").addEventListener("click", () => {
    let gridSize = prompt("Enter a new grid size.")
    gridSize = parseInt(gridSize);
    if (gridSize % 1 != 0) {
        alert("Invalid! Must be whole number!");
    }
    else {
        document.querySelector(".box").innerHTML = "";
        buildGrid(gridSize);
    }
});
