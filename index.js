//remove main
const element = document.getElementById("main");
element.remove();

//addheader
let newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.textContent= "YOUR-NAME is the champion";
document.body.appendChild(newHeader);
// Write your code here!