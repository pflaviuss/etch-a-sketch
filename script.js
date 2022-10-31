
document.addEventListener("DOMContentLoaded", function () {
    createBoard(32);
    console.log('hi')
})

function createBoard(size){
    let container = document.getElementById("container");
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numbDivs = size * size;

    for( let i = 0; i < numbDivs; i ++){
        let div = document.createElement("div");
        div.style.backgroundColor= 'yellow';
        container.insertAdjacentElement("beforeend", div)
    }
}