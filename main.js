

const input = document.querySelector('input');
const button = document.querySelector('button');
const h1 = document.querySelector('h1');

const li = document.createElement('li');
li.innerHTML = 'li';






button.innerHTML = 'Login';
h1.innerHTML  = 'PLease log in....';

h1.appendChild(li);
document.body.appendChild(h1);
document.body.appendChild(li);


function login() {
    const name = input.value;
    h1.innerHTML = 'You are logged in as ' + name;
}


button.addEventListener('click', login);

input.addEventListener('input', login)