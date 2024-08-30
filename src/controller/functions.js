//recebe variaveis do user

const form = document.getElementById('formsRegister');
form.addEventListener('submit', event => {
    event.preventDefault();
    let nameUser = document.getElementById('name-area').value;
    let emailUser = document.getElementById('email-area').value;
    let password = document.getElementById('password-area').value;

    if (toString(password).length < 8) {
        alert('A senha tem que ser maior do que 8 caracteres');
        return false;
    }

    const user = {
        name: nameUser,
        email: emailUser,
        password: password 
    }

    console.log(user)
})





