const container = document.getElementById("container");





var mouseDown = false;
document.body.onmousedown = function(){
    mouseDown = true;
};
document.body.onmouseup = function(){
    mouseDown = false;
}


function makeRows(rows,cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(let c = 0; c < (rows * cols); c++){
        let cell = document.createElement('div');
       
        cell.addEventListener('mouseover', changeColor);
        cell.addEventListener('mousedown', changeColor);
        container.appendChild(cell).className = 
        'grid-item';
    }
}

makeRows(16,16);




function changeColor(e){
    if(mouseDown){
        let color1 = Math.floor(Math.random() * 256);
        let color2 = Math.floor(Math.random() * 256);
        let color3 = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
    }
}