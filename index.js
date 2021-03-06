// Write your code here!


// remove <main> with id 'main'
document.querySelector('main').remove(); //1st test passed
// can also be main.remove()


// create a h1 element w/ the id name "victory"
const newHeader = document.createElement('h1'); //2nd test passed
document.body.appendChild(newHeader);
newHeader.id = "victory";
newHeader.innerHTML = "Nika is the champion"

// const nodeName = document.createTextNode("");
// newHeader.appendChild(nodeName);

