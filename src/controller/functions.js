//recebe variaveis do user
function validateRegister() {

    const form = document.getElementById('fomrsRegister');

        form.addEventListener('submit', event => {
            event.preventDefault()

            const nameUser = form.getElementById('name-area')
        })

    console.log(form); 


    if(toString(password).length < 8){
        alert('A senha tem que ser maior do que 8 caracteres');
    }

    const user = new User(nameUser, emailUser, password);
}