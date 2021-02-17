// fetch('/magic-responses')
// .then(response => response.json())
// .then( data => console.log(data));
// fetch('/magic-response')
// .then(response => response.json())
// .then( data => console.log(data));


const button = document.querySelector('button');
const span = document.querySelector('.square');


// function addUser() {
//     const username = input.value;
//     fetch('/users', {
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         method: "POST",
//         body: JSON.stringify({username, name: username})
//     } )
//     .then(response => response.json())
//     .then( data => span.innerHTML = data);

// }

function getUsers() {
    fetch('/users')
    .then(response => response.json())
    .then( data => span.innerHTML = data);
}


function getJoke() {
    fetch('/joke')
    .then(response => response.json())
    .then( data => {
        span.innerHTML = `
    <div class="question"></div>
    <div class="answer hide"></div>
    
    `;
     const question = span.querySelector('.question');
     const answer =   span.querySelector('.answer');
        if (data.includes('?')) {
            question.innerHTML = data.split('?')[0] + '?';
            answer.innerHTML = data.split('?')[1] || '';
        } else {
            question.innerHTML = data.split('.')[0] + '.';
            answer.innerHTML = data.split('.')[1] || '';
        }
    
        question.addEventListener('click', function () {
            answer.classList.remove('hide');
        })

});
}
