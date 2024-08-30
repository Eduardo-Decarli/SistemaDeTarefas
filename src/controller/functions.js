//recebe variaveis do user
function validateRegister(){
    let nomeUser = document.getElementById('name-area').value;
    let emailUser = document.getElementById('email-area').value;
    let password = document.getElementById('password-area').value;

    console.log('ok')

    if(toString(password).length < 8){
        alert('A senha tem que ser maior do que 8 caracteres');
    }

    const user = new User(nomeUser, emailUser, password);
}