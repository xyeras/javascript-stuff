const form = document.createElement('form');
const getTodos = localStorage.getItem('todos');
console.log('get todos', JSON.parse( getTodos ));
const todos = getTodos ?  JSON.parse( getTodos ) : [];

document.body.appendChild(form);
form.id = 'myForm';
const bgColorInput = document.createElement('input');
form.appendChild(bgColorInput);
bgColorInput.type = 'color';

bgColorInput.addEventListener('input', function() {
    document.body.style.backgroundColor = bgColorInput.value;
});
bgColorInput.addEventListener('change', function() {
    document.body.style.backgroundColor = bgColorInput.value;
    localStorage.setItem('bgColor', bgColorInput.value );
});

let bgColor = localStorage.getItem('bgColor');
console.log('bgColor', bgColor);
document.body.style.backgroundColor = bgColor;


const titleH1 = document.createElement('h1');
titleH1.innerHTML = 'My Todo List';
document.body.appendChild(titleH1);
titleH1.style.textAlign = 'center';

const todoInput = document.createElement('input');
document.body.appendChild(todoInput);

const addButton = document.createElement('button');
document.body.appendChild(addButton);
addButton.innerHTML = 'ADD Todo';

const resetButton = document.createElement('button');
document.body.appendChild(resetButton);
resetButton.innerHTML = 'Reset';

addButton.addEventListener('click', function() {
    addTodo();
});

resetButton.addEventListener('click', function() {
    console.log('reset');
    ul.innerHTML = '';
})

const ul = document.createElement('ul');
document.body.appendChild(ul);

function addTodo() {
    console.log(todoInput.value);
    const value = todoInput.value;
    if (!value) {
        return;
    }
    const li = document.createElement('li');
    document.body.appendChild(li);
    li.innerHTML = value;
    ul.appendChild(li);
    todoInput.value = '';

    const todoObject = {value: value, done: false};

    todos.push(todoObject);
    console.log(todos);
    localStorage.setItem('todos', JSON.stringify(todos))

    li.addEventListener('click', function() {whatToDoWhenLiIsClicked(li, todoObject)})

}


function loadTodos() {

    todos.forEach(function(thing) {

        const li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = thing.value;
        li.style.textDecoration = thing.done ? 'line-through' : 'none';
        li.addEventListener('click', function() {whatToDoWhenLiIsClicked(li, thing)})

    });
}
function whatToDoWhenLiIsClicked(li, todoObject) {
    if (li.style.textDecoration === 'line-through') {
        li.style.textDecoration = 'none';
        todoObject.done = false;
    } else {
        li.style.textDecoration = 'line-through';
        todoObject.done = true;
    }
    console.log(todos);
    localStorage.setItem('todos', JSON.stringify(todos))
}

loadTodos();