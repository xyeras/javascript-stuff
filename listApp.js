const input = document.querySelector('input');
const button = document.querySelector('button');



button.innerHTML = 'Add Item';
const ul = document.querySelector('ul');
function addItem() {
    const value = input.value;
    const li = document.createElement('li');
    li.innerHTML = value;
    ul.appendChild(li);
    input.value = '';
}

button.addEventListener('click', addItem);

input.addEventListener('keydown', (event) => {
    console.log('event', event);

    if (input.value === 'secret') {
        alert('YOU WIN $100,000,000')
    }

    if (event.key === 'Enter') {
        addItem();
    }

})
