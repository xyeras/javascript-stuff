const myButton = document.querySelector('button');

console.log(myButton);

console.log([myButton, myButton]);

let score = 1;
let name = 'my name';
let isRequired = true;

let list = [score, name, isRequired, 1, 'my name', true];
let user = { username: 'V', vip: true, score: 100, list}

let element = document.querySelectorAll('button');


element[1].classList.add('original', 'user', 'vip', 'online', 'whatever');


element[1].addEventListener('click', function() {
    this.classList.add('disabled');
} );

element[1].addEventListener('mouseenter', function() {
    this.classList.add('active');
} )

console.log(list);


console.dir(element);
