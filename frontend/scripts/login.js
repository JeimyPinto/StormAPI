const formElemet = document.querySelector('#formLogin');

formElemet.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let login = {email: email, password: password};
    let loginJson = JSON.stringify(login);
    console.log(loginJson);
});