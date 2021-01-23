
// Primative
const numbers = 23;
const string = 'string' + "string" + `${numbers}  ${7}`;
const boolean = true;

// Complex/ Containers
const array = [1, 2, 3, 4, 'hi', true, [], {}];
const object = {length: 5, username: 'v', isActive: true, myArray: array};

// Document
console.log(document.body);

// HTML
// Create a tag in memory;
const pTag = document.createElement('p');
// Place a tag in the view
document.body.appendChild(pTag);
// Write text inside of a tag;
pTag.innerHTML = string;
// Select Tags
const oneTag = document.querySelector('h1.test'); // one item
const multipleTags = document.querySelectorAll('h1 span'); // all the items

// CSS
// Change the style of something
pTag.style.border = `${numbers === 21 ? 21 : 50}px solid red`;

// Logic/ Choices

// if / if else if / if else if else
if (numbers === 21) {
    console.log('runs this code')
} else if (numbers === 22) {
    console.log('don\'t run that code. run this code.')
} else {
    console.log('it was not 21 or 22')
}

// switch
switch(numbers) {
    case 21:
        console.log('runs this code');
        break;
    case 22:
        console.log('don\'t run that code. run this code.');
        break
    default:
            console.log('it was not 21 or 22')
}

// ternary
numbers === 21 ? console.log('yes it is') : console.log('no its not');














