const inputUsername = document.querySelector('#username');
const inputPassword = document.querySelector('#password');
const loginButton = document.querySelector('#loginButton');


fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => {
        console.log(data);
});

loginButton.addEventListener('click', tryToLogin);

function tryToLogin() {
    let logInUser = {
        username: inputUsername.value,
        password: inputPassword.value
    };

    fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(logInUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)

        if(data.username){
            console.log('Välkommen');
        } else {
            console.log('något gick fel');
        }
    });
};