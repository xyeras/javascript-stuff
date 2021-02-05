const users = [
    {name: 'larry', last: 'garry'}, 
    {name: 'moe', last: 'joe'},
    {name: 'curly', last: 'joe'},
    {name: 'shemp', last: 'schmo'},
];

// // took off from the end
// users.pop();

// // add to end
// users.push({name: 'v', last: 'f'});

// // remove from beginning
// users.shift();
// // add to beginnings
// users.unshift({name: 'v', last: 'f'});

// users.splice( 1, 2, {name: 'b', last: 'k'} );

function addUser(type, text) {
    // retrieve element
    const body = document.body;
    // create element
    const element = document.createElement(type);
    // put it on the page
    body.appendChild(element);
    element.innerHTML = text;
    // style it
    // element.style.border = border;
}

users.map((item, index) => {
    return item.name + ' ' + item.last + ' ' + index;
}).forEach(function whatToDoWithEachItem(item, index ) {
    console.log('index', index);
    addUser('li', item );
})


for(let user of users) {
    console.log(user);
    for(let property in user) {
        console.log(user[property])
    }
}


let i = 0;
while(i < 10) {
    console.log('it is less than 10');
    i++;
}
for( let i = 1; i <= 100; i++) {
    let by3 = i % 3 === 0;
    let by5 = i % 5 === 0;
    

    if (by3 && by5) {
        console.log('fizzbuzz');
    } else if (by3) {
        console.log('fizz');
    } else if (by5) {
        console.log('buzz');
    } else {
        console.log(i);
    }
}

do {
    console.log('this is what to do');
    i++
} while (i < 20)














// list of abilities.
// change the text in an element
// document.body.innerHTML = '<ul><li></li></ul>';

// // create element
// const ul = document.createElement('ul');

// // put it on the page
// document.body.appendChild(ul);

// // style it
// ul.style.border = '1px solid red'

// // retrieve an element
// const firstUl = document.querySelector('ul');

// //style
// firstUl.style.border = '2px solid grey'