const container = document.querySelector('.container');
container.style.display = "grid";
const button = document.createElement('button');
button.textContent="Reset";
const div = document.querySelector('.buttonContainer')
div.appendChild(button);
initGrid(19);
let divs;
initEventListeners();

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
}

function resetGrid(){   
    divs = document.querySelectorAll('.square');
    divs.forEach((div) =>{
        div.remove();
    });
}

button.addEventListener('click', ()=>{
    let number = prompt("How many Squares per side? (1-100)", "");
    if(number <=100 && number >0){
        resetGrid();
        initGrid(number);
        initEventListeners();
    }else{
        alert("Enter a number between 1 and 100");
    }
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