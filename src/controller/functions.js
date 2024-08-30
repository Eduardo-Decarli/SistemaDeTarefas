//Função para cadastrar
const formRegister = document.getElementById('formsRegister');
try {
    formRegister.addEventListener('submit', event => {
        event.preventDefault();
        const nameUser = document.getElementById('name-area').value;
        const emailUser = document.getElementById('email-area').value;
        const password = document.getElementById('password-area').value;

        //verifica se a senha tem mais que 8 caracteres
        if (password.length < 8) {
            document.getElementById('password-area').value = '';
            document.getElementById('error-mensage').innerHTML = 'A senha inválida, digite uma senha maior que 8 digitos'
            document.getElementById('error-mensage').style.display = 'block'
            event.preventDefault();
        } else {
            const user = {
                name: nameUser,
                email: emailUser,
                password: password
            }
            //Envia o user para o backend

            //direciona o usuario para o menu
            window.location.href = '../view/menu.html'
        }
    })
} catch (error) {
    console.log(error);
}

//Função para logar
const formLogin = document.getElementById('formsLogin');
try {
    formLogin.addEventListener('submit', event => {
        event.preventDefault();
        const emailUser = document.getElementById('email-area').value;
        const password = document.getElementById('password-area').value;

        //Envia para o banco de dados

    })
}
catch (error) {
    console.log(error)
}