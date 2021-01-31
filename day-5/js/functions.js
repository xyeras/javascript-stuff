



const user = {name: 'global'}; // SCOPE: this user is global.

// Skeleton/ structure
function createElement(text , tag) {   // (text, tag) are parameters
    const el = document.createElement(tag);
    
    const user = {name: 'local'}; // This user is local only accessable from inside the function;
    console.log('does this work?');
    document.body.appendChild(el);
    el.innerHTML = text;
    console.log(user);
    return el; // return is a way we can pass back any information/data
}


const whatIsOne = createElement('this is whatever!', 'button');

const whatIsTwo = createElement(1, 'h1');
const whatIsThree = createElement(2, 'p');


console.log(whatIsOne, whatIsTwo, whatIsThree);

console.log(user);