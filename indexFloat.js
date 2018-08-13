container.style.position = "absolute"; //change from static so that I set the height and width
container.style.height = "600px"; //sets the height to 600 pixels
container.style.width = "600px"; //sets the width to 600 pixels
container.style.border = "solid black";
container.style.borderWidth = "1px";


let squaresPerSide = prompt('Please enter the amount of squares you would like per side.');
let sideLength = 600/squaresPerSide;

for(i=0; i < squaresPerSide*squaresPerSide; i++) {
    const div = document.createElement('div');
    div.classList.add("box");
    container.appendChild(div);
    div.style.height = `${sideLength}`+`px`;
    div.style.width = `${sideLength}`+`px`;
    div.style.backgroundColor = "white";
    div.style.float = "left";
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "black";
    });
}

const btn = document.querySelector("#btn");
btn.addEventListener('click', () => {
    const box = document.querySelectorAll('.box');
    let boxArray = Array.from(box);
    boxArray.forEach(element => {
        element.style.backgroundColor = "white";
    });
    resize();
});

//Change div size
let resize = function() {
    let amount = squaresPerSide*squaresPerSide;
    let newSquaresPerSide = prompt('Please enter the amount of squares you would like per side.');
    let newAmount = newSquaresPerSide*newSquaresPerSide;
    sideLength = 600/newSquaresPerSide;
    if (newAmount-amount > 0){
        for(i=amount;i<newAmount;i++){
            const div = document.createElement('div');
            div.classList.add("box");
            container.appendChild(div);
            div.style.height = `${sideLength}`+`px`;
            div.style.width = `${sideLength}`+`px`;
            div.style.backgroundColor = "white";
            div.style.float = "left";
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = "black";
            });
        }
    } else {
        for(i=newAmount;i<amount;i++){
            const div = document.querySelector('.box');
            console.log("this is working");
            container.removeChild(div);
        }
    }
    const box = document.querySelectorAll('.box');
    let boxArray = Array.from(box);
    boxArray.forEach(element => {
        element.style.height = `${sideLength}`+`px`;
        element.style.width = `${sideLength}`+`px`;;
    });
    squaresPerSide = newSquaresPerSide;
    amount = newAmount;
}