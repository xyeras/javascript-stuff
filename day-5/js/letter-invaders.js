// create all variables at top;
let points = 0;
let health = 100;
let letters = [];
let time = 200;

function getRandomNumber() {
    return Math.ceil(Math.random() * 25) + 96;
}
function getRandomLetter() {
    return String.fromCharCode(getRandomNumber());
}
function createElement() {
    // all the variables at the top;
    const element = document.createElement('span');

    // changing object property values;
    element.innerHTML = getRandomLetter();
    element.style.position = 'absolute';
    element.style.fontSize = '100px';
    element.style.left = '300px'
    element.y = 0;

    // Place element on page
    document.body.appendChild(element);

    // element methods (Really just a Function)
    element.takeOut = function() {
        element.remove();
        letters.pop();
        // Stop timer attached to element
        clearTimeout(element.myTimeOut);
    }
    element.gotHit = function() {
        element.takeOut();
        health -= 20;
        if (health <= 0) {
            alert('you lose a life:' + points );
        } else {
            makeNew();
        }
    }
    element.moveDown = function() {
        element.y += 40;
        element.style.top = element.y + 'px';
        // start timer and attach to element;
        element.myTimeOut = setTimeout(function() {
            element.moveDown();
        }, time);
        if (element.y > 600) {
            element.gotHit();
        }
    }
    element.moveDown();
    return element;
}
document.addEventListener('keydown', function whatHappensOnKeyDown(event) {
    if (event.key === letters[0].innerHTML) {
        points += 100;
        letters[0].takeOut();
        time -= 10;
        makeNew();
    } else {
        health -= 5;
    }
})
function makeNew() {
    letters.push(createElement());
}
makeNew();


