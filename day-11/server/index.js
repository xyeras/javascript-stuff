const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const nhp = require('node-html-parser');
const fs = require('fs');
console.log(nhp);
const app = express();
const port = 5000;
let webpagetext = '';
let html = null;
let jokes = [];

const files = fs.readdirSync('./');
const file = fs.readFileSync('./index.js', 'utf8');
console.log(file);

// fetch('http://github.com')
// .then(res => res.text())
// .then(data => webpagetext = data);
fetch('https://www.countryliving.com/life/a27452412/best-dad-jokes/')
.then(res => res.text())
.then(data => {
    html = nhp.parse(data);
    // console.log(html);
    // console.log(typeof html);
    html.querySelector('.body-ul').querySelectorAll('li').forEach( li => {
        // console.log(li.innerHTML);
        jokes.push(li.innerHTML);
    })
});


app.use(express.static('public'));
app.use(bodyParser.json());

const magicResponses = ['yes', 'no', 'maybe'];
const users = [];

app.post('/users', function(req, res) {
    console.log(req.body);
    users.push(req.body.username);
    res.json(users);
});
app.get('/users', function(req, res) {
    res.json(users);
});

app.get('/magic-responses', function(req, res) {
    res.json(magicResponses);
});

app.get('/magic-response', function(req, res) {
    const randomIndex = Math.random() * magicResponses.length
    res.json(magicResponses[Math.floor(randomIndex)]);
});

app.get('/joke', function(req, res) {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    res.json(jokes[randomIndex]);
});

app.get('/github', function(req, res) {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    res.send(jokes[randomIndex]);
});

app.get('/', function(req, res) {
    res.sendFile('./public/index.html');
});

app.listen(port, () => {
    console.log('server is listening on port', port);
})
