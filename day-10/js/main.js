document.body.innerHTML += 'This is another string...';

function addString(string) {
    document.body.innerHTML += string;
}

addString('And this is another...');

function addTag(string, type) {
    const element = document.createElement(type);
    document.body.appendChild(element);
    element.innerHTML = string;
    return element;
}

addTag('You can use functions to add tags', 'p');

addTag('Tags give pre set styles', 'h2');

function addStyleString(string, type, style) {
    const element = addTag(string, type);
    Object.assign(element.style, style);
    return element;
}

addStyleString('Yo!', 'h1', {color: 'pink'});

function addNamedStyleString(string, type, style, name) {
    const element = addStyleString(string, type, style);
    element.id = name;
}

addNamedStyleString('I have a name.', 'p', {color: 'red'}, 'myNamedString');
addNamedStyleString('so do I.', 'div', {color: 'red'}, 'named2');

function findName(name) {
    return document.querySelector('#' +name);
}

function updateString(name, string, style) {
    const element = findName(name);
    element.innerHTML = string;
    Object.assign(element.style, style);
}

updateString('myNamedString', 'I still have a name', { color: 'blue'});

function moveStringInsideString(name, parent) {
    findName(parent)
    .appendChild(findName(name));
}

moveStringInsideString('myNamedString', 'named2');

addNamedStyleString('', 'ul', {backgroundColor: 'yellow'}, 'myUl');

addNamedStyleString('I am an li.', 'li', {backgroundColor: 'white'}, 'li1' );

moveStringInsideString('li1', 'myUl');

addNamedStyleString('I am another li', 'li', null, 'li2');

moveStringInsideString('li2', 'myUl');

console.log('li 1', myQuery('li', 2));

function myQuery(selector, nth) {
    return document.querySelectorAll(selector)[nth - 1];
}

// document.body.innerHTML = '';