let container = document.querySelector("body");
let containerDiv = [];
let pixelDiv = [];
let counter = 0;
for (let i = 0; i < 16; i++) {
    containerDiv.push(document.createElement("div"));
    containerDiv[i].classList.add("container");
    containerDiv[i].id = `container_${i}`;
    container.append(containerDiv[i]);
    for (let j = 0; j < 16; j++) {
        pixelDiv.push(document.createElement("div"));
        pixelDiv[counter].classList.add("pixel");
        document.querySelector(`#container_${i}`).append(pixelDiv[counter]);
        counter++
    }
}