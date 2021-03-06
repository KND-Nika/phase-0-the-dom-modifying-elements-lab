// Write your code here!


// remove <main> with id 'main'
document.querySelector('main').remove(); //1st test passed
// can also be main.remove()


// create a h1 element
const newHeader = document.createElement('h1'); //2nd test passed
// append element variable to body to reflect in DOM
document.body.appendChild(newHeader);
//assign element variable's id name as "victory"
newHeader.id = "victory";
// add element to DOM using innerHTML w/ "Nika is the champion" inside of h1
newHeader.innerHTML = "<h1>Nika is the champion</h1>"

// const nodeName = document.createTextNode("");
// newHeader.appendChild(nodeName);

