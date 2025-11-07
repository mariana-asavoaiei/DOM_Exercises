// Create reference in js of the div
let container = document.querySelector("#container");
// Create a new div elem inside the #container
let content = document.createElement("div");
// Add a class to the nely created div
content.classList.add(".content");
// Add text to the new element
content.textContent = "Learn DOM Manipulation!";
// Append new div to the #container div
container.appendChild(content);

// Exercises
// Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

// A <p> with red text that says “Hey I’m red!” 
let redParagraph = document.createElement("p");
redParagraph.textContent = "Hey, I'm red!"
redParagraph.style.color = "red";
container.appendChild(redParagraph);

// An <h3> with blue text that says “I’m a blue h3!”
let blueHeading = document.createElement("h3");
blueHeading.textContent = "I'm a blue h3!";
blueHeading.style.color = "blue";
container.appendChild(blueHeading);


// A <div> with a black border and pink background color with the following elements inside of it:
// Another <h1> that says “I’m in a div”
// A <p> that says “ME TOO!”

let pinkDiv = document.createElement("div");
pinkDiv.setAttribute("style", "border: black; background-color: pink;");
let pinkDivHeading = document.createElement("h1");
pinkDivHeading.textContent = "I'm in a div <3";
pinkDiv.appendChild(pinkDivHeading);
let pinkDivParagraph = document.createElement("p");
pinkDivParagraph.textContent = "ME TOO ***";
pinkDiv.appendChild(pinkDivParagraph);
container.appendChild(pinkDiv);