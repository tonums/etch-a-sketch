const container = document.querySelector('.container');
container.style.display = "grid";
const button = document.createElement('button');
button.textContent="Reset";
const div = document.querySelector('.buttonContainer');
const rangeInput = document.querySelector('.slider');
let divs;
div.appendChild(button);
initGrid(19);


function initGrid(squaresPerSide){
    let div;
    let styleString = "";
    for(i=0; i<squaresPerSide;i++){
        styleString += "1fr ";
    }
    container.style.gridTemplateColumns = styleString;
    container.style.gridTemplateRows = styleString;
    for(i=0; i<squaresPerSide*squaresPerSide;i++){
        div = document.createElement('div');
        div.classList.toggle('square');
        container.appendChild(div);
    }
    initEventListeners();
}

function resetGrid(){   
    divs = document.querySelectorAll('.square');
    divs.forEach((div) =>{
        div.remove();
    });
}
rangeInput.addEventListener('click', ()=>{
    resetGrid();
    console.log(+rangeInput.value);
    initGrid(+rangeInput.value);
    initEventListeners;
});
button.addEventListener('click', ()=>{
    
        resetGrid();
        initGrid(rangeInput.value);
        initEventListeners();
}); 

function initEventListeners(){
divs = document.querySelectorAll('.square');
divs.forEach((div) =>{
    div.addEventListener('mouseover', ()=>{
            div.style.background = "black";
            div.classList.add("hovered");
    });
});
}