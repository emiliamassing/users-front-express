const inputUsername = document.querySelector('#username');
const inputPassword = document.querySelector('#password');
const loginButton = document.querySelector('#loginButton');
const messageContainer = document.querySelector('.welcomeMessage');

function printWelcomeMessage() {
    const headingElement = document.createElement('h3');
    headingElement.className = 'greeting';
    headingElement.innerHTML = 'Welcome!';

    messageContainer.appendChild(headingElement);
};

printWelcomeMessage();

fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => {
        console.log(data);
});

loginButton.addEventListener('click', tryToLogin);

function tryToLogin() {
    const headingElement = document.querySelector('.greeting');

    let logInDetails = {
        username: inputUsername.value,
        password: inputPassword.value
    };

    fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(logInDetails)
    })
    .then(res => res.json())
    .then(data => {
        console.log('login', data);  

        if(data.name){
            headingElement.innerHTML = `Welcome ${data.name}!`;
        } else {
            headingElement.innerHTML = 'Username or password is incorrect';
        };
    });
};