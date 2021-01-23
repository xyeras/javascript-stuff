document.body.innerHTML = '';

const time = new Date();

const header = `
<header>

    <h1>I am a cool header ${time}</h1>
</header>
`;
const nav = `
<nav>

    <ul>
        <li>i am a nav </li>
    </ul>
</nav>
`;

const main = `
<main>

    <ul>
        <li>i am a main </li>
    </ul>
</main>
`;

const footer = `
<footer>

    <ul>
        <li>i am a footer </li>
    </ul>
</footer>
`;

const loginPage = `
login Page
${header}

${nav}
${header}
${footer}
${main}
`;

const usersPage = `
Users Page
${header}

${nav}
${main}
${footer}
`;

document.body.innerHTML = loginPage;


document.querySelector('h1').addEventListener('click', function() {
    document.body.innerHTML = usersPage;
})