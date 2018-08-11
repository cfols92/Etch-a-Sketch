const container = document.querySelector('#container'); //create a constant for the div that has the id "container"

container.style.position = "absolute"; //change from static so that I can use the positioning elements
container.style.height = "600px"; //sets the height to 600 pixels
container.style.width = "600px"; //sets the width to 600 pixels
container.style.backgroundColor = "blue"; //sets the background color for the container div to blue

//How to make the divs different sizes when a user inputs a different amount of divs
let squaresPerSide = prompt('Please enter the amount of squares you would like per side.');
let sideLengthPercentage = 100/squaresPerSide;

//Create a div and repeat it

for(i=0; i < squaresPerSide*squaresPerSide; i++) {
    const div = document.createElement('div'); //creates a div element, and names it "div"

    container.appendChild(div); //appends the element named div1 to the "container" div

    div.style.height = `${sideLengthPercentage}`+`%`;
    div.style.width = `${sideLengthPercentage}`+`%`;
    
    div.style.backgroundColor = "green";
    div.style.display = "inline-block";
    
    if (i<squaresPerSide){
        div.style.top = `0px`;
    } else if (i>squaresPerSide){
        div.style.top = `${sideLength}`+`px`;
    }
}